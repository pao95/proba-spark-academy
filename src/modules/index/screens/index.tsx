import { useState } from "react";
import { AppLayout } from "@/components/templates/AppLayout";
import { Dashboard } from "@/components/organisms/dashboard";

const Index = () => {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  );
};

export default Index;
