import products from '../../Data/productDetails';

const initialCartItems = (items) => {
    const newCartItems = [];
    products.forEach((item) => {
        if (items.includes(item.id)) {
            // Added the property itemCount here by spreading the object and the adding the extra properties,
            // This is the common way of adding a new property to an already existing object.
            newCartItems.push({ ...item, itemCount: 1 });
        }
    });
    return newCartItems;
};

export default initialCartItems;
