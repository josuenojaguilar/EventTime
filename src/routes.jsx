import { Calendar } from "./components/Calendar/Calendar";
import { Category } from "./components/Category/Category";
import { Events } from "./components/Event/Events";
import { MainDashboard } from "./components/MainDashboard";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { HomePage } from "./pages/Home/HomePage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

export const routes = [
    { 
        path: '/', 
        element: <HomePage />
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
        children: [
            {
                index: true,
                element: <MainDashboard />
            },
            {
                path: 'categories',
                element: <Category />
            },
            {
                path: 'events',
                element: <Events />
            },
            {
                path: 'calendar',
                element: <Calendar />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]