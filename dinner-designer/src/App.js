import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/title'
import Stack from 'react-bootstrap/Stack';
import Generator from './components/generator';
import Foodmaker from './components/foodmaker';



function App() {
  return (
    <div> 
      <Stack gap={3} style={{ padding: ''}}>
        <div className="p-2"><Title name="Dinner Designer" /></div>
        <div className="p-2"><Generator/></div>
        <div className="p-2"></div>
      </Stack>
    </div>
  );
}

export default App;
