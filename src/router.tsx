import { createBrowserRouter } from 'react-router-dom';
import WebLayout from './components/layout/WebLayout';
import AdminLayout from './components/layout/AdminLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Settings from './pages/admin/Settings';
import MedicinesPage from './pages/MedicinesPage';
import AboutPage from './pages/AboutPage';

import AuthLayout from './components/layout/AuthLayout';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import OTPPage from './pages/auth/OTPPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <WebLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: 'medicines',
                element: <MedicinesPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SignupPage />,
            },
            {
                path: '/verify-otp',
                element: <OTPPage />,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
]);

export default router;
