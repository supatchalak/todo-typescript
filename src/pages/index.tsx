import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  period: number;
};

type DataUI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  period: number;
  time: number;
};

const data: Data[] = [
  { userId: 1, id: 1, title: "QA", completed: false, period: 150 },
  { userId: 2, id: 2, title: "Frontend", completed: true, period: 80 },
];

export default function Home() {
  const todos = data.map(transform);

  function transform(item: Data): DataUI {
    return {
      userId: item.userId,
      id: item.id,
      title: item.title,
      completed: item.completed,
      period: item.period,
      time: item.period,
    };
  }

  function status(completed: boolean) {
    if (completed === true) {
      return "Done";
    } else {
      return "Doing";
    }
  }
  function period(period: number) {
    if (period > 100) {
      return "Bad";
    } else {
      return "Good";
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <table className="table-auto border-collapse border border-slate-400 w-96">
            <thead>
              <tr>
                <th className="border border-slate-300">id</th>
                <th className="border border-slate-300">userId</th>
                <th className="border border-slate-300">title</th>
                <th className="border border-slate-300">completed</th>
                <th className="border border-slate-300">status</th>
                <th className="border border-slate-300">time</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-slate-300">{item.id}</td>
                    <td className="border border-slate-300">{item.userId}</td>
                    <td className="border border-slate-300">{item.title}</td>
                    <td className="border border-slate-300">
                      {status(item.completed)}
                    </td>
                    <td className="border border-slate-300">
                      {period(item.period)}
                    </td>
                    <td className="border border-slate-300">{item.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
