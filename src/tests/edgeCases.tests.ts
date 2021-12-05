import findPokemon from "../main";

import { expect } from "chai";
import "mocha";

describe("Edge cases", () => {
    it("Should send 'null' as movements, and still find just 1 pokemon", () => {
        const result = findPokemon(null);
        expect(result).to.equal(1);
    });
    
    it("Should send ''(empty string) as movements, and still find just 1 pokemon", () => {
        const result = findPokemon("");
        expect(result).to.equal(1);
    });
});
