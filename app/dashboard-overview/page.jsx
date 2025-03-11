// import PortfolioComponent from "../components/dashboardOverview/Portfolio";
// import BrandPartnershipsComponent from "../components/dashboardOverview/BrandPartnerships";
// import TrackMetricsComponent from "../components/dashboardOverview/TrackMetrics";
// import MobileLayout from "../components/dashboardOverview/MobileLayout";
// import CampaignCardComponent from "@/app/components/dashboardOverview/brand/CampaignCard";
// import MetricsSummaryComponent from "@/app/components/dashboardOverview/brand/RoiAnalytics";
// import InfluenceSearchComponent from "@/app/components/dashboardOverview/InfluencerSearch";

// import InfluencerFeatures from "../components/dashboardOverview/influencer/BrandManagement";
// import InfluencerNetworkingPlatform from "../components/dashboardOverview/InfluencerNetworkingPlatform";

import NetworkingComponent from "@/app/components/dashboardOverview/influencer/NetworkingComponent";
import EngagementComponent from "@/app/components/dashboardOverview/influencer/EngagementComponent";
import ImageCarousel from "@/app/components/ImageCarousel";
import EnhancedImageCarousel from "@/app/components/EnhancedImageCarousel";
import ContentCalendar from "../components/dashboardOverview/influencer/ContentCalenderComponent";
import GetInTouch from "../components/GetInTouchComponent";

export default function DashboardOverviewPage() {
  const carouselImages = [
    {
      url: "/virajita.jpg",
      alt: "Nature landscape",
      text: "Explore the beauty of nature",
    },
    {
      url: "/virajita.jpg",
      alt: "City skyline",
      text: "Discover urban adventures",
    },
    {
      url: "/priyanka.jpg",
      alt: "Delicious food",
      text: "Taste culinary delights",
    },
    {
      url: "/priyanka.jpg",
      alt: "Travel destinations",
      text: "Journey to new horizons",
    },
    {
      url: "/virajita.jpg",
      alt: "Architecture",
      text: "Marvel at human creativity",
    },
    {
      url: "/virajita.jpg",
      alt: "People",
      text: "Connect with humanity",
    },
    {
      url: "/priyanka.jpg",
      alt: "Technology",
      text: "Embrace innovation",
    },
  ];

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
      {/* <div className="relative">
        <NetworkingComponent />
        <div className="absolute right-0 top-0">
          <EngagementComponent />
        </div>
      </div>
      <div className="app px-14">
        <h1>Image Carousel Demo</h1>

        <h2>Default Configuration (3 slides visible)</h2>
        <ImageCarousel
          images={carouselImages}
          autoSlideInterval={4000}
          showItemsCount={3}
          height={600}
        />

        <h2>Alternative Configuration (2 slides visible)</h2>
        <ImageCarousel
          images={carouselImages}
          autoSlideInterval={3000}
          showItemsCount={2}
          height={400}
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Semantic Image Carousel
        </h1>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Default Configuration (3 slides visible)
          </h2>
          <EnhancedImageCarousel
            images={carouselImages}
            autoSlideInterval={4000}
            showItemsCount={3}
            height={300}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Alternative Configuration (2 slides visible)
          </h2>
          <EnhancedImageCarousel
            images={carouselImages}
            autoSlideInterval={3000}
            showItemsCount={2}
            height={400}
          />
        </div>
      </div> */}
      <div className="flex">
        <div className="flex-col-1">
          <ContentCalendar />
        </div>
        <div className="flex-col-1"></div>
      </div>
      <GetInTouch />
    </>
  );
}
