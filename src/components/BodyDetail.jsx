import IconList from '../assets/icon-list.svg'



export default function BodyDetail(){
    return(
      <div className='space-y-3 px-8 sm:px-2 lg:px-8 mt-6 '>
        <span className='flex text-[16px] md:text-[16px] sm:text-[12px] font-medium xl:text-[20px]'><img className='md:w-4 sm:w-2' src={IconList}/>
          <p className='px-2'>
            Product discovery and building what matters
          </p>
        </span>
        <span className='flex text-[16px] sm:text-[12px] md:text-[16px] font-medium xl:text-[20px]'><img className='md:w-4 sm:w-2' src={IconList}/>
          <p className='px-2'>
            Measuring to ensure updates are a success
          </p>
        </span>
        <span className='flex text-[16px] sm:text-[12px] md:text-[16px] font-medium xl:text-[20px]'><img className='md:w-4 sm:w-2' src={IconList}/>
          <p className='px-2'>
            And much more!
          </p>
        </span>
      </div>
    )
}