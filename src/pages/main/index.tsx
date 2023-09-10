import React from 'react';
import { MdLogout, MdRefresh } from 'react-icons/md';

import { Logo } from '@/assets';
import { Text } from '@/components';
import { PAY_HISTORY_HEADER_LIST, PAY_HISTORY_LIST } from '@/constant';
import { colors } from '@/styles';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const onLogout = () => {
    localStorage.removeItem('key');
    window.location.reload();
  };

  return (
    <S.MainPageContainer>
      <S.MainPageHeader>
        <S.MainPageLogo src={Logo} />
        <S.MainPageHeaderText>
          클라우드보안과 2학년 2반
          <MdLogout size={20} onClick={onLogout} />
        </S.MainPageHeaderText>
      </S.MainPageHeader>
      <S.MainPageTopSection>
        <Text size={20} weight={700}>
          부스 결제 내역
        </Text>
        <MdRefresh size={26} onClick={() => window.location.reload()} />
      </S.MainPageTopSection>
      <S.MainPageHistory>
        <S.MainPageHistoryContainer>
          {PAY_HISTORY_HEADER_LIST.map((header) => (
            <Text size={14} color={colors.placeholder} weight={400}>
              {header}
            </Text>
          ))}
        </S.MainPageHistoryContainer>
        <S.MainPageHistoryLine />
        <S.MainPageHistoryContainer>
          {PAY_HISTORY_LIST.map((history) => (
            <>
              <Text size={15} weight={400}>
                {history.name}
              </Text>
              <Text size={15} weight={400}>
                {history.amount}
              </Text>
              <Text size={15} weight={400}>
                {history.date}
              </Text>
              <Text size={15} color={colors.danger} weight={400}>
                {history.refund ? '환불됨' : '환불하기'}
              </Text>
            </>
          ))}
        </S.MainPageHistoryContainer>
      </S.MainPageHistory>
    </S.MainPageContainer>
  );
};
