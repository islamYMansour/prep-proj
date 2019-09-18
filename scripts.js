
var myList = createToDoList();
var listElement = $("#list")
var listItems = $('#list li');
function createToDoList() {
	var result = {}

	result.list =[]
	result.add = addToList
	
	return result
}

function addToList() {
	var input =$("#input1").val()
		if(input !== "") {
		$('#list').append(
   	 	$('<li>').append(
        $('<a>').attr('text',input).append(
        $('<span>').attr('class', 'unCheck').append(input)),
        $('<button>')
        .attr('background-color','red')));   
		$("#input1").val("")

	}
}

$("#addtask").click(function(){
myList.add();
})
 // new branch 


$("#list").click(function(ev) {
	if($(ev.target).hasClass('check')){
		$(ev.target).removeClass('check')
		$(ev.target).addClass('unCheck')
		console.log(ev.target)
		console.log(listItems)

	} else {
		$(ev.target).removeClass('unCheck')
		$(ev.target).addClass('check')
	}
	
})

