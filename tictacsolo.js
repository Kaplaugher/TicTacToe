
// Put vars below
var whosTurn = 1;
var player1Squares = [];
var playerwSquares =[];

var winningCombos = [
	['A1','B1','C1'], //row1
	['A2','B2','C2'], //row2
	['A3','B3','C3'], //row3
	['A1','A2','A3'], //col1
	['B1','B2','B3'], //col2
	['C1','C2','C3'], //col3
	['A1','B2','C3'], //diag1
	['A3','B2','C1'], //diag2
];




function markSquare(currentSquare){
	if((currentSquare.innerHTML === "X") || (currentSquare.innerHTML === "O"))
		return "taken"
} else if(someoneWon){
	console.log("someone already won!");
}else{
	if(whosTurn === 1){
		currentSquare.innerHTML = "X"
		whosTurn = 2;

	}
}