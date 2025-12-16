import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import useUserStore from '../store/userStore';
import "../css/profile.css";


function Profile({ color = "#000" }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    toast.success('Logout Successful');
    navigate("/login");
  };

  const goToProfile = () => {
    navigate('/cart');
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-dropdown-wrapper">
          
          {/* Profile Icon Button */}
          <button className="profile-icon-btn" onClick={toggleDropdown}>
            <Icon icon="qlementine-icons:user-16" width={40} color={color} />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="dropdown-menu">
              <button onClick={goToProfile} className="dropdown-item">
                Profile
              </button>

              <button disabled className="dropdown-item disabled-item">
                Settings
              </button>

              <button onClick={handleLogout} className="dropdown-item logout-item">
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </div>
      )}
    </div>
  );
}

export default Profile;
