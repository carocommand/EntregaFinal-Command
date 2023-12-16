import { MainRoutes } from './routes/MainRouter';
import { CartProvider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const App = () => {
 
    return (
      <div>
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </div>
    );
  }

export default App;
