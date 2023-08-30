import { Section } from './section';

export const Work = () => {
  return (
    <Section title='Work Experience'>
      <div className='flex  border w-full gap-5 rounded-2xl'>
        <div className='p-4'>
          <img
            src='https://media.licdn.com/dms/image/D4E0BAQHFSBADGvKptg/company-logo_200_200/0/1687874835469?e=1701302400&v=beta&t=XIShj9rhufZZknVgCIy-0t1CVFmZVvJyPYJGU39UqPw'
            alt=''
            className='h-20 '
          />
        </div>
        <div className='flex flex-col justify-center  flex-1'>
          <h3 className='font-semibold text-2xl'>Seller Square</h3>
          <p className='text-sm text-stone-900'>Web Development Intern</p>
          <p className='text-xs text-stone-800'>Aug 2023 - Present</p>
        </div>
      </div>
    </Section>
  );
};
