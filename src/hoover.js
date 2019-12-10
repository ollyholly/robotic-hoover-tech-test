// - Start with hardcoded input
// - Initialise a grid
// - Initialise a hoover with a starting position, a dirt map & driving instructions.
// - Hoover can move NWSE and its position changes
// - Hoover moves based on the provided driving instructions
// - When hoover reaches a wall and moves towards it, hoover position doesn't change
// - When hoover passes a dirt patch, dirt count increases,
//   dirt patch location is removed from the map
// - When hoover finishes its program it returns the last position and the dirt count
// - Read input from a local input.txt file
// - Parse input and set up the hoover
// - Read input from a remote file
// - Write output to a text file
// - Think about user interface

// EDGE CASES AND CHECKS
// - given coordinates are not integers
// - given coordinates are outside the map
// - room coordinates can not be less than 1

// CLASSES
// - app/control – receives input, configures the hoover, passes the hoover data to the output
// - hoover – handles hoover position and movement
// - dirt patches – handle map of dirt patches and cleaned spaces
// - io - reads input file, parses input, writes into the output file
