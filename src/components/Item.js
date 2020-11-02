import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }

    editItem = (e) => {
      const newLocation = prompt(`${e.target.value} - edit to:`)
      this.props.store.editItem(this.props.item.name, newLocation)
    }

    deleteItem = () => {
      this.props.store.deleteItem(this.props.item.name)
    }

    render() {
      let item = this.props.item
        return (
          <div className = {item.completed ? "crossed": null}>
                {item.name} - {item.location}
          <input type="checkbox" onClick={this.checkItem} value={item.name}/>done,
          <button className= "editButton" value={item.location} onClick={this.editItem}>Edit</button>
          <button className= "deleteButton" value={item.name} onClick={this.deleteItem}>Delete</button>
            </div>
          )
    }
}

export default Item