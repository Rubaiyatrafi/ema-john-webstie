import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
  //   console.log(products);

  const storeCart = getShoppingCart();
  const savedCart = [];
  for (const id in storeCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storeCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  //   if u need to send two things
  //   return [products, savedCart];
  //   another option
  // return{products, cart: savedCart}

  return savedCart;
};
export default cartProductsLoader;
