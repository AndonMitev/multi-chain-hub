import { ChainConfigType } from '@/lib/types/chains';

export const BNBTestnet: ChainConfigType = {
  name: 'BNB Smart Chain Testnet',
  chain: 'BSC',
  icon: '/chains/bsc.png',
  isMainnet: false,
  rpc: ['https://bsc-testnet-rpc.publicnode.com'],
  faucets: ['https://www.bnbchain.org/en/testnet-faucet'],
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  infoURL: 'https://www.bnbchain.org/en',
  shortName: 'bnb',
  chainId: 97,
  explorers: [
    {
      name: 'bscscan-testnet',
      url: 'https://testnet.bscscan.com',
      icon: '/explorers/bscscan.svg'
    }
  ]
};

export const Mumbai: ChainConfigType = {
  name: 'Polygon Mumbai',
  chain: 'Polygon',
  icon: '/chains/polygon.png',
  isMainnet: false,
  rpc: [
    'https://polygon-testnet.public.blastapi.io',
    'https://polygon-testnet.public.blastapi.io'
  ],
  faucets: ['https://faucet.polygon.technology/'],
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  },
  infoURL: 'https://polygon.technology',
  shortName: 'matic',
  chainId: 80001,
  explorers: [
    {
      name: 'polygonscan',
      url: 'https://mumbai.polygonscan.com/',
      icon: 'https://polygonscan.com/assets/poly/images/svg/logos/logo-light.svg?v=24.5.4.1'
    }
  ]
};

export const Sepolia: ChainConfigType = {
  name: 'Ethereum Testnet Sepolia',
  chain: 'ETH',
  icon: '/chains/ethereum.png',
  isMainnet: false,
  rpc: [
    'https://sepolia.drpc.org',
    'https://ethereum-sepolia-rpc.publicnode.com'
  ],
  faucets: ['https://sepolia-faucet.pk910.de/'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://ethereum.org',
  shortName: 'eth',
  chainId: 11155111,
  ens: {
    registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
  },
  explorers: [
    {
      name: 'etherscan',
      url: 'https://sepolia.etherscan.io/',
      icon: '/explorers/etherscan.jpeg'
    }
  ]
};

export const ZkSyncSepolia: ChainConfigType = {
  name: 'zkSync Sepolia',
  chain: 'ETH',
  icon: '/chains/zksync.png',
  isMainnet: false,
  rpc: ['https://sepolia.era.zksync.dev', 'https://zksync-sepolia.drpc.org'],
  faucets: ['https://faucet.quicknode.com/zksync/sepolia'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://zksync.io/',
  shortName: 'zksync',
  chainId: 300,
  explorers: [
    {
      name: 'zkSync Block Explorer',
      url: 'https://sepolia.explorer.zksync.io',
      icon: '/chains/zksync.png'
    }
  ],
  bridgeURL: 'https://portal.zksync.io/bridge/?network=sepolia'
};

export default {
  [BNBTestnet.chainId]: BNBTestnet,
  [Mumbai.chainId]: Mumbai,
  [Sepolia.chainId]: Sepolia,
  [ZkSyncSepolia.chainId]: ZkSyncSepolia
};
