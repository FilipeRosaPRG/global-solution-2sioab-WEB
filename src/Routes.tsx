
import { createBrowserRouter, } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import SidebarComponent from './components/SidebarComponent';
import Error404 from './pages/Error404';

import useAuth from './hooks/useAuth';

const PrivateRoute = ({ element, errorElement }: any) => {
    const { signed } = useAuth();

    return signed ? element : errorElement;
}

const AppRouter = createBrowserRouter([

    {
        path: '/',
        element: <Login />,
        errorElement: <Error404 />,
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error404 />,
    },
    {
        path: '/home',
        element: <PrivateRoute element={<SidebarComponent />} errorElement={<Login />} />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'schedule',
                element: <Schedule />,
            },
        ],
    },
]);

export default AppRouter;
