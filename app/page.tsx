import { Suspense } from "react";
import { TabA } from "~/components/tab-a";
import { TabB } from "~/components/tab-b";
import { Tabs } from "~/components/tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tabs
        tabs={[<SuspendedTabA key={"taba"} />, <SuspendedTabB key={"tabb"} />]}
      />
    </main>
  );
}

const SuspendedTabA = () => {
  return (
    <Suspense fallback={<p>Loading tab...</p>}>
      <TabA />
    </Suspense>
  );
};

const SuspendedTabB = () => {
  return (
    <Suspense fallback={<p>Loading tab...</p>}>
      <TabB />
    </Suspense>
  );
};
