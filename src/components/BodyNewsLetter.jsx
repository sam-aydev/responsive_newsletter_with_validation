import BodyDetail from "./BodyDetail.jsx"
import Image from "./Reusable/Image.jsx"

export default function BodyNewsLetter({children}){

    return(
      <div>     
        <div className='sm:bg-slate-900 sm:bg-repeat sm:h-screen '>
          <div className='lg:pt-6  sm:pt-24'>
  
          {/* lg:p-10 lg:h-screen lg:h-screen */}
            <div className='sm:px-2 xl:w-2/3 sm:py-3 sm:mb-20  sm:rounded-3xl sm:bg-white sm:flex-row-reverse sm:w-2/3 sm:mx-auto sm:flex sm:justify-center'>
              
              <div>
                <Image/>
              </div>
        
        
              <div className='space-y-6 lg:mt-8 xl:space-y-6 sm:mt-1 sm:space-y-2 mt-8 px-8  xl:mt-10'>
                <h1 className='text-4xl  font-bold sm:text-xl lg:text-2xl xl:text-4xl md:text-xl'>Stay Updated!</h1>
                <p className='text-[16px] font-medium md:text-[17px] sm:text-[12px] xl:text-xl  '>Join 60,000+ product managers 
                  receiving monthly updates on: 
                </p>
                <BodyDetail/>
                {children}
              </div>
            </div>
      
          </div>
        </div>
  
  
      
      </div>
    )
  }