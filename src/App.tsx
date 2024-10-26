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
      <QuoteForm/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1 className="text-center">Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;