type CriticScoreProps = {
  criticScore: number;
};

const CriticScore = ({ criticScore }: CriticScoreProps) => {
  return (
    <div>
      <span
        className={`text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  ${
          criticScore >= 75
            ? "bg-green-200 dark:bg-green-200" // High score, green background
            : criticScore >= 60
            ? "bg-yellow-100" // Medium score, yellow background
            : "" // Low score, red background
        }`}
      >
        {criticScore}
      </span>
    </div>
  );
};

export default CriticScore;
