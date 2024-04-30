interface Props {
  color?: string;
}

export const Logo: React.FC<Props> = ({ color = "#730C05" }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 83 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7L21 16"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M4 77L21 70"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M4 23L21 32"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M21 16L21 68"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M4 7L4 77"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path d="M0 0.5L7 4.0549V9H0V0.5Z" fill={color} />
    <path d="M0 77H5V80.875L0 83V77Z" fill={color} />
    <path
      d="M79 6.5L62 15.5"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M79 76.5L62 69.5"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M79 22.5L62 31.5"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path
      d="M62 15.5V67.5"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
    />
    <path d="M79 7V76" stroke={color} stroke-width="8" stroke-linecap="round" />
    <path d="M83 0L76 3.5549V8.5H83V0Z" fill={color} />
    <path d="M83 76.3633H78V80.375L83 82.3633V76.3633Z" fill={color} />
    <line x1="22" y1="16" x2="60" y2="16" stroke={color} stroke-width="8" />
    <line x1="20" y1="70" x2="66" y2="70" stroke={color} stroke-width="8" />
  </svg>
);
