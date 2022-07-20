import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';

const Container = styled.main`
    padding: 0 1.25rem;
    max-width: 30rem;
    //화면을 크게 했을 때도 모바일 화면처럼 가운데에 위치
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 0.625rem;
    border-radius: 15px;
    padding: 1.25rem;
    display: flex;
    align-items: center;

    &:hover {
        color: ${(props) => props.theme.accentColor};
        transition: color 0.2s ease-in;
    }

    & > p {
        margin: 0.3rem 0 0 0.4rem;
    }
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

const Img = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;

//데이터에 대한 타입 지정
interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    // const [coins, setCoins] = useState<ICoin[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('https://api.coinpaprika.com/v1/coins');
    //         const json = await response.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);

    //useQuery("고유식별자", fetchFunction)
    //isLoading은 boolean 속성. const [loading, setLoading] = useState(true); 대체.
    //fetchCoins function이 끝나면 그 함수의 데이터를 data에 넣음. const [coins, setCoins] = useState<ICoin[]>([]); 대체.
    const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map((coin) => (
                        //object 형태로 사용 가능. 데이터를 전달하는 게 가능해졌다.
                        <Link
                            to={{
                                pathname: `/${coin.id}`,
                                //다른 화면으로 state를 보내게 됨
                                state: { name: coin.name },
                            }}
                            key={coin.id}>
                            <Coin>
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={`${coin.symbol}`} />
                                <p>{coin.name} &rarr;</p>
                            </Coin>
                        </Link>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}

export default Coins;
