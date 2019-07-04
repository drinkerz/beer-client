import styled from 'styled-components';

//타원형 버튼
export const EllipticalButton = styled.button`
  line-height: 42px;
  padding: 0 20px;
  background: ${props => (props.bgColor)};
  color: ${props => (props.fontColor)};
  text-align: center;
  border: 0;
  border-radius: 60px;
  font-size: 13px;
`;

//아무것도 없고 텍스트만 있는 버튼
export const TextButton = styled.button`
  line-height: 42px;
  padding: 0 20px;
  background: none;
  color: ${props => (props.fontColor)};
  text-align: center;
  border: 0;
  border-radius: 60px;
  font-size: 13px;
`;