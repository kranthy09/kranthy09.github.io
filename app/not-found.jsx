// app/not-found.js
"use client";

import { Suspense } from "react";
import Link from "next/link";

function NotFoundContent() {
  // If you need to use useSearchParams(), it goes here
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We couldn't find the page you're looking for. It might have been moved
        or deleted.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
