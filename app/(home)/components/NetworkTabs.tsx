import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChainsTable from './ChainsTable';
import { NETWORK } from '@/lib/constants';

export default function NetworkTabs() {
  return (
    <Tabs
      defaultValue={NETWORK.MAINNET}
      className='flex flex-col items-center h-full'
    >
      <TabsList className='w-[400px] my-4'>
        <TabsTrigger value={NETWORK.MAINNET} className='text-center w-full'>
          Mainnet
        </TabsTrigger>
        <TabsTrigger value={NETWORK.TESTNET} className='text-center w-full'>
          Testnet
        </TabsTrigger>
      </TabsList>
      <TabsContent value={NETWORK.MAINNET}>
        <ChainsTable network={NETWORK.MAINNET} />
      </TabsContent>
      <TabsContent value={NETWORK.TESTNET}>
        <ChainsTable network={NETWORK.TESTNET} />
      </TabsContent>
    </Tabs>
  );
}
