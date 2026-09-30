const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const jobInput = document.querySelector("#job");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const job = jobInput.value.trim();

  if (name === "" || age === "" || job === "") {
    alert("Please fill all fields");
  } else {
    console.log(`Name:  ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);

    if (Number(age) < 18) {
      alert("You are under age");
    } else {
      alert("Registration Completed");
    }
  }
});
