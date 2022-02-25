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
  deleteCompany: "company/deleteCompany",
  //! User
  getUserDetails: "user/userDetails",
  // !Pentest
  pentestData: "pentest/pentestData",
  pentestDetails: "pentest/pentestDetails",
  addPentest: "pentest/addPentest",
  deletePentest: "pentest/deletePentest",
  // pentestTabs: "pentest",
  addScope: "pentest/scope/pentestActiveScope/addNewScope",
  editScope: "pentest/scope/pentestActiveScope/editScope",
  deleteScope: "pentest/deleteScope",
  addFindings: "pentest/findings/pentestActiveFindings/newFinding",
  editFindings: "/pentest/findings/pentestActiveFindings/editFinding",
  deleteFinding: "pentest/findings/deleteFinding",
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
  deleteSubscription: "company/deleteSubscription",
  // !wallet
  allPentestWithCompany: "pentest/getAllpentests?companyId=",
  allHackerWithCompany: "user/getAllHackers?companyId=",
  addWallet: "wallet/addWalletDetailsForPentest",
  getWallet: "wallet/getWalletDetailsForPentest",
  editWallet: "wallet/updateWallet",
  getWalletTotal: "wallet/getWalletTotalDetails",
  addWalletTotal: "wallet/addWalletTotalDetails",
  editWalletTotal: "wallet/updateWalletTotalDetails",
};
