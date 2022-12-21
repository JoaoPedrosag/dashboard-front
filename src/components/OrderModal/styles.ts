import styled from 'styled-components';
export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 25%;
  height: 50%;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-size: 24px;
    }

    button {
      border: 0;
      background: #fff;
      display: flex;
    }
  }
`;
