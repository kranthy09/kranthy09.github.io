export default function RichAnalyticsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-full"
      viewBox="0 0 200 200"
    >
      {/* <!-- Document/Report Base --> */}
      <path
        d="M60,40 L140,40 L140,160 L60,160 Z"
        fill="white"
        stroke="#0f766e"
        stroke-width="2"
      />
      <path
        d="M60,40 L75,25 L155,25 L140,40 Z"
        fill="#ccfbf1"
        stroke="#0f766e"
        stroke-width="2"
      />
      <path
        d="M140,40 L155,25 L155,145 L140,160 Z"
        fill="#99f6e4"
        stroke="#0f766e"
        stroke-width="2"
      />

      {/* <!-- Report Elements --> */}
      <rect x="70" y="50" width="60" height="8" rx="2" ry="2" fill="#0d9488" />
      <rect x="70" y="65" width="40" height="5" rx="2" ry="2" fill="#5eead4" />

      {/* <!-- Chart Elements --> */}
      <rect
        x="70"
        y="80"
        width="60"
        height="40"
        rx="2"
        ry="2"
        fill="#f8fafc"
        stroke="#0d9488"
        stroke-width="1"
      />

      {/* <!-- Bar Chart --> */}
      <rect x="75" y="105" width="8" height="10" fill="#14b8a6" />
      <rect x="88" y="95" width="8" height="20" fill="#14b8a6" />
      <rect x="101" y="85" width="8" height="30" fill="#14b8a6" />
      <rect x="114" y="100" width="8" height="15" fill="#14b8a6" />

      {/* <!-- Line across chart --> */}
      <path
        d="M75,90 L122,90"
        stroke="#0f766e"
        stroke-width="1"
        stroke-dasharray="2 1"
      />

      {/* <!-- Pie Chart --> */}
      <g transform="translate(100, 145)">
        <circle
          cx="0"
          cy="0"
          r="15"
          fill="#f8fafc"
          stroke="#0d9488"
          stroke-width="1"
        />
        <path d="M0,0 L15,0 A15,15 0 0,1 4.5,14.5 Z" fill="#14b8a6" />
        <path d="M0,0 L4.5,14.5 A15,15 0 0,1 -13.5,6.5 Z" fill="#0d9488" />
        <path d="M0,0 L-13.5,6.5 A15,15 0 0,1 -7.5,-13 Z" fill="#0891b2" />
        <path d="M0,0 L-7.5,-13 A15,15 0 0,1 15,0 Z" fill="#22d3ee" />
      </g>

      {/* <!-- Data Points with Connecting Lines --> */}
      <circle cx="75" cy="130" r="2" fill="#0d9488" />
      <circle cx="90" cy="120" r="2" fill="#0d9488" />
      <circle cx="105" cy="135" r="2" fill="#0d9488" />
      <circle cx="120" cy="125" r="2" fill="#0d9488" />
      <path
        d="M75,130 L90,120 L105,135 L120,125"
        fill="none"
        stroke="#0d9488"
        stroke-width="1"
      />

      {/* <!-- Magnifying Glass (Analytics) --> */}
      <g transform="translate(140, 70) scale(0.7)">
        <circle
          cx="0"
          cy="0"
          r="15"
          fill="none"
          stroke="#0f766e"
          stroke-width="3"
        />
        <path
          d="M10,10 L20,20"
          stroke="#0f766e"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path d="M-5,-5 L5,5" stroke="#14b8a6" stroke-width="2" />
        <path d="M-5,5 L5,-5" stroke="#14b8a6" stroke-width="2" />
      </g>
    </svg>
  );
}
