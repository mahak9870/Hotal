import {connect} from 'react-redux'
import RoomSpec from "../components/RoomSpec";
import {addToCart} from '../Services/Actions/Actions'


const mapStateToProps=state=>({
   cartData:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:  data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(RoomSpec)
