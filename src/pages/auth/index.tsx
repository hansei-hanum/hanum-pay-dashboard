import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Logo } from '@/assets';
import { Button, Text } from '@/components';
import { colors } from '@/styles';

import * as S from './styled';

export const AuthPage: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { register, handleSubmit } = useForm<{ key: string }>();

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
        <S.AuthPageInputContainer>
          {isClicked && (
            <Text size={12} color={colors.placeholder}>
              부스 키
            </Text>
          )}
          <S.AuthPageInput
            {...register('key')}
            onClick={() => setIsClicked(true)}
            placeholder={!isClicked ? '부스 키를 입력해주세요' : ''}
          />
        </S.AuthPageInputContainer>
      </S.AuthPageMainSection>
      <Button onClick={handleSubmit(onSubmit)}>로그인</Button>
    </S.AuthPageContainer>
  );
};
