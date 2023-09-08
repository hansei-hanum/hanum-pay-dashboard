import React from 'react';

import { Logo } from '@/assets';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <S.MainPageLogoContainer>
        <S.MainPageLogo src={Logo} alt="logo" />
        <S.MainPageText>한움페이 부스운영 시스템</S.MainPageText>
      </S.MainPageLogoContainer>
    </S.MainPageContainer>
  );
};
