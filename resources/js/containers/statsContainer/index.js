import { connect } from 'react-redux'
import StatsTab from '../../components/common/StatsTab'


  const mapStateToProps = state => {
    return {
      imperial: state.config.imperial,
    }
  }
  
 export default connect(mapStateToProps)(StatsTab)