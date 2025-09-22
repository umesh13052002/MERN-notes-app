import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <button className="bg-teal-500 bottom-4 text-white font-bold h-[40px] w-[40px] rounded-full fixed right-4">+</button>
        </div>
    )
}