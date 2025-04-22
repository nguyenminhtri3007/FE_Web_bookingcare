import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./Logo.scss";
import logo from '../../../assets/logo.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  let history = useHistory();

  return (
    <img  className="header-logo" src={logo} onClick={()=> history.push("/home")}></img>
   
  );
}
