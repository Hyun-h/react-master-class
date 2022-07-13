import React from 'react';
import styled from 'styled-components';

//interface : object 가 어떤식으로 사용될 지 설명해 줌
interface ContainerProps {
    bgColor: string;
}

//call signatures로 Container 정의를 내려줌
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
`;

//Circle의 props에 대한 정의
interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
}

//interface ContainerProps와 CircleProps는 같은 속성이라 합쳐서 써도 괜찮지만, 다를 경우 분리해서 따로따로 설명해줘야 함

export default Circle;
