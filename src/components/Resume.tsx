import logoAtlassian from '@/images/logos/atlassian.svg';
import logoSpec from '@/images/logos/spec.svg';
import logoAmazon from '@/images/logos/amazon.png';
import logoThreatMetrix from '@/images/logos/threatmetrix.png';
import logoEdupoint from '@/images/logos/synergy.png';
import logoApple from '@/images/logos/apple.png';
import { Role } from './Role';
import { ArrowDownIcon, BriefcaseIcon } from './Icons';
import { Button } from './Button';

export function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Spec',
      title: 'VP of Engineering',
      logo: logoSpec,
      start: '2020',
      end: '2023',
    },
    {
      company: 'Atlassian',
      title: 'Software Engineer',
      logo: logoAtlassian,
      start: '2018',
      end: '2020',
    },
    {
      company: 'Amazon',
      title: 'Software Engineering Intern',
      logo: logoAmazon,
      start: '2018',
      end: '2018',
    },
    {
      company: 'ThreatMetrix',
      title: 'Software Engineer',
      logo: logoThreatMetrix,
      start: '2017',
      end: '2018',
    },
    {
      company: 'Edupoint',
      title: 'Software Engineering Intern',
      logo: logoEdupoint,
      start: '2017',
      end: '2017',
    },
    {
      company: 'Apple',
      title: 'Technical Advisor',
      logo: logoApple,
      start: '2015',
      end: '2016',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}
