export default function Logo({ className = "", size = 32 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle (Dragon Ball) */}
      <circle cx="50" cy="50" r="45" fill="#FF6B00" stroke="#FFA500" strokeWidth="2"/>
      
      {/* Stars Pattern */}
      <path
        d="M35 35 L45 45 M55 35 L65 45 M45 55 L35 65 M65 55 L55 65"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* API Text */}
      <text
        x="50"
        y="54"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="monospace"
      >
        API
      </text>
      
      {/* DB Text */}
      <text
        x="50"
        y="42"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="monospace"
      >
        DB
      </text>
    </svg>
  );
} 