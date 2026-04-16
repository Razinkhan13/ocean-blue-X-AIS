/**
 * @jest-environment node
 */

import { updateSession } from "../lib/supabase/middleware";

const mockGetUser = jest.fn().mockResolvedValue({ data: { user: null }, error: null });

jest.mock("@supabase/ssr", () => ({
  createServerClient: jest.fn(() => ({
    auth: { getUser: mockGetUser },
  })),
}));

jest.mock("next/server", () => {
  class MockNextResponse {
    cookies = {
      set: jest.fn(),
    };
    [key: string]: unknown;
    static next({ request }: { request: unknown }) {
      const res = new MockNextResponse();
      res.request = request;
      return res;
    }
  }
  return { NextResponse: MockNextResponse };
});

describe("Supabase middleware updateSession", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...OLD_ENV,
      NEXT_PUBLIC_SUPABASE_URL: "https://test.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-anon-key",
    };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("refreshes the auth session and returns a response", async () => {
    const request = {
      cookies: {
        getAll: jest.fn().mockReturnValue([]),
        set: jest.fn(),
      },
    };

    const response = await updateSession(request as never);
    expect(mockGetUser).toHaveBeenCalled();
    expect(response).toBeDefined();
  });
});
