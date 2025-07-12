import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FoodImagesGrid from '../components/profile/FoodImagesGrid';

const ProfilePage = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-2 shadow-md">
          <span className="text-white text-4xl" role="img" aria-label="curry">🍛</span>
        </div>
        <h1 className="text-3xl font-bold text-center">Khana Khazana</h1>
      </div>
      <p className="text-muted-foreground mb-8 text-center">Manage your account details and preferences here.</p>
      <div className="bg-card p-6 rounded-lg border border-border space-y-4 max-w-md mx-auto">
        {user ? (
          <>
            {user.name && <div className="text-lg font-semibold">Full Name: {user.name}</div>}
            {user.username && <div className="text-lg">Username: {user.username}</div>}
            {user.firstName && <div className="text-lg">First Name: {user.firstName}</div>}
            {user.lastName && <div className="text-lg">Last Name: {user.lastName}</div>}
            {user.email && <div className="text-lg">Email: {user.email}</div>}
            <Button variant="destructive" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <div className="text-lg">You are not logged in.</div>
        )}
      </div>
      <FoodImagesGrid />
    </div>
  );
};

export default ProfilePage;
