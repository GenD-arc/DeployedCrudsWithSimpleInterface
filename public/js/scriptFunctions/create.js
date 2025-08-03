const baseUrl = "https://simplecrudstable.onrender.com";

export const createAccount = async () => {
      const email = document.getElementById("createEmail").value;
      const password = document.getElementById("createPassword").value;
      const role = document.getElementById("createRole").value;

      if (!email || !password || !role) {
    alert("Please fill in all fields.");
    return;
  } else if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  } else if (!["admin", "user"].includes(role)) {
    alert("Role must be either 'admin' or 'user'.");
    return;
  }

  try {
    const res = await fetch(`${baseUrl}/addUsers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Handle server error (like duplicate email)
      alert(data.error || "Something went wrong.");
      return;
    }

    // Only clear fields and reload if creation was successful
    document.getElementById("createEmail").value = "";
    document.getElementById("createPassword").value = "";
    document.getElementById("createRole").value = "";

    viewAccounts();
    window.location.reload();
    alert("Created: " + JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to connect to the server.");
  }
    }
