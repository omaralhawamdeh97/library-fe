// Styling
// import { ListWrapper } from "../styles";
// Components
import MemberInfo from "./MemberCard";
// import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";

const MembersList = () => {
  const members = useSelector((state) => state.members);

  const [query, setQuery] = useState("");

  const membersList = members
    .filter((member) => member.name.toLowerCase().includes(query.toLowerCase()))
    .map((member) => <memberCard member={member} key={member.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{membersList}</ListWrapper>
    </div>
  );
};

export default MembersList;
