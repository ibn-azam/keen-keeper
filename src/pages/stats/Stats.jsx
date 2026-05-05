import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useContact } from "../../Context/ContactContext";
import { useEffect } from "react";

const COLORS = {
  Text: "#7C3AED",
  Call: "#244D3F",
  Video: "#4ADE80",
};

export default function StatsPage() {
  const { timeline } = useContact();

  const counts = timeline.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

  useEffect(() => {
    document.title = "Stats | KeenKeeper";
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 sm:p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <p className="text-sm text-gray-400 mb-6">By Interaction Type</p>

          {data.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
              No interactions yet. Log a check-in to see stats.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[entry.name] ?? "#94A3B8"}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} interactions`, name]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => (
                    <span style={{ color: "#6B7280", fontSize: "12px" }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
