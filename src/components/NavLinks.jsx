//* Imports
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//* NavLinks Style
const Parent = styled.article`
  width: 300px;
  text-align: left;

  section {
    padding: 4.7em 2em;
    border-radius: 20px;
    background: #5746ea;
    position: relative;

    .image {
      margin-bottom: 2.3rem;
      width: 80px;
      margin-top: -3rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        position: relative;
      }

      &::before {
        content: "";
        position: absolute;
        width: 87px;
        height: 87px;
        background: #fff;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .info {
      span {
        color: #a4a0ff;
        font-size: 1em;
        font-weight: 500;
      }

      h2 {
        font-size: 3em;
        color: #fafdff;
        font-weight: 300;
      }
    }
  }

  ul {
    border-radius: 0px 0 20px 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    background: #1d204b;
    padding: 2.5em 2.3em;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      a {
        text-decoration: none;
        color: #7377b1;
        font-size: 1.1em;
        font-weight: 400;
        transition: 0.5s;

        &:hover {
          color: #fff;
        }
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 100px;
      background: #1d204b;
      position: absolute;
      top: -50%;
      z-index: -1;
      left: 0;
    }
  }

  @media screen and (max-width: 576px) {
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3em 2em;

      .image {
        width: 60px;
        margin: 0;
        padding: 0;

        &::before {
          width: 66px;
          height: 66px;
        }
      }

      .info {
        h2 {
          font-size: 1.4em;
        }
      }
    }

    ul {
      flex-direction: row;
      gap: 30px;
      padding: 1.5em 2.3em;
    }
  }
`;

//* NavLinks JSX
const NavLinks = () => {
  return (
    <Parent>
      <section>
        <div className="image">
          <img src="/images/image-jeremy.png" alt="Personal Photo" />
        </div>
        <div className="info">
          <span>Report for</span>
          <h2>Jeremy Robson</h2>
        </div>
      </section>

      <ul>
        <li>
          <NavLink to="/daily">Daily</NavLink>
        </li>
        <li>
          <NavLink to="/weekly">Weekly</NavLink>
        </li>
        <li>
          <NavLink to="/monthly">Monthly</NavLink>
        </li>
      </ul>
    </Parent>
  );
};

export default NavLinks;
