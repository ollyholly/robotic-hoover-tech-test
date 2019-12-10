# Robotic Hoover Tech Test


A program that navigates an imaginary robotic hoover (much like a [Roomba](https://en.wikipedia.org/wiki/Roomba)) through an equally imaginary room based on:

- Room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.

- Locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.

- An initial hoover position (X and Y coordinates like patches of dirt)

- Driving instructions (as cardinal directions) where e.g. N and E mean "go north" and "go east" respectively).

The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it. Driving into a wall has no effect (the robot skids in place).

### Goal

The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:

- The final hoover position (X, Y)

- The number of patches of dirt the robot cleaned up

### Input

Program input is received in a file with the format described here. The file is named `input.txt` and resides in the same directory as the [executable program/web page].

Example:
```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```
- the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)

- the second line holds the hoover position

- subsequent lines contain the zero or more positions of patches of dirt (one per line)

- the next line then always contains the driving instructions (at least one)


### Output

The program output is printed to [AMEND TO SPECIFY: the standard output (STDOUT) of the terminal (or equivalent in the browser, console.log()]

- The first line of the program output displays the X and Y coordinates marking the position of the hoover after processing all commands.

- The second line of the program output displays the number of patches of dirt the robot cleaned up.

Example (matching the input above):
```
1 3
1
```

__Deliverable__: Output text file so it can automatically checked

<br><br>

## How to Install
```
git clone https://github.com/mattes/mars-rover-kata.git
cd mars-rover-kata
npm install
```
<br><br>

## How to Use

1. In command line run `node`
2. Initialise the main module:

```
Rover Start
```

<br><br>

## User Stories

```
As a User
So that I do X
I would like to do Y
```

<br><br>

## Approach

Every class has a single responsibility that can be described with one sentence:

__Rover__ is the main interface for interaction with rover.


![Domain Model](./public/uml.png)

<br><br>

## Tests

To run tests type

```
npm test
```

To view test coverage run

```
npx jest --coverage
```

![Tests](./public/tests.png)<br><br>
![Test Coverage](./public/coverage.png)

## Example Output
```
some examples + screenshots
```

## Planning

### To Do
- Start with hardcoded input
- Initialise a grid
- Initialise a hoover with a starting position, a dirt map & driving instructions.
- Hoover can move NWSE and its position changes
- Hoover moves based on the provided driving instructions
- When hoover reaches a wall and moves towards it, hoover position doesn't change
- When hoover passes a dirt patch, dirt count increases, dirt patch location is removed from the map
- When hoover finishes its program it returns the last position and the dirt count
- Read input from a local input.txt file
- Parse input and set up the hoover
- Read input from a remote file
- Write output to a text file
- Think about user interface


### Edge cases and errors
- given coordinates are not integers
- given coordinates are outside of the map
- room coordinates can not be less than 1
- check if the data not received


### Classes
- app/control – receives input, configures the hoover, passes the hoover data to the output
- hoover – handles hoover position and movement
- dirt patches – handle map of dirt patches and cleaned spaces
- io - reads input file, parses input, writes into the output file

hoover = new Hoover(data)
hoover.followInstructions()
result = hoover.getReport()
io.output(result)