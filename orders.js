import jamesOrder from "./james.js";
import timsOrder from "./tim.js";

document.querySelector(".james").textContent = JSON.stringify(
    jamesOrder,
    null,
    2
);
document.querySelector(".tim").textContent = JSON.stringify(
    timsOrder,
    null,
    2
);

console.log(jamesOrder);
