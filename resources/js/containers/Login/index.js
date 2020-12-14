import { connect } from "react-redux";
import Login from "../../components/SignUpPage/Login";
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
