import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import Button from './Button.jsx';
import AuthContext from './context/AuthContext.jsx';

const MainNavigation = function MainNavigationComponent() {
  const [open, setOpen] = useState(false);
  const { authenticated, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const menuClasses = cn(
    'main-nav__menu absolute top-0 left-0 flex flex-col gap-2 w-screen h-full p-8 bg-primary-200 text-black text-lg transition-all translate-x-full',
    { 'translate-x-0': open },
    { invisible: !open },
  );

  const handleMenuClick = (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      setOpen(false);
    }
  };

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => setOpen(false);

  const handleSignOut = async () => {
    await signout();
    setOpen(false);
    navigate('/');
  };

  return (
    <nav className="main-nav w-full bg-primary-400 mb-5 px-2 py-2 text-white">
      <div className="container mx-auto flex justify-between items-center gap-2">
        <div className="main-nav__brand">
          <Link to="/" className="uppercase">
            Ideos
          </Link>
        </div>

        <div className={menuClasses} onClick={handleMenuClick}>
          <Button
            variant="outline"
            onClick={handleMenuClose}
            className="self-end"
          >
            X
          </Button>

          <Link to="/" className="uppercase">
            Home
          </Link>

          {authenticated ? (
            <>
              <Link to="/dashboard" className="uppercase">
                Dashboard
              </Link>

              <button
                type="button"
                className="uppercase text-left"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="uppercase">
                Sign In
              </Link>

              <Link to="/signup" className="uppercase">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <Button variant="outline" onClick={handleMenuOpen}>
          Open
        </Button>
      </div>
    </nav>
  );
};

export default MainNavigation;
