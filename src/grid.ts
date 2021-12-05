/**
 * Representation of a bidimensional grid
 */
export default class Grid {
    private x: number = 0;
    private y: number = 0;
    //Using memoization to control how many cells were visited
    private memo = new Set();
    
    constructor() {
        //Add the current coordinate to the Set
        this.memo.add(this.toString());
    }

    /**
     * Returns the coordinates of a cell as string
     * @returns String containning the coordinates of a cell
     */
    toString(): string {
       return `${this.x},${this.y}`; 
    }  

    /**
     * Move the user into the bidimensional grid
     * @param direction Direction to move the user. Acceptable options: 
     *      - "N": North
     *      - "S": Sul
     *      - "E": Este
     *      - "O": Oeste
     */
    move (direction: string): void {
        if (direction == "N") this.x++;
        else if (direction == "S") this.x--;
        else if (direction == "E") this.y--;
        else if (direction == "O") this.y++;
        else 
            throw new Error(`Unexpected moving direction detected`);

        //Saves the current position to the memo object
        this.memo.add(this.toString());
    }

    /**
     * Returns the number of pokemons found
     * @returns Quantity of pokemons found
     */
    pokemonsFound(): number {
        //The size of memo represents how many cells were visit, which represents how many pokemons where found
        return this.memo.size;
    }
}