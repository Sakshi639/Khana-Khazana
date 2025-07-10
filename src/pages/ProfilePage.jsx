import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <p className="text-muted-foreground mb-8">Manage your account details and preferences here.</p>
      <div className="bg-card p-6 rounded-lg border border-border space-y-4">
        {user ? (
          <>
            <div className="text-lg font-semibold">Name: {user.name}</div>
            <div className="text-lg">Email: {user.email}</div>
            <Button variant="destructive" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <div className="text-lg">You are not logged in.</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
