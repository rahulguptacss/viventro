import fs from 'fs';
import path from 'path';
import PageBanner from '../../components/section/PageBanner/page';
import Gallery from '../../components/section/Gallery/page';
import { EventTemplateData } from '../../components/types';

export default async function GalleryPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;

  const galleryData = fullData.categories.Event.sections.Gallery?.variants.Gallery1;
  const baseBannerData = fullData.categories.Event.sections.PageBanner?.variants?.EventPageBanner2;

  const pageBannerData = baseBannerData ? {
    ...baseBannerData,
    title: "Gallery",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Gallery", href: "/gallery" }
    ]
  } : {
    title: "Gallery",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Gallery", href: "/gallery" }
    ],
    backgroundImage: "/breadcrumb.png"
  };

  return (
    <main>
      <PageBanner data={pageBannerData} />
      {galleryData ? (
        <Gallery data={galleryData} />
      ) : (
        <div className="py-20 text-center">Gallery data not found</div>
      )}
    </main>
  );
}
