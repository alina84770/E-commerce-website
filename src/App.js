import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import SignupLoginForm from './pages/SignupLoginForm';
import menBanner from './components/assets/banner_mens.png';
import womenBanner from './components/assets/banner_women.png';
import kidsBanner from './components/assets/banner_kids.png';
import Checkout from './components/checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navbar />
        <Shop />
        <Footer />
      </>
  },
  {
    path: '/men',
    element:
      <>
        <Navbar />
        <Category category='men' banner={menBanner} />
        <Footer />
      </>
  },
  {
    path: '/women',
    element:
      <>
        <Navbar />
        <Category category='women' banner={womenBanner} />
        <Footer />
      </>
  },
  {
    path: '/kids',
    element:
      <>
        <Navbar />
        <Category category='kid' banner={kidsBanner} />
        <Footer />
      </>
  },
  {
    path: '/cart',
    element:
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
  },
  {
    path: '/signuplogin',
    element:
      <>
        <Navbar />
        <SignupLoginForm />
      </>
  },
  {
    path: '/product/:id',
    element:
      <>
        <Navbar />
        <Product />
      </>
  },

  {
    path: '/checkout',
    element:
      <>
        <Navbar />
        <Checkout/>
      </>
  },
  {
    path:'*',
    element:<NotFound/>
  }

])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
