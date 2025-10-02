import { useState } from "react";
import AddNoteModal from "../components/AddNoteModal";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const addNote = async (title, description) => {
    try {
      const reposne = await axios.post("http://localhost:5000/api/notes/add", {
        title,
        description,
      });
      if (reposne.data.success) {
        setIsOpen(false);
      }
    } catch (error) {
      console.log("Error in adding note", error);
    }
  };
  return (
    <div>
      <Navbar />
      <button
        onClick={() => setIsOpen(true)}
        className="bg-teal-500 bottom-6 cursor-pointer text-white font-bold text-center flex items-center justify-center h-[40px] w-[40px] rounded-full fixed right-6 text-2xl"
      >
        +
      </button>
      {isOpen && <AddNoteModal setIsOpen={setIsOpen} addNote={addNote} />}
    </div>
  );
}
