import styled from '@emotion/styled';

import { colors } from '@/styles';

export const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 10px 20px;
`;

export const MainPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainPageLogo = styled.img`
  width: 110px;
  height: 50px;
`;

export const MainPageHeaderText = styled.p`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const MainPageTopSection = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MainPageHistory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainPageHistoryLine = styled.div`
  width: 100%;
  border-bottom: 0.1px solid ${colors.placeholder};
  margin: 16px 0;
`;

export const MainPageHistoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.6fr;
  margin-top: 14px;
`;

export const MainPageHistoryContent = styled(MainPageHistoryContainer)`
  padding: 12px 0;
  margin: 0;
`;
