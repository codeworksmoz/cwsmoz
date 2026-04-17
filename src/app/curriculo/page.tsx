'use server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getCurriculumData } from '@/lib/curriculum-data';
import { CurriculumClientPage } from './CurriculumClientPage';

export default async function CurriculoPage() {
  const curriculumData = await getCurriculumData();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <CurriculumClientPage curriculumData={curriculumData} />
      <Footer />
    </div>
  );
}
