import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import SignupLoginForm from './pages/form/SignupLoginForm';
import menBanner from './components/assets/banner_mens.png';
import womenBanner from './components/assets/banner_women.png';
import kidsBanner from './components/assets/banner_kids.png';
import Checkout from './components/checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Shop /> },
      { path: 'men', element: <Category category='men' banner={menBanner} /> },
      { path: 'women', element: <Category category='women' banner={womenBanner} /> },
      { path: 'kids', element: <Category category='kid' banner={kidsBanner} /> },
      { path: 'cart', element: <Cart /> },
      { path: 'signuplogin', element: <SignupLoginForm /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'checkout', element: <Checkout /> }
    ]
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
