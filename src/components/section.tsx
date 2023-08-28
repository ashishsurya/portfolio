import { twMerge } from 'tailwind-merge';

interface SectionProps {
  title: string;
}

export const Section = ({
  children,
  title,
  className,
}: React.PropsWithChildren<SectionProps> &
  React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge(className, 'w-full px-5')}>
      <h3 className='text-2xl md:text-3xl font-bold pb-5'>{title}</h3>
      {children}
    </div>
  );
};
