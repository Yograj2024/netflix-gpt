import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import appRoutes from './routes';

const App = () => { 
    
    return <RouterProvider router={appRoutes}/> 
};

export default App; 