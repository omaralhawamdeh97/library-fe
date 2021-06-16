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
`;

export const StatusRow = styled.p`
  justify-content: center;
  align-items: center;
`;
