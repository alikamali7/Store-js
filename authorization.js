import { getCookie } from "./utils/cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  const url = location.href;
  if (
    (cookie && url.includes("auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    location.assign("index.html");
    return false;
  }
};

export default authHandler;
