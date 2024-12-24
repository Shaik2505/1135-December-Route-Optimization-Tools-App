import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaRoute,
  FaChartLine,
  FaMoneyBillWave,
  FaLightbulb,
} from "react-icons/fa";

const Dashboard = () => {
  // Sample data for charts
  const travelData = [
    { day: "Mon", distance: 10 },
    { day: "Tue", distance: 15 },
    { day: "Wed", distance: 8 },
    { day: "Thu", distance: 12 },
    { day: "Fri", distance: 20 },
    { day: "Sat", distance: 25 },
    { day: "Sun", distance: 18 },
  ];

  const spendingData = [
    { month: "Jan", spending: 40 },
    { month: "Feb", spending: 50 },
    { month: "Mar", spending: 35 },
    { month: "Apr", spending: 45 },
    { month: "May", spending: 60 },
    { month: "Jun", spending: 55 },
  ];

  // Dynamic insights calculation
  const totalDistance = travelData.reduce(
    (sum, item) => sum + item.distance,
    0
  );
  const highestSpendingMonth = spendingData.reduce(
    (max, item) => (item.spending > max.spending ? item : max),
    spendingData[0]
  ).month;

  return (
    <div className="p-4 md:p-8 bg-background dark:bg-darkBackground min-h-screen ">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      {/* Route Activities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-background shadow-md dark:bg-darkCardBackground shadow-gray-500 dark:text-background  dark:shadow-white rounded p-4">
          <div className="flex items-center">
            <FaRoute className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-lg font-semibold">Route Activities</h2>
          </div>
          <ul className="mt-4 space-y-2 ">
            <li className="text-gray-600 dark:text-background">
              Route A - 5 miles
            </li>
            <li className="text-gray-600 dark:text-background">
              Route B - 3 miles
            </li>
            <li className="text-gray-600 dark:text-background">
              Route C - 8 miles
            </li>
          </ul>
        </div>

        {/* Travel Patterns Section */}
        <div className="bg-background shadow-md dark:bg-darkCardBackground shadow-gray-500 dark:text-background dark:shadow-white rounded p-4">
          <div className="flex items-center">
            <FaChartLine className="text-green-500 text-2xl mr-2" />
            <h2 className="text-lg font-semibold">Travel Patterns</h2>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={travelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="distance" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-600 dark:text-background mt-2">
            Total distance this week: <strong>{totalDistance} miles</strong>.
          </p>
        </div>

        {/* Spending Summary Section */}
        <div className="bg-background shadow-md dark:bg-darkCardBackground shadow-gray-500 dark:text-background dark:shadow-white rounded p-4">
          <div className="flex items-center">
            <FaMoneyBillWave className="text-yellow-500 text-2xl mr-2" />
            <h2 className="text-lg font-semibold">Spending Summary</h2>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="spending" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-600 dark:text-background mt-2">
            Highest spending month: <strong>{highestSpendingMonth}</strong>.
          </p>
        </div>
      </div>

      {/* Insights Section */}
      <div className="mt-6 bg-background shadow-md dark:bg-darkCardBackground shadow-gray-500 dark:text-background dark:shadow-white rounded p-4">
        <div className="flex items-center">
          <FaLightbulb className="text-orange-500 text-2xl mr-2" />
          <h2 className="text-lg font-semibold">Insights</h2>
        </div>
        <p className="text-gray-600 dark:text-background mt-2">
          Based on your recent activity, consider scheduling your longest routes
          on weekends to make better use of your time.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
