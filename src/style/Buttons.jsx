import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-family: 'Syne', sans-serif;
  font-weight: ${({ weight }) => weight || null};
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  display: ${({ display }) => display || null};
  flex-direction: ${({ flex }) => flex || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ align }) => align || null};
  align-content: ${({ content }) => content || null};
  gap: ${({ gap }) => gap || null};
  padding: ${({ padding }) => padding || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top: ${({ borderTop }) => borderTop || null};
  border-left: ${({ borderLeft }) => borderLeft || null};
  border-right: ${({ borderRight }) => borderRight || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-align: ${({ textAlign }) => textAlign || null};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  color: ${({ color }) => color || null};
  transform: ${({ transform }) => transform || null};
  margin: ${({ margin }) => margin || null};
  opacity: ${({ opacity }) => opacity || null};
  z-index: ${({ index }) => index || null};
  font-size: ${({ size }) => size || '1rem'};
  cursor: ${({ cursor }) => cursor || null};
  text-decoration: ${({ decoration }) => decoration || null};
  font-weight: ${({ weight }) => weight || null};
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    outline-offset: 0;
  }

  &:hover {
    ${({ hover }) =>
      hover &&
      css`
        ${hover}
      `};
  }

  ${({ chevron }) =>
    chevron &&
    ` > :last-child {
        position: absolute;
        right: 2rem;
      }`};

  ${({ after }) =>
    after &&
    `&::after {
    content: '\\2192';
    font-size: 2.5rem;
    position: absolute;
    transform: translate(-30%,-45%);
    right: 2rem;
    }
        `}
`
