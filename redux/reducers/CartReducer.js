let defaultState = {
    selectedItems: { items: [], restaurantName: '' }
}
const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            if (action.payload.checkboxValue) {
                console.log("Added to cart");
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName
                }
            } else {
                console.log("Removed from cart");
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.id !== action.payload.id
                        )
                    ],
                    restaurantName: action.payload.restaurantName
                }
            }
            console.log(newState, "👍");
            return newState
        }
        default:
            return state;
    }
}
export default CartReducer