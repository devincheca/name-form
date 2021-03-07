import './App.css';
import {
  FormInput,
  Header,
  SavedNames
} from './components/components';

function App() {
  return (
    <div className="App">
      <Header />
      <SavedNames />
      <FormInput />
    </div>
  );
}

export default App;
