// A Roomba robot is currently sitting in a Cartesian plane at (0, 0). You are given a list of its moves that it will make, containing NORTH, SOUTH, WEST, and EAST.

// Return whether after its moves it will end up in the coordinate (x, y).

function roomba(moves, x, y) {
  let xAxis = 0
  let yAxis = 0
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i]
    switch (move) {
      case "NORTH":
        yAxis++
        break
      case "SOUTH":
        yAxis--
        break
      case "EAST":
        xAxis++
        break
      case "WEST":
        xAxis--
        break
      default:
        break
    }
  }
  return xAxis === x && yAxis === y ? true : false
}