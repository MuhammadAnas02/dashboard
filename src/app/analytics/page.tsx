"use client"
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Analytics = () => {
  // Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Completed Interviews",
        data: [12, 19, 15, 22, 18, 24],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Completed Interviews Per Month",
      },
    },
  };

  // Line Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Average Accuracy",
        data: [85, 87, 89, 91, 93, 94],
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Accuracy Trend Over Time",
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Analytics</h1>
        </header>

        {/* Analytics Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">36</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">88%</p>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Completed Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <Bar data={barData} options={barOptions} />
            </CardContent>
          </Card>

          {/* Line Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Accuracy Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={lineData} options={lineOptions} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
