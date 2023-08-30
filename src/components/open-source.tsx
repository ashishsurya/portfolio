import type { FC } from 'react';
import { Section } from './section';
import { Card } from './card';

interface OpenSourceProps {}

const contributions = [
  {
    id: 1,
    repo: 'react-haiku',
    pullRequestLink: 'https://github.com/DavidHDev/react-haiku/pull/36',
    description : "Added a react hook for observing the dimensions of a react component."
  },
];

export const OpenSource: FC<OpenSourceProps> = ({}) => {
  return (
    <Section title='Open Source'>
      <div className='grid grid-cols-1 gap-5'>
        {contributions.map((c) => (
          <Card link={c.pullRequestLink} key={c.id} name={c.repo} description={c.description}/>
        ))}
      </div>
    </Section>
  );
};
