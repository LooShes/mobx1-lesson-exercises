import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;

    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    
    @action addItem = (name) => {
        this.list.push({name: name, completed: false})
    }

    @action editItem = (itemName, newLocation) => {
        const item = this.list.find(i=>
            i.name === itemName
        )
        item.location = newLocation
    }

    deleteItem = (name) => {
        const item = this.list.find(i=>
            i.name === name
        )
        const indexOfItem = this.list.indexOf(item)
        this.list.splice(indexOfItem, 1)
    } 
}

