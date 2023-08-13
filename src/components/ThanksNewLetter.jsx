import IconSuccess from '../assets/icon-success.svg'
import Button from './Reusable/Button.jsx'



export default function ThanksNewsLetter({email}){
  document.title = 'Thank You'
    return(
      <div>
        <div className='sm:bg-slate-900 sm:justify-center sm:items-center sm:h-screen sm:flex'>
           <div className='sm:p-8 sm:bg-white sm:rounded-2xl'>
            <div className='space-y-6 sm:space-y-2 md:space-y-6 pl-8 '>
              <img src={IconSuccess} className='mt-36 sm:mt-2 md:mt-5 lg:mt-10' />
              <h1 className='font-bold text-4xl sm:text-[18px] md:text-2xl lg:text-4xl '>Thanks for subscribing!</h1>
            </div>
  
            <div className='mt-10 px-8 md:mt-6 sm:mt-3 '>
              <p className='text-xl sm:text-[12px] sm:font-medium md:text-[16px] lg:text-[19px] font-medium '>A Confirmation email has been sent to <strong>{email}</strong>.<br></br> Please open it and 
                click the button inside<br></br> to confirm your subscription
              </p>
            </div>
            <div className='mt-40 md:mt-2 sm:mt-1 lg:mt-3 xl:mt-6 px-8  '>
  
              <Button>Dismiss message</Button>
            </div>
            
            
          </div>
        </div>
  
      </div>
    )
  }