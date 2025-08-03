const baseUrl = "http://localhost:3001";

export const deleteAccount = async () => {
      const email = document.getElementById("deleteEmail").value;

      const res = await fetch(`${baseUrl}/deleteUsers?email=${email}`, {
        method: "DELETE",
      });

      const data = await res.json();
        viewAccounts();
     window.location.reload();
     alert("Deleted: " + JSON.stringify(data));
    }