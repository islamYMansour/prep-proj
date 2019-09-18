

function createToDoList() {
	var result = {}

	result.list =[]
	result.checked = makeChecked
	result.unChecked = makeUnChecked
	result.add = addToList
	
	return result
}

function addToList(item) {
	this.list.push(item)

}

function makeChecked(item) {

}

function makeUnChecked(item){

}