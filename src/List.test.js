import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

//Snapshot Test
it ('renders the ui as expected', () => {
  const tree = renderer
    .create(<List key='testKey' header='testHeader' cards={[{'a': { id: 'a', title: 'First card', content: 'lorem ipsum' }}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//Smoke Test
it ('render without crashing', () => {
  //create a DOM element to render the component
  const div = document.createElement('div');

  //render the component
  ReactDOM.render(<List key='testKey' header='testHeader' cards={[{'a': { id: 'a', title: 'First card', content: 'lorem ipsum' }}]}/>, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
})