import { Provider } from 'mobx-react';
 import logo from './logo.svg';
import './styles/fonts.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/primary-color.css";

import AppRouter from './router';
import baseStore from './stores/base';

function App() {
  return (
    <Provider baseStore={baseStore}>
     <AppRouter/>
     </Provider>
  );
}

export default App;
