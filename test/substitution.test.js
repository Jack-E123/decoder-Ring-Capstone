// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if all alphabet characters are not unique", () => {
        const input = "asdf";
        const alphabet = "wqqrtyuiopsadfghjklzxcvbnm";
        const actual = substitution(input,alphabet,true);
        
        expect(actual).to.be.false;
    })
    it("Should return false if the alphabet does not have exactly 26 characters", () => {
        const input = "asdf";
        const alphabet = "wqqrtyuiopsadflzxcvbnm";
        const actual = substitution(input,alphabet,true);
        
        expect(actual).to.be.false; 
    })
    it("Should ignore capital letters", () => {
        const input = "aBc";
        const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
        const actual = substitution(input,alphabet,true);
        const expected = "mnb"

        expect(actual).to.eql(expected); 
    })
    it("Should maintain spaces", () => {
        const input = "ab c";
        const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
        const actual = substitution(input,alphabet,true);
        const expected = "mn b"

        expect(actual).to.eql(expected); 
    })
    it("Should correctly translate the given input with the correct alphabet", () => {
        const input = "mn b";
        const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
        const actual = substitution(input,alphabet,false);
        const expected = "ab c"

        expect(actual).to.eql(expected); 
    })
})