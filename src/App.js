import { useState } from "react";
import Students from "./components/Students";

function App() {

  const [toggle,setToggle] = useState(1);

  const updateToggle=(id)=>{
    setToggle(id);
  }

  return (
    <div className="bg-[#6754B3] h-svh grid grid-cols-[1fr,8.5fr] items-center">

      <div className="h-[93%] flex flex-col items-center justify-around">
        <div>Logo</div>

        <div className="flex flex-col gap-[40px] pb-40">
          <div onClick={()=>updateToggle(1)} className={toggle===1?'active-tab':'tab'}>item-1</div>
          <div onClick={()=>updateToggle(2)} className={toggle===2?'active-tab':'tab'}>item-1</div>
          <div onClick={()=>updateToggle(3)} className={toggle===3?'active-tab':'tab'}>item-1</div>
          <div onClick={()=>updateToggle(4)} className={toggle===4?'active-tab':'tab'}>item-1</div>
          <div onClick={()=>updateToggle(5)} className={toggle===5?'active-tab':'tab'}>item-1</div>
        </div>

        <div>logout</div>
      </div>

      <div className="h-[95%] bg-white mr-7 rounded-[18px]">

        <div className={toggle===1?'box':'hidden'}><Students /></div>

        <div className={toggle===2?'box':'hidden'}>hello 2</div>

        <div className={toggle===3?'box':'hidden'}>hello 3</div>

        <div className={toggle===4?'box':'hidden'}>hello 4</div>

        <div className={toggle===5?'box':'hidden'}>hello 5</div>
      </div>
    </div>
  );
}

export default App;
