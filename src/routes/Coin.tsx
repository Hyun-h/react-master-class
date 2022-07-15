import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import styled from 'styled-components';

const Container = styled.main`
    padding: 0 1.25rem;
    max-width: 30rem;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    display: inline-block;
    width: 100%;
    text-align: center;
`;

//이제부터 들여야 하는 습관 : TS는 늘 설명을 해줘야 한다.
//interface로 설명해주기
interface RouteParams {
    coinId: string;
}

interface RouterState {
    name: string;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

function Coin() {
    const [loading, setLoading] = useState(true);
    //TS : 그래서 const 어쩌구가 뭔데? 나 : <RouteParams> 이거야!
    const { coinId } = useParams<RouteParams>();
    //coins component에서 Link to로 전달된 object를 받아옴
    //코인의 name을 이미 가지고 있어서 API가 줄 때까지 기다릴 필요가 없어짐
    const { state } = useLocation<RouterState>();
    //ts는 info와 priceInfo를 빈 배열로 인식해서 설명해 줄 필요가 있음
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();

    useEffect(() => {
        (async () => {
            //캡슐화
            const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(infoData);
            setPriceInfo(priceData);
        })();
    }, []);

    return (
        <Container>
            <Header>
                {/* object로 state를 받아왔을 때 바로 상세링크로 가면 당연히 로드된 게 없으므로 undefined 처리가 됨. 그래서 아래와 같은 트릭을 사용 */}
                <Title>{state?.name || 'Loading...'}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}
        </Container>
    );
}

export default Coin;
