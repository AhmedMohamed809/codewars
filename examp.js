// fetch("https://www.randomuser.me/api")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const user = data.results[0];
//     createUserDetails(user);
//   })
//   .catch((error) => showError(error.message));

// function createUserDetails(user) {
//   const name = document.querySelector("#name");
//   name.innerText = `${user.name.first} ${user.name.last}`;
//   const img = document.querySelector("#profile-pic");
//   img.setAttribute("src", user.picture.large);
// }

// function showError(message) {
//   const pragraph = document.createElement("p");
//   const div = document.querySelector(".user-card");
//   pragraph.innerText = `Sorry we have problem This is Error ${message}`;
//   div.appendChild(pragraph);
// }
