import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../components/pages/errorpage/ErrorPage';
import Home from '../components/pages/home/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Router;