import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponents/NavBarComponents';
import "./index.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Welcome to Cafe cafecito store!" />
    </div>
  );
}

export default App;
