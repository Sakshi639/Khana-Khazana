import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User, Moon, Sun, LogOut, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchIconClick = () => setShowSearch((v) => !v);
  const handleSearchInputChange = (e) => setSearchTerm(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/menu?search=${encodeURIComponent(searchTerm.trim())}`;
      setShowSearch(false);
      setSearchTerm("");
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About Us', description: 'Khana Khazana is your go-to platform for ordering food from your favorite restaurants and discovering new cuisines. Our mission is to bring you a delightful food ordering experience with a modern, easy-to-use interface and lightning-fast delivery. We offer a wide variety of cuisines, curated selections, real-time order tracking, and 24/7 customer support.' },
    { path: '/contact', label: 'Contact Us', description: 'Get in touch with us for support, feedback, or business inquiries.' },
  ];

  const [openCard, setOpenCard] = useState(null);

  const isActive = (path) => location.pathname === path;

  // Auth state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  const handleProfileClick = () => setIsDropdownOpen((v) => !v);
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg" role="img" aria-label="curry">🍛</span>
            </div>
            <span className="text-xl font-bold text-foreground">Khana Khazana</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setOpenCard(null)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="sm" className="relative" onClick={handleSearchIconClick} aria-label="Search">
                <Search className="h-4 w-4" />
              </Button>
              {showSearch && (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex items-center px-2 py-1">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    autoFocus
                    placeholder="Search food..."
                    className="flex-1 px-2 py-1 text-sm border-none outline-none bg-transparent"
                  />
                  <Button type="submit" size="sm" variant="secondary" className="ml-2">Go</Button>
                </form>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="relative"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <div className="relative">
              <Button variant="ghost" size="sm" onClick={handleProfileClick} aria-label="Profile menu">
                <User className="h-4 w-4" />
              </Button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {isLoggedIn && user ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">Signed in as <span className="font-semibold">{user.name}</span></div>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                        <User className="inline-block mr-2 h-4 w-4" /> Profile
                      </Link>
                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center" onClick={handleLogout}>
                        <LogOut className="inline-block mr-2 h-4 w-4" /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                        <LogIn className="inline-block mr-2 h-4 w-4" /> Login
                      </Link>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                        <UserPlus className="inline-block mr-2 h-4 w-4" /> Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="relative"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.description && (
                    <div className="mt-1 ml-2 text-xs text-muted-foreground">
                      {link.description}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" className="flex-1" onClick={handleSearchIconClick}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                {showSearch && (
                  <form onSubmit={handleSearchSubmit} className="w-full flex items-center mt-2">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchInputChange}
                      autoFocus
                      placeholder="Search food..."
                      className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                    />
                    <Button type="submit" size="sm" variant="secondary" className="ml-2">Go</Button>
                  </form>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="flex-1"
                >
                  {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {isDarkMode ? 'Light' : 'Dark'}
                </Button>
              </div>
              
              <div className="px-3 py-2">
                <Link to="/login" className="w-full flex items-center px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors">
                  <User className="h-4 w-4 mr-2" />
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

