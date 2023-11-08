import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../components/pages/errorPage/ErrorPage';
import Home from '../components/pages/home/home/Home';
import SignUp from '../components/pages/signUp/SignUp';
import Login from '../components/pages/login/Login';
import AddFood from '../components/pages/addFood/AddFood';
import AvailableFoods from '../components/pages/availableFoods/AvailableFoods';
import ManageFood from '../components/pages/manageFood/ManageFoods';
import FoodRequest from '../components/pages/foodRequest/FoodRequest';
import Private from '../components/private/Private';
import FoodUpdate from '../components/pages/manageFood/FoodUpdate';
import SingleMaFo from '../components/pages/manageFood/SingleMaFo';
import Details from '../components/pages/details/Details';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://63-community-food-sharing-server.vercel.app/food')
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('https://63-community-food-sharing-server.vercel.app/food')
            },
            {
                path: '/details/:id',
                element: <Private><Details></Details></Private>,
                loader: ({ params }) => fetch(`https://63-community-food-sharing-server.vercel.app/food/${params.id}`)
            },
            {
                path: '/addFood',
                element: <Private><AddFood></AddFood></Private>
            },
            {
                path: '/manageFoods',
                element: <Private><ManageFood></ManageFood></Private>,
                loader: () => fetch('https://63-community-food-sharing-server.vercel.app/food')
            },
            {
                path: '/foodUpdate/:id',
                element: <Private><FoodUpdate></FoodUpdate></Private>,
                loader: ({ params }) => fetch(`https://63-community-food-sharing-server.vercel.app/food/${params.id}`)
            },
            {
                path: '/manageFood/:id',
                element: <Private><SingleMaFo></SingleMaFo></Private>,
                loader: ({ params }) => fetch(`https://63-community-food-sharing-server.vercel.app/food/${params.id}`)
            },
            {
                path: '/foodRequest',
                element: <Private><FoodRequest></FoodRequest></Private>,
                loader: () => fetch('https://63-community-food-sharing-server.vercel.app/request')
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