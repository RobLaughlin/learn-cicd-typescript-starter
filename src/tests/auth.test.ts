import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import type { IncomingHttpHeaders } from "http";

describe("API Key", () => {
  test("Returns null when authorization header is omitted", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBe(null);
  });

  test("Returns null when authorization header is invalid", () => {
    const headers: IncomingHttpHeaders = { authorization: "INVALID" };
    expect(getAPIKey(headers)).toStrictEqual(null);
  });

  test("Returns null if API key is not provided before the key itself", () => {
    const key = "01aa2da1-93ca-4600-93c8-2bb40255b220";
    const headers: IncomingHttpHeaders = {
      authorization: key,
    };
    expect(getAPIKey(headers)).toStrictEqual(null);
  });

  test("Returns the provided API key", () => {
    const key = "01aa2da1-93ca-4600-93c8-2bb40255b220";
    const headers: IncomingHttpHeaders = {
      authorization: `ApiKey ${key}`,
    };
    expect(getAPIKey(headers)).toStrictEqual(key);
  });
});
