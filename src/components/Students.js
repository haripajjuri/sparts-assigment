import axios from "axios"
import {  useEffect, useState } from "react"
import Head from "./Head"
import FiltreSection from "./FiltreSection"

export default function Students(){

    const [studetnData,setStudentData] = useState([])
    useEffect(()=>{
        axios.get('http://3.223.98.72:1337/api/students').then(res=>{
            setStudentData(res.data.data)
        })
    },[])

    const postPerPage = 10
    const [currentPage, setCurrentPage] = useState(1)
    
    const lastPost = currentPage * postPerPage
    const startPost = lastPost - postPerPage


    const datas = studetnData.slice(startPost, lastPost)

    const totalPages = Math.ceil(studetnData.length / 10)

    return(
        <div className="h-full">

            <Head count={studetnData.length} />

            <div className="w-full border-[1px] my-4"></div>

            <FiltreSection />


            <div className="border-2 mx-4 mt-8">
                {datas.map(data => {
                    return <div>{data.attributes.firstName}</div>
                })}
            </div>

            <div>
                <button disabled={currentPage===1?true:false} className='border-2 m-2' onClick={()=>{setCurrentPage(currentPage-1)}}>previous</button>
                <button disabled={currentPage===totalPages?true:false} className="border-2 m-2" onClick={()=>{setCurrentPage(currentPage+1)}}>next</button>
            </div>

            <div>
                <input type="number" value={currentPage} onChange={(e)=>setCurrentPage(parseInt(e.target.value))}/> of {totalPages}
            </div>
        </div>
    )
}