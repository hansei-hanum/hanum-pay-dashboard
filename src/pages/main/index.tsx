import React, { useEffect, useState } from 'react';
import { MdLogout, MdRefresh } from 'react-icons/md';

import { Logo } from '@/assets';
import { Button, Modal, Text } from '@/components';
import { PAY_HISTORY_HEADER_LIST } from '@/constant';
import { colors } from '@/styles';
import { useGetPaymentDetail, useRefundPayment } from '@/hooks';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const [modal, setModal] = useState({
    state: false,
    id: 0,
    money: '',
    name: '',
  });

  const boothPayment = useGetPaymentDetail({ page: page, limit: 17 });
  const boothData = boothPayment.data && boothPayment.data?.data;
  const boothLoading = boothPayment.isLoading;

  const { mutate } = useRefundPayment(page);

  const fontSize = 15;
  const fontWeight = 400;

  const formatTime = (now: Date, hour: number, minute: number) => {
    const minutes = now.getHours() * 60 + now.getMinutes(); // 현재 시간을 분으로 환산
    const targetTime = hour * 60 + minute; // 목표 시간을 분으로 환산
    const diff = minutes - targetTime; // 현재 시간과 목표 시간의 차이
    const diffHour = Math.floor(diff / 60) > 0 ? `${Math.floor(diff / 60)}시간` : '';
    return `${diffHour} ${diff % 60}분 전`;
  };

  const formatAmount = (amount: number) => {
    if (amount < 999) return amount.toString();
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const formatUserName = (name: string) => {
    const nameLength = name.length;
    const formateName = name.replace(name.slice(nameLength - 2), '*') + name.slice(-1);
    return formateName;
  };

  const onLogout = () => {
    localStorage.removeItem('key');
    window.location.reload();
  };

  useEffect(() => {
    // if (!boothLoading && !boothData) {
    //   localStorage.removeItem('key');
    //   window.location.reload();
    //   alert('부스 키가 올바르지 않습니다.');
    // }
  }, [boothLoading, boothData]);

  useEffect(() => {
    window.scrollTo(0, 0);
    boothPayment.refetch();
  }, [page]);

  return (
    <S.MainPageContainer>
      {!boothLoading && boothData ? (
        <>
          <div>
            <S.MainPageHeader>
              <S.MainPageLogo src={Logo} />
              <S.MainPageHeaderText>
                {boothData.boothInfo.classification}
                <MdLogout size={20} onClick={onLogout} />
              </S.MainPageHeaderText>
            </S.MainPageHeader>
            <S.MainPageTopSection>
              <div>
                <Text size={14} color={colors.placeholder} weight={fontWeight}>
                  부스 총 수익금
                  <br />
                </Text>
                <Text size={22} weight={700}>
                  {boothData && formatAmount(boothData.balanceAmount)}원
                </Text>
              </div>
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
                  <Text size={14} color={colors.placeholder} weight={fontWeight} key={header}>
                    {header}
                  </Text>
                ))}
              </S.MainPageHistoryContainer>
              <S.MainPageHistoryLine />
              {boothData?.payments.map(
                ({ userName, id, paidAmount, status, refundedAmount, paidTime, refundedTime }) => {
                  const isPaid = status === 'paid';
                  const historyTime = new Date(isPaid ? paidTime : refundedTime);
                  const hour = historyTime.getHours();
                  const minute = historyTime.getMinutes();

                  const moneyFormat = isPaid
                    ? formatAmount(paidAmount)
                    : formatAmount(refundedAmount);

                  return (
                    <>
                      <S.MainPageHistoryContent key={id}>
                        <Text size={fontSize} weight={fontWeight}>
                          {userName}
                        </Text>
                        <Text size={fontSize} weight={fontWeight}>
                          {moneyFormat}원
                        </Text>
                        <Text size={fontSize} weight={fontWeight}>
                          {formatTime(new Date(), hour, minute)}
                        </Text>
                        <Text
                          size={fontSize}
                          color={isPaid ? colors.danger : colors.blue}
                          weight={fontWeight}
                          onClick={() =>
                            setModal({
                              state: true,
                              id: id,
                              name: formatUserName(userName),
                              money: moneyFormat,
                            })
                          }
                        >
                          {isPaid ? '환불하기' : '환불됨'}
                        </Text>
                      </S.MainPageHistoryContent>
                    </>
                  );
                },
              )}
            </S.MainPageHistory>
          </div>
          <S.MainPageFooter>
            <Text
              size={15}
              onClick={() => {
                if (page === 1) return;
                setPage(page - 1);
              }}
              color={page === 1 ? colors.placeholder : colors.black}
            >
              &larr;
            </Text>
            <Text size={15}>{boothData?.page} / </Text>
            <Text size={15} color={colors.placeholder} weight={fontWeight}>
              {boothData?.totalPage}
            </Text>
            <Text
              size={15}
              onClick={() => {
                if (page === boothData?.totalPage) return;
                setPage(page + 1);
              }}
              color={page === boothData?.totalPage ? colors.placeholder : colors.black}
            >
              &rarr;
            </Text>
          </S.MainPageFooter>
        </>
      ) : !boothLoading && !boothData ? (
        <>
          <S.MainPageHeader>
            <S.MainPageLogo src={Logo} />
          </S.MainPageHeader>
          <Modal
            title="로그인 실패"
            body={
              <S.MainPageTextContainer>
                부스키가 잘못되었습니다
                <br />
                올바른 부스키를 다시 입력해주세요
                <br />
                만약 올바르게 입력했는데도 이 메시지가 표시된다면, 한움페이 부스에 방문해주세요.
              </S.MainPageTextContainer>
            }
            footer={<Button onClick={onLogout}>확인</Button>}
          />
        </>
      ) : (
        <div>
          <S.MainPageHeader>
            <S.MainPageLogo src={Logo} />
          </S.MainPageHeader>
          <Text size={18} weight={500}>
            Loading...
          </Text>
        </div>
      )}
      {modal.state && (
        <Modal
          title="환불 확인"
          body={
            <S.MainPageTextContainer>
              {modal.name}님에게 {modal.money}원을 환불해요.
              <br />
              환불을 진행하면 부스 수익금이 감소하며 즉시 {modal.name}님의 한움페이 잔액에 환불금이
              입금돼요.
              <br />
              계속할까요?
            </S.MainPageTextContainer>
          }
          footer={
            <Button.Container>
              <Button
                onClick={() => {
                  setModal((prev) => ({ ...prev, state: false }));
                }}
                isSecondary
              >
                취소
              </Button>
              <Button
                onClick={() => {
                  mutate({ id: modal.id });
                  setModal((prev) => ({ ...prev, state: false }));
                }}
              >
                확인
              </Button>
            </Button.Container>
          }
        />
      )}
    </S.MainPageContainer>
  );
};
