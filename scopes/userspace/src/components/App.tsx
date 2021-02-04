import { useReducer, useEffect } from 'react';
import SteamLinksInput from 'components/SteamLinksInput';
import GamesInfo from 'components/GamesInfo';

import { reducer, initialState, SET_COMMON_GAMES } from 'utils/reducer';
import sendApiRequest from 'utils/sendApiRequest';

import styles from './App.module.css';

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const { steamProfileInputs } = appState;

  useEffect(() => {
    const run = async () => {
      if (steamProfileInputs.length < 2) return;

      const users = JSON.stringify((steamProfileInputs as Array<any>).map(input => input.userName));

      const response = await sendApiRequest(`http://localhost:3000/api/v1/common-games?users=${users}`);

      dispatch({
        type: SET_COMMON_GAMES,
        payload: {
          userset: users,
          list: (response as any).json?.commonGames ?? []
        }
      });
    }

    run();
  }, [steamProfileInputs]);

  return (
    <div className={styles.inner}>
      <div className={styles.inputArea}>
        <SteamLinksInput appState={appState} dispatch={dispatch} />
      </div>

      <div className={styles.resultArea}>
        <GamesInfo appState={appState} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
