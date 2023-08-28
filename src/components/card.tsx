import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  link: string;
}

export const Card: FC<CardProps> = ({ className, name, link }) => {
  return (
    <a
      className={twMerge(
        className,
        ' h-40 w-full rounded-2xl relative cursor-alias'
      )}
      href={link}
    >
      <p className='text-white absolute bottom-4 right-4 text-xl'>
        {name} &#8599;
      </p>
    </a>
  );
};
