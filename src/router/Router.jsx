import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../components/pages/errorpage/ErrorPage';
import Home from '../components/pages/home/home/Home';
import SignUp from '../components/pages/signUp/SignUp';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default Router;