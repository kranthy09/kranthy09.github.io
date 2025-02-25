import { Suspense } from "react";
import NavigationProgressBar from "./NavigationProgress";

export default function NavProgressComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationProgressBar />
      </Suspense>
    </div>
  );
}
