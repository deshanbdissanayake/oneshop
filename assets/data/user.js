const getProfileData = async () => {
    let data = {
        user_id: 1,
        pro_pic: 'https://fastly.picsum.photos/id/1064/200/200.jpg?hmac=xUH-ovzKEHg51S8vchfOZNAOcHB6b1TI_HzthmqvcWU',
        fullname: 'Deshan Dissanayake',
        username: '0714214755',
        email: 'desh.introps@gmail.com',
        contact: '0714214755',
        shop_address: 'No.54, Katugastota Rd, Kandy',
        shop_city: 'Kandy',
        shop_name: 'Introps',
        shop_url: 'https://www.introps.com',
        shop_contact: '0711500200',
        shop_email: 'introps@gmail.com',
        type: 'vendor',
        shop_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia finibus metus, quis lacinia mauris ultrices sit amet. Nunc lacinia ligula tincidunt orci facilisis, in pellentesque nisl venenatis. Donec eu diam imperdiet, convallis arcu a, interdum lorem. Vivamus eleifend sagittis justo ut rutrum. Suspendisse potenti.',
    };

    return data;
}

const changePassword = async (formData) => {
    let data = { stt: 'success', msg: 'Your password has been changed!', data: [] };

    return data;
}

export { getProfileData, changePassword }