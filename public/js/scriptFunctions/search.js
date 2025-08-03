const baseUrl = "http://localhost:3001";

export const searchAccount = async () => {
      const email = document.getElementById("searchInput").value;

      const res = await fetch(`${baseUrl}/searchUsers?email=${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
        if (data.length === 0) {
            alert("No accounts found with that email.");
            viewAccounts(); // Refresh the view
            return;
        }

        const tableBody = document.getElementById("accountsTableBody");
        tableBody.innerHTML = ""; // Clear previous results
        data.forEach(account => {
          const row = `
            <tr>
              <td class="border px-4 py-2">${account.email}</td>
              <td class="border px-4 py-2">${account.password}</td>
              <td class="border px-4 py-2">${account.role}</td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });
      alert("Search Results: " + JSON.stringify(data));
    }