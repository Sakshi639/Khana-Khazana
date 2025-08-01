import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple localStorage mock auth
    if (isLogin) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (
        user &&
        (user.email === email || user.username === username) &&
        user.password === password
      ) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/profile');
      } else {
        setError('Invalid credentials');
      }
    } else {
      if (!name || !email || !username || !password || !firstName || !lastName) {
        setError('All fields are required');
        return;
      }
      localStorage.setItem(
        'user',
        JSON.stringify({
          name,
          email,
          username,
          password,
          firstName,
          lastName,
        })
      );
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/profile');
    }
  };

  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border border-border">
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </>
        )}
        {isLogin && (
          <Input
            type="text"
            placeholder="Username or Email"
            value={username || email}
            onChange={e => {
              setUsername(e.target.value);
              setEmail(e.target.value);
            }}
            required
          />
        )}
        {!isLogin && (
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        )}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" size="lg" className="w-full">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <button
          className="text-primary underline"
          onClick={() => { setIsLogin(!isLogin); setError(''); }}
        >
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
