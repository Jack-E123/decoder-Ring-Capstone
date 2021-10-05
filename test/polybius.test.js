// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("Should output a string when encoding", () => {
        const input = "abc";
        const actual = polybius(input,true);
        const expected = "112131";

        expect(actual).to.eql(expected);
    })

    it("Should ignore capital letters", () => {
        const input = "aBc";
        const actual = polybius(input,true);
        const expected = "112131";

        expect(actual).to.eql(expected);
    })
    it("When decoding, should return false if the number of characters, excluding spaces, is odd", () => {
        const input = "112131 3";
        const actual = polybius(input,false);
        

        expect(actual).to.be.false;
    })
    it("Should return both i and j when decoding", () => {
        const input = "42";
        const actual = polybius(input,false);
        const expected = "i/j";

        expect(actual).to.eql(expected);
    })
    it("Should return 42 when input is either i or j when encoding", () => {
        const input = "ij";
        const actual = polybius(input,true);
        const expected = "4242";

        expect(actual).to.eql(expected);
    })
})
