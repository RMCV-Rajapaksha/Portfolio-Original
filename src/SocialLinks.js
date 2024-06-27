import { motion } from 'framer-motion';
import { SocialLinks as socialLinksData } from './data';

const SocialLinks = () => {
    return (
        <div className='flex flex-wrap items-center justify-center w-full gap-4 my-4'>
        {
          socialLinksData && socialLinksData.map((n) => (  
          <motion.a 
          whileTap={{scale:0.8}}
          key={n.id} href={n.link} className='flex items-center justify-center w-full gap-3 px-3 py-5 duration-100 ease-in-out border cursor-pointer md:w-auto md:px-8 border-x-zine-800 rounded-2xl hover:border-zinc-600'>
          {n.iconSrc}
          <p className='text-lg text-textBase'>{n.name}</p>
          </motion.a>))
        }
        </div>
    );
};
  
export default SocialLinks;