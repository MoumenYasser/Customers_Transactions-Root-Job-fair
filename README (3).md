
# Customer Transactions App

## Overview

This application retrieves customer and transaction data from a provided API endpoint and displays it in a user-friendly format using Vue.js and JSON. The app includes a table to display the customer and transaction data, filtering options, and a graph to visualize the total transaction amounts per day for selected customers.

## Features

- **Customer Transactions Table**: Displays a list of customers along with their transaction data.
- **Filter Functionality**: Allows filtering the table by customer name or transaction amount.
- **Transaction Graph**: Displays the total transaction amount per day for the selected customer.

## Tools used

- **Vue.js**: A progressive JavaScript framework used for building the user interface.
- **Chart.js**: A charting library used to display the transaction graph.
- **JSON Server**: A local server to host and serve the JSON data.

## API Data

The JSON data used in this project is as follows:

## Project Setup
Prerequisites
Node.js
npm (Node Package Manager)
Vue CLI
Installation
Clone the Repository: Clone the GitHub repository to your local machine.

## How to run

### Front-end 

- clone the repo
- navigate to repo folder
- run ```npm install```
- run ```npm run dev ``` to run the vue application

### Json server API

- clone the repo
- navigate to repo folder
- run ```json-server db.json``` to run the server on port 3000



## JSON Data
```json
{
  "customers": [
    {
      "id": 1,
      "name": "Ahmed Ali"
    },
    {
      "id": 2,
      "name": "Aya Elsayed"
    },
    {
      "id": 3,
      "name": "Mina Adel"
    },
    {
      "id": 4,
      "name": "Sarah Reda"
    },
    {
      "id": 5,
      "name": "Mohamed Sayed"
    }
  ],
  "transactions": [
    {
      "id": 1,
      "customer_id": 1,
      "date": "2022-01-01",
      "amount": 1000
    },
    {
      "id": 2,
      "customer_id": 1,
      "date": "2022-01-02",
      "amount": 2000
    },
    {
      "id": 3,
      "customer_id": 2,
      "date": "2022-01-01",
      "amount": 550
    },
    {
      "id": 4,
      "customer_id": 3,
      "date": "2022-01-01",
      "amount": 500
    },
    {
      "id": 5,
      "customer_id": 2,
      "date": "2022-01-02",
      "amount": 1300
    },
    {
      "id": 6,
      "customer_id": 4,
      "date": "2022-01-01",
      "amount": 750
    },
    {
      "id": 7,
      "customer_id": 3,
      "date": "2022-01-02",
      "amount": 1250
    },
    {
      "id": 8,
      "customer_id": 5,
      "date": "2022-01-01",
      "amount": 2500
    },
    {
      "id": 9,
      "customer_id": 5,
      "date": "2022-01-02",
      "amount": 875
    }
  ]
}


