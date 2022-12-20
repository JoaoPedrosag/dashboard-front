import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.red[500]};
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 21px;
  }
  h2 {
    color: #fff;
    font-size: 26px;
    opacity: 0.9;
    font-weight: 400;
  }
`;
