import { getKnowledgeAreaById } from "@/lib/curriculum-data";
import { LearnPageClient } from "./LearnPageClient";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type LearnPageProps = {
  params: {
    areaId: string;
  };
};

export default async function LearnPage({ params }: LearnPageProps) {
  const area = await getKnowledgeAreaById(params.areaId);

  if (!area) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <LearnPageClient area={area} />
      <Footer />
    </div>
  );
}
