import data from "../../components/data/data.json";
import FAQSection from "../../components/section/FAQ/page";

export default function FAQPage() {
  const pageData = data.FAQPage;

  return (
    <main>
      <FAQSection data={pageData} />
    </main>
  );
}
