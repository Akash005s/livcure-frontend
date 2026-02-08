import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <main className="min-h-screen w-full bg-slate-50">
            <Outlet />
        </main>
    );
};

export default AuthLayout;
