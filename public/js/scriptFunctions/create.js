const baseUrl = "http://localhost:3001";

export const createAccount = async () => {
      const email = document.getElementById("createEmail").value;
      const password = document.getElementById("createPassword").value;
      const role = document.getElementById("createRole").value;

      const res = await fetch(`${baseUrl}/addUsers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();
      viewAccounts();
      window.location.reload();
      alert("Created: " + JSON.stringify(data));
    }