import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import Footer from './Footer';

const UserLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <UserNavbar />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;
