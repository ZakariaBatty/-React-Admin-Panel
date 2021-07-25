import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { route } from 'react-router-dom';
import Home from 'pages/home/Home';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <route exact path="/" component={Home} /> Panel
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
