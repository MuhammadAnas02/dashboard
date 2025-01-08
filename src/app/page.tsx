import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-6"> Interview Xpert</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="#" className="text-gray-700 hover:text-indigo-500">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/analytics" className="text-gray-700 hover:text-indigo-500">
                Analytics
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/setting" className="text-gray-700 hover:text-indigo-500">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button >Start Interview</Button>
        </header>

        {/* Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Widget: Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Completed Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">12</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">4</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interview Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">94%</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
