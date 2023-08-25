import { styled } from 'styled-components';
import { colors } from './color';

export const AuthPageLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

export const LinkWrap = styled.div`
  width: 100%;
  text-align: right;
`;

export const ErrorText = styled.span`
  color: ${colors.error};
  font-size: 15px;
  height: 1rem;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin: 0.2rem;
  color: ${colors.primary};
`;
