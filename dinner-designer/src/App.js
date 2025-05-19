import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/title'
import Stack from 'react-bootstrap/Stack';
import MenuCard from './components/menucard';
import Foodmaker from './components/foodmaker';



function App() {
  return (
    <div> 
      <Stack gap={3} style={{ padding: ''}}>
        <div className="p-2"><Title name="Dinner Designer" /></div>
        <div className="p-2"><MenuCard/></div>
        <div className="p-2"></div>
      </Stack>
    </div>
  );
}

export default App;