import type { FC } from 'react';
import { Card } from './card';
import { Section } from './section';

const projects = [
  {
    id: 1,
    name: 'space.repeat',
    link: 'https://builtwith.appwrite.io/projects/648aade4a673f6d69d81/',
    description : "A game changing digital flashcard experience for you."
  },
  {
    id: 2,
    name: 'Cricket Score Predictor',
    link: 'https://github.com/ashishsurya/flask-score-predictor',
    description : "Predicts the score of a cricket match using machine learning"
  },
];

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <Section title='Projects'>
      <div className='grid grid-cols-1 gap-5'>
        {projects.map((p) => (
          <Card name={p.name} key={p.id} link={p.link} description={p.description}/>
        ))}
      </div>
    </Section>
  );
};
