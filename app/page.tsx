'use client';

import HeroSection from "@/app/components/HeroSection";
import CaseStudiesSection from "@/app/components/CaseStudiesSection";
import {
  BrandAssociationSection,
  InfluencerFeaturesSection,
  BrandFeaturesSection,
  MediaGallerySection,
  AboutSection,
  ContactSection,
} from '@/app/components/HomePage';
import StatisticsSection from '@/app/components/StatisticsSection';
import TestimonialCarousel from '@/app/components/Testimonial';
import ScrollProgressIndicator from '@/app/components/ScrollProgress';
import HeroHeader from "@/app/components/HeroHeader";


export default function Home() {
  return (
    <>
      <ScrollProgressIndicator />
      <HeroHeader />
      <BrandAssociationSection />
      <InfluencerFeaturesSection />
      <StatisticsSection />
      <BrandFeaturesSection />
      <TestimonialCarousel />
      <CaseStudiesSection />
      <MediaGallerySection />
      <AboutSection />
      <ContactSection />

    </>
  );
}