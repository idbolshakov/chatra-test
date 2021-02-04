import { useState, useEffect, useCallback } from 'react';

import { ADD_NEW_STEAM_PROFILE_INPUT } from 'utils/reducer';
import { TSteamLinksInputProps } from './index.types';

import styles from './SteamLinksInput.module.css';

let timeout: any;
function SteamLinksInput(props: TSteamLinksInputProps ) {
  const { appState, dispatch } = props;
  const { steamProfileInputs } = appState;
  const [input, setInput] = useState('');

  const addNewSteamProfile = useCallback(input => {
    clearTimeout(timeout);

    timeout = setTimeout(function() {
      dispatch({
        type: ADD_NEW_STEAM_PROFILE_INPUT,
        payload: { raw: input, userName: input.replace('https://steamcommunity.com/id/', '') }
      });

      setInput('');
    }, 500);
  }, [dispatch]);

  useEffect(() => {
    if (input.indexOf('https://steamcommunity.com/id/') !== 0) return;
    if (input.length < 31) return;
    if (steamProfileInputs.find(item => item.raw === input)) return;

    addNewSteamProfile(input);
  }, [appState, input, addNewSteamProfile, steamProfileInputs]);

  return (
    <div className={styles.inner}>
      <ol>
        {steamProfileInputs.map((item) => (
          <li
            key={item.id}
            data-id={item.id}
            className={ styles.input }
          >
            {item.raw}
          </li>
        ))}
      </ol>

      <input
        className={ styles.input }
        value={input}
        onChange={e => setInput(e.target.value)}
        type='text'
        placeholder='https://steamcommunity.com/id/userName'
        pattern='https://steamcommunity.com/id/*'
      />
    </div>
  );
}

export default SteamLinksInput;
