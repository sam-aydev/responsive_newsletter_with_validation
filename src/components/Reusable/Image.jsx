import mobileImg from '../../assets/illustration-sign-up-mobile.svg'
import desktopImg from '../../assets/illustration-sign-up-desktop.svg'

export default function Image(){
    return(
      <div>
        <img src={mobileImg} className='w-full sm:hidden' />
        <img src={desktopImg} className=' sm:flex sm:flex-col-reverse hidden' />
        
      </div>
    )
}