import styled from "styled-components";

export const DetailButton = styled.button`
  /* width: 65px;
  height: 20px; */
  background-color: #96bb7c;
  font-size: smaller;
  margin-bottom: 10px;
`;

export const AvailableButton = styled.button`
  background-color: ${(props) => (props.available ? "#96bb7c" : "red")};
  font-size: smaller;
  margin-bottom: 10px;
`;

export const AvailableText = styled.text`
  color: ${(props) => (props.available ? "#96bb7c" : "red")};
  font-size: smaller;
  margin-bottom: 10px;
`;

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
export const MainDiv = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  /* border-style: solid; */
  background-color: #ffeedb;
`;

export const StatusRow = styled.p`
  justify-content: center;
  align-items: center;
`;

export const HomeBody = styled.body`
  justify-content: space-around;
  /* text-align: center; */
  align-items: center;
  /* border-style: solid; */
  /* position: absolute; */
  /* left: 50%; */
  /* top: 50%; */
  width: 100%;
  background-color: #ffeedb;
  height: 100vh;
  display: flex;
  /* flex-direction: row; */
  background: url("https://img.freepik.com/free-vector/blank-book-white-background_1308-23052.jpg?size=626&ext=jpg");
  background-repeat: no-repeat;
  background-size: 100%;
`;
export const BodyLinks = styled.h3`
  color: black;
  text-decoration: none;
`;

export const BodyButtons = styled.button`
  background-color: transparent;
  text-decoration: none;
  border-style: none;
`;
// export const All = styled.html`
//   justify-content: center;
//   align-items: center;
//   background-color: #ffeedb;
//   border-style: solid;
//   color: #ffeedb;
//   top: 50%;
//   width: 100%;
//   height: 100vh;
// `;
export const XX = styled.body`
  justify-content: space-around;
  text-align: center;
  align-items: center;
  /* border-style: solid; */
  /* position: absolute; */
  /* left: 50%; */
  /* top: 50%; */
  width: 100%;
  background-color: #ffeedb;
  height: 100vh;
  display: flex;
  /* flex-direction: row; */
  background: url("https://img.freepik.com/free-vector/blank-book-white-background_1308-23052.jpg?size=626&ext=jpg");
  background-repeat: no-repeat;
  background-size: 100%;
`;
