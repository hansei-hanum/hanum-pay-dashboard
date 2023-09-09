import React, { useState } from 'react';

import { Logo } from '@/assets';

import * as S from './styled';

export const AuthPage: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <S.AuthPageContainer>
      <S.AuthPageMainSection>
        <S.AuthPageLogoContainer>
          <S.AuthPageLogo src={Logo} alt="logo" />
          <S.AuthPageText>한움페이 부스운영 시스템</S.AuthPageText>
        </S.AuthPageLogoContainer>
        <S.AuthPageInputContainer>
          {isClicked && <S.AuthPageInputLabel>부스 키</S.AuthPageInputLabel>}
          <S.AuthPageInput
            onClick={() => setIsClicked(true)}
            placeholder={!isClicked ? '부스 키를 입력해주세요' : ''}
          />
        </S.AuthPageInputContainer>
      </S.AuthPageMainSection>
      <S.AuthPageButton>로그인</S.AuthPageButton>
    </S.AuthPageContainer>
  );
};
