/*Oseini Gideon Abu*/
/*Index Number: 221033319*/

class getList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    //remove First

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

/remove Last

function myRemove(a, k){
    if(a == null){
        return l;
    }
    while(l.value == k){
        a = a.next;
    }
    thisNode = a;
    nextNode = thisNode.next;
    while(nextNode != null){
        if(nextNode.value == k){
            thisNode.next = nextNode.next;
            
            if(thisNode.next == null)
                break;
        }
        thisNode = thisNode.next;
        nextNode = thisNode.next;       
    }
    return l;
}


//getFirst
getFirst() {
    return this.head;
}

//clear
clear() {
    this.head = null;
}

//getSize
size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

//getLast
getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}

// adds an element at the Last of list

add(element)
{
	
	var node = new Node(element);

	var current;

	if (this.head == null)
		this.head = node;
	else {
		current = this.head;

		while (current.next) {
			current = current.next;
		}

		current.next = node;
	}
	this.size++;
}

// finds the index of element
indexOf(element)
{
	var count = 0;
	var current = this.head;

	while (current != null) {
		
		if (current.element === element)
			return count;
		count++;
		current = current.next;
	}

	return -1;
}

}

//get
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}