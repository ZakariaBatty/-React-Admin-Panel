import './featuredInfo.css';
// import {ArrowDownward} from '@material-ui/icons';

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12,999</span>
          {/* <span className="featuredMoneyRate">$-11,4 <ArrowDownward/></span> */}
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
