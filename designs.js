
let table = $("#pixelCanvas");
function makeGrid() {
// Select size input	
	let gridHeight = $("#inputHeight").val();
	let gridWidth = $("#inputWeight").val();
	table.children().remove(); //clears initial contents of the table.
	
//while loop for the gridHeight
	let x = 0;
	while(x<gridHeight){
	table.append("<tr></tr>");
	x++;
		}
//for loop for the gridWidth
	for(let y =0; y<gridWidth; y++){
		let row = $("tr"); // Locates the row on the DOM
		row.append("<td></td>");
	}
}

	const submitButton = $('input[type="submit"]'); // Locates the submit button on the DOM
submitButton.click(function(evt){				// Event functions for the makeGrid()
	evt.preventDefault();
	makeGrid();
});
	
table.on("click", "td", function() {
	let color = $("#colorPicker").val(); // Select or pick a color for the design
    $(this).attr("bgcolor",color);		// Fills each cell clicked with the color picked.
  });
	
		