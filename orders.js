import jamesOrder from "./james.js";
import timsOrder from "./tim.js";

document.querySelector(".james").textContent = JSON.stringify(
    jamesOrder,
    timsOrder,
    null,
    2
);

console.log(jamesOrder);
