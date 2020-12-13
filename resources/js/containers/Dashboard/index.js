import { connect } from "react-redux";
import DashboardLayout from "../../components/Dashboard";

const mapStateToProps = state => {
    return {
        units:{imperial: state.config.imperial},
        user: state.user,


    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleUnits: (bool) => {
//             return dispatch(config({imperial:bool}))}
//     }
//   }


export default connect(mapStateToProps)(DashboardLayout);
