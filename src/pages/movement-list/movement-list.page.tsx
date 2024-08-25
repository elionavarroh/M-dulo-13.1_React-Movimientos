import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Account, Movement } from "./movements.api";
import { mockAccount, mockMovements } from "./mockData";
import "../../style.css";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = useState<Account | null>(null);
  const [movements, setMovements] = useState<Movement[]>([]);

  useEffect(() => {
    setAccount(mockAccount);
    setMovements(mockMovements);
  }, [id]);

  if (!account) return <div>Loading...</div>;

  let runningBalance = account.balance;

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.balanceContainer}>
            <span className={classes.balanceLabel}>Saldo disponible</span>
            <span className={classes.balanceAmount}>{account.balance} €</span>
          </div>
        </div>
        <div className={classes.accountInfo}>
          <span>Alias: {account.alias}</span>
          <span>IBAN: {account.iban}</span>
        </div>
        <table className={classes.movementTable}>
          <thead>
            <tr>
              <th>FECHA</th>
              <th>FECHA VALOR</th>
              <th>DESCRIPCIÓN</th>
              <th>IMPORTE</th>
              <th>SALDO DISPONIBLE</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((movement) => {
              const balanceAfterMovement = runningBalance;
              runningBalance -= movement.amount;

              return (
                <tr key={movement.id}>
                  <td>{movement.date}</td>
                  <td>{movement.valueDate}</td> 
                  <td>{movement.description}</td>
                  <td
                    className={
                      movement.amount < 0 ? classes.amountNegative : classes.amountPositive
                    }
                  >
                    {movement.amount} €
                  </td>
                  <td>{balanceAfterMovement} €</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
};