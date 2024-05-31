import { useState } from "react";
import Students from "./components/Students";
import student from './components/pngs/person-add.svg'
import settings from './components/pngs/settings.svg'
import cup from './components/pngs/cup.svg'
import calender from './components/pngs/calendar-event.svg'
import chart from './components/pngs/chart.svg'
import exit from './components/pngs/exit.svg'
import logo from './components/pngs/Untitled-1.png'
import Dummy from "./components/Dummy";

function App() {

  const [toggle,setToggle] = useState(1);

  const updateToggle=(id)=>{
    setToggle(id);
  }

  return (
    <div className="bg-[#6754B3] h-svh grid grid-cols-[1fr,8.5fr] items-center">

      <div className="h-[93%] flex flex-col items-center justify-around">
        <div>
          <img src={logo} alt="" className="w-[80px]"/>
        </div>

        <div className="flex flex-col gap-[40px] pb-[130px]">
          <div onClick={()=>updateToggle(1)} className={toggle===1?'active-tab':'tab'}>
            <img src={student} alt="" className="w-[20px]"/>
          </div>

          <div onClick={()=>updateToggle(2)} className={toggle===2?'active-tab':'tab'}>
          <img src={cup} alt="" className="w-[20px]"/>
          </div>

          <div onClick={()=>updateToggle(3)} className={toggle===3?'active-tab':'tab'}>
          <img src={chart} alt="" className="w-[20px]"/>
          </div>

          <div onClick={()=>updateToggle(4)} className={toggle===4?'active-tab':'tab'}>
          <img src={calender} alt="" className="w-[20px]"/>
          </div>

          <div onClick={()=>updateToggle(5)} className={toggle===5?'active-tab':'tab'}>
          <img src={settings} alt="" className="w-[20px]"/>
          </div>
        </div>

        <div className=" cursor-pointer">
          <img src={exit} alt="" className="w-[28px]"/>
        </div>
      </div>

      <div className="h-[95%] bg-white mr-7 rounded-[18px]">

        <div className={toggle===1?'box':'hidden'}><Students /></div>
        <div className={toggle===2?'box':'hidden'}><Dummy /></div>
        <div className={toggle===3?'box':'hidden'}><Dummy /> </div>
        <div className={toggle===4?'box':'hidden'}><Dummy /> </div>
        <div className={toggle===5?'box':'hidden'}><Dummy /> </div>

      </div>
    </div>
  );
}

export default App;
