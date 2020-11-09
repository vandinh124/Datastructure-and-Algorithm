//piece of data - vale
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    traverse(){
        var current = this.head;
        while (current){
            console.log(current.val);
            current = current.next;
        }
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }

    unShift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }        
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count = 0;
        var current = this.head
        while(count != index){
            current = current.next;
            count++
        }
        return current
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unShift(val);

        var newNode = new Node(val)
        var prev = this.get(index -1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        var prev = this.get(index-1);
        var removeNode = prev.next;
        prev.next = removeNode.next;
        this.length--;
        return removeNode;
    }
    
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList()
console.log(list.push("hello"))
console.log(list.push("there"))
console.log(list.push('99'))
console.log(list.traverse())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.unShift(50))
// console.log(list.unShift(40))

// console.log(list.get(2))
// console.log(list.set(2, 100))
// console.log(list)
// console.log(list.remove(0))
// console.log(list)
list.reverse()
list.print()




