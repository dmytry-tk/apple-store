const updateCartList = (state, action) => {
    if (state === undefined) {
        return{
            cartItems: [
                {
                    deviceClass: 'iphone',
                    description: "realy realy realy good device",
                    count: 4,
                    deviceId: 101,
                    model: "Iphone 7",
                    price: 600,
                    img: "https://apple-mania.com.ua/image/cache/catalog/iphone7plus/smartfon-apple-iphone-7-plus-128-gb-ram-3-gb-jet-black-500x500.jpg"
                }
            ]
        }
    }
    switch (action.type) {
        case 'ADD_DEVICE_TO_CART':
            return addDeviceToCart(state, action.payload)
        default:
            return state.cartList;
    }
}

export {updateCartList}

const addDeviceToCart = (state, item) => {
    return{
        cartItems: [
            ...state.cartList.cartItems,
            item
        ]
    }
}