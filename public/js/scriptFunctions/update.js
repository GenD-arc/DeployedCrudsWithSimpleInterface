const baseUrl = "http://simplecrudstable.onrender.com/";

export const updateAccount = async () => {
  const email = document.getElementById("updateEmail").value;
  const newEmail = document.getElementById("updateNewEmail").value;
  const role = document.getElementById("updateRole").value;
  const password = document.getElementById("updatePassword").value;

  const body = {};
  if (role.trim() !== "") body.role = role;
  if (password.trim() !== "") body.password = password;
  if (newEmail.trim() !== "") body.newEmail = newEmail;

  if (Object.keys(body).length === 0) {
    alert("Please provide at least one field to update.");
    return;
  }

  const res = await fetch(`${baseUrl}/updateUsers?email=${email}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  alert("Updated: " + JSON.stringify(data));
  viewAccounts();

}
