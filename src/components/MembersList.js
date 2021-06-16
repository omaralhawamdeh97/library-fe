import { useState } from "react";
import { useSelector } from "react-redux";
import MemberCard from "./MemberCard";

const MembersList = () => {
  const members = useSelector((state) => state.members);

  const [query, setQuery] = useState("");

  const membersList = members
    .filter((member) =>
      member.firstName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberCard member={member} key={member.id} />);

  return (
    <div>
      <h1>Members List : </h1>
      <input
        type="text"
        placeholder="Search for a member ..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <button>Add a Member</button>
      <div>{membersList}</div>
    </div>
  );
};

export default MembersList;
