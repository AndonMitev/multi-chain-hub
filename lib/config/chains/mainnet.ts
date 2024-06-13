import { ChainConfigType } from '../../types/chains';

/**
 * TODO: Tesnet's
 */

/**
 * TODO:
 * 1. Explorer API_KEYS - Is there universal approach? Single Key multiple Locks? If not for all for half of them still works
 */

/**
 * TODO: Final check on all chains!!!
 */

export const Arbitrum: ChainConfigType = {
  name: 'Arbitrum One',
  chain: 'ETH',
  icon: '/chains/arbitrum.png',
  isMainnet: true,
  rpc: [
    'https://arbitrum.llamarpc.com',
    'https://public.stackup.sh/api/v1/node/arbitrum-one',
    'https://rpc.ankr.com/arbitrum'
  ],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://arbitrum.io',
  shortName: 'arb1',
  chainId: 42161,
  explorers: [
    {
      name: 'Arbiscan',
      url: 'https://arbiscan.io',
      icon: '/explorers/arbiscan.svg'
    },
    {
      name: 'dexguru',
      url: 'https://arbitrum.dex.guru',
      icon: '/explorers/dexguru.svg'
    }
  ],
  bridgeURL:
    'https://bridge.arbitrum.io/?destinationChain=arbitrum-one&sourceChain=ethereum'
};

export const Aurora: ChainConfigType = {
  name: 'Aurora Mainnet',
  chain: 'NEAR',
  icon: '/chains/aurora.png',
  isMainnet: true,
  rpc: [
    'https://mainnet.aurora.dev',
    'https://api.tatum.io/v3/blockchain/node/aurora-mainnet',
    'https://aurora.drpc.org'
  ],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://aurora.dev',
  shortName: 'aurora',
  chainId: 1313161554,
  explorers: [
    {
      name: 'aurorascan.dev',
      url: 'https://explorer.aurora.dev/',
      icon: '/explorers/aurora.png'
    }
  ],
  bridgeURL: 'https://rainbowbridge.app/transfer'
};

export const Avalanche: ChainConfigType = {
  name: 'Avalanche C-Chain',
  chain: 'AVAX',
  icon: '/chains/avax.png',
  isMainnet: true,
  rpc: [
    'https://1rpc.io/avax/c',
    'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
    'https://api.tatum.io/v3/blockchain/node/avax-mainnet'
  ],
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  infoURL: 'https://www.avax.network',
  shortName: 'avax',
  chainId: 43114,
  explorers: [
    {
      name: 'snowtrace',
      url: 'https://snowtrace.io',
      icon: '/explorers/snowtrace.png'
    }
  ]
};

export const Base: ChainConfigType = {
  name: 'Base',
  chain: 'ETH',
  icon: '/chains/base.png',
  isMainnet: true,
  rpc: [
    'https://base-pokt.nodies.app',
    'https://base.llamarpc.com',
    'https://gateway.tenderly.co/public/base',
    'https://base.drpc.org'
  ],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://www.base.org',
  shortName: 'base',
  chainId: 8435,
  explorers: [
    {
      name: 'basescan',
      url: 'https://basescan.org',
      icon: '/chains/base.png'
    },
    {
      name: 'basescout',
      url: 'https://base.blockscout.com',
      icon: '/chains/base.png'
    },
    {
      name: 'dexguru',
      url: 'https://base.dex.guru',
      icon: '/explorers/dexguru.svg'
    }
  ],
  bridgeURL: 'https://bridge.base.org/deposit'
};

export const Blast: ChainConfigType = {
  name: 'Blast',
  chain: 'ETH',
  icon: '/chains/blast.png',
  isMainnet: true,
  rpc: ['https://rpc.blastblockchain.com'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://www.blast.io',
  shortName: 'blast',
  chainId: 81457,
  explorers: [
    {
      name: 'Blastscan',
      url: 'https://blastscan.io',
      icon: '/chains/blast.png'
    },
    {
      name: 'Blast Explorer',
      url: 'https://blastexplorer.io',
      icon: '/chains/blast.png'
    }
  ],
  bridgeURL: 'https://blast.io/en/bridge'
};

export const Boba: ChainConfigType = {
  name: 'Boba Network',
  chain: 'ETH',
  icon: '/chains/boba.png',
  isMainnet: true,
  rpc: [
    'https://1rpc.io/boba/eth',
    'https://gateway.tenderly.co/public/boba-ethereum'
  ],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://www.boba.network',
  shortName: 'Boba',
  chainId: 288,
  explorers: [
    {
      name: 'Bobascan',
      url: 'https://bobascan.com',
      icon: '/chains/boba.png'
    }
  ],
  bridgeURL: 'https://gateway.boba.network/'
};

export const BNB: ChainConfigType = {
  name: 'BNB Smart Chain Mainnet',
  chain: 'BSC',
  icon: '/chains/bsc.png',
  isMainnet: true,
  rpc: ['https://binance.llamarpc.com', 'https://bsc.rpc.blxrbdn.com'],
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  infoURL: 'https://www.bnbchain.org/en',
  shortName: 'bnb',
  chainId: 56,
  explorers: [
    {
      name: 'bscscan',
      url: 'https://bscscan.com',
      icon: '/explorers/bscscan.svg'
    },
    {
      name: 'dexguru',
      url: 'https://bnb.dex.guru',
      icon: '/explorers/dexguru.svg'
    }
  ]
};

export const Celo: ChainConfigType = {
  name: 'Celo Mainnet',
  chain: 'CELO',
  icon: '/chains/celo.png',
  isMainnet: true,
  rpc: [
    'https://1rpc.io/celo',
    'https://api.tatum.io/v3/blockchain/node/celo-mainnet'
  ],
  nativeCurrency: {
    name: 'CELO',
    symbol: 'CELO',
    decimals: 18
  },
  infoURL: 'https://docs.celo.org',
  shortName: 'celo',
  chainId: 42220,
  explorers: [
    {
      name: 'Celoscan',
      url: 'https://celoscan.io',
      icon: 'https://celoscan.io/assets/celo/images/svg/logos/logo-light.svg?v=24.5.4.1'
    },
    {
      name: 'blockscout',
      url: 'https://explorer.celo.org',
      icon: '/chains/celo.png'
    }
  ]
};

export const Cronos: ChainConfigType = {
  name: 'Cronos',
  chain: 'Cronos',
  icon: '/chains/cronos.png',
  isMainnet: true,
  rpc: ['https://rpc.nebkas.ro', 'https://rpc.nebkas.ro'],
  nativeCurrency: {
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 18
  },
  infoURL: 'https://cronos.org/',
  shortName: 'cronos',
  chainId: 25,
  explorers: [
    {
      name: 'Cronoscan',
      url: 'https://cronoscan.com/',
      icon: '/chains/cronos.png'
    }
  ],
  bridgeURL: 'https://cronos.org/bridge'
};

export const Mainnet: ChainConfigType = {
  name: 'Ethereum Mainnet',
  chain: 'ETH',
  icon: '/chains/ethereum.png',
  isMainnet: true,
  rpc: [
    'https://eth.llamarpc.com',
    'wss://ethereum-rpc.publicnode.com',
    'https://eth-mainnet.public.blastapi.io'
  ],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://ethereum.org',
  shortName: 'eth',
  chainId: 1,
  ens: {
    registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
  },
  explorers: [
    {
      name: 'etherscan',
      url: 'https://etherscan.io',
      icon: '/explorers/etherscan.jpeg'
    },
    {
      name: 'blockscout',
      url: 'https://eth.blockscout.com',
      icon: '/chains/ethereum.png'
    },
    {
      name: 'dexguru',
      url: 'https://ethereum.dex.guru',
      icon: '/explorers/dexguru.png'
    }
  ]
};

export const Evmos: ChainConfigType = {
  name: 'Evmos',
  chain: 'Evmos',
  icon: '/chains/evmos.png',
  isMainnet: true,
  rpc: [
    'https://jsonrpc-evmos-ia.cosmosia.notional.ventures',
    'https://evmos-mainnet.public.blastapi.io'
  ],
  nativeCurrency: {
    name: 'Evmos',
    symbol: 'EVMOS',
    decimals: 18
  },
  infoURL: 'https://evmos.org',
  shortName: 'evmos',
  chainId: 9001,
  explorers: [
    {
      name: 'Evmos Explorer (Escan)',
      url: 'https://escan.live',
      icon: 'https://escan.live/images/logo-light.svg'
    }
  ],
  bridgeURL: 'https://cbridge.celer.network/bridge/ethereum-evmos/'
};

export const Fantom: ChainConfigType = {
  name: 'Fantom Opera',
  chain: 'FTM',
  icon: '/chains/ftm.png',
  isMainnet: true,
  rpc: ['https://rpc3.fantom.network', 'https://rpc3.fantom.network'],
  nativeCurrency: {
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18
  },
  infoURL: 'https://fantom.foundation/',
  shortName: 'ftm',
  chainId: 250,
  explorers: [
    {
      name: 'ftmscan',
      url: 'https://ftmscan.com',
      icon: '/explorers/ftmscan.svg'
    },
    {
      name: 'dexguru',
      url: 'https://fantom.dex.guru',
      icon: '/chains/ftm.png'
    }
  ]
};

export const Fuse: ChainConfigType = {
  name: 'Fuse Mainnet',
  chain: 'FUSE',
  icon: '/chains/fuse.png',
  isMainnet: true,
  rpc: ['https://fuse-pokt.nodies.app', 'https://rpc.fuse.io'],
  nativeCurrency: {
    name: 'Fuse',
    symbol: 'FUSE',
    decimals: 18
  },
  infoURL: 'https://fuse.io',
  shortName: 'fuse',
  chainId: 122,
  explorers: [
    {
      name: 'blockscout',
      url: 'https://explorer.fuse.io',
      icon: 'https://explorer.fuse.io/assets/network_logo.svg'
    }
  ],
  bridgeURL: 'https://console.fuse.io/bridge'
};

export const Gnosis: ChainConfigType = {
  name: 'Gnosis',
  chain: 'GNO',
  icon: '/chains/gnosis.png',
  isMainnet: true,
  rpc: ['https://rpc.gnosis.gateway.fm', 'https://rpc.gnosis.gateway.fm'],
  nativeCurrency: {
    name: 'xDAI',
    symbol: 'XDAI',
    decimals: 18
  },
  infoURL: 'https://docs.gnosischain.com',
  shortName: 'gno',
  chainId: 100,
  explorers: [
    {
      name: 'gnosisscan',
      url: 'https://gnosisscan.io',
      icon: 'https://gnosisscan.io/assets/xdai/images/svg/logos/logo-light.svg?v=24.5.4.1'
    },
    {
      name: 'blockscout',
      url: 'https://gnosis.blockscout.com',
      icon: '/chains/gnosis.png'
    },
    {
      name: 'dexguru',
      url: 'https://gnosis.dex.guru',
      icon: '/chains/gnosis.png'
    }
  ],
  bridgeURL: 'https://bridge.gnosischain.com/'
};

export const Harmony: ChainConfigType = {
  name: 'Harmony Mainnet Shard 0',
  chain: 'Harmony',
  icon: '/chains/harmony.png',
  isMainnet: true,
  rpc: ['https://api.harmony.one', 'https://api.s0.t.hmny.io'],
  nativeCurrency: {
    name: 'ONE',
    symbol: 'ONE',
    decimals: 18
  },
  infoURL: 'https://www.harmony.one/',
  shortName: 'hmy',
  chainId: 1666600000,
  explorers: [
    {
      name: 'Harmony Block Explorer',
      url: 'https://explorer.harmony.one',
      icon: '/chains/harmony.png'
    }
  ],
  bridgeURL: 'https://bridge.harmony.one/one'
};

export const Linea: ChainConfigType = {
  name: 'Linea',
  chain: 'ETH',
  icon: '/chains/linea.png',
  isMainnet: true,
  rpc: [
    'https://linea.decubate.com',
    'https://linea.blockpi.network/v1/rpc/public'
  ],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://linea.build/',
  shortName: 'linea',
  chainId: 59144,
  explorers: [
    {
      name: 'Etherscan',
      url: 'https://lineascan.build',
      icon: 'https://lineascan.build/assets/linea/images/svg/logos/logo-light.svg?v=24.5.4.1'
    },
    {
      name: 'Blockscout',
      url: 'https://explorer.linea.build',
      icon: '/chains/linea.png'
    },
    {
      name: 'L2scan',
      url: 'https://linea.l2scan.co',
      icon: '/chains/linea.png'
    }
  ],
  bridgeURL: 'https://bridge.linea.build/'
};

export const Mantle: ChainConfigType = {
  name: 'Mantle',
  chain: 'ETH',
  icon: '/chains/mantle.png',
  isMainnet: true,
  rpc: ['https://rpc.mantle.xyz', 'https://mantle.drpc.org'],
  nativeCurrency: {
    name: 'Mantle',
    symbol: 'MNT',
    decimals: 18
  },
  infoURL: 'https://mantle.xyz/',
  shortName: 'mantle',
  chainId: 5000,
  explorers: [
    {
      name: 'Mantle Explorer',
      url: 'https://explorer.mantle.xyz',
      icon: 'https://explorer.mantle.xyz/static/mantle_logo.svg'
    }
  ],
  bridgeURL: 'https://bridge.mantle.xyz/'
};

export const Metis: ChainConfigType = {
  name: 'Metis',
  chain: 'ETH',
  icon: '/chains/metis.png',
  isMainnet: true,
  rpc: [
    'https://andromeda.metis.io/?owner=1088',
    'https://metis-mainnet.public.blastapi.io'
  ],
  nativeCurrency: {
    name: 'Metis',
    symbol: 'METIS',
    decimals: 18
  },
  infoURL: 'https://www.metis.io/',
  shortName: 'metis',
  chainId: 1088,
  explorers: [
    {
      name: 'blockscout',
      url: 'https://andromeda-explorer.metis.io',
      icon: '/chains/metis.png'
    }
  ],
  bridgeURL: 'https://bridge.metis.io/home'
};

export const Mode: ChainConfigType = {
  name: 'Mode',
  chain: 'ETH',
  icon: '/chains/mode.png',
  isMainnet: true,
  rpc: ['https://mainnet.mode.network', 'https://1rpc.io/mode'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://docs.mode.network/',
  shortName: 'mode',
  chainId: 34443,
  explorers: [
    {
      name: 'modescout',
      url: 'https://explorer.mode.network',
      icon: '/chains/mode.png'
    }
  ],
  bridgeURL: 'https://bridge.mode.network/'
};

export const Moonbeam: ChainConfigType = {
  name: 'Moonbeam',
  chain: 'MOON',
  icon: '/chains/moonbeam.png',
  isMainnet: true,
  rpc: [
    'https://moonbeam.public.blastapi.io',
    'https://moonbeam.unitedbloc.com'
  ],
  nativeCurrency: {
    name: 'Glimmer',
    symbol: 'GLMR',
    decimals: 18
  },
  infoURL: 'https://moonbeam.network/networks/moonbeam',
  shortName: 'mbeam',
  chainId: 1284,
  explorers: [
    {
      name: 'moonscan',
      url: 'https://moonbeam.moonscan.io',
      icon: 'https://moonbeam.moonscan.io/assets/moonbeam/images/svg/logos/logo-light.svg?v=24.5.4.1'
    }
  ]
};

export const Moonriver: ChainConfigType = {
  name: 'Moonriver',
  chain: 'MOON',
  icon: '/chains/moonriver.png',
  isMainnet: true,
  rpc: [
    'https://moonriver.unitedbloc.com',
    'https://moonriver.api.onfinality.io/public'
  ],
  nativeCurrency: {
    name: 'Moonriver',
    symbol: 'MOVR',
    decimals: 18
  },
  infoURL: 'https://moonbeam.network/networks/moonriver',
  shortName: 'mriver',
  chainId: 1285,
  explorers: [
    {
      name: 'moonscan',
      url: 'https://moonriver.moonscan.io',
      icon: 'https://moonriver.moonscan.io/assets/moonriver/images/svg/logos/logo-light.svg?v=24.5.4.1'
    }
  ]
};

export const Nova: ChainConfigType = {
  name: 'VELO Labs Mainnet',
  chain: 'NOVA Chain',
  icon: 'https://novascan.velo.org/images/nova_logo-030260667b594a34eb9ebdf113af7a8a.svg?vsn=d',
  isMainnet: true,
  rpc: ['https://nova.velo.org'],
  nativeCurrency: {
    name: 'Nova',
    symbol: 'NOVA',
    decimals: 18
  },
  infoURL: 'https://www.velo.org/',
  shortName: 'velo',
  chainId: 56789,
  explorers: [
    {
      name: 'novascan',
      url: 'https://novascan.velo.org',
      icon: 'https://novascan.velo.org/images/nova_logo-030260667b594a34eb9ebdf113af7a8a.svg?vsn=d'
    }
  ]
};

export const OKX: ChainConfigType = {
  name: 'OKX',
  chain: 'OKX Chain',
  icon: '/chains/okx.png',
  isMainnet: true,
  rpc: ['https://1rpc.io/oktc', 'https://1rpc.io/oktc'],
  nativeCurrency: {
    name: 'OKT',
    symbol: 'OKT',
    decimals: 18
  },
  infoURL: 'https://www.okx.com/',
  shortName: 'OKX',
  chainId: 66,
  explorers: [
    {
      name: 'oklink',
      url: 'https://www.oklink.com/okexchain',
      icon: 'https://static.oklink.com/cdn/assets/imgs/235/75B1E2A7FDA6CE3D.png?x-oss-process=image/format,webp/resize,w_240,h_48,type_6/ignore-error,1'
    }
  ],
  bridgeURL: 'https://www.okx.com/oktc/ibc'
};

export const OpBNB: ChainConfigType = {
  name: 'opBNB',
  chain: 'opBNB',
  icon: '/chains/bsc.png',
  isMainnet: true,
  rpc: ['https://opbnb.drpc.org', 'https://1rpc.io/opbnb'],
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  infoURL: 'https://opbnb.bnbchain.org/en',
  shortName: 'obnb',
  chainId: 204,
  explorers: [
    {
      name: 'opbnbscan',
      url: 'https://mainnet.opbnbscan.com',
      icon: 'https://opbnbscan.com/_next/image?url=https%3A%2F%2Fwww.nodereal.io%2Fstatic%2Fop-bnb-trace%2Fimages%2Flogo-dark.png&w=384&q=75'
    }
  ],
  bridgeURL: 'https://opbnb-bridge.bnbchain.org/deposit'
};

export const Optimism: ChainConfigType = {
  name: 'OP Mainnet',
  chain: 'ETH',
  icon: '/chains/optimism.png',
  isMainnet: true,
  rpc: ['https://optimism.llamarpc.com', 'https://op-pokt.nodies.app'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://optimism.io',
  shortName: 'oeth',
  chainId: 10,
  explorers: [
    {
      name: 'etherscan',
      url: 'https://optimistic.etherscan.io',
      icon: 'https://optimistic.etherscan.io/assets/optimism/images/svg/logos/logo-light.svg?v=24.5.3.0'
    },
    {
      name: 'blockscout',
      url: 'https://optimism.blockscout.com',
      icon: '/chains/optimism.png'
    },
    {
      name: 'dexguru',
      url: 'https://optimism.dex.guru',
      icon: '/chains/optimism.png'
    }
  ],
  bridgeURL: 'https://app.optimism.io/bridge/deposit'
};

export const Polygon: ChainConfigType = {
  name: 'Polygon',
  chain: 'Polygon',
  icon: '/chains/polygon.png',
  isMainnet: true,
  rpc: ['https://polygon.rpc.blxrbdn.com', 'https://polygon.drpc.org'],
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18
  },
  infoURL: 'https://polygon.technology',
  shortName: 'matic',
  chainId: 137,
  explorers: [
    {
      name: 'polygonscan',
      url: 'https://polygonscan.com',
      icon: 'https://polygonscan.com/assets/poly/images/svg/logos/logo-light.svg?v=24.5.4.1'
    },
    {
      name: 'dexguru',
      url: 'https://polygon.dex.guru',
      icon: '/chains/polygon.png'
    }
  ]
};

export const PolygonZkEVM: ChainConfigType = {
  name: 'Polygon zkEVM',
  chain: 'Polygon',
  icon: '/chains/polygon.png',
  isMainnet: true,
  rpc: ['https://zkevm-rpc.com', 'https://polygon-zkevm.drpc.org'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://polygon.technology/polygon-zkevm',
  shortName: 'polygon zkevm',
  chainId: 1101,
  explorers: [
    {
      name: 'blockscout',
      url: 'https://zkevm.polygonscan.com',
      icon: 'https://zkevm.polygonscan.com/assets/zkpoly/images/svg/logos/logo-light.svg?v=24.5.4.1'
    }
  ],
  bridgeURL: 'https://portal.polygon.technology/bridge'
};

export const Rootstock: ChainConfigType = {
  name: 'Rootstock',
  chain: 'Rootstock',
  icon: '/chains/rootstock.png',
  isMainnet: true,
  rpc: ['https://public-node.rsk.co', 'https://mycrypto.rsk.co'],
  nativeCurrency: {
    name: 'Smart Bitcoin',
    symbol: 'RBTC',
    decimals: 18
  },
  infoURL: 'https://rootstock.io/',
  shortName: 'rsk',
  chainId: 30,
  explorers: [
    {
      name: 'rootstock',
      url: 'https://explorer.rootstock.io/',
      icon: '/chains/rootstock.png'
    }
  ],
  bridgeURL: 'https://tokenbridge.rsk.co/'
};

export const Scroll: ChainConfigType = {
  name: 'Scroll',
  chain: 'ETH',
  icon: '/chains/scroll.png',
  isMainnet: true,
  rpc: ['https://scroll.drpc.org', 'https://scroll.drpc.org'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://scroll.io/',
  shortName: 'scroll',
  chainId: 534352,
  explorers: [
    {
      name: 'Scrollscan',
      url: 'https://scrollscan.com',
      icon: 'https://scrollscan.com/assets/scroll/images/svg/logos/logo-light.svg?v=24.5.4.1'
    }
  ],
  bridgeURL: 'https://scroll.io/bridge'
};

export const Velas: ChainConfigType = {
  name: 'Velas',
  chain: 'Velas',
  icon: '/chains/velas.png',
  isMainnet: true,
  rpc: ['https://explorer.velas.com/rpc', 'https://explorer.velas.com/rpc'],
  nativeCurrency: {
    name: 'Velas',
    symbol: 'VLX',
    decimals: 18
  },
  infoURL: 'https://velas.com',
  shortName: 'vlx',
  chainId: 106,
  explorers: [
    {
      name: 'Velas Explorer',
      url: 'https://evmexplorer.velas.com',
      icon: '/chains/velas.png'
    }
  ]
};

export const ZkSync: ChainConfigType = {
  name: 'zkSync',
  chain: 'ETH',
  icon: '/chains/zksync.png',
  isMainnet: true,
  rpc: ['https://mainnet.era.zksync.io', 'https://1rpc.io/zksync2-era'],
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  infoURL: 'https://zksync.io/',
  shortName: 'zksync',
  chainId: 324,
  explorers: [
    {
      name: 'zkSync Era Block Explorer',
      url: 'https://explorer.zksync.io',
      icon: '/chains/zksync.png'
    }
  ],
  bridgeURL: 'https://portal.zksync.io/bridge/'
};

export default {
  [Arbitrum.chainId]: Arbitrum,
  [Aurora.chainId]: Aurora,
  [Avalanche.chainId]: Avalanche,
  [Base.chainId]: Base,
  [Blast.chainId]: Blast,
  [Boba.chainId]: Boba,
  [BNB.chainId]: BNB,
  [Celo.chainId]: Celo,
  [Cronos.chainId]: Cronos,
  [Mainnet.chainId]: Mainnet,
  [Evmos.chainId]: Evmos,
  [Fantom.chainId]: Fantom,
  [Fuse.chainId]: Fuse,
  [Gnosis.chainId]: Gnosis,
  [Harmony.chainId]: Harmony,
  [Linea.chainId]: Linea,
  [Mantle.chainId]: Mantle,
  [Metis.chainId]: Metis,
  [Mode.chainId]: Mode,
  [Moonbeam.chainId]: Moonbeam,
  [Moonriver.chainId]: Moonriver,
  [Nova.chainId]: Nova,
  [OKX.chainId]: OKX,
  [OpBNB.chainId]: OpBNB,
  [Optimism.chainId]: Optimism,
  [Polygon.chainId]: Polygon,
  [PolygonZkEVM.chainId]: PolygonZkEVM,
  [Rootstock.chainId]: Rootstock,
  [Scroll.chainId]: Scroll,
  [Velas.chainId]: Velas,
  [ZkSync.chainId]: ZkSync
};
