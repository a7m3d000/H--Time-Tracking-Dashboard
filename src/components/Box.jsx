//* Imports
import styled from "styled-components";
import { BiError } from "react-icons/bi";

//* Box Style
const Parent = styled.section`
  width: 300px;
  background: #1d204b;
  padding: 1.7em;
  border-radius: 20px;
  position: relative;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.7em;
    position: relative;

    span {
      color: #f8feff;
      font-weight: 450;
    }

    img {
      padding: 0.5rem;
      border-radius: 15px;
      transition: 0.5s;
      border: 2px solid transparent;

      &:hover {
        cursor: pointer;
        border-color: ${(props) => props.color};

        & + .error {
          display: flex;
        }
      }
    }

    .error {
      content: "";
      width: 110px;
      height: 45px;
      position: absolute;
      background: #0d13239e;
      top: -50px;
      right: 15px;
      border-radius: 10px;
      trasnistion: 0.5s;
      justify-content: center;
      align-items: center;
      display: none;

      .danger-icon {
        font-size: 25px;
        position: absolute;
        left: 7px;
        top: 50%;
        transform: translateY(-50%);
        color: red;
      }

      span {
        padding-left: 1.5rem;
        color: red;
        font-size: 0.71em;
      }
    }
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      font-size: 3.5em;
      font-weight: 300;
      color: #f8feff;
    }

    span {
      color: #7377b1;
      font-weight: 500;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 100px;
    background-color: ${(props) => props.color};
    position: absolute;
    left: 0;
    top: -55px;
    border-radius: 20px 20px 0 0;
    background-image: url("${(props) => props.icon}");
    background-repeat: no-repeat;
    background-position: 95% -20%;
    z-index: -1;
  }

  &:hover {
    background: #34397b;
    cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    .text {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 0.8rem;
      }

      h2 {
        font-size: 2.1rem;
      }
    }
  }
`;

//* Box JSX
const Box = (props) => {
  return (
    <Parent
      top={props.top}
      title={props.title}
      bottom={props.title}
      icon={props.icon}
      color={props.color}
    >
      <div className="top">
        <span>{props.top}</span>
        <img
          src="/images/icon-ellipsis.svg"
          title=""
          alt="Three Dots Icon"
          className="dots"
        />
        <div className="error">
          <BiError className="danger-icon" />
          <span>No Options</span>
        </div>
      </div>

      <div className="text">
        <h2>{props.title}</h2>
        <span>{props.bottom}</span>
      </div>
    </Parent>
  );
};

export default Box;
