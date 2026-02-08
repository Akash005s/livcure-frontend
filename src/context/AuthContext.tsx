import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Role = 'admin' | 'pharmacist' | 'user';

interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    login: (role: Role) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (role: Role) => {
        const dummyUser: User = {
            id: '1',
            name: role === 'admin' ? 'Admin User' : role === 'pharmacist' ? 'Pharmacist User' : 'Regular User',
            email: `${role}@livcure.com`,
            role: role,
        };
        setUser(dummyUser);
        // Persist to localStorage for demo persistence if needed, defaulting to state for now
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
