import './App.css';
import { init, Form } from '@feathery/react';


function App() {
  init('3d33c68a-a65e-4242-9f5d-da7eadeca489');
  return (
    <div className="App">
      <h1>Praxis Society Form</h1>
      <Form formName='Contact' />

    </div>
  );
}

export default App;
