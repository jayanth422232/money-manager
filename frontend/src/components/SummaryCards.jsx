export default function SummaryCards({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Income</p>
        <h2 className="text-2xl text-green-600 font-bold">₹{income}</h2>
      </div>
      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Expense</p>
        <h2 className="text-2xl text-red-500 font-bold">₹{expense}</h2>
      </div>
      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500">Balance</p>
        <h2 className="text-2xl font-bold">₹{income - expense}</h2>
      </div>
    </div>
  );
}
