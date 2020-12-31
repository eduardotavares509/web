import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100px;
    height: 100px;
    border: none;
    background: var(--secondary-color);
    border-radius: 50%;
    transition: all ease-in-out 300ms;
    color: #fff;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 20px var(--secondary-color);
    }
  }

  p {
    color: #fff;
    margin-top: 20px;
    font-size: 1.5em;
    font-wegth: 300;
  }
`
