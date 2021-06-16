import { Link, Redirct, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//components
// import AddBook from "./buttons/AddButton"
//Styling
// import {AddBook} from "../styles"

const MemberDetail = ({ addBook }) => {
  const members = useSelector((state) => state.members);
  const { memberSlug } = useParams();
  const member = members.find((member) => member.slug === memberSlug);

  if (!member) return <Redirct to="./members" />;

  return (
    <div>
      <Link to="//members">Back to Members</Link>
      <h1>
        `${member.firstName} {member.lastName}`
      </h1>
      <p>{member.currentlyBorrowedBooks}</p>
      <p>{member.membership}</p>

      <AddMember memberId={member.id} addMember={addMember} />
    </div>
  );
};
export default MemberDetail;
