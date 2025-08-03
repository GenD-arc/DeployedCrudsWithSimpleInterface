import { searchAccount } from './scriptFunctions/search.js';
import { createAccount } from './scriptFunctions/create.js';
import { updateAccount } from './scriptFunctions/update.js';
import { deleteAccount } from './scriptFunctions/delete.js';
import { viewAccounts } from './scriptFunctions/view.js';

window.searchAccount = searchAccount;
window.createAccount = createAccount;
window.updateAccount = updateAccount;
window.deleteAccount = deleteAccount;
window.viewAccounts = viewAccounts;