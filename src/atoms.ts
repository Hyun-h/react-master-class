import { atom } from 'recoil';

//atom 파일에서 쓰고 싶은 전역상태의 atom 생성
//고유 key와 default를 지정해준다
export const isDarkAtom = atom({
    key: 'isDark',
    default: false,
});
