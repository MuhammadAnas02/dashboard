import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
        </header>

        {/* Settings Form */}
        <form className="space-y-6 bg-white p-6 shadow-md rounded-lg">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <Input id="username" type="text" placeholder="Enter your username" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Enable Notifications</span>
            <Switch />
          </div>

          <Button  type="submit">
            Save Changes
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Settings;
