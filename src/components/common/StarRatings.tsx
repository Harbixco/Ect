interface StarRatingsProps {
  rating: number;
  color?: string;
}

export default function StarRatings({ rating, color }: StarRatingsProps) {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  const renderStars = () => {
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill={color} stroke={color} />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <Star key="half" fill={"url(#half-gradient)"} stroke={color} />,
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} fill="none" stroke={color} />);
    }

    return stars;
  };

  return <div style={{ display: "flex", gap: "4px" }}>{renderStars()}</div>;
}

interface StarProps {
  fill: string | undefined;
  stroke: string | undefined;
}

function Star({ fill, stroke = "white" }: StarProps) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: fill, stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "none", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path
        d="M3.32441 14.9231L4.56441 9.61013L0.441406 6.03813L5.87241 5.56813L7.99941 0.557129L10.1264 5.56713L15.5564 6.03713L11.4344 9.60913L12.6744 14.9221L7.99941 12.1021L3.32441 14.9231Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}
