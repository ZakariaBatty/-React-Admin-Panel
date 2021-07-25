import React, { useState } from 'react';
import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
  //@ USESTATE  @
  const [data, setData] = useState(productRows);

  //@ FUNCTION FOR DELETE product FROM TABLE
  const handleDlete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  //@ CULUMNS TABLE DATAGRID
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="img" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 220 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'price', headerName: 'Price', width: 170 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDlete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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

export default ProductList;
