'use client';

import CaseStudiesSection from "@/app/components/CaseStudiesSection";
import {
  BrandAssociationSection,
  InfluencerFeaturesSection,
  BrandFeaturesSection,
  MediaGallerySection,
  AboutSection,
  ContactSection,
  WhyInfluenceAISection,
  BrandManagementSection,
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
      <BrandManagementSection />
      <WhyInfluenceAISection />
      <TestimonialCarousel />
      <CaseStudiesSection />
      <MediaGallerySection />
      <AboutSection />
      <ContactSection />

    </>
  );
}