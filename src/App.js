import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Layout></Layout>
      </div>
    </Router>
  );
}

export default App;
