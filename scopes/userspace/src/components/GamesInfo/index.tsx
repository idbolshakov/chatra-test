import { useState, useEffect, } from 'react';
import sendApiRequest from 'utils/sendApiRequest';
import { TGamesInfoProps } from './index.types';

let actualUserset = '';
function GamesInfo(props: TGamesInfoProps ) {
  const { appState } = props;
  const { commonGames } = appState;
  const { userset, list } = commonGames;

  const [ loading, setLoading ] = useState(false);
  const [ currentGames, setCurrentGames ] = useState([]);

  useEffect(() => {
    actualUserset = userset;
    setCurrentGames([]);
    setLoading(false);
  }, [list, userset]);

  useEffect(() => {
    if (loading) return;
    if (currentGames.length !== 0) return;

    const updateCurrentGames = async () => {
      setLoading(true);
      const currentUserset = userset;

      for (const item of list) {
        if (currentUserset !== actualUserset) {
          setCurrentGames([]);
          setLoading(false);
          break;
        }

        const response = await sendApiRequest(`http://localhost:3000/api/v1/multiplayer-game-info?gameId=${item.gameId}`);

        if (!(response as any).json.isMultiplayer) continue;

        const gameInfo = (response as any).json.gameInfo.json[item.gameId];

        setCurrentGames(prev => [...prev, gameInfo] as any);
      }

      setLoading(false);
    };

    updateCurrentGames();
  }, [currentGames, loading, list, userset])


  return (
    <div>
      <ol>
        {(currentGames as any).map((game: any, index: number) => (
          <li key={`${game.data.steam_appid}-${game.data.name}-${index}`}>
            <img src={game.data.header_image} alt={game.data.name} />
            <p>
              <b>steam appid</b>
              <span>{game.data.steam_appid}</span>
            </p>

            <p>
              <b>name</b>
              <span>{game.data.name}</span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GamesInfo;
