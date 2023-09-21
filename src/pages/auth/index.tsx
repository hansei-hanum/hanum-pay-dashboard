import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Logo } from '@/assets';
import { Button, Text } from '@/components';

import * as S from './styled';

export const AuthPage: React.FC = () => {
  const { register, handleSubmit, setFocus } = useForm<{ key: string }>();
  console.log(setFocus, 'werq');

  const onSubmit: SubmitHandler<{ key: string }> = ({ key }) => {
    console.log(key);
    localStorage.setItem('key', key);
    window.location.reload();
  };

  return (
    <S.AuthPageContainer>
      <S.AuthPageMainSection>
        <S.AuthPageLogoContainer>
          <S.AuthPageLogo src={Logo} alt="logo" />
          <Text size={14} weight={600}>
            한움페이 부스운영 시스템
          </Text>
        </S.AuthPageLogoContainer>
        <S.AuthPageFormGroup>
          <S.AuthPageFormInput placeholder="부스 키를 입력해주세요" {...register('key')} />
          <S.AuthPageFormLabel>부스 키</S.AuthPageFormLabel>
        </S.AuthPageFormGroup>
      </S.AuthPageMainSection>
      <Button onClick={handleSubmit(onSubmit)}>로그인</Button>
    </S.AuthPageContainer>
  );
};
