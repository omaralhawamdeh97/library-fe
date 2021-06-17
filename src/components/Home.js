import { Link } from "react-router-dom";
import { BodyButtons, BodyLinks, HomeBody } from "../styles";

const Home = () => {
  return (
    <HomeBody>
      {/* <MainDiv> */}
      <Link to="/BooksList">
        <BodyButtons>
          <BodyLinks>Books List</BodyLinks>
        </BodyButtons>
      </Link>

      <Link to="/MembersList">
        <BodyButtons>
          <BodyLinks>Members List</BodyLinks>
        </BodyButtons>
      </Link>
      {/* </MainDiv> */}
    </HomeBody>
  );
};

export default Home;
