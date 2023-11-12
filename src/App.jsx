
import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProducList';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Footer />
    </div>
  );
}

export default App;

