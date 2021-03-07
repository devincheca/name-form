import React from 'react';
import ReactDOM from 'react-dom';
import SavedNames from './SavedNames';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SavedNames />, div);
});
