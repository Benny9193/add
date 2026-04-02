import { getSignalQuality, getSignalPercentage, type SignalQuality } from '../../types/wireless';

interface SignalStrengthIndicatorProps {
  dBm: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  showValue?: boolean;
  animated?: boolean;
}

const sizeConfig = {
  sm: { barWidth: 3, barGap: 2, heights: [4, 8, 12, 16] },
  md: { barWidth: 4, barGap: 2, heights: [6, 12, 18, 24] },
  lg: { barWidth: 6, barGap: 3, heights: [8, 16, 24, 32] },
};

const qualityColors: Record<SignalQuality, string> = {
  excellent: '#22c55e',
  good: '#84cc16',
  fair: '#eab308',
  weak: '#f97316',
  poor: '#ef4444',
};

const qualityLabels: Record<SignalQuality, string> = {
  excellent: 'Excellent',
  good: 'Good',
  fair: 'Fair',
  weak: 'Weak',
  poor: 'Poor',
};

export function SignalStrengthIndicator({
  dBm,
  size = 'md',
  showLabel = false,
  showValue = false,
  animated = true,
}: SignalStrengthIndicatorProps) {
  const quality = getSignalQuality(dBm);
  const percentage = getSignalPercentage(dBm);
  const color = qualityColors[quality];
  const config = sizeConfig[size];

  // Determine how many bars should be active (1-4)
  const activeBars = Math.max(1, Math.ceil((percentage / 100) * 4));

  const totalWidth = config.barWidth * 4 + config.barGap * 3;
  const maxHeight = config.heights[3];

  return (
    <div className="signal-strength-indicator" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
      <svg
        width={totalWidth}
        height={maxHeight}
        viewBox={`0 0 ${totalWidth} ${maxHeight}`}
        style={{ overflow: 'visible' }}
      >
        {config.heights.map((height, index) => {
          const isActive = index < activeBars;
          const x = index * (config.barWidth + config.barGap);
          const y = maxHeight - height;

          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={config.barWidth}
              height={height}
              rx={1}
              fill={isActive ? color : '#e5e7eb'}
              style={{
                transition: animated ? 'fill 0.3s ease, opacity 0.3s ease' : undefined,
                opacity: isActive ? 1 : 0.4,
              }}
            />
          );
        })}
      </svg>
      {(showLabel || showValue) && (
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: size === 'sm' ? '10px' : size === 'md' ? '12px' : '14px' }}>
          {showLabel && (
            <span style={{ color, fontWeight: 500 }}>{qualityLabels[quality]}</span>
          )}
          {showValue && (
            <span style={{ color: '#6b7280', fontSize: size === 'sm' ? '9px' : '11px' }}>
              {dBm} dBm
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Circular signal indicator variant
interface CircularSignalProps {
  dBm: number;
  size?: number;
  showPercentage?: boolean;
}

export function CircularSignalIndicator({ dBm, size = 60, showPercentage = true }: CircularSignalProps) {
  const quality = getSignalQuality(dBm);
  const percentage = getSignalPercentage(dBm);
  const color = qualityColors[quality];

  const strokeWidth = size * 0.08;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease, stroke 0.3s ease' }}
        />
      </svg>
      {showPercentage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <span style={{ fontSize: size * 0.25, fontWeight: 600, color }}>{Math.round(percentage)}%</span>
          <span style={{ fontSize: size * 0.13, color: '#6b7280' }}>{dBm} dBm</span>
        </div>
      )}
    </div>
  );
}
