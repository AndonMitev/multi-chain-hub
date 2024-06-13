import { NETWORK } from '@/lib/constants';
import MainnetChains from './mainnet';
import TestnetChains from './testnet';

export const NETWORK_CONFIG = {
  [NETWORK.MAINNET]: MainnetChains,
  [NETWORK.TESTNET]: TestnetChains
};
