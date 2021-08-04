import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {/* Approved */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Approved" />
          </td>
        </tr>

        {/* Declined */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Declined" />
          </td>
        </tr>
        {/* Pending */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Pending" />
          </td>
        </tr>
        
        {/* Approved */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
