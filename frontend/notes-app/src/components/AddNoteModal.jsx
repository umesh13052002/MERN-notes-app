import { useState } from "react";

export default function AddNoteModal({setIsOpen}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Title:", title);
        console.log("Content:", content);
        setIsOpen(false);
    }
    return (
        <div className="flex items-center justify-center h-screen fixed w-screen z-50">

            <div className="bg-white p-6 rounded drop-shadow-xl w-96">
                <div className="absolute right-5 font-bold top-2 text-xl cursor-pointer" onClick={()=>setIsOpen(false)}>X</div>
                <h2 className="text-2xl mb-4">Add Note</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Note Title"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                        <textarea value={content} onChange={(e)=>setContent(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Note Content"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}