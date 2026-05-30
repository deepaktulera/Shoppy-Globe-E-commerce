import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='p-5 w-screen h-screen'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
