import { PieChart, Pie, Cell } from "recharts";

export default function Charts({ transactions }) {
  const data = [
    {
      name: "Income",
      value: transactions
        .filter(t => t.type === "income")
        .reduce((a, b) => a + Number(b.amount), 0)
    },
    {
      name: "Expense",
      value: transactions
        .filter(t => t.type === "expense")
        .reduce((a, b) => a + Number(b.amount), 0)
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h3 className="font-semibold mb-4">Income vs Expense</h3>
      <PieChart width={300} height={200}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
          <Cell fill="#22c55e" />
          <Cell fill="#ef4444" />
        </Pie>
      </PieChart>
    </div>
  );
}
