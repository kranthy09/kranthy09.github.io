import PortfolioComponent from "../components/dashboardOverview/Portfolio";
import BrandPartnershipsComponent from "../components/dashboardOverview/BrandPartnerships";
import TrackMetricsComponent from "../components/dashboardOverview/TrackMetrics";

export default function DashboardOverviewPage() {
  return (
    <div className="flex">
      <div className="flex flex-1 static">
        <div className="flex-1">
          <PortfolioComponent />
        </div>
        <div className="flex-1">
          <BrandPartnershipsComponent />
        </div>
      </div>
      {/* <div className="absolute bottom-0">
        <TrackMetricsComponent />
      </div> */}
      <div className="flex-1 bg-black"></div>
    </div>
  );
}
