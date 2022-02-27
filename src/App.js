import { DataContextProvider } from './contexts/DataContext';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import './App.scss';

function App() {
  return (
    <DataContextProvider>
      <Router>
        <div className='App'>
          <Layout></Layout>
        </div>
      </Router>
    </DataContextProvider>
  );
}

export default App;
