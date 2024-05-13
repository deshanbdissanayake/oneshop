const getMyProducts = async () => {
    //get by user id
    let user_id = 1;
    let data = [
        {
            pro_id: 1,
            pro_name: 'Lemons',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: {
                img_1: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                img_2: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                img_3: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                img_4: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
            },
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
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: {
                img_1: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                img_2: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                img_3: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                img_4: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
            },
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