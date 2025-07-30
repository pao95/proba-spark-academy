import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppLayout } from "@/components/templates/AppLayout";
import { CurriculumGrid } from "@/components/organisms/curriculum-grid";
import { CombinedLearning } from "@/components/organisms/combined-learning";

const Curriculum = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const unitId = searchParams.get("unit");
  const subunitId = searchParams.get("subunit");

  const handleSubunitClick = (unitId: string, subunitId: string) => {
    setSearchParams({ unit: unitId, subunit: subunitId });
  };

  const handleBackToCurriculum = () => {
    setSearchParams({});
  };

  if (unitId) {
    return (
      <AppLayout>
        <CombinedLearning
          unitId={unitId}
          initialSubunitId={subunitId || undefined}
          onBack={handleBackToCurriculum}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <CurriculumGrid onSubunitClick={handleSubunitClick} />
    </AppLayout>
  );
};

export default Curriculum;
