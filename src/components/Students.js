import axios from "axios"
import {  useEffect, useState } from "react"
import Head from "./Head"
import FiltreSection from "./FiltreSection"
import Table from "./Table"
import left from './pngs/chevron-left.svg'
import right from './pngs/chevron-right.svg'


export default function Students(){

    const [studetnData,setStudentData] = useState([])
    useEffect(()=>{
        axios.get('http://3.223.98.72:1337/api/students').then(res=>{
            setStudentData(res.data.data)
        })
    },[])

    const postPerPage = 8
    const [currentPage, setCurrentPage] = useState(1)
    
    const lastPost = currentPage * postPerPage
    const startPost = lastPost - postPerPage


    const details = studetnData.slice(startPost, lastPost)

    const totalPages = Math.ceil(studetnData.length / 10)


    return(
        <div className="h-full">

            <Head count={studetnData.length} />

            <div className="w-full border-[1px] my-4"></div>

            <FiltreSection />

            <div className="w-full my-5"></div>
            
            <Table details={details} />

            <div className="flex items-center mt-7 mx-4 justify-between">
                <div className="ml-8 invisible">
                    hello
                </div>

                <div className="flex gap-4">
                    <button disabled={currentPage===1?true:false} className={currentPage===1?"faded-btn":"btn"} onClick={()=>{setCurrentPage(currentPage-1)}}>
                        <img src={left} alt="previous" className="w-[23px]"/>
                    </button>
                    <button disabled={currentPage>=totalPages?true:false} className={currentPage>=totalPages?"faded-btn":"btn"} onClick={()=>{setCurrentPage(currentPage+1)}}>
                        <img src={right} alt="next" className="w-[21px]"/>
                    </button>
                </div>

                <div className="mr-[10px] flex items-center gap-2 font-semibold text-[#6754B3]">
                    <div className="border-2 w-12 flex justify-center py-[2px] px-2 rounded-3xl">
                    <input type="number" min={"1"} max={totalPages} className="outline-none w-6 pl-1" value={currentPage} onChange={(e)=>{
                        if(parseInt(e.target.value) > totalPages){
                            setCurrentPage(totalPages)
                        }
                        else if(parseInt(e.target.value) <= 0){
                            setCurrentPage(1)
                        }
                        else{
                            setCurrentPage(parseInt(e.target.value))
                        }
                        }}/>
                    </div>

                    <div>
                        of {totalPages}
                    </div>
                </div>
            </div>
        </div>
    )
}