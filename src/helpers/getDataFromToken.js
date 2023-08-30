import { NextRequest } from "next/server";

import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decodeToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};
