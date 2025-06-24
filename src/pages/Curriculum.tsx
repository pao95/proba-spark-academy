
import { AppLayout } from '@/components/templates/AppLayout';
import { CurriculumGrid } from '@/components/organisms/CurriculumGrid';

const Curriculum = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Curriculum</h1>
          <p className="text-gray-600 mt-2">Complete curriculum for Probability and Statistics</p>
        </div>
        <CurriculumGrid />
      </div>
    </AppLayout>
  );
};

export default Curriculum;
