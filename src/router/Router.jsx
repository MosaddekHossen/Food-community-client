import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../components/pages/errorpage/ErrorPage';
import Home from '../components/pages/home/home/Home';
import SignUp from '../components/pages/signUp/SignUp';
import Login from '../components/pages/login/Login';
import AddFood from '../components/pages/addFood/AddFood';
import AvailableFoods from '../components/pages/availableFoods/AvailableFoods';
import ManageFood from '../components/pages/manageFood/ManageFood';
import FoodRequest from '../components/pages/foodRequest/FoodRequest';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: '/addFood',
                element: <AddFood></AddFood>
            },
            {
                path: '/manageFoods',
                element: <ManageFood></ManageFood>
            },
            {
                path: '/foodRequest',
                element: <FoodRequest></FoodRequest>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default Router;