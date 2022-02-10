export const superAdmin = "superAdmin";
export const admin = "admin";

export const client = "client";
export const hacker = "hacker";

export const handleClientAccess = (role) => {
  if (role === client) {
    return false;
  }
  return true;
};
