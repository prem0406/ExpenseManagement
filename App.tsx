import React, {useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Login from './src/screens/Login';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {AppNavigation} from './src/navigation/appNavigation';

function App(): React.JSX.Element {
  const [username, _] = useState('TEST1');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {username ? <AppNavigation /> : <Login />}
      </PersistGate>
    </Provider>
  );
}

export default App;
