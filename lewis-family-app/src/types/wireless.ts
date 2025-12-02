// Wireless Network Types for Scanner Application

export type EncryptionType = 'WPA3' | 'WPA2' | 'WPA' | 'WEP' | 'Open';
export type NetworkBand = '2.4GHz' | '5GHz' | '6GHz';
export type NetworkStatus = 'available' | 'connected' | 'secured' | 'hidden';

export interface WirelessNetwork {
  id: string;
  ssid: string;
  bssid: string;
  signalStrength: number; // -100 to 0 dBm
  encryption: EncryptionType;
  channel: number;
  band: NetworkBand;
  frequency: number; // MHz
  status: NetworkStatus;
  vendor?: string;
  lastSeen: Date;
  firstSeen: Date;
  isHidden: boolean;
  maxSpeed?: number; // Mbps
}

export interface ScanResult {
  networks: WirelessNetwork[];
  scanDuration: number; // ms
  timestamp: Date;
  totalNetworksFound: number;
}

export interface ScannerState {
  networks: WirelessNetwork[];
  isScanning: boolean;
  lastScanTime: Date | null;
  scanProgress: number;
  selectedNetwork: WirelessNetwork | null;
  filter: NetworkFilter;
  sortBy: SortOption;
  sortOrder: 'asc' | 'desc';
  scanHistory: ScanResult[];
}

export interface NetworkFilter {
  encryptionTypes: EncryptionType[];
  bands: NetworkBand[];
  minSignalStrength: number;
  showHidden: boolean;
  searchQuery: string;
}

export type SortOption = 'signalStrength' | 'ssid' | 'channel' | 'encryption' | 'lastSeen';

export interface ScannerActions {
  startScan: () => Promise<void>;
  stopScan: () => void;
  setSelectedNetwork: (network: WirelessNetwork | null) => void;
  setFilter: (filter: Partial<NetworkFilter>) => void;
  setSortBy: (sortBy: SortOption) => void;
  toggleSortOrder: () => void;
  clearHistory: () => void;
  getFilteredNetworks: () => WirelessNetwork[];
}

// Signal strength quality levels
export type SignalQuality = 'excellent' | 'good' | 'fair' | 'weak' | 'poor';

export const getSignalQuality = (dBm: number): SignalQuality => {
  if (dBm >= -50) return 'excellent';
  if (dBm >= -60) return 'good';
  if (dBm >= -70) return 'fair';
  if (dBm >= -80) return 'weak';
  return 'poor';
};

export const getSignalPercentage = (dBm: number): number => {
  // Convert dBm to percentage (roughly -100 to -30 dBm range)
  const minDbm = -100;
  const maxDbm = -30;
  const percentage = ((dBm - minDbm) / (maxDbm - minDbm)) * 100;
  return Math.max(0, Math.min(100, percentage));
};

// Common router vendors for realistic simulation
export const ROUTER_VENDORS = [
  'Cisco Systems',
  'Netgear',
  'TP-Link',
  'ASUS',
  'Linksys',
  'D-Link',
  'Ubiquiti',
  'Aruba Networks',
  'Ruckus Wireless',
  'Meraki',
  'Belkin',
  'Buffalo',
  'Huawei',
  'ZyXEL',
  'Tenda',
];

// Generate realistic BSSID
export const generateBSSID = (): string => {
  const hexChars = '0123456789ABCDEF';
  const segments: string[] = [];
  for (let i = 0; i < 6; i++) {
    let segment = '';
    for (let j = 0; j < 2; j++) {
      segment += hexChars[Math.floor(Math.random() * 16)];
    }
    segments.push(segment);
  }
  return segments.join(':');
};

// Channel to frequency mapping
export const getFrequencyForChannel = (channel: number, band: NetworkBand): number => {
  if (band === '2.4GHz') {
    return 2412 + (channel - 1) * 5;
  } else if (band === '5GHz') {
    if (channel <= 48) return 5180 + (channel - 36) * 5;
    if (channel <= 64) return 5260 + (channel - 52) * 5;
    if (channel <= 144) return 5500 + (channel - 100) * 5;
    return 5745 + (channel - 149) * 5;
  } else {
    // 6GHz
    return 5955 + (channel - 1) * 5;
  }
};
