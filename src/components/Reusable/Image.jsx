import mobileImg from '../../assets/illustration-sign-up-mobile.svg'
import desktopImg from '../../assets/illustration-sign-up-desktop.svg'

export default function Image(){
    return(
      <div>

      <div>
        <img src={mobileImg} className='w-full sm:hidden' />
      </div>
      <div>

        <img src={desktopImg} className='sm:flex lg:h-[410px] md:h-[290px]  sm:h-[270px] sm:w-full hidden' />
      </div>
      </div>
        
    )
}