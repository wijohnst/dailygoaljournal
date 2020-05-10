import React from 'react';
import Dashboard from './Components/Dashboard'

import AppContextProvider from './AppContextProvider'

function App() {
  return (
    <AppContextProvider>
      <Dashboard />
    </AppContextProvider>
  );
}

export default App;
