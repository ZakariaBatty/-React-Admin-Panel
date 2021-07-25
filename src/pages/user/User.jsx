import React from 'react';
import './user.css';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';

export const user = () => {
  return (
    <div className="user">
      <div className="userTitleContaier">
        <div className="userTitle">Edit User</div>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="useShow">
          <div className="userShowTop">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becher</span>
              <span className="userShowUserTitle">Software Enginner</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">09.12.1999</span>
            </div>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+212 687 904 633</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">zbatty1297@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Moroc | Youssoufia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becher"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="zbatty1297@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="+212 687 904 633"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="Moroc | Youssoufia"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
                  alt="img prfl"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>
              <button className="userUpdateBotton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
