import styled from '@emotion/styled';

import { colors } from '@/styles';

export const AuthPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
`;

export const AuthPageMainSection = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
`;

export const AuthPageLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthPageLogo = styled.img`
  width: 170px;
  height: 50px;
`;

export const AuthPageText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const AuthPageInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 14px;
`;

export const AuthPageInputLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.placeholder};
`;

export const AuthPageInput = styled.input`
  padding: 0;
  padding-bottom: 12px;
  font-size: 16px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${colors.placeholder};
`;

export const AuthPageButton = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  background: ${colors.primary};
  border-radius: 10px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 700;
`;
