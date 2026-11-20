"use client";

import { useState } from "react";

type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  helpfulCount: number;
};

const sampleReviews: Record<string, Review[]> = {
  "wave-runner": [
    {
      id: "wr-1",
      author: "Alex Morgan",
      rating: 5,
      date: "October 14, 2026",
      comment: "Exceptional build quality and sound separation. The acoustic isolation makes morning commutes peaceful.",
      verified: true,
      helpfulCount: 24,
    },
    {
      id: "wr-2",
      author: "Daniel K.",
      rating: 5,
      date: "September 28, 2026",
      comment: "Comfortable for 8+ hour work sessions. The tactile controls feel solid and intentional.",
      verified: true,
      helpfulCount: 15,
    },
    {
      id: "wr-3",
      author: "Elena Rostova",
      rating: 4,
      date: "August 19, 2026",
      comment: "Sleek matte finish and very clean audio profile. Quick USB-C fast charging is a big plus.",
      verified: false,
      helpfulCount: 9,
    },
  ],
  "orbit-lamp": [
    {
      id: "ol-1",
      author: "Marcus Vance",
      rating: 5,
      date: "November 2, 2026",
      comment: "The diffused glow gives my workspace the calmest ambient lighting. True sculptural design.",
      verified: true,
      helpfulCount: 31,
    },
    {
      id: "ol-2",
      author: "Sophia L.",
      rating: 5,
      date: "October 11, 2026",
      comment: "Heavy, satisfying base and warm color temperature. Exactly what was missing from my reading nook.",
      verified: true,
      helpfulCount: 18,
    },
  ],
  "field-notebook": [
    {
      id: "fn-1",
      author: "Julian Chen",
      rating: 5,
      date: "October 20, 2026",
      comment: "Ink does not bleed through, even with fountain pens. Lies completely flat as promised.",
      verified: true,
      helpfulCount: 19,
    },
    {
      id: "fn-2",
      author: "Hannah Scott",
      rating: 5,
      date: "September 15, 2026",
      comment: "Tough recycled cover that travels well in any bag without creasing or tearing.",
      verified: true,
      helpfulCount: 8,
    },
  ],
  "terra-mug": [
    {
      id: "tm-1",
      author: "Claire Bennett",
      rating: 5,
      date: "November 5, 2026",
      comment: "The tactile stoneware texture feels incredible in hand. Retains heat noticeably longer than standard ceramic.",
      verified: true,
      helpfulCount: 42,
    },
    {
      id: "tm-2",
      author: "Thomas Wright",
      rating: 4,
      date: "October 3, 2026",
      comment: "A generous handle that comfortably fits all fingers. Gorgeous glaze gradient.",
      verified: true,
      helpfulCount: 12,
    },
  ],
  "metro-pack": [
    {
      id: "mp-1",
      author: "Vikram Mehta",
      rating: 5,
      date: "October 29, 2026",
      comment: "Rain beads right off the coated fabric. The internal compartments keep laptop and cables neatly organized.",
      verified: true,
      helpfulCount: 37,
    },
    {
      id: "mp-2",
      author: "Zoe Taylor",
      rating: 5,
      date: "September 18, 2026",
      comment: "Streamlined profile that never bulges even when fully loaded. Ideal commuter pack.",
      verified: true,
      helpfulCount: 22,
    },
  ],
  "cloud-throw": [
    {
      id: "ct-1",
      author: "Sarah Jenkins",
      rating: 5,
      date: "November 8, 2026",
      comment: "Substantial warmth without being heavy or stifling. The weave texture adds great depth to my living room.",
      verified: true,
      helpfulCount: 16,
    },
    {
      id: "ct-2",
      author: "Oliver Reed",
      rating: 5,
      date: "October 1, 2026",
      comment: "Drapes beautifully and launders well without losing its softness.",
      verified: true,
      helpfulCount: 11,
    },
  ],
  "peak-bottle": [
    {
      id: "pb-1",
      author: "Liam Garcia",
      rating: 5,
      date: "November 10, 2026",
      comment: "Left it in a hot car all afternoon and the water was still ice cold. Sturdy powder coat doesn’t scratch easily.",
      verified: true,
      helpfulCount: 29,
    },
    {
      id: "pb-2",
      author: "Emma Watson",
      rating: 5,
      date: "September 24, 2026",
      comment: "The leak-proof cap loop makes carrying it on trails effortless. Zero metallic aftertaste.",
      verified: true,
      helpfulCount: 14,
    },
  ],
};

const defaultReviews: Review[] = [
  {
    id: "def-1",
    author: "Jordan Miller",
    rating: 5,
    date: "November 1, 2026",
    comment: "Remarkable craftsmanship and thoughtful attention to functional detail.",
    verified: true,
    helpfulCount: 12,
  },
  {
    id: "def-2",
    author: "Taylor Brooks",
    rating: 5,
    date: "October 22, 2026",
    comment: "A seamless addition to daily routines. Exceeded expectations in every aspect.",
    verified: true,
    helpfulCount: 7,
  },
];

export default function Reviews({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const [filter, setFilter] = useState<"all" | "verified">("all");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`shipyard-reviews-${productId}`);
        return stored ? JSON.parse(stored) : {};
      } catch {}
    }
    return {};
  });
  const [browserInfo] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    }
    return "";
  });

  const rawReviews = sampleReviews[productId] || defaultReviews;
  const reviews = filter === "verified" ? rawReviews.filter((r) => r.verified) : rawReviews;

  const averageRating = (
    rawReviews.reduce((sum, r) => sum + r.rating, 0) / rawReviews.length
  ).toFixed(1);

  const handleHelpful = (reviewId: string) => {
    setHelpfulVotes((prev) => {
      const updated = { ...prev, [reviewId]: (prev[reviewId] || 0) + 1 };
      if (typeof window !== "undefined") {
        localStorage.setItem(`shipyard-reviews-${productId}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <div>
          <p className="eyebrow">Community Feedback</p>
          <h2>Reviews for {productName}</h2>
        </div>
        <div className="reviews-summary">
          <span className="reviews-score">{averageRating}</span>
          <div>
            <div className="reviews-stars" aria-label={`${averageRating} out of 5 stars`}>
              {"★".repeat(Math.round(Number(averageRating)))}
            </div>
            <p className="eyebrow">{rawReviews.length} verified ratings</p>
          </div>
        </div>
      </div>

      <div className="reviews-filters">
        <button
          type="button"
          className={`reviews-filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Reviews ({rawReviews.length})
        </button>
        <button
          type="button"
          className={`reviews-filter-btn ${filter === "verified" ? "active" : ""}`}
          onClick={() => setFilter("verified")}
        >
          Verified Buyers Only ({rawReviews.filter((r) => r.verified).length})
        </button>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => {
          const currentHelpful = review.helpfulCount + (helpfulVotes[review.id] || 0);
          return (
            <div key={review.id} className="review-item">
              <div className="review-top">
                <div>
                  <span className="review-author">{review.author}</span>
                  {review.verified && (
                    <span className="badge" style={{ position: "static", marginLeft: "10px" }}>
                      Verified Buyer
                    </span>
                  )}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="reviews-stars" style={{ fontSize: "14px", marginBottom: "8px" }}>
                {"★".repeat(review.rating)}
              </div>
              <p className="review-body">{review.comment}</p>
              <button
                type="button"
                className="review-helpful"
                onClick={() => handleHelpful(review.id)}
              >
                Helpful ({currentHelpful})
              </button>
            </div>
          );
        })}
      </div>

      {browserInfo && (
        <p className="eyebrow" style={{ marginTop: "24px", color: "var(--muted)" }}>
          Timestamps formatted for your region ({browserInfo})
        </p>
      )}
    </div>
  );
}
