import styled from 'styled-components';

export const Form = styled.form`
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
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  overflow-y: ${({ overflow }) => overflow || null};
  background: ${({ bg }) => bg || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-align: ${({ textAlign }) => textAlign || null};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  color: ${({ color }) => color || null};

  ${({ scrollbar }) =>
    scrollbar &&
    `
&::-webkit-scrollbar {
  width: 5px;
  height: 100px;
  background-color: transparent;
}
&::-webkit-scrollbar-track {
  border-radius: 20px;
  margin: 3rem;
}

&::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: #d9d9d9;
}`}
  ${({ input, inputWidth, textWidth }) =>
    input &&
    `> input,select {
      width: ${inputWidth || 'initial'};
      position: relative;
      border: ${input === 'border' ? 'none' : '1px solid #E6E6E6'};
      border-radius: 1rem;
      padding: 0.8rem
    }
    > textarea {
      width: ${textWidth || 'initial'};
      background: #FFFFFF;
      border: 1px solid #E6E6E6;
      border-radius: 0.6rem;
      padding: 0.8rem;
      isolation: isolate;
    } 
    `}
`;
