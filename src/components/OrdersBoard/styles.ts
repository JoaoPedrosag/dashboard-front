import styled from 'styled-components';

export const Board = styled.div`
  background: #fefefe;
  margin: ${(props) => props.theme.FONT_SIZE['2xl']} 0;
  padding: ${(props) => props.theme.FONT_SIZE.md};
  border: ${(props) => props.theme.FONT_SIZE.xxs}solid rgba(204, 204, 204, 0.4);
  border-radius: ${(props) => props.theme.FONT_SIZE.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;

  > header {
    padding: ${(props) => props.theme.FONT_SIZE.xxs};
    font-size: ${(props) => props.theme.FONT_SIZE.xs};
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.FONT_SIZE.xxs};
  }
`;
