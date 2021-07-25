import React from 'react';
import './newUser.css';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <from className="newUsrFrom">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="john smith"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="zbatty1297@gmaiL.com"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="number"
            placeholder="+212 687 904 633"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>adress</label>
          <input
            type="text"
            placeholder="Moroc | Youssoufia"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </from>
    </div>
  );
};

export default NewUser;
