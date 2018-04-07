// When size is submitted by the user, call makeGrid()
const makeGrid = (n,m) => {
	$('tr').remove(); //removing previous table
	const $table = $('#pixelCanvas');
	let rows = '';
	for(let i=0;i<n;i++)
		rows += '<tr></tr>';
	$table.append(rows); //appending child rows
	let columns = '';
	for(let i=0;i<m;i++)
		columns += '<td></td>';
	$('tr').append(columns); //appending columns
	//click event listener on table cells
	$('td').click(function (){
		const color = $('#colorPicker').val();
		const cell = $(this);
		//checking if the background is already applied if yes then making it white again
		if(cell.attr('name')=='1') 
			cell.attr({'name':'0','style':'background: "#ffffff"'});
		else
			cell.attr({'name':'1','style':'background:'+color});
	});
};

$(() => {
	//submit event listener on the height weight form
	$('#sizePicker').submit(() => {
		const $n = $('#inputHeight');
		const $m = $('#inputWeight');
		makeGrid($n.val(), $m.val());
		return false; // disabling default functionality of the form
	});
});