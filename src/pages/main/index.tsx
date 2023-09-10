import React from 'react';
import { MdLogout } from 'react-icons/md';

import { Logo } from '@/assets';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <S.MainPageHeader>
        <S.MainPageLogo src={Logo} />
        <S.MainPageHeaderText>
          클라우드보안과 2학년 2반
          <MdLogout size={20} />
        </S.MainPageHeaderText>
      </S.MainPageHeader>
      <h1>메인 페이지</h1>
    </S.MainPageContainer>
  );
};
