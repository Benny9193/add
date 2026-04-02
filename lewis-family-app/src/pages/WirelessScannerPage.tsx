import { useState } from 'react';
import {
  Wifi,
  WifiOff,
  RefreshCw,
  Search,
  Filter,
  LayoutGrid,
  List,
  ArrowUpDown,
  X,
  Clock,
  Radio,
  Shield,
  Eye,
  EyeOff,
  Info,
  Activity,
  Gauge,
} from 'lucide-react';
import { useWirelessStore } from '../stores/wirelessStore';
import { NetworkCard, NetworkListItem } from '../components/wireless/NetworkCard';
import { CircularSignalIndicator } from '../components/wireless/SignalStrengthIndicator';
import type { EncryptionType, NetworkBand, SortOption, WirelessNetwork } from '../types/wireless';
import { formatDistanceToNow, format } from 'date-fns';

type ViewMode = 'grid' | 'list';

export function WirelessScannerPage() {
  const {
    networks,
    isScanning,
    lastScanTime,
    scanProgress,
    selectedNetwork,
    filter,
    sortBy,
    sortOrder,
    startScan,
    stopScan,
    setSelectedNetwork,
    setFilter,
    setSortBy,
    toggleSortOrder,
    getFilteredNetworks,
  } = useWirelessStore();

  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNetworks = getFilteredNetworks();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilter({ searchQuery: query });
  };

  const toggleEncryptionFilter = (encryption: EncryptionType) => {
    const current = filter.encryptionTypes;
    const updated = current.includes(encryption)
      ? current.filter((e) => e !== encryption)
      : [...current, encryption];
    setFilter({ encryptionTypes: updated });
  };

  const toggleBandFilter = (band: NetworkBand) => {
    const current = filter.bands;
    const updated = current.includes(band) ? current.filter((b) => b !== band) : [...current, band];
    setFilter({ bands: updated });
  };

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'signalStrength', label: 'Signal Strength' },
    { value: 'ssid', label: 'Network Name' },
    { value: 'channel', label: 'Channel' },
    { value: 'encryption', label: 'Security' },
    { value: 'lastSeen', label: 'Last Seen' },
  ];

  return (
    <div className="wireless-scanner-page" style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Wifi size={28} color="white" />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 700, color: '#1f2937' }}>
                Wireless Scanner
              </h1>
              <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: '14px' }}>
                Discover and analyze nearby wireless networks
              </p>
            </div>
          </div>

          {/* Scan Button */}
          <button
            onClick={isScanning ? stopScan : startScan}
            disabled={false}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: 600,
              color: 'white',
              backgroundColor: isScanning ? '#ef4444' : '#3b82f6',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isScanning ? '0 4px 12px rgba(239, 68, 68, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.3)',
            }}
          >
            {isScanning ? (
              <>
                <X size={18} />
                Stop Scan
              </>
            ) : (
              <>
                <RefreshCw size={18} className={isScanning ? 'spin' : ''} />
                Start Scan
              </>
            )}
          </button>
        </div>

        {/* Scan Progress */}
        {isScanning && (
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '13px', color: '#6b7280' }}>Scanning for networks...</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#3b82f6' }}>
                {Math.round(scanProgress)}%
              </span>
            </div>
            <div
              style={{
                height: '6px',
                backgroundColor: '#e5e7eb',
                borderRadius: '3px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${scanProgress}%`,
                  height: '100%',
                  backgroundColor: '#3b82f6',
                  borderRadius: '3px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats Bar */}
      {networks.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <StatCard
            icon={<Wifi size={20} />}
            label="Networks Found"
            value={networks.length.toString()}
            color="#3b82f6"
          />
          <StatCard
            icon={<Shield size={20} />}
            label="Secured"
            value={networks.filter((n) => n.encryption !== 'Open').length.toString()}
            color="#22c55e"
          />
          <StatCard
            icon={<Radio size={20} />}
            label="5GHz Networks"
            value={networks.filter((n) => n.band === '5GHz').length.toString()}
            color="#8b5cf6"
          />
          <StatCard
            icon={<Clock size={20} />}
            label="Last Scan"
            value={lastScanTime ? formatDistanceToNow(lastScanTime, { addSuffix: true }) : 'Never'}
            color="#f59e0b"
          />
        </div>
      )}

      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
        }}
      >
        {/* Search */}
        <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
          <Search
            size={18}
            color="#9ca3af"
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search networks, BSSID, vendor..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px 10px 40px',
              fontSize: '14px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              outline: 'none',
            }}
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: 500,
            color: showFilters ? '#3b82f6' : '#4b5563',
            backgroundColor: showFilters ? '#eff6ff' : 'white',
            border: `1px solid ${showFilters ? '#3b82f6' : '#e5e7eb'}`,
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          <Filter size={16} />
          Filters
          {(filter.encryptionTypes.length > 0 || filter.bands.length > 0) && (
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                color: 'white',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {filter.encryptionTypes.length + filter.bands.length}
            </span>
          )}
        </button>

        {/* Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            style={{
              padding: '10px 12px',
              fontSize: '14px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            onClick={toggleSortOrder}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
          >
            <ArrowUpDown size={16} style={{ transform: sortOrder === 'asc' ? 'rotate(180deg)' : undefined }} />
          </button>
        </div>

        {/* View Mode */}
        <div style={{ display: 'flex', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
          <button
            onClick={() => setViewMode('grid')}
            style={{
              padding: '10px 14px',
              backgroundColor: viewMode === 'grid' ? '#3b82f6' : 'white',
              color: viewMode === 'grid' ? 'white' : '#4b5563',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            style={{
              padding: '10px 14px',
              backgroundColor: viewMode === 'list' ? '#3b82f6' : 'white',
              color: viewMode === 'list' ? 'white' : '#4b5563',
              border: 'none',
              borderLeft: '1px solid #e5e7eb',
              cursor: 'pointer',
            }}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div
          style={{
            padding: '20px',
            marginBottom: '20px',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {/* Security Filter */}
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Security</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {(['WPA3', 'WPA2', 'WPA', 'WEP', 'Open'] as EncryptionType[]).map((enc) => (
                  <FilterChip
                    key={enc}
                    label={enc}
                    isActive={filter.encryptionTypes.includes(enc)}
                    onClick={() => toggleEncryptionFilter(enc)}
                  />
                ))}
              </div>
            </div>

            {/* Band Filter */}
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Frequency Band</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {(['2.4GHz', '5GHz', '6GHz'] as NetworkBand[]).map((band) => (
                  <FilterChip
                    key={band}
                    label={band}
                    isActive={filter.bands.includes(band)}
                    onClick={() => toggleBandFilter(band)}
                  />
                ))}
              </div>
            </div>

            {/* Signal Strength */}
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>
                Min Signal: {filter.minSignalStrength} dBm
              </h4>
              <input
                type="range"
                min="-100"
                max="-30"
                value={filter.minSignalStrength}
                onChange={(e) => setFilter({ minSignalStrength: Number(e.target.value) })}
                style={{ width: '100%' }}
              />
            </div>

            {/* Hidden Networks */}
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Options</h4>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={filter.showHidden}
                  onChange={(e) => setFilter({ showHidden: e.target.checked })}
                />
                <span style={{ fontSize: '14px', color: '#4b5563' }}>Show hidden networks</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Network List */}
        <div style={{ flex: 1 }}>
          {filteredNetworks.length === 0 ? (
            <div
              style={{
                padding: '60px 24px',
                textAlign: 'center',
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                border: '1px dashed #d1d5db',
              }}
            >
              {networks.length === 0 ? (
                <>
                  <WifiOff size={48} color="#9ca3af" style={{ marginBottom: '16px' }} />
                  <h3 style={{ margin: '0 0 8px', color: '#4b5563' }}>No Networks Found</h3>
                  <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>
                    Click "Start Scan" to discover nearby wireless networks
                  </p>
                </>
              ) : (
                <>
                  <Filter size={48} color="#9ca3af" style={{ marginBottom: '16px' }} />
                  <h3 style={{ margin: '0 0 8px', color: '#4b5563' }}>No Matching Networks</h3>
                  <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>
                    Try adjusting your filters to see more results
                  </p>
                </>
              )}
            </div>
          ) : viewMode === 'grid' ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '16px',
              }}
            >
              {filteredNetworks.map((network) => (
                <NetworkCard
                  key={network.id}
                  network={network}
                  isSelected={selectedNetwork?.id === network.id}
                  onClick={() => setSelectedNetwork(network)}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
              }}
            >
              {filteredNetworks.map((network) => (
                <NetworkListItem
                  key={network.id}
                  network={network}
                  isSelected={selectedNetwork?.id === network.id}
                  onClick={() => setSelectedNetwork(network)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Network Details Panel */}
        {selectedNetwork && (
          <NetworkDetailsPanel network={selectedNetwork} onClose={() => setSelectedNetwork(null)} />
        )}
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          backgroundColor: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
        }}
      >
        {icon}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>{label}</p>
        <p style={{ margin: '2px 0 0', fontSize: '20px', fontWeight: 600, color: '#1f2937' }}>{value}</p>
      </div>
    </div>
  );
}

// Filter Chip Component
function FilterChip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 12px',
        fontSize: '13px',
        fontWeight: 500,
        color: isActive ? 'white' : '#4b5563',
        backgroundColor: isActive ? '#3b82f6' : 'white',
        border: `1px solid ${isActive ? '#3b82f6' : '#d1d5db'}`,
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      {label}
    </button>
  );
}

// Network Details Panel
function NetworkDetailsPanel({ network, onClose }: { network: WirelessNetwork; onClose: () => void }) {
  return (
    <div
      style={{
        width: '360px',
        flexShrink: 0,
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        padding: '24px',
        height: 'fit-content',
        position: 'sticky',
        top: '24px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={18} color="#3b82f6" />
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#1f2937' }}>Network Details</h3>
        </div>
        <button
          onClick={onClose}
          style={{
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          <X size={14} />
        </button>
      </div>

      {/* Network Name */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2
          style={{
            margin: '0 0 4px',
            fontSize: '20px',
            fontWeight: 600,
            color: network.isHidden ? '#9ca3af' : '#1f2937',
            fontStyle: network.isHidden ? 'italic' : 'normal',
          }}
        >
          {network.ssid}
        </h2>
        <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', fontFamily: 'monospace' }}>{network.bssid}</p>
      </div>

      {/* Signal Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <CircularSignalIndicator dBm={network.signalStrength} size={100} />
      </div>

      {/* Details Grid */}
      <div style={{ display: 'grid', gap: '16px' }}>
        <DetailRow icon={<Shield size={16} />} label="Security" value={network.encryption} />
        <DetailRow icon={<Radio size={16} />} label="Band" value={network.band} />
        <DetailRow icon={<Activity size={16} />} label="Channel" value={network.channel.toString()} />
        <DetailRow icon={<Gauge size={16} />} label="Frequency" value={`${network.frequency} MHz`} />
        {network.maxSpeed && (
          <DetailRow icon={<Gauge size={16} />} label="Max Speed" value={`${network.maxSpeed} Mbps`} />
        )}
        {network.vendor && <DetailRow icon={<Info size={16} />} label="Vendor" value={network.vendor} />}
        <DetailRow
          icon={<Clock size={16} />}
          label="First Seen"
          value={format(network.firstSeen, 'HH:mm:ss')}
        />
        <DetailRow
          icon={<Clock size={16} />}
          label="Last Seen"
          value={format(network.lastSeen, 'HH:mm:ss')}
        />
        <DetailRow
          icon={network.isHidden ? <EyeOff size={16} /> : <Eye size={16} />}
          label="Visibility"
          value={network.isHidden ? 'Hidden' : 'Visible'}
        />
      </div>
    </div>
  );
}

// Detail Row Component
function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280' }}>
        {icon}
        <span style={{ fontSize: '13px' }}>{label}</span>
      </div>
      <span style={{ fontSize: '13px', fontWeight: 500, color: '#1f2937' }}>{value}</span>
    </div>
  );
}
