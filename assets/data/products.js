const getMyProducts = async () => {
    //get by user id
    let user_id = 1;
    let data = [
        {
            pro_id: 1,
            pro_name: 'Lemons',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
            categories: [1, 2, 5],
            tags: [1, 2, 3, 4],
            price: '1000.00',
            discount: {
                dis_price: '800.00',
                dis_start: '2024-05-10',
                dis_end: '2024-05-15'
            },
            stock_status: 'in',
        },
        {
            pro_id: 2,
            pro_name: 'Computer',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_image: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
    ];

    return data;
}

export { getMyProducts }