import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

export const App = () => {
  return (
    <div>
      <Link to={'/about'}>about</Link>
      <Link to={'/shop'}>shop</Link>
      <h1>Hello World</h1>
      <button className={classes.button}>f</button>
      <Outlet />
    </div>
  );
};
