export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">💰 Money Manager</h2>
      <ul className="space-y-4">
        <li className="opacity-90">Dashboard</li>
        <li className="opacity-70">Transactions</li>
        <li className="opacity-70">Reports</li>
        <li className="opacity-70">Accounts</li>
      </ul>
    </aside>
  );
}
