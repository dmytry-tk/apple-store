const addDeviceToCart = (state, item) => {

    const newItem = {
        ...item,
        count: 1
    }

    const newItems = [
        ...state.cartList.cartItems,
        newItem
    ]
    const { total, count } = updateTotal(newItems)
    return{
        cartItems: newItems,
        orderTotal: total,
        orderCount: count
    }
}

const updateCartItems = (items, item, idx) => {
    if(item.count === 0) {
        return [
            ...items.slice(0, idx),
            ...items.slice(idx + 1)
        ]
    }
    return [
        ...items.slice(0, idx),
        item,
        ...items.slice(idx + 1)
    ]
}

const updateCartItem = (item = {}, quantity) => {
    return {
        ...item,
        count: item.count += quantity
    }
}

const updateTotal = (items) => {
    let total = 0;
    let itemCount = 0;
    items.map(({price, count}) => {
        total += +price * +count;
        itemCount += +count;
    });
    const data = {
        total,
        count: itemCount
    }
    return data
}


const updateOrder = (state, deviceId, quantity) => {
    const {cartItems: items} = state.cartList
    const item = items.find(({deviceId:id}) => id === deviceId)
    const itemIndex = items.findIndex(({deviceId:id}) => id === deviceId);
    const newItem = updateCartItem(item, quantity)
    const newItems = updateCartItems(items, newItem, itemIndex)
    const {total, count} = updateTotal(newItems)
    return{
        cartItems: [
            ...newItems,
        ],
        orderTotal: total,
        orderCount: count
    }
}

export const updateCart = (state, action) => {
    if(state === undefined){
        return {
            cartItems: [],
            orderTotal: 0,
            orderCount:0
        }
    }
    switch(action.type) {
        case 'ADD_DEVICE_TO_CART':
            return addDeviceToCart(state, action.payload)
        case 'DEVICE_INCREASE_COUNT':
            return updateOrder(state, action.payload, 1)
        case 'DEVICE_DECREASE_COUNT':
            return updateOrder(state, action.payload, -1)
        case 'DEVICE_REMOVED_FROM_CART':
            const item = state.cartList.cartItems.find((el) => el.deviceId === action.payload);
            return updateOrder(state, action.payload, -item.count)
        case 'CLEAR_CART':
            return {
                cartItems: [],
                orderTotal: 0,
                orderCount:0
            }
        default:
            return state.cartList
    }
}