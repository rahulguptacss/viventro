import fs from 'fs';
import path from 'path';
import Hero from '../components/section/Hero/page';
import About from '../components/section/About/page';
import Services from '../components/section/Services/page';
import WhyChooseUs from '../components/section/WhyChooseUs/page';
import Stats from '../components/section/Stats/page';
import UpcomingEvents from '../components/section/UpcomingEvents/page';
import Team from '../components/section/Team/page';
import Testimonials from '../components/section/Testimonials/page';
import Blog from '../components/section/Blog/page';
import { EventTemplateData } from '../components/types';

const componentMap: Record<string, any> = {
  "Hero": Hero,
  "About": About,
  "Services": Services,
  "WhyChooseUs": WhyChooseUs,
  "Stats": Stats,
  "Events": UpcomingEvents,
  "Team": Team,
  "Testimonials": Testimonials,
  "Blog": Blog
};

export default async function Home() {
  // Read data from data.json
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as EventTemplateData;
  
  const template = fullData.categories.Event.templateComponents['template-2'];
  const sections = fullData.categories.Event.sections;
  const components = template.pages.home.components;
  
  return (
    <main>
      {components.map((comp, index) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;
        
        // Resolve the actual data from the sections -> variants map
        const sectionData = sections[comp.key]?.variants[comp.component];
        if (!sectionData) return null;
        
        return <Component key={index} data={sectionData} {...(comp.key === 'Blog' ? { limit: 3 } : {})} />;
      })}
    </main>
  );
}
