import jamesOrder from "./james.js";
import aaronOrder from "./aaron.js";

document.querySelector(".james").textContent = JSON.stringify(
    jamesOrder,
    null,
    2
);

document.querySelector(".aaron").textContent = JSON.stringify(
    aaronOrder,
    null,
    2
);

console.log(jamesOrder, aaronOrder);
