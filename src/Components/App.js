import React, { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Actions/user';

const App = () => {
  const storedUser = useSelector((state) => state);
  const logoutURL = 'https://fast-escarpment-73067.herokuapp.com/logout';
  const loggedInURL = 'https://fast-escarpment-73067.herokuapp.com/logged_in';
  const dispatch = useDispatch();

  const fetchLoggedInUser = async () => {
    const response = await fetch(loggedInURL, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    dispatch(getUsers(data));
  };

  const logout = async () => {
    const response = await fetch(logoutURL, {
      method: 'DELETE',
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    dispatch(getUsers(data));
    localStorage.clear();
  };

  const onClick = () => {
    logout();
  };

  useEffect(() => {
    fetchLoggedInUser(); // eslint-disable-next-line
  }, [])

  const checkUser = () => {
    if (storedUser.userReducer.logged_in === true) {
      return (
        <div>
          <button type="button" onClick={onClick}><i className="fas fa-sign-out-alt" /></button>
          <h6>Logout</h6>
        </div>
      );
    }
    return (
      <div>
        <a href="/login">
          <i className="fas fa-sign-out-alt" />
          <h6>Login</h6>
        </a>
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="app-text">TRACKIT</h2>
        </nav>
      </header>
      <footer>
        <ul className="footer-list">
          <li>
            <div>
              <a href="/create/training">
                <i className="fas fa-plus-square" />
                <h6>Add</h6>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/all/trainings">
                <i className="fas fa-chart-pie" />
                <h6>Track.it</h6>
              </a>
            </div>
          </li>
          <li>
            {checkUser()}
          </li>
          <li>
            <div>
              <a href="/create/training">
                <i className="fas fa-ellipsis-h" />
                <h6>More</h6>
              </a>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
