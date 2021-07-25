import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  //@USESTATE
  const [data, setData] = useState(userRows);

  //@ FUNCTION FOR DELETE ONE USER FROM TABLE
  const handleDlete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  //@ CULUMNS TABLE DATAGRID
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction', width: 170 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDlete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  //@ RETURN TABLE {DATAGRID} jsx
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
