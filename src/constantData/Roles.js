export const superAdmin = "superAdmin";
export const admin = "admin";

export const client = "client";
export const hacker = "hacker";

export const AssetAccess = (role) => {
  if (role === hacker) {
    return false;
  }
  return true;
};

export const handleClientAccess = (role) => {
  if (role === client) {
    return false;
  }
  return true;
};
