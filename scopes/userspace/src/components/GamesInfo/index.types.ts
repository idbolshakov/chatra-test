import { TAppState, TAction } from 'utils/reducer/index.types';

export type TGamesInfoProps = Readonly<{
  appState: TAppState;
  dispatch: (action: TAction) => void
}>
