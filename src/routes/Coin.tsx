import React, { useState } from 'react';
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

function Coin() {
    const [loading, setLoading] = useState(true);
    //TS : 그래서 const 어쩌구가 뭔데? 나 : <RouteParams> 이거야!
    const { coinId } = useParams<RouteParams>();
    //coins component에서 Link to로 전달된 object를 받아옴
    //코인의 name을 이미 가지고 있어서 API가 줄 때까지 기다릴 필요가 없어짐
    const { state } = useLocation<RouterState>();

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
