import Axios from "axios";
import { Account, CreateAccount } from "./account-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

// Obtener la lista de cuentas
export const getAccountList = (): Promise<Account[]> =>
  Axios.get<Account[]>(url).then(({ data }) => data);

// Guardar una nueva cuenta
export const saveAccount = (account: CreateAccount): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);
