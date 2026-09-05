import data from "../../components/data/data.json";
import OurPartnersSection from "../../components/section/OurPartnersSection/page";

export default function OurPartnersPage() {
  const pageData = data.OurPartnersPage;

  return (
    <main>
      <OurPartnersSection data={pageData} />
    </main>
  );
}
