import { OperatingSystem } from "~/models";
import { Environment, Pragma } from "~/services";

jest.mock("~/services/localization.ts");
jest.mock("~/models/state.ts");

it("should properly process before uploading", () => {
  const initial = `{
    // @sync host=jest
    // "abc": "xyz"
  }`;
  const expected = `{
    // @sync host=jest
    "abc": "xyz"
  }`;
  expect(Pragma.processOutgoing(initial)).toBe(expected);
});

describe("host", () => {
  it("should work with 'host'", () => {
    const valid = {
      initial: `{
        // @sync host=jest
        "abc": "xyz"
      }`,
      expected: `{
        // @sync host=jest
        // "abc": "xyz"
      }`
    };

    expect(Pragma.processIncoming("{}", valid.initial, "test")).toBe(
      valid.expected
    );

    const invalid = {
      initial: valid.initial,
      expected: `{
        // @sync host=jest
        "abc": "xyz"
      }`
    };

    expect(Pragma.processIncoming("{}", invalid.initial, "jest")).toBe(
      invalid.expected
    );
  });
});

describe("os", () => {
  Object.keys(OperatingSystem).forEach(key => {
    it(`should work on 'OperatingSystem.${key}'`, () => {
      Environment.os = OperatingSystem[key];

      const initial = `{
        // @sync os=${key.toLowerCase()}
        "abc": "xyz"
      }`;

      const expected = `{
        // @sync os=${key.toLowerCase()}
        "abc": "xyz"
      }`;

      expect(Pragma.processIncoming("{}", initial, null)).toBe(expected);
    });
  });
});

describe("env", () => {
  it("should work with 'env'", () => {
    process.env.SYNCIFY = "true";

    const valid = {
      initial: `{
        // @sync env=SYNCIFY
        "abc": "xyz"
      }`,
      expected: `{
        // @sync env=SYNCIFY
        "abc": "xyz"
      }`
    };

    expect(Pragma.processIncoming("{}", valid.initial, null)).toBe(
      valid.expected
    );

    const invalid = {
      initial: `{
        // @sync env=SINCIFY
        "abc": "xyz"
      }`,
      expected: `{
        // @sync env=SINCIFY
        // "abc": "xyz"
      }`
    };

    expect(Pragma.processIncoming("{}", invalid.initial, null)).toBe(
      invalid.expected
    );
  });
});