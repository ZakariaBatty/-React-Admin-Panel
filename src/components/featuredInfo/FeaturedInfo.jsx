import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12,999 </span>
          <span className="featuredMoneyRate">
            $-11,4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,999 </span>
          <span className="featuredMoneyRate">
            $-1,4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6,999 </span>
          <span className="featuredMoneyRate">
            $ +3,4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
