import PageHero from "@/components/common/PageHero";
import PerformanceHighlightsSection from "@/components/common/performance-highlights";
import LifeAtSecretspirit from "./life-at";
import Timeline, { TimelineProps } from "./mission-value";
import OurApproach from "./our-approach";
import Evolution from "./evolution";
import PartOfTeam from "./part-of-team";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HeartHandshake, MessagesSquare, Rocket, Scale, Sprout } from "lucide-react";

const LifeAtTopCards = [
  { title: 'Daily Sync-ups', body: 'Our daily meetings are designed to do more than just discuss tasks. They are a cornerstone of our culture, fostering open communication and strengthening the bonds within our team.', icon: MessagesSquare },
  { title: 'A Culture of Growth', body: 'We believe mentorship isn\'t a program; it\'s our way of life. We\'re committed to lifting each other up, motivating one another, and inspiring every team member to reach new heights.', icon: Sprout },
  { title: 'Focused on Balance', body: 'Our goal is to promote a healthy work-life integration. We actively encourage a balanced approach to responsibilities and personal pursuits, because a refreshed mind leads to our best work.', icon: Scale },
]

const LifeAtBottomCards = [
  { title: 'Advocating for Mental Health', body: 'We\'re dedicated to a supportive and open environment where mental well-being is a top priority. We ensure everyone feels valued, heard, and respected.', icon: HeartHandshake },
  { title: 'Endless Potential', body: 'We are a team committed to continuous professional and personal development. We believe that by investing in our people, we are creating a collective that is resilient, adaptable, and forward-thinking.', icon: Rocket },
]

const timelineItems: TimelineProps['items'] = [
  {
    title: 'Our Mission',
    body: 'We always look for new trends in our industry, and we aim to facilitate you with a solution that is not "trendy" but one, which can fit your requirement.',
    icon: '/about/about-icon-1.svg',
    side: 'left',
  },
  {
    title: 'Our Vision',
    body: 'A good UX design & development experience needs to be simple, and fulfil a purpose. We are a team of creative minds that loves design and always work with new approaches and clarity.',
    icon: '/about/about-icon-2.svg',
    side: 'right',
  },
  {
    title: 'Our Values',
    body: 'We aim to revolutionise business development with cutting-edge technological solutions and establish ourselves as a global leader in this industry.',
    icon: '/about/about-icon-3.svg',
    side: 'left',
  },
]

export default function AboutPage() {
  return (
    <>
    <ScrollProgress className="top-[76px]" />
      <PageHero
        title="A Team of Crafting Meaningful Experiences"
        bgImage="/heros/aboutus-hero.jpg"
        overlayColor="bg-[linear-gradient(123.99deg,#000000_5.78%,#331C07_45.6%,#000000_81.67%)] opacity-90"
        breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'ABOUT' }]}
        subtitle="When embraced, curiosity becomes a powerful driver of problem-solving. Our passion fuels us to craft exceptional websites and web applications for our clients."
      />
      <LifeAtSecretspirit topCards={LifeAtTopCards} bottomCards={LifeAtBottomCards} />
      <Timeline items={timelineItems} />
      <OurApproach />
      <PerformanceHighlightsSection />
      <Evolution />
      <PartOfTeam />
    </>
  );
}
