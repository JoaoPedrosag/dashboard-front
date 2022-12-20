import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  gap: ${(props) => props.theme.FONT_SIZE['4xl']};
`;

