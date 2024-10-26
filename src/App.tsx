import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import QuoteForm from './components/QuoteForm/QuoteForm.tsx';

const App = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes" element={<HomePage />} />
        <Route path="/quotes/:id/edit" element={<QuoteForm />} />
        <Route path="/add-quote" element={<QuoteForm />} />
        <Route path="*" element={<h1 className="text-center">Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;