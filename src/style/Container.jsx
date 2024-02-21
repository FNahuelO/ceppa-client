import styled, { css, keyframes } from 'styled-components'

const ScrollbarStyle = css`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    margin: 2rem;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    margin: 5rem;
    background-color: #0000007d;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track-piece {
    border-radius: 50px;
  }
`

const spinAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

export const Container = styled.div`
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  min-height: ${({ minHeight }) => minHeight || null};
  max-height: ${({ maxHeight }) => maxHeight || null};
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ align }) => align || null};
  align-content: ${({ content }) => content || null};
  flex: ${({ flex }) => flex || null};
  gap: ${({ gap }) => gap || null};
  padding: ${({ padding }) => padding || null};
  overflow: ${({ overflow }) => overflow || null};
  overflow-y: ${({ overflowY }) => overflowY || null};
  overflow-x: ${({ overflowX }) => overflowX || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top: ${({ borderTop }) => borderTop || null};
  border-left: ${({ borderLeft }) => borderLeft || null};
  border-right: ${({ borderRight }) => borderRight || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-align: ${({ textAlign }) => textAlign || null};
  flex-wrap: ${({ wrap }) => wrap || null};
  flex-grow: ${({ grow }) => grow || null};
  color: ${({ color }) => color || null};
  background-size: ${({ bgSize }) => bgSize || null};
  background-position: ${({ bgPosition }) => bgPosition || null};
  background-repeat: ${({ bgRepeat }) => bgRepeat || null};
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  inset: ${({ inset }) => inset || null};
  transform: ${({ transform }) => transform || null};
  transition: ${({ transition }) => transition || null};
  opacity: ${({ opacity }) => opacity || null};
  margin: ${({ margin }) => margin || null};
  z-index: ${({ index }) => index || null};
  font-size: ${({ size }) => size || null};
  animation: ${({ animation }) =>
    animation &&
    css`
      ${slideIn} 0.5s ease-in-out;
    `};

  ${({ scrollStyles }) => scrollStyles && ScrollbarStyle}

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

  ${({ beforeLeft }) =>
    beforeLeft &&
    `
    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: #8473B4; /* Color del borde */
    }
  
    &::before {
      top: 0;
      left: 0;
      width: 100%; /* Borde superior - ajusta según sea necesario */
      height: 2px; /* Grosor del borde superior */
    }
  
    &::after {
      bottom: 0;
      right: 0;
      width: 100%; /* Ancho del borde inferior - ajusta según sea necesario */
      height: 2px; /* Grosor del borde inferior */
    }
  
  }`}
`
export const ContainerLoading = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 1.5rem;
  animation: ${css`
      ${spinAnimation}`} 2s linear infinite;
`
