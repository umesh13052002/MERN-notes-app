import { useState } from "react";
import AddNoteModal from "../components/AddNoteModal";
import Navbar from "../components/Navbar";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Navbar/>
            <button onClick={()=>setIsOpen(true)} className="bg-teal-500 bottom-6 cursor-pointer text-white font-bold text-center flex items-center justify-center h-[40px] w-[40px] rounded-full fixed right-6 text-2xl">+</button>
            {
                isOpen && <AddNoteModal setIsOpen={setIsOpen}/>
            }
        </div>
    )
}