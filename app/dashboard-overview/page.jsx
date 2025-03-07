// import FadeIn from "@/app/components/animations/FadeIn";
// import StatsOverview from "@/app/components/dashboardOverview/Stats";
// import AudienceGrowthChart from "@/app/components/dashboardOverview/AudienceGrowth";
// import CampaignPerformance from "@/app/components/dashboardOverview/CampaignPerformance";

// import { ChevronRight } from "lucide-react";
import DashboardHeroSection from "@/app/components/dashboardOverview/DashboardHeroSection";
import ProfileBoxUI from "@/app/components/dashboardOverview/ProfileBox";
import FloatingContent from "@/app/components/animations/FloatingContent";

const InfluencerDashboard = () => {
  return (
    <>
      <div className="bg-white">
        <ProfileBoxUI />
        <DashboardHeroSection />
        <FloatingContent />
      </div>
    </>
  );
};

export default InfluencerDashboard;
