import filtre from "./pngs/filter.svg"
export default function FiltreSection(){
    return(
        <div className="flex justify-between mx-3">
            <div className="flex flex-col gap-1">

                <p className="ml-2 font-semibold text-gray-400 ">select school</p>

                <select className="border-2 rounded-md mx-1 w-40  cursor-pointer outline-none py-[6px] pr-8 text-sm font-semibold">
                    <option value="school" className="font-semibold text-sm">Big Ben</option>
                    <option value="school" className="font-semibold text-sm">St.Ans</option>
                    <option value="school" className="font-semibold text-sm">Bosco</option>
                </select>

            </div>

            <div className="flex items-center pr-6 gap-4">
                <div className="p-[10px] w-[42px] rounded-full cursor-pointer border-2 hover:bg-indigo-100">
                    <img src={filtre} alt="" className=""/>
                 </div>
                <button className="px-4 py-[6px] rounded-2xl text-[15px] font-semibold text-white bg-[#6754B3]">+ add a student</button>
            </div>
        </div>
    )
}