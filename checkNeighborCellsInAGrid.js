// given any n by n 2-d table, some cells have a class "0", some has a class "1"
// find the number of neighbors that has class "1" for each cell in the table
// e.g.

//  0 1 1
//  1 0 0
//  1 1 0

//In the notation cellij, i refers to the x axis, y to the y axis. 
//The upper left cell is cell00
// The upper middle cell is cell10

// for cell00, numberOfNeighborswith1 is 2
// for cell10, numberOfNeighborswith1 is 2
// for cell20, numberOfNeighborswith1 is 1
// for cell01, numberOfNeighborswith1 is 3
// for cell11, numberOfNeighborswith1 is 5
// for cell21, numberOfNeighborswith1 is 3
// for cell02, numberOfNeighborswith1 is 2
// for cell12, numberOfNeighborswith1 is 2
// for cell22, numberOfNeighborswith1 is 1


