import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'; // Import useHistory from React Router
import './Dashboard.css'; // Import Dashboard CSS if needed

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    // Fetch user details when component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/epankaj/v.0/users/me');
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setError('Error fetching user details');
      }
    };

    fetchUserDetails(); // Call fetchUserDetails function
  }, []); // Empty dependency array ensures useEffect runs only once

  // Handle logout
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
    {user && (
      <div className="user-info">
        <img src={user.image} alt="User" className="user-avatar" />
        <h1>Welcome {user.name}!</h1>
      </div>
    )}
    <p>Thank you for joining the Rajlee group. We're glad to have you on our team.</p>
    {/* Add more content or functionality as needed */}
    <button onClick={handleLogout}>Logout</button> {/* Logout button */}
  </div>
  );
};

export default Dashboard;
