import React from 'react';
import { render } from '@testing-library/react';
import store from './store.js';
import List from './List';

function App(props) {
  const lists = props.store.lists.map(list => {
    return <List key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])} />;
  })
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;