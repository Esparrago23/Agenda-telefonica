import { Node } from "./Node.mjs"
export class Queue {
    #count
    #head
    #front
    
    constructor(){
        this.#count = 0
        this.#head = null
        this.#front = null 
    }
    enqueue(item) {
      const node = new Node(item)
        this.#count++;
        if (this.isEmpty()) {
            this.#front = node;
            this.#head = node;
            return;
        }
        this.#head.next = node; 
        this.#head = node;
    }

    dequeue(){
        if(this.isEmpty()) {
            return null;
        }
        let value = this.#front;
        this.#front = this.#front.next; 
        this.#count--;

        if (this.isEmpty()) {
            this.#head = null;
        }
        return value.getData();
    }

    peek(){
        let current= this.#front.getData();
        return current;
    }
    isEmpty(){
        return this.#head === null
    }
    size(){
        return this.#count
    }
}