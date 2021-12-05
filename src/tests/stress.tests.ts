import findPokemon from "../main";

import { expect } from "chai";
import "mocha";

describe("Stress tests, should handle a big set of movents", () => {
    it("Should walk back and forward thousands of times, and find only 2 pokemons", () => {
        const result = findPokemon("NSNSNSNSNS".repeat(10000));
        expect(result).to.equal(2);
    });

    it("Should walk thousands of steps to the West and find 'thousands + 1' of pokemons", () => {
        const size = 50000;
        const result = findPokemon("O".repeat(size));
        expect(result).to.equal(size + 1);
    });

    it("Should walk 'N thousands' of steps to the West, than the same number of steps to the Est and find 'N thousands + 1' of pokemons", () => {
        const size = 50000;
        const movements = "O".repeat(size) + "E".repeat(size);
        const result = findPokemon(movements);
        expect(result).to.equal(size + 1);
    });
});
