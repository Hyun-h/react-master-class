import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
    padding: 0 1.25rem;
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

    &:hover {
        color: ${(props) => props.theme.accentColor};
        transition: color 0.2s ease-in;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.accentColor};
`;

const coins = [
    {
        id: 'btc-bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        is_new: false,
        is_active: true,
        type: 'coin',
    },
    {
        id: 'eth-ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        rank: 2,
        is_new: false,
        is_active: true,
        type: 'coin',
    },
    {
        id: 'hex-hex',
        name: 'HEX',
        symbol: 'HEX',
        rank: 3,
        is_new: false,
        is_active: true,
        type: 'token',
    },
];

function Coins() {
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinsList>
                {coins.map((coin) => (
                    <Link to={`/${coin.id}`} key={coin.id}>
                        <Coin>{coin.name} &rarr;</Coin>
                    </Link>
                ))}
            </CoinsList>
        </Container>
    );
}

export default Coins;
