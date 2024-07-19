import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { switchRoutes } from './routes';

import { HomePageComponent, DetailPageComponent } from '../../pages';

export const RouterComponent: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={switchRoutes.root} element={<HomePageComponent />} />
          <Route path={switchRoutes.details} element={<DetailPageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
