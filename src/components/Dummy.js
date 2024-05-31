import dummy from './pngs/dummy.png'

export default function Dummy(){
    return(
        <div className="h-full flex items-center justify-center">
            <img src={dummy} alt='under development' className=' opacity-60'/>
        </div>
    )
}