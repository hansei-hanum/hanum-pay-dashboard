import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
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
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
