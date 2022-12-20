import styled from 'styled-components';

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) => props.theme.FONT_SIZE['2xl']};

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: ${(props) => props.theme.FONT_SIZE.xxs};
    height: 128px;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.FONT_SIZE['5xl']};

	span {
	  font-size: ${(props) => props.theme.FONT_SIZE.xs};
	  color: #666;
	}

    & + button {
      margin-top: ${(props) => props.theme.FONT_SIZE['2xl']};
    }
  }
`;

