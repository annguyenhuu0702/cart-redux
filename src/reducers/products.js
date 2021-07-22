var initialState = [
    {
        id : 1,
        name : 'Oppo Find X3 Pro 5G',
        image : 'https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'SamSung galaxy S20',
        image : 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-hong-600x600-600x600.jpg',
        description : 'Sản phẩm do samsung sản xuất',
        price : 450,
        inventory : 15,
        rating : 4
    },
    {
        id : 3,
        name : 'Iphone 12',
        image : 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 350,
        inventory : 10,
        rating : 5
    },
];

const products = (state = initialState, action) => {
    switch(action.type){
        default :
            return [...state];
    }
}

export default products;