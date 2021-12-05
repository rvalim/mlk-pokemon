import Grid from './grid'

/**
 * Triggers the process of walking through a grid
 * @param movements String containing the set of movements. An unexpected movement will break the system by throwing an Exception
 * @example findPokemon("NESO"); // Should return 4 after walkinf to "Norte", "Este", "Sul" and "Oeste"
 * @example findPokemon("NESOA"); // Should throw an exception after reaching the move action "A"
 * @returns The number of pokemons found
 */
export default function findPokemon (movements: string): number {
    if (!movements) return 1;

    const grid = new Grid();

    movements
        .split('')
        .forEach(d => grid.move(d));

    return grid.pokemonsFound();
}