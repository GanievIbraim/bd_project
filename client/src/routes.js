import { ADMIN_ROUTE, FOOD_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, SERVICE_ROUTE } from "./utils/consts";
import { Admin } from './pages/Admin'
import { Auth } from './pages/Auth'
import { FoodPage } from './pages/FoodPage'
// import { Notfoundpage } from '../pages/Notfoundpage'
import { Order } from './pages/Order'
import { Service } from './pages/Service'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    }
]

export const publicRoutes = [
    {
        path: SERVICE_ROUTE,
        Component: Service
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FOOD_ROUTE + '/:id',
        Component: FoodPage
    }
]