import './App.scss';
import {Navbar } from './components'
import 'react-toastify/dist/ReactToastify.css';
import * as ROUTES from './constants/routes'
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './theme';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Products, Cart, Product} from './pages';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div style={{ paddingTop: '60px' }}>
          <Switch>
            <Route path={ROUTES.PRODUCTS} exact>
              <Products />
            </Route>
            <Route path={ROUTES.CART} exact>
              <Cart />
            </Route>
            <Route path={ROUTES.PRODUCT} exact>
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
