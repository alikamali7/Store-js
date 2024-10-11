import authHandler from "./authorization.js"

const init = () => {
    authHandler()
}

document.addEventListener("DOMContentLoaded", init)