import BodyDetail from "./BodyDetail.jsx"
import Image from "./Reusable/Image.jsx"

export default function BodyNewsLetter({children}){

    return(
       
        <div className='sm:bg-slate-900 sm:bg-repeat sm:h-screen'>
          <div className=' sm:flex sm:justify-center sm:items-center sm:h-screen '>
  
    
            <div className=' sm:w-1/2 sm:h-2/3  sm:flex sm:justify-center sm:items-center   sm:flex-row-reverse  sm:rounded-3xl sm:bg-white  '>
              

              <div className="sm:px-3 ">
                <Image/>
              </div>
              <div className='space-y-6  lg:mt-5 xl:space-y-6 sm:mt-1 sm:space-y-2 mt-8 px-8  xl:pt-10'>
                <h1 className='text-4xl  font-bold sm:text-[15px] lg:text-xl xl:text-3xl md:text-[16px]'>Stay Updated!</h1>
                <p className='text-[16px] font-medium md:text-[17px] lg:text-[13px] sm:text-[9px] xl:text-[15px]  '>Join 60,000+ product managers 
                  receiving monthly updates on: 
                </p>
                <BodyDetail/>
                {children}
              </div>
            </div>
      
          </div>
        </div>
  
  
      
     
    )
  }