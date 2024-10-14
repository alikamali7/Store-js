import authHandler from "./authorization.js";
import { getData } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");
const logoutButton = document.querySelector("button");

const renderUsers = (users) => {
  mainContent.innerHTML = "";

  users.forEach((user) => {
    const jsx = `
      <div id="card">
        <h3>${user.id}</h3>
        <div>
          <p><i class="fa-solid fa-user"></i>Name:</p>
          <span>${user.name.firstname} ${user.name.lastname}</span>
        </div>
        <div>
          <p><i class="fa-solid fa-paperclip"></i>Username:</p>
          <span>${user.username}</span>
        </div>
        <div>
          <p><i class="fa-solid fa-envelope"></i>Email:</p>
          <span>${user.email}</span>
        </div>
        <div>
          <p><i class="fa-solid fa-phone"></i>Phone:</p>
          <span>${user.phone}</span>
        </div>
        <div>
          <p><i class="fa-solid fa-location-dot"></i>Address:</p>
          <span>${user.address.city} - ${user.address.street} - ${user.address.zipcode}</span>
        </div>
      </div>
    `;

    mainContent.innerHTML += jsx;
  });
};

const init = async () => {
  authHandler();
  const users = await getData("users");
  renderUsers(users);
};

const logoutHandler = () => {
  document.cookie = "token=; max-age=0";
  location.assign("index.html")
};

document.addEventListener("DOMContentLoaded", init);
logoutButton.addEventListener("click", logoutHandler);
