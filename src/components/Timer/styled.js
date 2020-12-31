import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const Timer = styled.div`
  width: 500px;
  height: 500px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3em;
  font-weight: 700;
  font-family: var(--primary-font);

  background: var(--main-color);
  color: var(--secondary-color);

  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);

  position: relative;

  svg {
    position: absolute;
  }

  .porcentage {
    stroke: var(--secondary-color);
    stroke-dasharray: 1260;
    stroke-dashoffset: calc(1260 - (1260 * 50) / 100);

    transition: all ease-in-out 500ms;
  }
`
