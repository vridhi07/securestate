export const baseURL = process.env.REACT_APP_BASE_URL;

export const CONFIG = {
  baseURL,
  assets: "assets/assetLists",
  getAllAsset: "assets/allAssets",
  addAsset: "assets/addAssets",
  deleteAsset: "assets/deleteAssets",
  updateAsset: "assets/updateAssets",
  assetTabs: "assets",
  getCompany: "company/companyDetails",
  getUserDetails: "user/userDetails",
  pentestDetails: "pentest",
  addPentest: "pentest/addPentest",
  deletePentest: "pentest/deletePentest",
  pentestTabs: "pentest",
  getUsers: "user/userList",
  addUsers: "user/addUser",
  deleteUsers: "user/userDelete",
  getMail: "email/getEmail",
  updateUser: "user/updateUser",
  addCompany: "company/addCompany",
  getCompanyById: "company/getcompanyById",
  updateCompanyDetails: "company/updateCompany",
  getInvoice: "invoice/invoiceList",
  addInvoice: "invoice/addInvoice",
  getGroupList: "company/groupList",
  addUserToGroup: "company/addusertogroup",
  sendEmail: "email/sendMail",
  sendReply: "email/replyMail",
  readMail: "email/readMail",
  deleteUserFromGroup: "company/deleteUser",
  deleteGroup: "company/deleteGroup",
  addMoreUserToGroup: "company/addNewUserToGroup",
  addSubscription: "company/newsubscription",
  getSubscription: "company/subscriptionList",
  allPentestWithCompany: "/pentest/getAllpentests?companyId=",
  allHackerWithCompany: "/user/getAllHackers?companyId=",
};
