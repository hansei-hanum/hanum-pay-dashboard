import styled from '@emotion/styled';

import { colors } from '@/styles';

export const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
`;

export const MainPageLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainPageLogo = styled.img`
  width: 170px;
  height: 50px;
`;

export const MainPageText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const MainPageButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 14px;
`;

export const MainPageButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background: ${colors.primary};
  border-radius: 10px;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
`;
