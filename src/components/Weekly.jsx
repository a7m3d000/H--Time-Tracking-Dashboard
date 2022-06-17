//* Imports
import styled from "styled-components";
import Box from "./Box";

//* Weekly Style
const Parent = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 95px;
  align-items: center;
  justify-content: center;

  .top-row,
  .bottom-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media screen and (max-width: 1200px) {
    gap: 70px;

    .top-row,
    .bottom-row {
      flex-wrap: nowrap;
    }
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 75px;

    .top-row,
    .bottom-row {
      flex-wrap: wrap;
      flex-direction: column;
      gap: 75px;
    }
  }
`;

// Weekly JSX
const Weekly = () => {
  return (
    <Parent>
      <div className="top-row">
        <Box
          top="Work"
          title="32hrs"
          bottom="Last Week - 36hrs"
          icon="/images/icon-work.svg"
          color="#ff8b64"
        />
        <Box
          top="Play"
          title="10hrs"
          bottom="Last Week - 8hrs"
          icon="/images/icon-play.svg"
          color="#56c2e6"
        />
        <Box
          top="Study"
          title="4hrs"
          bottom="Last Week - 7hrs"
          icon="/images/icon-study.svg"
          color="#ff5e7d"
        />
      </div>
      <div className="bottom-row">
        <Box
          top="Esercise"
          title="4hrs"
          bottom="Last Week - 5hrs"
          icon="/images/icon-exercise.svg"
          color="#4acf84"
        />
        <Box
          top="Social"
          title="5hrs"
          bottom="Last Week - 10hrs"
          icon="/images/icon-social.svg"
          color="#7235d1"
        />
        <Box
          top="Self Care"
          title="2hrs"
          bottom="Last Week - 2hrs"
          icon="/images/icon-self-care.svg"
          color="#f1c75b"
        />
      </div>
    </Parent>
  );
};

export default Weekly;
