// import PortfolioComponent from "../components/dashboardOverview/Portfolio";
// import BrandPartnershipsComponent from "../components/dashboardOverview/BrandPartnerships";
// import TrackMetricsComponent from "../components/dashboardOverview/TrackMetrics";
// import MobileLayout from "../components/dashboardOverview/MobileLayout";
// import CampaignCardComponent from "@/app/components/dashboardOverview/brand/CampaignCard";
// import MetricsSummaryComponent from "@/app/components/dashboardOverview/brand/RoiAnalytics";
// import InfluenceSearchComponent from "@/app/components/dashboardOverview/InfluencerSearch";

// import InfluencerFeatures from "../components/dashboardOverview/influencer/BrandManagement";
import InfluencerNetworkingPlatform from "../components/dashboardOverview/InfluencerNetworkingPlatform";

import NetworkingComponent from "@/app/components/dashboardOverview/influencer/NetworkingComponent";
import EngagementComponent from "@/app/components/dashboardOverview/influencer/EngagementComponent";

export default function DashboardOverviewPage() {
  return (
    <>
      {/* <div className="flex">
        <div className="flex flex-1 static">
          <div className="flex-1">
            <PortfolioComponent />
          </div>
          <div className="flex-1">
            <BrandPartnershipsComponent />
          </div>
        </div>
        <div className=" bottom-0">
          <TrackMetricsComponent />
        </div>

        <div className="flex-1 bg-white overflow-hidden">
          <MobileLayout />
        </div>
      </div> */}
      {/* <div className="static">
        <div className="static">
          <InfluenceSearchComponent />
        </div>
      </div> */}
      {/* <div className="flex flex-1">
        <InfluencerFeatures />
      </div> */}
      {/* <InfluencerNetworkingPlatform /> */}
      <div className="relative">
        <NetworkingComponent />
        <div className="absolute right-0 top-0">
          <EngagementComponent />
        </div>
      </div>
    </>
  );
}
