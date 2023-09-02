import { useState } from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense: Expense = {
      id: new Date().getTime(),
      title,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <form className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="title" className="mr-2 text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="amount" className="mr-2 text-gray-700">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="p-2 border border-gray-300 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={addExpense}
        >
          Add Expense
        </button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex items-center justify-between py-2 border-b border-gray-300"
          >
            <span>{expense.title}</span>
            <span className="text-red-500">-${expense.amount}</span>
            <button
              type="button"
              className="text-red-500 hover:text-red-600"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;