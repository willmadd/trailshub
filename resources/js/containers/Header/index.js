import { connect } from "react-redux";
import Header from "../../components/header";

const mapStateToProps = state => {
    return {
        user: state.user,


    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleUnits: (bool) => {
//             return dispatch(config({imperial:bool}))}
//     }
//   }


export default connect(mapStateToProps)(Header);