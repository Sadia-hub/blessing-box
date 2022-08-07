import '../styles/globals.css'
import store from '../src/redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux";
function MyApp({ Component, pageProps }) {

  let persistor = persistStore(store);
  return ( 
  <div>
   <Provider store={store}>
   <PersistGate persistor={persistor}>
   <Component {...pageProps} />
   </PersistGate>
   </Provider> 
  </div>

  )
}

export default MyApp;
