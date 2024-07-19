import { createContext, useEffect, useState } from 'react';
import { PeopleEntityApi } from './people.provider.vm';

import { getPeoples } from '../../api/api';
import { PeoplesApi } from '../../api/api.vm';

interface Props {
  children: React.ReactNode;
}

export const PeopleContext = createContext<PeopleEntityApi>({
  data: undefined,
  setData: () => {},
});

export const PeopleProvider = ({ children }: Props) => {
  const [data, setData] = useState<PeoplesApi>();

  useEffect(() => {
    getPeoples().then(data => setData(data));
  }, []);

  return <PeopleContext.Provider value={{ data, setData }}>{children}</PeopleContext.Provider>;
};
