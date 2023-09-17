import React, { useEffect, useState } from 'react';
import { MdLogout, MdRefresh } from 'react-icons/md';

import { Logo } from '@/assets';
import { Button, Modal, Text } from '@/components';
import { PAY_HISTORY_HEADER_LIST, PAY_HISTORY_LIST } from '@/constant';
import { colors } from '@/styles';
import { useGetPaymentDetail } from '@/hooks/query/useGetPaymentDetail';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const [modal, setModal] = useState(false);
  const { data, isLoading } = useGetPaymentDetail({ page: page, limit: 20 });

  console.log('data', data);

  const fontSize = 15;
  const fontWeight = 400;

  const formatTime = (now: Date, hour: number, minute: number) => {
    const minutes = now.getHours() * 60 + now.getMinutes(); // 현재 시간을 분으로 환산
    const targetTime = hour * 60 + minute; // 목표 시간을 분으로 환산
    const diff = minutes - targetTime; // 현재 시간과 목표 시간의 차이
    const diffHour = Math.floor(diff / 60) > 0 ? `${Math.floor(diff / 60)}시간` : '';
    return `${diffHour} ${diff % 60}분 전`;
  };

  const onLogout = () => {
    localStorage.removeItem('key');
    window.location.reload();
  };

  useEffect(() => {
    if (!isLoading && !data) {
      localStorage.removeItem('key');
      window.location.reload();
      alert('로그인이 필요합니다.');
    }
  }, [isLoading, data]);

  return (
    <S.MainPageContainer>
      {isLoading && (
        <>
          <S.MainPageHeader>
            <S.MainPageLogo src={Logo} />
          </S.MainPageHeader>
          <Text size={18} weight={500}>
            Loading...
          </Text>
        </>
      )}
      {!isLoading && data && (
        <>
          <S.MainPageHeader>
            <S.MainPageLogo src={Logo} />
            <S.MainPageHeaderText>
              클라우드보안과 2학년 2반
              <MdLogout size={20} onClick={onLogout} />
            </S.MainPageHeaderText>
          </S.MainPageHeader>
          <S.MainPageTopSection>
            <Text size={14} color={colors.placeholder} weight={fontWeight}>
              부스 잔액
              <br />
              {data.data.balanceAmount}원
            </Text>
            <S.MainPageHistoryHeader>
              <Text size={20} weight={700}>
                부스 결제 내역
              </Text>
              <MdRefresh size={26} onClick={() => window.location.reload()} />
            </S.MainPageHistoryHeader>
          </S.MainPageTopSection>
          <S.MainPageHistory>
            <S.MainPageHistoryContainer>
              {PAY_HISTORY_HEADER_LIST.map((header) => (
                <Text size={14} color={colors.placeholder} weight={fontWeight}>
                  {header}
                </Text>
              ))}
            </S.MainPageHistoryContainer>
            <S.MainPageHistoryLine />
            {PAY_HISTORY_LIST.map(({ name, amount, time, refund }) => {
              const historyTime = new Date(time);
              const hour = historyTime.getHours();
              const minute = historyTime.getMinutes();
              return (
                <>
                  <S.MainPageHistoryContent>
                    <Text size={fontSize} weight={fontWeight}>
                      {name}
                    </Text>
                    <Text size={fontSize} weight={fontWeight}>
                      {amount}
                    </Text>
                    <Text size={fontSize} weight={fontWeight}>
                      {formatTime(new Date(), hour, minute)}
                    </Text>
                    <Text
                      size={fontSize}
                      color={colors.danger}
                      weight={fontWeight}
                      onClick={() => setModal(true)}
                    >
                      {refund ? '환불됨' : '환불하기'}
                    </Text>
                  </S.MainPageHistoryContent>
                </>
              );
            })}
            {modal && (
              <Modal
                title="환불확인"
                body={
                  <>
                    박*영님에게 10,000원을 환불해요.
                    <br />
                    환불을 진행하면 부스 수익금이 감소하며 즉시 박*영님의 한움페이 잔액에 환불금이
                    입금돼요.
                    <br />
                    계속할까요?
                  </>
                }
                footer={
                  <Button.Container>
                    <Button onClick={() => setModal(false)}>취소</Button>
                    <Button onClick={() => setModal(false)}>확인</Button>
                  </Button.Container>
                }
              />
            )}
          </S.MainPageHistory>
        </>
      )}
    </S.MainPageContainer>
  );
};
