const getOrdersByUserId = async () => {
    let data = [
        {
            ord_id: '55',
            ord_num: '10000055',
            ord_date: '2024-05-14',
            ord_total: '2000.00',
            ord_status: 'pending', // pending/processing/delivering
            cus_name: 'Nadun Tharaka',
            shipping_method: 'Self Pickup',
            payment_method: 'COD',
            pay_status: 'pending' //pending/completed
        },
        {
            ord_id: '56',
            ord_num: '10000056',
            ord_date: '2024-05-14',
            ord_total: '3500.00',
            ord_status: 'processing', // pending/processing/delivering
            cus_name: 'Melani',
            shipping_method: 'Self Pickup',
            payment_method: 'COD',
            pay_status: 'pending' //pending/completed
        },
        {
            ord_id: '57',
            ord_num: '10000057',
            ord_date: '2024-05-20',
            ord_total: '4200.00',
            ord_status: 'delivering', // pending/processing/delivering
            cus_name: 'Melani',
            shipping_method: 'Self Pickup',
            payment_method: 'COD',
            pay_status: 'completed' //pending/completed
        },
    ];

    return data;
}

const getOrderByOrderId = async () => {
    let data = {
        ord_id: 1,
        ord_num: '10000055',
        ord_datetime: '2024-05-14 09:46 am',
        ord_status: 'pending', // pending/processing/delivering
        ord_notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium lacus placerat sem varius, rhoncus placerat erat pretium. Suspendisse euismod vestibulum augue ac maximus.',
        ord_items: [
            {
                pro_id: 1,
                pro_name: 'Lorem ipsum dolor sit amet',
                pro_sku: 'LM-001',
                pro_image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                qty: 10,
                unit_price: '230',
            }
        ],
        ord_customer: {
            cus_id: 1,
            cus_name: 'Nadun Tharaka',
        },
        ord_shipping: {
            name: 'Nadun Tharaka',
            contact: '0788903453',
            email: 'nadun@gmail.com',
            address: '',
            city: '',
            method: 'Self Pickup',
        },
        ord_payment: {
            method: 'COD',
            discount: '0',
            shipphing: '0',
            total: '2300',
            pay_status: 'pending' //pending/completed
        },
        ord_history: [
            {
                text: 'Order is created from checkout page',
                cdate: '2024-05-14 04:03:41'
            },
            {
                text: 'New order #10000055 from nadun',
                cdate: '2024-05-14 04:03:41'
            },
            {
                text: 'Order was verified by System',
                cdate: '2024-05-14 04:07:12'
            },
            {
                text: 'Payment was confirmed (amount 36,000 lkr) by System',
                cdate: '2024-05-14 04:07:56'
            },
            {
                text: 'Order was sent to shipping team by System',
                cdate: '2024-05-14 04:08:33'
            },
        ]
    }

    return data;
}

const confirmOrder = async (ord_id) => {
    let data = {stt: 'success', msg: 'Order Confirmed!', data: ''}
    return data;
}

const confirmPayment = async (ord_id) => {
    let data = {stt: 'success', msg: 'Payment Confirmed!', data: ''}
    return data;
}

const confirmDelivery = async (ord_id) => {
    let data = {stt: 'success', msg: 'Delivery Confirmed!', data: ''}
    return data;
}

export { getOrdersByUserId, getOrderByOrderId, confirmOrder, confirmPayment, confirmDelivery }