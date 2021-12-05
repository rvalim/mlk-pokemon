import findPokemon from "../main";

import { expect } from "chai";
import "mocha";

describe("Invalid input", () => {
    it("Should throw an exception after sending move action = 'A'", () => {
        expect(() => findPokemon("NESOA"))
        .to
        .throw(`Unexpected moving direction detected`);
    });

    it("Should throw an exception after sending move action = '-'", () => {
        expect(() => findPokemon("-NSNSNSNSNS"))
        .to
        .throw(`Unexpected moving direction detected`);
    });
});
