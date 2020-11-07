import { connect } from "react-redux";
import UnitsToggle from "../../components/header/UnitsToggle";
import { config } from "../../store/appLoad/actions";

const mapStateToProps = state => {
    return {
        imperial: state.config.imperial
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleUnits: (bool) => {
            return dispatch(config({imperial:bool}))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UnitsToggle);
