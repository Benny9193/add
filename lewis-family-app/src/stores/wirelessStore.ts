import { create } from 'zustand';
import type {
  WirelessNetwork,
  ScannerState,
  ScannerActions,
  NetworkFilter,
  EncryptionType,
  NetworkBand,
  ScanResult,
} from '../types/wireless';
import {
  generateBSSID,
  getFrequencyForChannel,
  ROUTER_VENDORS,
} from '../types/wireless';

// Realistic network name patterns
const NETWORK_NAMES = [
  'HOME-WIFI',
  'NETGEAR',
  'Linksys',
  'ATT-WIFI',
  'XFINITY',
  'MySpectrum',
  'Verizon_FIOS',
  'CenturyLink',
  'Guest_Network',
  'TP-Link',
  'ASUS_Router',
  'Dlink-WiFi',
  'Office-5G',
  'SmartHome',
  'IoT_Network',
  'FamilyWiFi',
  'Gaming_Network',
  'WorkFromHome',
  'Neighbors_Dont_Steal',
  'FBI_Surveillance_Van',
  'Pretty_Fly_For_A_WiFi',
  'The_LAN_Before_Time',
  'Bill_Wi_The_Science_Fi',
  'Router_I_Hardly_Know_Her',
  'Wu_Tang_LAN',
  'Hide_Yo_Kids_Hide_Yo_WiFi',
  'Silence_of_the_LANs',
  'Lord_of_the_Pings',
  'The_Promised_LAN',
  'LAN_Solo',
  'Winternet_Is_Coming',
  'Series_of_Tubes',
  'Mom_Click_Here',
  'NotTheNSA',
  'Drop_It_Like_Its_Hotspot',
];

// Generate a random network
const generateNetwork = (index: number): WirelessNetwork => {
  const is5GHz = Math.random() > 0.4;
  const is6GHz = !is5GHz && Math.random() > 0.9;
  const band: NetworkBand = is6GHz ? '6GHz' : is5GHz ? '5GHz' : '2.4GHz';

  let channel: number;
  if (band === '2.4GHz') {
    channel = Math.floor(Math.random() * 11) + 1;
  } else if (band === '5GHz') {
    const channels5GHz = [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165];
    channel = channels5GHz[Math.floor(Math.random() * channels5GHz.length)];
  } else {
    channel = Math.floor(Math.random() * 59) * 4 + 1;
  }

  const encryptionTypes: EncryptionType[] = ['WPA3', 'WPA2', 'WPA2', 'WPA2', 'WPA', 'WEP', 'Open'];
  const encryption = encryptionTypes[Math.floor(Math.random() * encryptionTypes.length)];

  const isHidden = Math.random() > 0.92;
  const baseSSID = NETWORK_NAMES[Math.floor(Math.random() * NETWORK_NAMES.length)];
  const ssid = isHidden ? '[Hidden Network]' :
    Math.random() > 0.7 ? `${baseSSID}_${Math.floor(Math.random() * 1000)}` : baseSSID;

  // Signal strength varies by distance simulation
  const baseSignal = -30 - Math.floor(Math.random() * 70);
  const signalVariation = Math.floor(Math.random() * 5) - 2;
  const signalStrength = Math.max(-100, Math.min(-30, baseSignal + signalVariation));

  const speeds = [54, 150, 300, 450, 600, 867, 1200, 1733, 2400, 4800, 9600];
  const maxSpeed = speeds[Math.floor(Math.random() * speeds.length)];

  const now = new Date();
  const firstSeen = new Date(now.getTime() - Math.random() * 3600000);

  return {
    id: `network-${index}-${Date.now()}`,
    ssid,
    bssid: generateBSSID(),
    signalStrength,
    encryption,
    channel,
    band,
    frequency: getFrequencyForChannel(channel, band),
    status: encryption === 'Open' ? 'available' : 'secured',
    vendor: ROUTER_VENDORS[Math.floor(Math.random() * ROUTER_VENDORS.length)],
    lastSeen: now,
    firstSeen,
    isHidden,
    maxSpeed,
  };
};

// Simulate network scanning
const simulateScan = async (
  onProgress: (progress: number) => void,
  onNetworkFound: (network: WirelessNetwork) => void,
  shouldStop: () => boolean
): Promise<WirelessNetwork[]> => {
  const networks: WirelessNetwork[] = [];
  const totalNetworks = Math.floor(Math.random() * 15) + 8; // 8-22 networks

  for (let i = 0; i < totalNetworks; i++) {
    if (shouldStop()) break;

    // Simulate discovery delay
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));

    const network = generateNetwork(i);
    networks.push(network);
    onNetworkFound(network);
    onProgress(((i + 1) / totalNetworks) * 100);
  }

  return networks;
};

const defaultFilter: NetworkFilter = {
  encryptionTypes: [],
  bands: [],
  minSignalStrength: -100,
  showHidden: true,
  searchQuery: '',
};

interface WirelessStore extends ScannerState, ScannerActions {}

let stopScanFlag = false;

export const useWirelessStore = create<WirelessStore>((set, get) => ({
  // Initial State
  networks: [],
  isScanning: false,
  lastScanTime: null,
  scanProgress: 0,
  selectedNetwork: null,
  filter: defaultFilter,
  sortBy: 'signalStrength',
  sortOrder: 'desc',
  scanHistory: [],

  // Actions
  startScan: async () => {
    stopScanFlag = false;
    set({ isScanning: true, scanProgress: 0, networks: [] });

    const startTime = Date.now();

    const networks = await simulateScan(
      (progress) => set({ scanProgress: progress }),
      (network) => set((state) => ({ networks: [...state.networks, network] })),
      () => stopScanFlag
    );

    const scanDuration = Date.now() - startTime;
    const scanResult: ScanResult = {
      networks,
      scanDuration,
      timestamp: new Date(),
      totalNetworksFound: networks.length,
    };

    set((state) => ({
      isScanning: false,
      scanProgress: 100,
      lastScanTime: new Date(),
      scanHistory: [scanResult, ...state.scanHistory].slice(0, 10),
    }));
  },

  stopScan: () => {
    stopScanFlag = true;
    set({ isScanning: false });
  },

  setSelectedNetwork: (network) => {
    set({ selectedNetwork: network });
  },

  setFilter: (filterUpdate) => {
    set((state) => ({
      filter: { ...state.filter, ...filterUpdate },
    }));
  },

  setSortBy: (sortBy) => {
    set({ sortBy });
  },

  toggleSortOrder: () => {
    set((state) => ({
      sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  },

  clearHistory: () => {
    set({ scanHistory: [] });
  },

  getFilteredNetworks: () => {
    const { networks, filter, sortBy, sortOrder } = get();

    let filtered = networks.filter((network) => {
      // Filter by encryption
      if (filter.encryptionTypes.length > 0 && !filter.encryptionTypes.includes(network.encryption)) {
        return false;
      }

      // Filter by band
      if (filter.bands.length > 0 && !filter.bands.includes(network.band)) {
        return false;
      }

      // Filter by signal strength
      if (network.signalStrength < filter.minSignalStrength) {
        return false;
      }

      // Filter hidden networks
      if (!filter.showHidden && network.isHidden) {
        return false;
      }

      // Filter by search query
      if (filter.searchQuery) {
        const query = filter.searchQuery.toLowerCase();
        return (
          network.ssid.toLowerCase().includes(query) ||
          network.bssid.toLowerCase().includes(query) ||
          (network.vendor && network.vendor.toLowerCase().includes(query))
        );
      }

      return true;
    });

    // Sort networks
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'signalStrength':
          comparison = a.signalStrength - b.signalStrength;
          break;
        case 'ssid':
          comparison = a.ssid.localeCompare(b.ssid);
          break;
        case 'channel':
          comparison = a.channel - b.channel;
          break;
        case 'encryption':
          comparison = a.encryption.localeCompare(b.encryption);
          break;
        case 'lastSeen':
          comparison = a.lastSeen.getTime() - b.lastSeen.getTime();
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  },
}));
