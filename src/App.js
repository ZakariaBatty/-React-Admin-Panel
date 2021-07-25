import React from 'react';
import "./app.css"
import { Topbar, Sidebar } from 'components';
import Home from 'pages/home/Home';
import UserList from 'pages/userList/UserList';
import { user } from 'pages/user/User';
import NewUser from 'pages/newUser/NewUser';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from 'pages/productList/ProductList';


function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={user} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productId" component={ProductList} />
          <Route path="/newproduct" component={ProductList} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
