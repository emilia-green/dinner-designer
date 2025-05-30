import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/title'
import Stack from 'react-bootstrap/Stack';
import MenuCard from './components/menucard';




function App() {
  return (
    <div> 
      <Stack gap={3} style={{ padding: '20'}}>
        <div className="p-2"><Title name="Menu Generator" /></div>
        <div className="p-2 rounded" style={{backgroundColor:'#B2BEB5', width:'600px', justifyContent:'center', alignContent:'center', margin:'0 auto'}}><MenuCard/></div>
        <div className="p-2" style={{margin:"0 auto"}}>to do: generate new styling every time button is pressed. add review thing</div>
      </Stack>
    </div>
  );
}

export default App;