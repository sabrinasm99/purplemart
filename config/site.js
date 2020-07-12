var siteServer = "http://192.168.43.80:5000";
exports.Site = {
  ori: siteServer,
  getProduct: `${siteServer}/product/get-product`,
  getCategoryProduct: `${siteServer}/product/get-category-product`,
  uploadProduct: `${siteServer}/product/upload-product`,
  updateProduct: `${siteServer}/product/update-product`,
  removeProduct: `${siteServer}/product/remove-product`,
  registerAdmin: `${siteServer}/user/register-admin`,
  loginAdmin: `${siteServer}/user/login-admin`,
  registerMember: `${siteServer}/user/register-member`,
  loginMember: `${siteServer}/user/login-member`,
  checkToken: `${siteServer}/user/check-token`,
  addOrder: `${siteServer}/order/add-order`,
  getOrder: `${siteServer}/order/get-order`
};
