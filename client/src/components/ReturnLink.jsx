import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import returLink from "../assets/images/returnLink.svg";

function ReturnLink({source, margin_left}) {
  return (
        <Link to={source} className={`flex gap-2 ${margin_left}`}>
            <img className="w-10" src={returLink} alt="retour" />
        </Link>
  )
}

ReturnLink.propTypes = {
  source: PropTypes.string.isRequired,
  margin_left: PropTypes.string,
};

ReturnLink.defaultProps = {
  margin_left: "ml-0",
};

export default ReturnLink;