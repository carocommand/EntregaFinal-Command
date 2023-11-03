import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
    const iconStyles = {
        fontSize: '25px',
        paddingRight: '5px'
    }
    return (
        <div>
            <FontAwesomeIcon icon={faBagShopping} style={iconStyles} />
            <span style={{fontSize: '18px'}} >6</span>
        </div>
    )
}

export default CartWidgetComponent;