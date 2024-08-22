import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/validation.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputsBox[0].value;
  const password = inputsBox[1].value;

  const response = await postData("auth/login", {
    username,
    password,
  });
  setCookie(response.token)
  location.assign("index.html")
};

loginButton.addEventListener("click", submitHandler);
