import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

//Snapshot Test
it ('renders the ui as expected', () => {
  const tree = renderer
    .create(<Card key='5' title='testCardTitle' content='testCardContent'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//Smoke Test
it ('render without crashing', () => {
  //create a DOM element to render the component
  const div = document.createElement('div');

  //render the component
  ReactDOM.render(<Card key='5' title='testCardTitle' content='testCardContent'/>, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
})