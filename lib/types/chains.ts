type NativeCurrencyType = {
  name: string;
  symbol: string;
  decimals: number;
};

type EnsType = {
  registry: string;
};

type ExplorersType = {
  name: string;
  url: string;
  icon?: string;
};

export type ChainConfigType = {
  name: string;
  chain: string;
  icon: string;
  chainId: number;
  isMainnet: boolean;
  rpc: Array<string>;
  faucets?: Array<string>;
  infoURL: string;
  shortName: string;
  nativeCurrency: NativeCurrencyType;
  ens?: EnsType;
  explorers: Array<ExplorersType>;
  bridgeURL?: string;
};

export type NetworkConfigType = {
  mainnet: {
    ethereum: ChainConfigType;
  };
  testnet: {
    ethereum: ChainConfigType;
  };
};
