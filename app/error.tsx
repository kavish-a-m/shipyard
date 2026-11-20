"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely to monitoring service
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <main className="error-state">
      <div className="site-header">
        <Link className="logo" href="/">
          SHIPYARD<span>.</span>
        </Link>
        <span className="header-note">System Notice</span>
      </div>
      <div className="error-body">
        <p className="eyebrow">Error / Unexpected Exception</p>
        <h1>
          A temporary rough sea
          <br />
          <em>in the shipyard.</em>
        </h1>
        <p className="error-description">
          Something went wrong while retrieving this page. The ShipYard team has been notified.
        </p>
        <div className="error-actions">
          <button type="button" onClick={() => reset()} className="retry-button">
            Try again <span>↻</span>
          </button>
          <Link className="back-link" href="/">
            ← Return to collection
          </Link>
        </div>
      </div>
    </main>
  );
}
