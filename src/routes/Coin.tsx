import React from 'react';
import { useParams } from 'react-router';

//이제부터 들여야 하는 습관 : TS는 늘 설명을 해줘야 한다.

//interface로 설명해주기
interface RouteParams {
    coinId: string;
}

function Coin() {
    //TS : 그래서 const 어쩌구가 뭔데? 나 : <RouteParams> 이거야!
    const { coinId } = useParams<RouteParams>();
    return <h1>Coin {coinId} </h1>;
}

export default Coin;
