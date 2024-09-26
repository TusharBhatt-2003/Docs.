import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <>
    <motion.div 
    drag dragConstraints={reference} 
    whileDrag={{scale: 1.1}} 
    dragElastic={0.2}
    dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
    className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-[#f1d5aa83] px-8 py-10 overflow-hidden'>
    <LuFileSpreadsheet color='#474d01' />
      <p className='text-sm leading-tight mt-5 font-medium text-[#515709]'>
      {data.desc}</p>
      <div className='absolute footer bottom-0 left-0  w-full'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5 className='text-[#515709]'>{data.fileSize}</h5>
          <span className='w-7 h-7 bg-[#515709] text-[#fffceb] rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose /> : <LuDownload size={17} />}
          </span>
        </div>
        {
            data.tag.isOpen && (
              <div className={`tag w-full py-4 ${data.tag.tagColor === 'green' ? 'bg-[#515709]' : 'bg-[#3e2617]'} text-[#fffceb] flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
              </div>
        )}
      </div>
    </motion.div>
    </>
  )
}

export default Card