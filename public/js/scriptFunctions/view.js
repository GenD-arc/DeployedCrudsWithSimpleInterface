const baseUrl = "https://simplecrudstable.onrender.com";

export const viewAccounts = async () => {
      const res = await fetch(`${baseUrl}/viewUsers`);
      const accounts = await res.json();

      const tableBody = document.getElementById("accountsTableBody");
      tableBody.innerHTML = "";

      accounts.forEach(account => {
        const row = `
          <tr>
            <td class="border px-4 py-2">${account.email}</td>
            <td class="border px-4 py-2">${account.password}</td>
            <td class="border px-4 py-2">${account.role}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    }


    window.onload = viewAccounts;


