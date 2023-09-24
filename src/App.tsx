import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Index from './pages/Index'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
