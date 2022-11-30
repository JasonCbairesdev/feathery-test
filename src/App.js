import logo from './logo.svg';
import './App.css';
import { init, Form } from '@feathery/react';


function App() {
  init('3d33c68a-a65e-4242-9f5d-da7eadeca489');
  return (
    <div className="App">
      <Form formName='Contact' />

    </div>
  );
}

export default App;
