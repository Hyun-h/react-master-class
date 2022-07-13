import React, { useState } from 'react';
import styled from 'styled-components';

//interface : object 가 어떤식으로 사용될 지 설명해 줌
interface ContainerProps {
    bgColor: string;
    //css는 선택사항이 아님
    borderColor: string;
}

//call signatures로 Container 정의를 내려줌
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    //css는 선택사항이 아님
    border: 1px solid ${(props) => props.borderColor};
`;

//Circle의 props에 대한 정의
interface CircleProps {
    bgColor: string;
    //?를 붙여서 option으로 사용
    borderColor?: string;
}

//text = 'default text' es6 문법. 만약 들어온 게 없으면 default 설정 보내주세요!
function Circle({ bgColor, borderColor }: CircleProps) {
    //타입스크립트는 똑똑해서 useState의 타입추론을 잘 함
    //만약 useState에 타입 부여가 필요하다면 useState<number | string> 와 같이 할 수 있다. 근데 useState는 타입이 변하는 경우가 잘 없음.
    const [value, setVaule] = useState<number | string>(1);
    setVaule(2);

    // ?? : Null 병합 연산자, ?? 앞의 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 변환
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

//interface ContainerProps와 CircleProps는 같은 속성이라 합쳐서 써도 괜찮지만, 다를 경우 분리해서 따로따로 설명해줘야 함

export default Circle;
