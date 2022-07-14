import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
    const [value, setValue] = useState('');
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('hello', value);
    };

    const Container = styled.section`
        background-color: ${(props) => props.theme.bgColor};
    `;

    const H1 = styled.h1`
        color: ${(props) => props.theme.textColor};
    `;

    const Button = styled.button`
        background-color: ${(props) => props.theme.btnColor};
    `;

    return (
        <Container>
            <H1>hello</H1>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={onChange} type='text' placeholder='usename' />
                <Button>Log in</Button>
            </form>
        </Container>
    );
}

export default App;
