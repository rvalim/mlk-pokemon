# "Pokemon"

"Pokemon" is a typescript project designed to find how many Pokemons were found during a walking through a bi-dimensional grid.

## About systems specification
This was received by email, and it is consider by myself as a confidential document, by this reason business rules won't be mentioned on this document.

## Getting Started

The proposal of this document is to guide you over this project.

### Technical References

* [Node.Js](https://nodejs.org/en/): A platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications
* [Typescript](https://www.typescriptlang.org/): TypeScript is a super set of JavaScript, basically a strongly typed Javascript, and was used to develop this project
* [Mocha](https://mochajs.org/): Test framework used to develop test case scenarios
* [Chai](https://www.chaijs.com/): Assertion library used along with Mocha to write test case scenarios

### Structure

```
..
├── ...
├── src                         # Where the code lives
| |── test                      # Where tests are defined
| | |── edgeCases.tests.ts      # Defines edge cases, like passing null as string of movements
| | |── invalid.tests.ts        # Defines invalid tests scenarios
| | |── stress.tests.ts         # Defines stress tests, with enormous input to see how the solution handles these scenarios 
| | └── valid.tests.ts          # Defines valid scenarios
| |── grid.ts                   # Abastraction of a bidimensional grid
| └── main.ts                   # Contains the principal method of the solution, the findPokemons
└── ...
```

## Installation

You will need Node.Js to run this solution. If you don't have it please follow this [link](https://nodejs.org/en/download/).

After that on the root folder of this project run the command below:

```bash
npm i
```
That's it, you are prepared to find your Pokemons.

## Usage

This project was prepared to run tests using the command below mentioned. 
Go to the root of this project, and run the command below:

```bash
npm run test

# returns 'the result of test cases'
```

### Adding more tests

Test files are located inside "src/tests", add or change the file as you wish following the structure of Typescript, Mocha and Chai.
