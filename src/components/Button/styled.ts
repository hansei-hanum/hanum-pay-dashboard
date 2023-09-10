import styled from '@emotion/styled';

import { colors } from '@/styles';

export const ButtonElement = styled.div`
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
