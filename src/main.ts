import { factory } from "./factory";

const start_at_control = document.getElementById("start_at",) as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;
const count_button = document.querySelector(".count_button",) as HTMLButtonElement;
const current_count = document.querySelector(".current_count",) as HTMLSpanElement;

let countFunction = factory(Number(start_at_control.value), Number(step_control.value));

start_at_control?.addEventListener("input", update_count_and_reset_counter);
step_control?.addEventListener("input", update_count_and_reset_counter);


function update_count_and_reset_counter() {
  const startValue = Number(start_at_control.value);
  const stepValue = Number(step_control.value);
  countFunction = factory(startValue, stepValue);
  current_count.textContent = !isNaN(startValue) ? startValue.toString() : '0';
}

count_button.addEventListener("click", () => {
  const count = countFunction();
  current_count.textContent = !isNaN(count) ? count.toString() : '0';;
});
