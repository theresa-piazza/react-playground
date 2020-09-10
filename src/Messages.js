import React from 'react';
import './Messages.css';

export default function Messages(props) {
    const badge = props.unread
    ? <div className="unread_count badge">{props.unread}</div>
    : null;
    return (
        <div className="messages">
            {props.name}
            {badge}
        </div>
    );
}


/*
const sections = [
  { 
    title: 'AE Houseman',
    content: 'Good creatures, do you love your lives / Here is a knife like other knives',
  },
  { 
    title: 'Penelope Gilliat',
    content: 'For years the thought of you scorched my eyeballs / Now all is well under the scalding sun.',
  },
  { title: 'Elinor Wylie',
    content: 'In masks outrageous and austere / The years go by in single file; / But none has merited my fear, / And none has quite escaped my smile.',
  }
];


class App extends React.Component {
  state = {
    shoppingItems: [
     
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      {name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
    
  }

  render() {
    return (
      <section>
        <AddItemForm
          onAddItem={this.handleAddItem}
          />
      </section>
    )
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
              />
          </section>
        </main>
      </>
    )
  }
} */
