const userForm = document.querySelector(".userForm") as HTMLFormElement;

const userName = document.querySelector("#userName") as HTMLInputElement;

const userEmail = document.querySelector("#userEmail") as HTMLInputElement;

const userCountry = document.querySelector("#userCountry") as HTMLSelectElement;

const userFeedback = document.querySelector(
  "#userFeedback"
) as HTMLTextAreaElement;

userForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value,
  };
  console.log(data);
});
