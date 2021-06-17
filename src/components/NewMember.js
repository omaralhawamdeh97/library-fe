//Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//React
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { createMember } from "../store/actions";
import { Link } from "react-router-dom";

//styling
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { BodyButtons, BodyLinks, XX } from "../styles";

const NewMember = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const memberSlug = useParams().memberSlug;
  const members = useSelector((state) => state.members);
  const foundMember = members.find((member) => member.slug === memberSlug);
  const [member, setMember] = useState(
    foundMember ?? { firstName: "", lastName: "", membership: "" }
  );

  const handleChange = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMember(member));
    alert("Successfully added !");
    history.push("/");
  };
  console.log(member);

  const handleClickPlatinum = () => {
    setMember({
      ...member,
      membership: "platinum",
    });
  };
  const handleClickGold = () => {
    setMember({
      ...member,
      membership: "gold",
    });
  };
  const handleClickSilver = () => {
    setMember({
      ...member,
      membership: "silver",
    });
  };

  return (
    <XX>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              firstName:
              <input
                placeholder="enter your first name"
                type="text"
                name="firstName"
                onChange={handleChange}
              />
            </p>
            <p>
              lastName:
              <input
                placeholder="enter your last name"
                type="text"
                name="lastName"
                onChange={handleChange}
              />
            </p>
            <p>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Membership
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem
                    name={"membership"}
                    onClick={handleClickSilver}
                    value={"Silver"}
                  >
                    Silver
                  </MenuItem>
                  <MenuItem
                    name={"membership"}
                    onClick={handleClickGold}
                    value={"Gold"}
                  >
                    Gold
                  </MenuItem>
                  <MenuItem
                    name={"membership"}
                    onClick={handleClickPlatinum}
                    value={"Platinum"}
                  >
                    Platinum
                  </MenuItem>
                </Select>
              </FormControl>
            </p>
            <p>
              <button>Add Member</button>
            </p>
          </div>
        </form>
        <Link to="/memberslist">
          <BodyButtons>
            <BodyLinks>Back to list</BodyLinks>
          </BodyButtons>
        </Link>
      </div>
    </XX>
  );
};

export default NewMember;
