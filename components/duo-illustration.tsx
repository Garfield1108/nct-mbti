import type { ResultProfile } from "@/lib/types";

interface DuoIllustrationProps {
  result: ResultProfile;
  compact?: boolean;
  label?: string;
}

interface CharacterProps {
  x: number;
  y: number;
  scale: number;
  tilt: number;
  direction: "left" | "right";
  outfit: string;
  outfitAlt: string;
  hair: string;
  line: string;
  skin: string;
}

const poseOffsets = {
  "side-by-side": {
    left: { x: 188, y: 310, scale: 1, tilt: -3, direction: "right" as const },
    right: { x: 452, y: 308, scale: 1, tilt: 3, direction: "left" as const },
  },
  "lean-in": {
    left: { x: 210, y: 316, scale: 1, tilt: -8, direction: "right" as const },
    right: { x: 430, y: 308, scale: 1.02, tilt: 5, direction: "left" as const },
  },
  mirror: {
    left: { x: 210, y: 312, scale: 1, tilt: -6, direction: "right" as const },
    right: { x: 430, y: 312, scale: 1, tilt: 6, direction: "left" as const },
  },
  orbit: {
    left: { x: 206, y: 320, scale: 0.98, tilt: -10, direction: "right" as const },
    right: { x: 440, y: 302, scale: 1.02, tilt: 10, direction: "left" as const },
  },
};

function CharacterFigure({
  x,
  y,
  scale,
  tilt,
  direction,
  outfit,
  outfitAlt,
  hair,
  line,
  skin,
}: CharacterProps) {
  const armDirection = direction === "right" ? 1 : -1;

  return (
    <g transform={`translate(${x} ${y}) rotate(${tilt}) scale(${scale})`}>
      <ellipse cx="0" cy="146" rx="88" ry="18" fill="#14181712" />
      <g transform="translate(0 -28)">
        <path
          d="M -56 122 Q -60 70 0 62 Q 58 72 56 126 L 48 222 Q 0 256 -48 222 Z"
          fill={outfit}
          stroke={line}
          strokeWidth="2"
        />
        <path
          d={`M ${28 * armDirection} 120 Q ${72 * armDirection} 128 ${82 * armDirection} 170`}
          fill="none"
          stroke={line}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d={`M ${-20 * armDirection} 132 Q ${-44 * armDirection} 162 ${-50 * armDirection} 202`}
          fill="none"
          stroke={line}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle cx={82 * armDirection} cy="170" r="10" fill={skin} stroke={line} strokeWidth="2" />
        <circle cx={-50 * armDirection} cy="202" r="10" fill={skin} stroke={line} strokeWidth="2" />
        <path
          d="M -20 222 Q -24 274 -10 308"
          fill="none"
          stroke={line}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 20 222 Q 28 274 42 304"
          fill="none"
          stroke={line}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <ellipse cx="-8" cy="312" rx="24" ry="9" fill={outfitAlt} stroke={line} strokeWidth="2" />
        <ellipse cx="46" cy="308" rx="24" ry="9" fill={outfitAlt} stroke={line} strokeWidth="2" />
        <rect x="-18" y="36" width="36" height="22" rx="10" fill={skin} stroke={line} strokeWidth="2" />
        <circle cx="0" cy="0" r="48" fill={skin} stroke={line} strokeWidth="2" />
        <path
          d="M -47 6 Q -50 -54 0 -56 Q 52 -54 48 8 L 32 2 Q 0 -8 -32 2 Z"
          fill={hair}
        />
        <path d="M -42 8 Q -18 -10 0 -8 Q 18 -10 42 8 L 42 20 Q 0 0 -42 20 Z" fill={hair} />
        <circle cx="-16" cy="8" r="3.5" fill={line} />
        <circle cx="16" cy="8" r="3.5" fill={line} />
        <path
          d="M -14 28 Q 0 36 14 28"
          fill="none"
          stroke={line}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}

function AccessoryLayer({
  accessory,
  accent,
  accentAlt,
  line,
}: {
  accessory: ResultProfile["illustration"]["accessory"];
  accent: string;
  accentAlt: string;
  line: string;
}) {
  if (accessory === "halo") {
    return (
      <g>
        <ellipse cx="320" cy="66" rx="86" ry="24" fill="none" stroke={accent} strokeWidth="4" />
        <ellipse cx="320" cy="66" rx="64" ry="14" fill="white" fillOpacity="0.72" />
      </g>
    );
  }

  if (accessory === "ribbon") {
    return (
      <path
        d="M 160 212 Q 238 166 324 206 Q 414 244 492 196"
        fill="none"
        stroke={accentAlt}
        strokeWidth="14"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
    );
  }

  if (accessory === "bookmark") {
    return (
      <g>
        <rect x="120" y="120" width="42" height="74" rx="10" fill="white" stroke={line} strokeWidth="2" />
        <path d="M 128 120 H 154 V 174 L 141 162 L 128 174 Z" fill={accentAlt} />
        <rect x="486" y="146" width="48" height="64" rx="12" fill="white" stroke={line} strokeWidth="2" />
        <path d="M 496 146 H 524 V 194 L 510 182 L 496 194 Z" fill={accent} />
      </g>
    );
  }

  if (accessory === "leaf") {
    return (
      <g stroke={line} strokeWidth="2" fill="none">
        <path d="M 160 360 Q 186 330 216 352 Q 186 382 160 360 Z" fill={accentAlt} fillOpacity="0.2" />
        <path d="M 456 362 Q 484 334 514 352 Q 486 380 456 362 Z" fill={accent} fillOpacity="0.2" />
      </g>
    );
  }

  return (
    <g fill={accentAlt} stroke={line} strokeWidth="2">
      <path d="M 142 112 L 150 128 L 166 136 L 150 144 L 142 160 L 134 144 L 118 136 L 134 128 Z" />
      <path d="M 500 96 L 506 110 L 520 116 L 506 122 L 500 136 L 494 122 L 480 116 L 494 110 Z" />
    </g>
  );
}

export function DuoIllustration({
  result,
  compact = false,
  label,
}: DuoIllustrationProps) {
  const { accent, accentAlt, accentSoft, line } = result.palette;
  const pose = poseOffsets[result.illustration.pose];
  const skin = "#fff5ee";
  const leftHair = "#3a3a3a";
  const rightHair = "#534f65";

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border bg-white ${compact ? "aspect-square" : "aspect-[4/3]"}`}
      style={{
        borderColor: line,
        background: `linear-gradient(160deg, ${accentSoft}, white 54%, ${accentAlt}1c)`,
      }}
    >
      <svg
        viewBox="0 0 640 500"
        className="h-full w-full"
        role="img"
        aria-label={label ?? `${result.pair} 原创 CP 人格插画`}
      >
        <defs>
          <linearGradient id={`bg-${result.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentSoft} />
            <stop offset="62%" stopColor="#ffffff" />
            <stop offset="100%" stopColor={`${accentAlt}22`} />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="640" height="500" fill={`url(#bg-${result.id})`} />
        <circle cx="176" cy="94" r="72" fill={`${accent}22`} />
        <circle cx="474" cy="82" r="64" fill={`${accentAlt}1a`} />
        <AccessoryLayer
          accessory={result.illustration.accessory}
          accent={accent}
          accentAlt={accentAlt}
          line={line}
        />
        <path
          d="M 114 388 Q 320 354 526 388"
          fill="none"
          stroke={line}
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <CharacterFigure
          {...pose.left}
          outfit={accent}
          outfitAlt="#f6faf7"
          hair={leftHair}
          line={line}
          skin={skin}
        />
        <CharacterFigure
          {...pose.right}
          outfit={accentAlt}
          outfitAlt="#fbf7ff"
          hair={rightHair}
          line={line}
          skin={skin}
        />
      </svg>
    </div>
  );
}
