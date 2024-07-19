// import './App.css';
import { RouterComponent } from './core/router/router.component';

import { PeopleProvider } from './core/providers/people.provider';

import { AppLayout } from './layout/app.layout';

function App() {
  return (
    <PeopleProvider>
      <AppLayout>
        <RouterComponent />
      </AppLayout>
    </PeopleProvider>
  );
}

export default App;
