//Animaiton 사용방법
import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimaiton = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 50%;
  }
`;

const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotateAnimaiton} 1s linear infinite;

    ${Emoji}:hover {
        font-size: 100px;
    }
`;

//컴포넌트를 따로 빼서 의존도를 낮추면 tag가 어떤 것이든 신경쓰는 게 줄어듦
const Emoji = styled.span`
    font-size: 36px;

    &:hover {
        font-size: 60px;
    }

    &:active {
        opacity: 0;
    }
`;

function App() {
    return (
        <Wrapper>
            <Title>HELLO</Title>
            <Box>
                {/* 컴포넌트 안에서 selector 된 Emoji */}
                <Emoji>😱</Emoji>
            </Box>
            {/* 원래 Emoji */}
            <Emoji>🤤</Emoji>
        </Wrapper>
    );
}

export default App;
