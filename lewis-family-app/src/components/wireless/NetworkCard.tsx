import { Wifi, Lock, Unlock, EyeOff, Clock, Radio, Zap } from 'lucide-react';
import type { WirelessNetwork, EncryptionType } from '../../types/wireless';
import { SignalStrengthIndicator } from './SignalStrengthIndicator';
import { formatDistanceToNow } from 'date-fns';

interface NetworkCardProps {
  network: WirelessNetwork;
  isSelected?: boolean;
  onClick?: () => void;
}

const encryptionConfig: Record<EncryptionType, { color: string; label: string; secure: boolean }> = {
  WPA3: { color: '#22c55e', label: 'WPA3', secure: true },
  WPA2: { color: '#22c55e', label: 'WPA2', secure: true },
  WPA: { color: '#eab308', label: 'WPA', secure: true },
  WEP: { color: '#f97316', label: 'WEP', secure: false },
  Open: { color: '#ef4444', label: 'Open', secure: false },
};

const bandColors = {
  '2.4GHz': '#3b82f6',
  '5GHz': '#8b5cf6',
  '6GHz': '#ec4899',
};

export function NetworkCard({ network, isSelected = false, onClick }: NetworkCardProps) {
  const encryptionInfo = encryptionConfig[network.encryption];

  return (
    <div
      className={`network-card ${isSelected ? 'network-card--selected' : ''}`}
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
        border: `2px solid ${isSelected ? '#3b82f6' : '#e5e7eb'}`,
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 4px 12px rgba(59, 130, 246, 0.15)' : '0 1px 3px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#93c5fd';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#e5e7eb';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
      }}
    >
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: encryptionInfo.secure ? '#dcfce7' : '#fef2f2',
            }}
          >
            <Wifi size={22} color={encryptionInfo.secure ? '#22c55e' : '#ef4444'} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 600,
                  color: network.isHidden ? '#9ca3af' : '#1f2937',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontStyle: network.isHidden ? 'italic' : 'normal',
                }}
              >
                {network.ssid}
              </h3>
              {network.isHidden && <EyeOff size={14} color="#9ca3af" />}
            </div>
            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>
              {network.bssid}
            </p>
          </div>
        </div>
        <SignalStrengthIndicator dBm={network.signalStrength} size="md" showValue />
      </div>

      {/* Tags Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
        {/* Encryption Tag */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '6px',
            backgroundColor: `${encryptionInfo.color}15`,
            color: encryptionInfo.color,
          }}
        >
          {encryptionInfo.secure ? <Lock size={12} /> : <Unlock size={12} />}
          {encryptionInfo.label}
        </span>

        {/* Band Tag */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '6px',
            backgroundColor: `${bandColors[network.band]}15`,
            color: bandColors[network.band],
          }}
        >
          <Radio size={12} />
          {network.band}
        </span>

        {/* Channel Tag */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '6px',
            backgroundColor: '#f3f4f6',
            color: '#4b5563',
          }}
        >
          CH {network.channel}
        </span>

        {/* Speed Tag */}
        {network.maxSpeed && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              fontSize: '11px',
              fontWeight: 500,
              borderRadius: '6px',
              backgroundColor: '#fef3c7',
              color: '#d97706',
            }}
          >
            <Zap size={12} />
            {network.maxSpeed} Mbps
          </span>
        )}
      </div>

      {/* Footer Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#9ca3af' }}>
        <span>{network.vendor}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Clock size={12} />
          {formatDistanceToNow(network.lastSeen, { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}

// Compact version for list view
interface NetworkListItemProps {
  network: WirelessNetwork;
  isSelected?: boolean;
  onClick?: () => void;
}

export function NetworkListItem({ network, isSelected = false, onClick }: NetworkListItemProps) {
  const encryptionInfo = encryptionConfig[network.encryption];

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
        borderBottom: '1px solid #f3f4f6',
        cursor: 'pointer',
        transition: 'background-color 0.15s ease',
        gap: '16px',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) e.currentTarget.style.backgroundColor = '#f9fafb';
      }}
      onMouseLeave={(e) => {
        if (!isSelected) e.currentTarget.style.backgroundColor = '#ffffff';
      }}
    >
      <SignalStrengthIndicator dBm={network.signalStrength} size="sm" />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontWeight: 500,
              color: network.isHidden ? '#9ca3af' : '#1f2937',
              fontStyle: network.isHidden ? 'italic' : 'normal',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {network.ssid}
          </span>
          {network.isHidden && <EyeOff size={12} color="#9ca3af" />}
        </div>
      </div>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '3px',
          padding: '2px 6px',
          fontSize: '10px',
          fontWeight: 500,
          borderRadius: '4px',
          backgroundColor: `${encryptionInfo.color}15`,
          color: encryptionInfo.color,
        }}
      >
        {encryptionInfo.secure ? <Lock size={10} /> : <Unlock size={10} />}
        {encryptionInfo.label}
      </span>

      <span
        style={{
          padding: '2px 6px',
          fontSize: '10px',
          fontWeight: 500,
          borderRadius: '4px',
          backgroundColor: `${bandColors[network.band]}15`,
          color: bandColors[network.band],
        }}
      >
        {network.band}
      </span>

      <span style={{ fontSize: '11px', color: '#6b7280', minWidth: '45px', textAlign: 'right' }}>
        CH {network.channel}
      </span>

      <span style={{ fontSize: '11px', color: '#9ca3af', minWidth: '55px', textAlign: 'right' }}>
        {network.signalStrength} dBm
      </span>
    </div>
  );
}
