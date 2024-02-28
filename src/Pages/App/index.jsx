import { useRoutes, BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Home from '../Home';
import Asian from '../Asian';
import Colombian from '../Colombian';
import Sea from '../Sea';
import FastFood from '../FastFood';
import '../App/App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Asian', element: <Asian /> },
    { path: '/FastFood', element: <FastFood /> },
    { path: '/Sea', element: <Sea /> },
    { path: '/Colombian', element: <Colombian /> }, // Corregido el nombre del componente Colombian
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
