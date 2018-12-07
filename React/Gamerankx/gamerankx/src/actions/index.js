import axios from 'axios';

const API_KEY = 'd77d77684ba9206555cd20e10abdbcbd';
const API_URL = 'https://api-endpoint.igdb.com/games/?';


export const FETCH_GAMES = 'FETCH_GAMES';
export const SELECT_GAME = 'SELECT_GAME';

export function fetchGames(gamename){
    const url = `${API_URL}search=${gamename}&fields=name,cover,summary,rating`

    const request = axios.get(url, {
        headers: {
            "user-key": API_KEY,
        }
    })
    return {
        type: FETCH_GAMES,
        payload: request

    };
}

export function selectGame(game){
    return {
        type: SELECT_GAME,
        payload: {game: game}
    }
}