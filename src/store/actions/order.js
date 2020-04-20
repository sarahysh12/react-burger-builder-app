import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const purchaseBurgerSucces = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};


export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
};


export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerSucces());
        axios.post( '/orders.json?auth='+token, orderData )
        .then( response => {
            dispatch(purchaseBurgerSucces(response.data.name, orderData))
        } )
        .catch( error => {
            dispatch(purchaseBurgerFailed(error));
        } );
    };
};


export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};


export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders

    };
}


export const fetchOrderFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    };
}


export const fetchOrderStart= () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        const queryParams  = '?auth='+token+'&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('/orders.json?auth='+queryParams)
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrderSuccess(fetchedOrders))
        })
        .catch(err => {
            dispatch(fetchOrderFailed(err))
        });
    }
}