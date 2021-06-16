// Components
// import AddButton from "./buttons/AddButton";
import { Link } from "react-router-dom";
// Styling

const MemberCard = ({ member, addMember }) => {
  return (
    <div>
      <p>
        `${member.firstName} {member.lastName}`
      </p>
      <p>{member.currentlyBorrowedBooks}</p>
      <p>{member.membership}</p>

      <AddButton memberId={member.id} />
    </div>
  );
};

export default MemberCard;
