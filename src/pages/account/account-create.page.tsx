import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "@/pages/account-list/api/account-list.api";
import { AppLayout } from "@/layouts";
import { CreateAccount } from "@/pages/account-list/api/account-list.api-model";

export const AccountCreatePage: React.FC = () => {
  const [accountType, setAccountType] = useState<string>("");
  const [alias, setAlias] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!accountType || !alias) {
      setError("Debe elegir un tipo de cuenta y proporcionar un alias.");
      return;
    }

    const newAccount: CreateAccount = { type: accountType, name: alias };

    try {
      await saveAccount(newAccount);
      navigate("/account-list");
    } catch (error) {
      setError("Hubo un problema al guardar la cuenta. Inténtalo de nuevo.");
    }
  };

  return (
    <AppLayout>
      <div>
        <h1>Agregar Nueva Cuenta</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label>
            Tipo de Cuenta:
            <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
              <option value="">Seleccione un tipo de cuenta</option>
              <option value="Corriente">Corriente</option>
              <option value="Ahorro">Ahorro</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Alias:
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button onClick={handleSave}>Guardar Cuenta</button>
        </div>
      </div>
    </AppLayout>
  );
};