export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
};

export interface CreateAccount {
  type: string;
  name: string;
};
