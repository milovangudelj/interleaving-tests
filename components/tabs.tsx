"use client";

import { Tab } from "./tab";

export const Tabs = ({ tabs }: { tabs: React.ReactNode[] }) => {
  return (
    <div>
      <h1 className="text-xl">Tabsss!</h1>
      <div>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab}</Tab>
        ))}
      </div>
    </div>
  );
};
