
var myList = createToDoList();
function createToDoList() {
	var result = {}

	result.list =[]
	result.checked = makeChecked
	result.unChecked = makeUnChecked
	result.add = addToList
	
	return result
}

function addToList() {
	var input =$("text:input1").val()
	console.log(input)
	$('#list').append(
    $('<li>').append(
        $('<a>').attr('text',input).append(
            $('<span>').attr('class', 'check').append(input)
)));   
$("input1").val("")
}
$("#addtask").click(function(){
myList.add();;
})

function makeChecked(item) {


}

function makeUnChecked(item){

}