import styled, { css } from 'styled-components'

export const Text = styled.span`
  font-family: 'Syne', sans-serif;
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  display: ${({ display }) => display || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  align-items: ${({ alignItems }) => alignItems || null};
  justify-content: ${({ justify }) => justify || null};
  font-size: ${({ size }) => size || null};
  transform: ${({ transform }) => transform || null};
  font-weight: ${({ weight }) => weight || null};
  line-height: ${({ line }) => line || null};
  padding: ${({ padding }) => padding || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-shadow: ${({ textShadow }) => textShadow || null};
  cursor: ${({ cursor }) => cursor || null};
  gap: ${({ gap }) => gap || null};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ align }) => align || null};
  text-decoration: ${({ decoration }) => decoration || null};
  letter-spacing: ${({ spacing }) => spacing || null};
  word-wrap: ${({ wrap }) => wrap || null};
  opacity: ${({ opacity }) => opacity || null};
  z-index: ${({ index }) => index || null};

  &:hover {
    ${({ hover }) =>
      hover &&
      css`
        ${hover}
      `};
  }
  ${({ responsive }) =>
    responsive &&
    css`
      @media screen and (max-width: 1400px) {
        ${responsive}
      }
    `}
  ${({ before }) =>
    before &&
    `
    &::before{
      content: ""; /* Agregamos contenido antes del elemento li */
      display: inline-block;
      width: 15px; /* Ancho del cuadrado */
      height: 15px; /* Alto del cuadrado */
      background-color: #8473B4; /* Color del cuadrado */
      margin-right: .75rem;
    }
  
  }`}
`
export const Ul = styled.ul`
  font-family: 'Syne', sans-serif;
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  display: ${({ display }) => display || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  align-items: ${({ alignItems }) => alignItems || null};
  justify-content: ${({ justify }) => justify || null};
  font-size: ${({ size }) => size || null};
  transform: ${({ transform }) => transform || null};
  font-weight: ${({ weight }) => weight || null};
  line-height: ${({ line }) => line || null};
  padding: ${({ padding }) => padding || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-shadow: ${({ textShadow }) => textShadow || null};
  cursor: ${({ cursor }) => cursor || null};
  gap: ${({ gap }) => gap || null};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ align }) => align || null};
  text-decoration: ${({ decoration }) => decoration || null};
  letter-spacing: ${({ spacing }) => spacing || null};
  word-wrap: ${({ wrap }) => wrap || null};
  opacity: ${({ opacity }) => opacity || null};

  &:hover {
    ${({ hover }) =>
      hover &&
      css`
        ${hover}
      `};
  }
  ${({ responsive }) =>
    responsive &&
    css`
      @media screen and (max-width: 1400px) {
        ${responsive}
      }
    `}
`
export const Li = styled.li`
  font-family: 'Syne', sans-serif;
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  display: ${({ display }) => display || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  align-items: ${({ alignItems }) => alignItems || null};
  justify-content: ${({ justify }) => justify || null};
  font-size: ${({ size }) => size || null};
  transform: ${({ transform }) => transform || null};
  font-weight: ${({ weight }) => weight || null};
  line-height: ${({ line }) => line || null};
  padding: ${({ padding }) => padding || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-shadow: ${({ textShadow }) => textShadow || null};
  cursor: ${({ cursor }) => cursor || null};
  gap: ${({ gap }) => gap || null};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ align }) => align || null};
  text-decoration: ${({ decoration }) => decoration || null};
  letter-spacing: ${({ spacing }) => spacing || null};
  word-wrap: ${({ wrap }) => wrap || null};
  opacity: ${({ opacity }) => opacity || null};

  &:hover {
    ${({ hover }) =>
      hover &&
      css`
        ${hover}
      `};
  }
  ${({ responsive }) =>
    responsive &&
    css`
      @media screen and (max-width: 1400px) {
        ${responsive}
      }
    `}

  ${({ before }) =>
    before &&
    `
    &::before{
      content: ""; /* Agregamos contenido antes del elemento li */
      display: inline-block;
      width: 20px; /* Ancho del cuadrado */
      height: 20px; /* Alto del cuadrado */
      background-color: #8473B4; /* Color del cuadrado */
      margin-right: 5px;
    }
  
  }`}
`

export const Hr = styled.hr`
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => size || null};
  border: ${({ border }) => border || null};
  margin: ${({ margin }) => margin || null};
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  transform: ${({ transform }) => transform || null};
`
