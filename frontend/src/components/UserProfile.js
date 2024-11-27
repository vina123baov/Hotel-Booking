const userData = {
    name: "Thai Bao",
    email: "thaibao@example.com",
    phone: "123-456-7890"
};

document.getElementById("name").textContent = userData.name;
document.getElementById("email").textContent = userData.email;
document.getElementById("phone").textContent  = userData.phone;

const editButton = document.getElementById("edit-profile");
editButton.addEventListener("click", () => {
    alert("Edit profile clicked!");
});
