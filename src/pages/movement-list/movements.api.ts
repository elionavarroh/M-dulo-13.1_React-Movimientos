import Axios from "axios";

export interface Account {
  iban: string;
  alias: string;
  balance: number;
  lastTransaction: string;
}

export interface Movement {
  id: string;
  date: string;
  description: string;
  amount: number;
  valueDate: string;
  balanceAfterMovement: number;
}

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/accounts`;
const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

// Obtener información de la cuenta
export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccount}/${accountId}`).then(({ data }) => data);

// Obtener movimientos de la cuenta
export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );