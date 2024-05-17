const getOrderSummary = async () => {
    let data = {
        today: [
            { label: 'Pending Orders', value: '6' },
            { label: 'Processing Orders', value: '3' },
            { label: 'Pending Payments', value: '35000.00' },
            { label: 'Confirmed Payments', value: '42000.00' },
            { label: 'Pending Pickup', value: '4' },
            { label: 'Confirmed Pickup', value: '6' },
        ],
        this_week: [
            { label: 'Pending Orders', value: '10' },
            { label: 'Processing Orders', value: '5' },
            { label: 'Pending Payments', value: '70000.00' },
            { label: 'Confirmed Payments', value: '83000.00' },
            { label: 'Pending Pickup', value: '8' },
            { label: 'Confirmed Pickup', value: '12' },
        ],
        this_month: [
            { label: 'Pending Orders', value: '20' },
            { label: 'Processing Orders', value: '12' },
            { label: 'Pending Payments', value: '140000.00' },
            { label: 'Confirmed Payments', value: '165000.00' },
            { label: 'Pending Pickup', value: '16' },
            { label: 'Confirmed Pickup', value: '24' },
        ],
    };    

    return data;
}

const getProductSummary = async () => {
    let data = [
        {label: 'In Stock', value: '14'},
        {label: 'Out of Stock', value: '3'}
    ];

    return data;
}

export { getOrderSummary, getProductSummary }