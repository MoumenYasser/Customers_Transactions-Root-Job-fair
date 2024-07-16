export const getCustomers = (name = '') => {
    return fetch(`http://localhost:3000/customers/?name=${name}`)
        .then((response) => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', JSON.stringify(response));
            return response;
        });
}

export const getCustomerById = (id) => {
    return fetch(`http://localhost:3000/customers/?id=${id}`)
        .then((response) => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', JSON.stringify(response));
            return response[0];
        });
}


export const getCustomerTransactions = (customerId) => {
    return fetch(`http://localhost:3000/transactions/?customer_id=${customerId}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', JSON.stringify(response));
            return response;
        });
}


export const getTransactionsByAmount = (amount) => {
    return fetch(`http://localhost:3000/transactions/?amount=${amount}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', JSON.stringify(response));
            return response;
        });
}