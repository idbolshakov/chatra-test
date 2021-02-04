import { TAppState, TAction } from 'utils/reducer/index.types';

export type TSteamLinksInputProps = Readonly<{
  appState: TAppState;
  dispatch: (action: TAction) => void
}>
