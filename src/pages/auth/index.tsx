import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Logo } from '@/assets';

import * as S from './styled';

export const AuthPage: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { register, handleSubmit } = useForm<{ key: string }>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{ key: string }> = ({ key }) => {
    console.log(key);
    localStorage.setItem('key', key);
    navigate('/');
  };

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
            {...register('key')}
            onClick={() => setIsClicked(true)}
            placeholder={!isClicked ? '부스 키를 입력해주세요' : ''}
          />
        </S.AuthPageInputContainer>
      </S.AuthPageMainSection>
      <S.AuthPageButton onClick={handleSubmit(onSubmit)}>로그인</S.AuthPageButton>
    </S.AuthPageContainer>
  );
};
