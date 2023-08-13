

export default function FormDetail({ handleSubmit,setError, email,  error, setEmail}){
    return(
      <div className='px-8 xl:px-3 xl:pt-7 lg:py-4 sm:p-3      mt-16'>
        <form onSubmit={handleSubmit}>
          <div className='space-y-3 lg:space-y-1 sm:space-y-0 md:space-y-1 xl:space-y-1 lg:relative'>
            <label className='block font-semibold sm:text-[10px] lg:text-[13px] sm:font-bold text-[17px] xl:text-[17px]'>Email address</label>
            {error && <p className='xl:text-[14px] sm:text-[8px] lg:absolute lg:top-1 lg:left-1/2 lg:text-red-700'>Input A Correct Email</p>}
            <input value={email} onKeyDown={()=>setError(false)} onChange={(e)=>setEmail(e.target.value)} className={error ? 'border-red-300 border-4 bg-red-50 rounded-lg  py-2 md:text-[12px] sm:w-full sm:text-[12px] lg:py-2 px-3 w-4/5': 'py-2  md:text-[12px] sm:w-full sm:text-[12px] lg:py-2 px-3 w-4/5 border-slate-300  border-4 rounded-lg '} placeholder='email@company.com' />
          </div>
          <div className=''>
            <button  className='sm:hover:bg-red-700 py-2  sm:text-[10px] md:py-2  lg:hover:shadow-2xl w-4/5   xl:py-2 xl:text-[16px] lg:mt-2 lg:py-2 lg:text-[16px] rounded-lg mt-3 xl:mt-1 md:mt-2 sm:mt-1 sm:w-full text-center bg-slate-900 text-white font-bold'>Subscribe to monthly newsletter</button>
          </div>
        </form>
      </div>
    )
}