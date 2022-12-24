import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
`;
const Span = styled.span`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 5px solid;
  border-color: ${({ theme }) => theme.colors.lightGray}
    ${({ theme }) => theme.colors.lightGray} transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  ::before,
  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 5px solid;
    border-color: transparent transparent ${({ theme }) => theme.colors.mint}
      ${({ theme }) => theme.colors.mint};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }

  ::before {
    width: 80px;
    height: 80px;
    border-color: ${({ theme }) => theme.colors.lightGray}
      ${({ theme }) => theme.colors.lightGray} transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoaderWrapper>
      <Span></Span>
    </LoaderWrapper>
  );
};

export default Loading;
