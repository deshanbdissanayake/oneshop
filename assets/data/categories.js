const getAllCategories = async () => {
    let data = [
        {
            cat_id: 1,
            cat_name: 'Fruits',
        },
        {
            cat_id: 2,
            cat_name: 'Yummy',
        },
        {
            cat_id: 3,
            cat_name: 'IT',
        },
        {
            cat_id: 4,
            cat_name: 'Goods',
        },
        {
            cat_id: 5,
            cat_name: 'Consumer',
        },
    ];

    return data;
}

export { getAllCategories }