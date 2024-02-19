import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { useRedcuderExample } from './UseReducer/useReducerExample';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App name="InfoOrigin" />
  </StrictMode>
);
