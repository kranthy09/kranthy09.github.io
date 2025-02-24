// app/features/page.js

import CaseStudiesPageComponent from "@/app/components/CaseStudiesPageComponent";

export const metadata = {
    title: 'Features - YourBrand',
    description: 'Explore the powerful features of our influencer marketing platform',
};

export default function CaseStudiesPage() {
    return (
        <div className="container py-12">
            <CaseStudiesPageComponent />

            {/* More feature content would go here */}
        </div>
    );
}
