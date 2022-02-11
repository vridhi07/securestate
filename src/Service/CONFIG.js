export const baseURL = process.env.REACT_APP_BASE_URL;

export const CONFIG = {
  baseURL,
  // !Asset
  assets: "assets/assetLists",
  getAllAsset: "assets/allAssets",
  addAsset: "assets/addAssets",
  deleteAsset: "assets/deleteAssets",
  updateAsset: "assets/updateAssets",
  assetTabs: "assets",
  // !company
  getCompany: "company/companyDetails",
  addCompany: "company/addCompany",
  getCompanyById: "company/getcompanyById",
  updateCompanyDetails: "company/updateCompany",
  //! User
  getUserDetails: "user/userDetails",
  // !Pentest
  pentestDetails: "pentest",
  addPentest: "pentest/addPentest",
  deletePentest: "pentest/deletePentest",
  pentestTabs: "pentest",
  // !users
  getUsers: "user/userList",
  addUsers: "user/addUser",
  deleteUsers: "user/userDelete",
  updateUser: "user/updateUser",
  // !email
  getMail: "email/getEmail",
  sendEmail: "email/sendMail",
  sendReply: "email/replyMail",
  readMail: "email/readMail",
  // !Invoice
  getInvoice: "invoice/invoiceList",
  addInvoice: "invoice/addInvoice",
  deleteInvoice: "invoice/deleteInvoice",
  getInvoiceUserId: "invoice/invoiceListWithUserId",
  //! Customer
  getGroupList: "company/groupList",
  addUserToGroup: "company/addusertogroup",
  deleteUserFromGroup: "company/deleteUser",
  deleteGroup: "company/deleteGroup",
  addMoreUserToGroup: "company/addNewUserToGroup",
  addSubscription: "company/newsubscription",
  getSubscription: "company/subscriptionList",
  // !wallet
  allPentestWithCompany: "pentest/getAllpentests?companyId=",
  allHackerWithCompany: "user/getAllHackers?companyId=",
  addWallet: "wallet/addWalletDetailsForPentest",
  getWallet: "wallet/getWalletDetailsForPentest",
  getWalletTotal: "wallet/getWalletTotalDetails",
  addWalletTotal: "wallet/addWalletTotalDetails",
};
