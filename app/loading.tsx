export default function Loading() {
  return (
    <main className="loading-state">
      <div className="site-header">
        <span className="logo">
          SHIPYARD<span>.</span>
        </span>
        <span className="header-note">Loading collection...</span>
      </div>
      <div className="loading-body">
        <p className="eyebrow">Please wait</p>
        <p className="loading-text">Preparing the ShipYard catalog...</p>
        <div className="loading-grid-skeleton">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-art" />
              <div className="skeleton-line short" />
              <div className="skeleton-line title" />
              <div className="skeleton-line desc" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
