import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CreditRating from './pages/CreditRating';
import { Route, Routes } from 'react-router-dom';
import { headerContext } from './hooks/HeaderContext';

const App = () => {
  const [title, setTitle] = useState('Credit Rating');

  return (
    <headerContext.Provider value={{ title, setTitle }}>
      <div className='flex'>
        <Navbar />
        <main className='flex flex-col grow'>
          <Header />
          <div className='grow'>
            <Routes>
              <Route path='/credit-rating' element={<CreditRating />} />
            </Routes>
          </div>
        </main>
      </div>
    </headerContext.Provider>
  );
};

export default App;
