import userServices from "./user.services";
import { toast } from "react-toastify";
import www from "./rotwww";
const getHeaders = () => ({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': userServices.authorization
});


const checkoutWithNewUser = (data, signUpOption) => {
    const url = `${www}/checkout/cart`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(data => {
        console.log(data);
        return data.json();
    }).then(data => {
        if (signUpOption) {
            userServices.user = data;
        }
        return data;
    });
};

const checkoutWithUserAuthenticated = (data) => {
    console.log(data)
    const url = `${www}/checkout/basket`;
    return fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(data => {
        toast.success('checkout success');
        return data;
    });
};

const getOrders = () => {
    const url = `${www}/checkout/orders`;
    return fetch(url, {
        method: 'GET',
        headers: getHeaders()
    }).then(data => {
        return data.json();
    });
}

const checkoutServices = {
    checkoutWithNewUser,
    checkoutWithUserAuthenticated,
    getOrders
}

export default checkoutServices;