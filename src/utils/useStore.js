import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export const useStores = () => {
  const stores = useContext(MobXProviderContext);
  return stores;
};
