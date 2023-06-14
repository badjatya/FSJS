function towerOfHanoi(N, source, destination, auxiliary) {
    if (N === 1) {
      console.log(`move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    }
  
    let moves = 0;
    moves += towerOfHanoi(N - 1, source, auxiliary, destination);
    console.log(`move disk ${N} from rod ${source} to rod ${destination}`);
    moves++;
    moves += towerOfHanoi(N - 1, auxiliary, destination, source);
  
    return moves;
  }
  

const N = 3;
const sourceRod = 1;
const destinationRod = 3;
const auxiliaryRod = 2;

const totalMoves = towerOfHanoi(N, sourceRod, destinationRod, auxiliaryRod);
console.log(totalMoves);
  