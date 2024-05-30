
import search from "./pngs/search.svg"
import bell from "./pngs/bell.svg"
import dashboard from "./pngs/dashboard.svg"
import down from "./pngs/chevron-down.svg"

export default function Head({count}){
    return(
        <div className="mt-6 flex justify-between">

            <div className="pl-4 flex gap-2 items-center">
                <p className="text-[20px] font-[700] tracking-wide">Students</p>
                <p className="border-2 px-2 py-[1px] ml-1 text-lg rounded-2xl font-bold text-[#6754B3] ">{count}</p>
            </div>

            <div className="pr-6 flex gap-7 items-center">

                <div className="border-b-2 flex gap-3 pb-1">
                    <img src={search} alt="" className="w-[22px]"/>
                    <input type="text" placeholder="search" className="outline-none"/>
                </div>

                <div className="flex gap-1">
                     <div className="p-[10px] w-[43px] rounded-full cursor-pointer hover:bg-indigo-100">
                     <img src={dashboard} alt="" className=""/>
                     </div>
                     <div className="p-[10px] w-[44px] rounded-full cursor-pointer hover:bg-indigo-100">
                     <img src={bell} alt="" className=""/>
                     </div>
                </div>

                <div className="flex gap-2 cursor-pointer">
                    <img src="https://avatar.iran.liara.run/public" className="w-[45px]" alt="" />
                    <img src={down} alt="" className="w-[20px]" />
                </div>
            </div>
        </div>
    )
}