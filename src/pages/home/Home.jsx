import React from 'react';
import { FeaturedInfo, Chart, WidgetSm, WidgetLg } from 'components';
import './home.css';
import { userData } from 'dummyData';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analyticks"
        dataKey="Active user"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
