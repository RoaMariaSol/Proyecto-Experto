import './App.css';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import HomePage from './paginas/HomePage';
import NoticiasPage from './paginas/NoticiasPage';
import PeliculasPage from './paginas/PeliculasPage';
import ShopPage from './paginas/ShopPage';
import ContactoPage from './paginas/ContactoPage';

import WakandaPage from './paginas/WakandaPage';
import DatosPage from './paginas/DatosPage';
import WishPage from './paginas/WishPage';
import AvatarPage from './paginas/AvatarPage';

import PeluchesPage from './paginas/PeluchesPage';
import TazasPage from './paginas/TazasPage';
import DisfrazPage from './paginas/DisfrazPage';

import PrincesasPage from './paginas/PrincesasPage';
import MarvelPage from './paginas/MarvelPage';
import PixarPage from './paginas/Pixar';

import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';






function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>

          <Route path='noticias' element={<NoticiasPage />} ></Route>
          <Route path='/wakanda' element={<WakandaPage />}  ></Route>
          <Route path='/datos' element={<DatosPage />}  ></Route>
          <Route path='/wish' element={<WishPage />}  ></Route>
          <Route path='/avatar' element={<AvatarPage />}  ></Route>

          <Route path='peliculas' element={<PeliculasPage />} ></Route>
          <Route path='princesas' element={<PrincesasPage />} ></Route>
          <Route path='marvel' element={<MarvelPage />} ></Route>
          <Route path='pixar' element={<PixarPage />} ></Route>

          <Route path='shop' element={<ShopPage />} ></Route>
          <Route path='peluches' element={<PeluchesPage />} ></Route>
          <Route path='tazas' element={<TazasPage />} ></Route>
          <Route path='disfraces' element={<DisfrazPage />} ></Route>

          <Route path='contacto' element={<ContactoPage />} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
     

    </div>
  );
}

export default App;
