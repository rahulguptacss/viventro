import fs from 'fs';
import path from 'path';
import Gallery from '../../components/section/Gallery/page';
import { EventTemplateData } from '../../components/types';

export default async function GalleryPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;


  const galleryData = fullData.categories.Event.templateComponents['template-2'].sections.Gallery?.variants.Gallery1;

  return (
    <main>
      {galleryData ? (
        <Gallery data={galleryData} />
      ) : (
        <div className="py-20 text-center">Gallery data not found</div>
      )}
    </main>
  );
}
