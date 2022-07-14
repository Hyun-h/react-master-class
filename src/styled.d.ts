//공통적인 theme 을 사용하기 위해서 styled.d.ts 파일 생성 후 아래의 코드 추가
//theme의 타입에 따라 interface 안쪽 변경
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}
