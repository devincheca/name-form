import React from 'react';
import ReactDOM from 'react-dom';
import NameContainer from './NameContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NameContainer />, div);
});
