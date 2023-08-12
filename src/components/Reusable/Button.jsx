export default function Button({children}){
    return(
      <div>
        <button className='w-full sm:hover:bg-red-500 p-3 sm:hover:shadow-2xl self-center rounded-lg mt-6s text-center bg-slate-900 text-white font-bold '>{children}</button>
      </div>
    )
  }