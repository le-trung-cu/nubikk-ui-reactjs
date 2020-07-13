export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd.quantity ? cartItemToAdd.quantity : 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            !(cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size));
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
