principal = document.getElementById("principal");
rate = document.getElementById("rate");
time = document.getElementById("time");
calculate = document.getElementById("calculate-btn");

function compute() {
  principalValue = principal.value;
  rateValue = rate.value;
  timeValue = time.value;
  result = (principalValue * rateValue * timeValue) / 100;
  document.getElementById("result").innerHTML = "Interest Amount: " + result;
}

calculate.addEventListener("click", compute);
