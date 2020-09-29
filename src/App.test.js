import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

//Snapshot Test
it ('renders the ui as expected', () => {
  const store = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]
      }
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' }
    }
  } 
  const tree = renderer
    .create(<App store={store} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//Smoke Test
it ('render without crashing', () => {
  //create a DOM element to render the component
  const div = document.createElement('div');
  const store = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]
      }
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' }
    }
  } 
  //render the component
  ReactDOM.render(<App store={store} />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
})