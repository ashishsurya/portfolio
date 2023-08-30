import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  link: string;
  description: string;
}

export const Card: FC<CardProps> = ({ className, name, link, description }) => {
  return (
    <a
      className={twMerge(
        className,
        ' h-40 w-full rounded-2xl relative cursor-alias border md:hover:scale-x-110 duration-500 '
      )}
      href={link}
    >
      <p className='absolute top-4 left-4 w-4/5'>{description}</p>
      <p className='absolute bottom-4 right-4 text-2xl'>{name} &#8599;</p>
    </a>
  );
};
