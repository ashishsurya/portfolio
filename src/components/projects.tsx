import type { FC } from 'react';
import { Card } from './card';
import { Section } from './section';

const projects = [
  {
    id: 1,
    name: 'space.repeat',
    link: 'https://builtwith.appwrite.io/projects/648aade4a673f6d69d81/',
    className: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Cricket Score Predictor',
    link: 'https://github.com/ashishsurya/flask-score-predictor',
    className: 'bg-purple-500',
  },
];

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <Section title='Projects'>
      <div className='grid grid-cols-1 gap-5'>
        {projects.map((p) => (
          <Card
            name={p.name}
            key={p.id}
            className={p.className}
            link={p.link}
          />
        ))}
      </div>
    </Section>
  );
};
