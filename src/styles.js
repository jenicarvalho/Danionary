import styled from "styled-components";

const backgrounds = [
  "#ea4854",
  "#9056c5",
  "#f3bb2e",
  "#408d5c",
  "#3094bf",
  "#f27530",
  "#83a90f",
  "#0b51c8"
];

const getBackground = () =>
  backgrounds[Math.floor(backgrounds.length * Math.random())];

export const Head = styled.header`
  text-align: center;
  font-size: 30px;
`;
export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  margin: 2em auto;
  grid-gap: 10px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 2em 10px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {
    background-color: ${getBackground};
    color: #fff;
    padding: 40px 30px;
    border-radius: 4px;

    &:nth-child(even) {
      background-color: ${getBackground};
    }

    &:nth-child(3) {
      background-color: ${getBackground};
    }

    &:nth-child(4) {
      background-color: ${getBackground};
    }

    &:last-child {
      background-color: ${getBackground};
    }

    h2 {
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      font-size: 32px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.38);
      padding: 5px;
      margin-bottom: 20px;
    }

    strong {
      font-weight: 900;
    }

    p {
      font-weight: 500;
      font-size: 20px;
    }
  }
`;
