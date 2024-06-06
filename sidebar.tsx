import React from 'react';

function Sidebar() {
    return (
        <aside className="bg-blue-500 h-full w-64 p-4 flex flex-col items-start text-white">
            <div className="flex items-center mb-6">
                <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10 mr-4" />
                <h1 className="text-white text-2xl font-bold">WaveConnect</h1>
            </div>
            <nav className="flex flex-col space-y-4">
                <a href="/dashboard" className="text-white hover:bg-blue-600 p-2 rounded">Dashboard</a>
                <a href="/profile" className="text-white hover:bg-blue-600 p-2 rounded">Profile</a>
                <a href="/messages" className="text-white hover:bg-blue-600 p-2 rounded">Messages</a>
                <a href="/settings" className="text-white hover:bg-blue-600 p-2 rounded">Settings</a>
                <a href="/logout" className="text-white hover:bg-blue-600 p-2 rounded">Logout</a>
            </nav>
        </aside>
    );
}

export default Sidebar;
