import { Account, Movement } from "./movements.api";

export const mockAccount: Account = {
  iban: "ES91 2100 0418 4502 0005 1332",
  alias: "Gastos mes",
  balance: 1490,
  lastTransaction: "9/12/2019",
};

export const mockMovements: Movement[] = [
  {
    id: "1",
    date: "09/12/2019",
    description: "Alquiler piso",
    amount: -400,
    valueDate: "09/12/2019",
    balanceAfterMovement: 1490,
  },
  {
    id: "2",
    date: "07/12/2019",
    description: "Nómina noviembre",
    amount: 1500,
    valueDate: "08/12/2019",
    balanceAfterMovement: 1990,
  },
  {
    id: "3",
    date: "01/12/2019",
    description: "Cena SushiSom",
    amount: -50,
    valueDate: "02/12/2019",
    balanceAfterMovement: 1940,
  },
];