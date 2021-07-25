import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/03/19/panpipe-6380762_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
