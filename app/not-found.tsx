import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">404 / Nothing here</p><h1>That object has<br /><em>sailed away.</em></h1><p>We couldn’t find the product you’re looking for.</p><Link className="back-link" href="/">← Return to collection</Link></main>; }
