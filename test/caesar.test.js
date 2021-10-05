// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {

  it("Should return false if 'value' is equal to '0'", () => {
    const input = "message";
    const shift = 0;
    const actual = caesar(input,shift);
    
    expect(actual).to.be.false;
  });

  it("Should return false if 'value' is missing", () => {
    const input = "message";
    const shift = undefined;
    const actual = caesar(input,shift);
    
    expect(actual).to.be.false;
  });

  it("Should return false if 'shift' is greater than '25'", () => {
    const input = "message";
    const shift = 30;
    const actual = caesar(input,shift);

    expect(actual).to.be.false;
  })

  it("Should return false if 'shift' is less than '-25'", () => {
    const input = "message";
    const shift = -30;
    const actual = caesar(input,shift);

    expect(actual).to.be.false;
  })
  it("Should maintain all non-letter characters", () => {
    const input = "a b.";
    const shift = 3;
    const actual = caesar(input,shift);
    const expected = "d e."

    expect(actual).to.eql(expected);
  })
  it("Should ignore capital letters", () => {
    const input = "A b.";
    const shift = 3;
    const actual = caesar(input,shift);
    const expected = "d e."

    expect(actual).to.eql(expected);
  })
  it("Should wrap around the alphabet if shift were to continue past z", () => {
    const input = "y z.";
    const shift = 3;
    const actual = caesar(input,shift);
    const expected = "b c."

    expect(actual).to.eql(expected);
  })
})
