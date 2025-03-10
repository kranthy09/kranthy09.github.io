"use client";

import { Suspense } from "react";
import NavigationProgressBar from "@/app/components/NavigationProgress";

export default function NavProgressComponent() {
  return (
    <div>
      <Suspense fallback={null}>
        <NavigationProgressBar />
      </Suspense>
    </div>
  );
}
