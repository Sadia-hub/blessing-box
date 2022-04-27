import '../styles/globals.css'
import store from '../src/components/ui/support/store';
import {Provider} from "react-redux";
function MyApp({ Component, pageProps }) {
  return ( <div>
   <Provider store={store}>
   <Component {...pageProps} />
   </Provider> 
  </div>

  )
}

export default MyApp;
