
var myList = createToDoList();
var listElement = $("#list")
var listItems = $('#list li');

function createToDoList() {
	var result = {}

	result.list =[]
	result.add = addToList
	result.date = getDate
	result.reset = reset
	result.time= getTime
	
	return result
}

function addToList() {
	var input =$("#input1").val()
		if(input !== "") {
		$('#list').append(
   	 	$('<li>').append(
        $('<a>').attr('text',input).append(
        $('<span>').attr('class', 'unCheck').append(input))));   
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

function getDate() {
	var date = new Date ()
	var result = ((date.getMonth().toString().length > 1) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate().toString().length > 1) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
	return result
}

function reset () {
	$('#list').empty();
}

function getTime () {
	var date = new Date ()
	var result = ((date.getHours().toString().length > 1) ? (date.getHours() ) : ('0' + (date.getHours() ))) + ':' 
	+ ((date.getMinutes().toString().length > 1) ? date.getMinutes() : ('0' + date.getMinutes())) + ':' + ((date.getSeconds().toString().length > 1) ? date.getSeconds() : ('0' + date.getSeconds()))
	return result
}
	$('#dateID').text(myList.date())
	$('#timeID').text(myList.time())

setInterval(function() { 
	console.log(myList.time())
	$('#timeID').text(myList.time())

}, 1000);

$('#reset').click(function() {
	myList.reset()
})


