import findPokemon from "../main";

import { expect } from "chai";
import "mocha";

describe("Valid input", () => {
    it("Should walk one step and find 2 pokemons", () => {
        const result = findPokemon("E");
        expect(result).to.equal(2);
    });

    it("Should walk four steps, ending on start position and find 4 pokemons", () => {
        const result = findPokemon("NESO");
        expect(result).to.equal(4);
    });

    it("Should walk back and forward multiple times, and find only 2 pokemons", () => {
        const result = findPokemon("NSNSNSNSNS");
        expect(result).to.equal(2);
    });

    it("Should walk only to the West and find 6 pokemons", () => {
        const result = findPokemon("OOOOO");
        expect(result).to.equal(6);
    });

    it("Should walk five steps to the West, than 6 to the Est and find 7 pokemons", () => {
        const result = findPokemon("OOOOOEEEEEE");
        expect(result).to.equal(7);
    });
});
