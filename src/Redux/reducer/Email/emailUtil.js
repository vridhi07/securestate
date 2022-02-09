export const getUpdatedEmails = (emailDetails, reply) => {
  let emails = emailDetails?.map((val) => {
    if (reply._id === val._id) {
      return reply;
    } else return val;
  });
  return emails;
};

export const getUpdatedReadStatus = (emailDetails, id) => {
  let emails = emailDetails.map((val) => {
    if (val._id === id) {
      return {
        ...val,
        read: true,
      };
    } else return val;
  });
  return emails;
};
