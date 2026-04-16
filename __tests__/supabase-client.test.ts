/**
 * @jest-environment node
 */

import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "../lib/supabase/client";

jest.mock("@supabase/ssr", () => ({
  createBrowserClient: jest.fn(() => ({
    auth: { getUser: jest.fn() },
    from: jest.fn(),
  })),
}));

describe("Supabase browser client", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = {
      ...OLD_ENV,
      NEXT_PUBLIC_SUPABASE_URL: "https://test.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-anon-key",
    };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("creates a browser client with env vars", () => {
    const client = createClient();
    expect(createBrowserClient).toHaveBeenCalledWith(
      "https://test.supabase.co",
      "test-anon-key",
    );
    expect(client).toBeDefined();
    expect(client.from).toBeDefined();
  });
});
