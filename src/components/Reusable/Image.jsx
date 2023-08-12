import mobileImg from '../../assets/illustration-sign-up-mobile.svg'
import desktopImg from '../../assets/illustration-sign-up-desktop.svg'

export default function Image(){
    return(
      <div>
        <img src={mobileImg} className='w-full sm:hidden' />
        <img src={desktopImg} className=' sm:flex sm:h-[460px] md:h-[490px] lg:h-[590px] xl:h-[570px] hidden' />
        
      </div>
    )
}