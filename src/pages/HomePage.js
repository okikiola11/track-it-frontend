import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="Page">
    <p>You are not logged in!</p>
    <Link to={{ pathname: '/signin' }}>Sign In</Link>
  </div>
);

export default HomePage;
