import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const Timer = styled.div`
  width: 500px;
  height: 500px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3.5em;
  font-weight: 700;
  font-family: var(--primary-font);

  background: var(--primary-color);
  color: var(--secondary-color);

  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  position: relative;

  svg {
    position: absolute;
  }
`
