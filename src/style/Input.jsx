import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  text-align: ${({ textAlign }) => textAlign || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  padding: ${({ padding }) => padding || null};
  margin: ${({ margin }) => margin || null};
  appearance: ${({ appearance }) => appearance || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  border-top-right-radius: ${({ topRight }) => topRight || null};
  border-bottom-right-radius: ${({ bottomRight }) => bottomRight || null};
  outline: ${({ outline }) => outline || null};
  font-size: ${({ size }) => size || null};

  > option {
    background: ${({ bgOption }) => bgOption || null};
    color: ${({ colorOption }) => colorOption || null};
  }
`
export const Image = styled.img`
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  text-align: ${({ textAlign }) => textAlign || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  color: ${({ color }) => color || null};
  background: ${({ bg }) => bg || null};
  padding: ${({ padding }) => padding || null};
  margin: ${({ margin }) => margin || null};
  appearance: ${({ appearance }) => appearance || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  border-top-right-radius: ${({ topRight }) => topRight || null};
  border-bottom-right-radius: ${({ bottomRight }) => bottomRight || null};
  outline: ${({ outline }) => outline || null};
  font-size: ${({ size }) => size || null};

  > option {
    background: ${({ bgOption }) => bgOption || null};
    color: ${({ colorOption }) => colorOption || null};
  }
  ${({ responsive }) =>
    responsive &&
    css`
      @media screen and (max-width: 1400px) {
        ${responsive}
      }
    `}
`

export const InputFile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  > label {
    background: #afcaff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #166efd;
    position: absolute;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  > span {
    width: ${({ widthSpan }) => widthSpan || '50%'};
    position: absolute;
    right: ${({ rigthSpan }) => rigthSpan || '7%'};
    left: ${({ leftSpan }) => leftSpan || null};
    font-size: ${({ sizeSpan }) => sizeSpan || '0.9rem'};
  }

  > input[type='file'] {
    opacity: 0;
  }
`
