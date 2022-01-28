const getFilterOPtion = (role) => {
  if (role === "superAdmin") {
    return false;
  }
  return true;
};

export default getFilterOPtion;
