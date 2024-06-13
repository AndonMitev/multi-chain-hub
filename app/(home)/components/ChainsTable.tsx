import { Label } from '@/components/ui/label';
import { NETWORK_CONFIG } from '@/lib/config/chains';
import { ChainConfigType } from '@/lib/types/chains';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import Image from 'next/image';
import Link from 'next/link';
import { NETWORK } from '@/lib/constants';
import SwitchChainButton from './SwitchChainButton';

type ChainsTableProps = {
  network: NETWORK;
};

export default function ChainsTable({ network }: ChainsTableProps) {
  const chains = Object.values(NETWORK_CONFIG[network]);

  return (
    <div>
      <Table>
        <TableCaption>A list of supported chains.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Chain</TableHead>
            <TableHead>Chain ID</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Explorer</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Bridge</TableHead>
            {network === NETWORK.TESTNET && <TableHead>Faucet</TableHead>}
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {chains.map((chain, idx) => (
            <ChainRow key={chain.chainId} chain={chain} idx={idx} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

type ChainRowProps = {
  chain: ChainConfigType;
  idx: number;
};

function ChainRow({ chain, idx }: ChainRowProps) {
  return (
    <TableRow>
      <TableCell className='font-medium flex gap-2 items-center h-[74px]'>
        <Label>{idx + 1}.</Label>
        <Image src={chain.icon} width={24} height={24} alt={chain.name} />
        <Label>{chain.name}</Label>
      </TableCell>
      <TableCell>{chain.chainId}</TableCell>
      <TableCell className=' w-[100px]'>{chain.nativeCurrency.name}</TableCell>
      <TableCell>
        <Link
          className='text-ellipsis overflow-hidden break-words line-clamp-1 w-[200px] text-sky-500'
          href={chain.explorers[0].url}
          target='_blank'
        >
          {chain.explorers[0].url}
        </Link>
      </TableCell>
      <TableCell>
        <Link
          className='text-ellipsis overflow-hidden break-words line-clamp-1 w-[100px] text-sky-500'
          href={chain.infoURL}
          target='_blank'
        >
          {chain.infoURL}
        </Link>
      </TableCell>
      {chain.bridgeURL ? (
        <TableCell>
          <Link
            className='text-ellipsis overflow-hidden break-words line-clamp-1 w-[100px] text-sky-500'
            href={chain.bridgeURL}
            target='_blank'
          >
            {chain.bridgeURL}
          </Link>
        </TableCell>
      ) : (
        <TableCell>-</TableCell>
      )}
      {chain.faucets && (
        <Link
          className='text-ellipsis overflow-hidden break-words line-clamp-1 w-[100px] text-sky-500'
          href={chain.faucets[0]}
          target='_blank'
        >
          {chain.faucets[0]}
        </Link>
      )}
      <SwitchChainButton chainId={chain.chainId} />
    </TableRow>
  );
}
