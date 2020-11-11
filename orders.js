import jamesOrder from "./james.js";

document.querySelector(".james").textContent = JSON.stringify(
    jamesOrder,
    null,
    2
);

console.log(jamesOrder);
