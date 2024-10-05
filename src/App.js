
/* gestor de rutas*/

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux';

/* rutas */
import Error404 from "containers/errors/error404";
import Home from "containers/pages/home";
import Blog from "containers/pages/blog";
import Contactus from "containers/pages/contactus";
import About from "containers/pages/about";
import Product from "containers/pages/product";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>

        {/*Home Display*/}
        <Route path="/" element={< Home />} />
        <Route path="/nosotros" element={< About />} />
        <Route path="/blog" element={< Blog />} />
        <Route path="/contactanos" element={< Contactus />} />
        <Route path="/producto" element={< Product />} />



        {/*Error Display*/}
        <Route path="*" element={< Error404 />} />
        


      </Routes>
    </Router>
    </Provider>

    
  );
}

export default App;
