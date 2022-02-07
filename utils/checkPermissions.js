import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  // if (requestUser.role === 'ADMIN') return
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnauthenticatedError("Not allowed to update this content");
};

export default checkPermissions;
