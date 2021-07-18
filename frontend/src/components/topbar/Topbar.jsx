import React from 'react';
import './topbar.css';
// import {NotificationsNone , Language, Settings} from '@material-ui/icons'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Language /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Settings /> */}
            <span className="topIconBadge">2</span>
          </div>
          <img src="" alt="" className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
