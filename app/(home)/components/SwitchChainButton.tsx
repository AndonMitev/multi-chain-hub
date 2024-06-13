'use client';

import { Button } from '@/components/ui/button';
import { TableCell } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { SwitchChainError } from 'viem';
import { useAccount, useSwitchChain } from 'wagmi';

type SwitchChainButtonProps = {
  chainId: number;
};

export default function SwitchChainButton({ chainId }: SwitchChainButtonProps) {
  const { switchChainAsync } = useSwitchChain();
  const { chainId: connectedChainId } = useAccount();
  const { toast } = useToast();

  const onSwitchChain = async () => {
    try {
      await switchChainAsync({ chainId });
    } catch (err) {
      const _err = err as SwitchChainError;

      toast({
        title: _err.message,
        className:
          'bg-neutral-900 block border-l-8 border-y-0 border-r-0 border-red-500'
      });
    }
  };

  const isChainActive = chainId === connectedChainId;

  return (
    <TableCell>
      <Button
        disabled={isChainActive}
        onClick={onSwitchChain}
        className='w-[77px]'
      >
        {isChainActive ? 'Active' : 'Switch'}
      </Button>
    </TableCell>
  );
}
