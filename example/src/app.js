import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src/index.js';

const App = () => (
  <MyComponent />
);

render(<App />, document.getElementById('root'));