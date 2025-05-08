import { Calendar } from "./components/Calendar/Calendar";
import { Events } from "./components/Events";
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