// app/error.js
"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";

function ErrorContent({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-6">Something went wrong</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We've encountered an unexpected error. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function Error({ error, reset }) {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ErrorContent error={error} reset={reset} />
    </Suspense>
  );
}
