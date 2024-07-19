import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  details: '/person/:personId',
};

interface Routes extends Omit<SwitchRoutes, 'details'> {
  details: (personId: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: personId => generatePath(switchRoutes.details, { personId }),
};
