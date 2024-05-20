const getProductsByUserId = async () => {
    //get by user id
    let user_id = 1;
    let data = [
        {
            pro_id: 1,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
            ],
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
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 3,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 4,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 5,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 6,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 7,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 8,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 9,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 10,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 11,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 12,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 13,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 14,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
        {
            pro_id: 15,
            pro_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pro_sku: 'LM-001',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada est semper augue malesuada lacinia. Maecenas interdum mollis dolor, in elementum nunc tincidunt nec. Nulla pulvinar suscipit ligula id varius. Morbi sed faucibus massa. Suspendisse vitae augue feugiat, dapibus urna eu, volutpat orci. Ut sit amet volutpat nisl. Curabitur elementum lacus nec mauris faucibus faucibus. Nulla lectus purus, dictum vitae vehicula sed, efficitur non nisl. Etiam eget ullamcorper erat. Suspendisse at accumsan orci. Suspendisse purus felis, imperdiet ut diam ut, sagittis placerat lectus.',
            pro_images: [
                {
                    img_id: 1,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg',
                    stt: 'active',
                },
                {
                    img_id: 2,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
                    stt: 'active',
                },
                {
                    img_id: 3,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back03.jpg',
                    stt: 'active',
                },
                {
                    img_id: 4,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back04.jpg',
                    stt: 'active',
                },
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
            ],
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
            pro_id: 16,
            pro_name: 'Computer',
            pro_sku: 'CM-901',
            pro_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in pretium lorem. Phasellus vitae lectus vitae odio viverra volutpat. Quisque viverra risus odio, sit amet semper mauris eleifend eget.',
            pro_images: [
                {
                    img_id: 5,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back05.jpg',
                    stt: 'active',
                },
                {
                    img_id: 6,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back06.jpg',
                    stt: 'active',
                },
                {
                    img_id: 7,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg',
                    stt: 'active',
                },
                {
                    img_id: 8,
                    img: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back08.jpg',
                    stt: 'active',
                },
            ],
            categories: [3, 4],
            tags: [3, 4, 5],
            price: '45000.00',
            discount: null,
            stock_status: 'out',
        },
    ];

    return data;
}

export { getProductsByUserId }