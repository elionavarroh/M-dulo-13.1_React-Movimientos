import React from "react";
import { Link } from "react-router-dom";
import { appRoutes, routesPrefixes } from "@/core/router";
import classes from "./navbar.component.module.css";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { id: accountId } = useParams<{ id: string }>();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li className={pathname.startsWith(routesPrefixes.accountList) ? classes.selected : ""}>
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li className={pathname.startsWith(`/movements/${accountId}`) ? classes.selected : ""}>
          <Link to={`/movements/${accountId}`}>Movimientos</Link>
        </li>
        <li className={pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""}>
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
