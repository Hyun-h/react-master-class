//react 관련된 것을 쓰지 않으므로 ts 파일로 생성해도 괜찮다. 겁먹지 말기!

import { start } from 'repl';

const BASE_URL = `https://api.coinpaprika.com/v1`;

//첫번째 방법
// export async function fetchCo ins() {
//     const response = await fetch('https://api.coinpaprika.com/v1/coins');
//     const json = await response.json();
//     return json;
// }

//두번째 방법 promise 사용
export function fetchCoins() {
    //타입에러 찾아 하루종일 해멘 교훈 : 에러가 나면 구글링 전에 오타, 쉼표, 대소문자, 괄호부터 의심해보자...
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

//fecher function에 argument 넣기
export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
    //const endDate = Math.floor(Date.now() / 1000);
    //const startDate = endDate - 60 * 60 * 24 * 7;
    //=${startDate}&${endDate}

    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then((response) => response.json());
}
