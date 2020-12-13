import { connect } from "react-redux";
import RoutePage from "../../components/routepage";

const mapStateToProps = state => {
    return {
        units:{imperial: state.config.imperial},
    };
};

export default connect(mapStateToProps)(RoutePage);