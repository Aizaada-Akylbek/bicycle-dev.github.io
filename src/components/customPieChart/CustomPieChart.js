import React from 'react';

const CustomPieChart = ({ value, total, size = 120 }) => {
  const radius = size / 2;
  const angle = (value / total) * 360;

  const largeArcFlag = angle > 180 ? 1 : 0;
  const radiansMid = ((angle / 2) - 90) * (Math.PI / 180); // Середина сектора
  const xMid = radius + (radius / 2) * Math.cos(radiansMid);
  const yMid = radius + (radius / 2) * Math.sin(radiansMid);

  const xArc = radius + radius * Math.cos((angle - 90) * Math.PI / 180);
  const yArc = radius + radius * Math.sin((angle - 90) * Math.PI / 180);

  const percentage = Math.round((value / total) * 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Серый фон */}
      <circle cx={radius} cy={radius} r={radius} fill="#eae8e8" />

      {/* Голубой сектор */}
      <path
        d={`
          M ${radius} ${radius}
          L ${radius} 0
          A ${radius} ${radius} 0 ${largeArcFlag} 1 ${xArc} ${yArc}
          Z
        `}
        fill="#2a91ff"
      />

      {/* Текст внутри голубого блока */}
      <text
        x={xMid}
        y={yMid}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="12"
        fill="white"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CustomPieChart;
