import { Suspense } from "react";
import NavigationProgress from "./NavigationProgress";

export default function NavProgressComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationProgress />
      </Suspense>
    </div>
  );
}
