import React from 'react';
import store from './store.js';
import List from './List';

function App(props) {
  const lists = props.store.lists.map(list => {
    return <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])} />;
  })
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;