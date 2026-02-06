import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import TransactionTable from "../components/TransactionTable";
import AddTransactionModal from "../components/AddTransactionModal";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [open, setOpen] = useState(false);

  const loadData = async () => {
    const res = await fetch("http://localhost:5000/api/transactions");
    setTransactions(await res.json());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            + Add Transaction
          </button>
        </div>

        <SummaryCards transactions={transactions} />
        <Charts transactions={transactions} />
        <TransactionTable transactions={transactions} />

        {open && (
          <AddTransactionModal
            close={() => setOpen(false)}
            refresh={loadData}
          />
        )}
      </main>
    </div>
  );
}
