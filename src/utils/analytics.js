export function ViewDetail(product) {
  const mParticle = window.mParticle;
  // Create a product object
  const productDetails = mParticle.eCommerce.createProduct(
    product.name,
    product.sku,
    product.price,
    product.quantity
  );
  // Send details of viewed product to mParticle
  mParticle.eCommerce.logProductAction(mParticle.ProductActionType.ViewDetail, productDetails)
}
