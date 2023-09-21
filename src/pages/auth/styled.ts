import styled from '@emotion/styled';

import { colors } from '@/styles';

export const AuthPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 530px;
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

export const AuthPageFormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const AuthPageFormInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${colors.placeholder};
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  width: 100%;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }

  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: ${colors.placeholder};
  }

  &:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #2a75e8;
  }

  &:focus + .text-field-label {
    color: #2a75e8;
  }
`;

export const AuthPageFormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: ${colors.placeholder};
  pointer-events: none;
`;
