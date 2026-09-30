import LuarAngkasa from "../assets/Luar Angkasa.jfif";

function Header() {
    return (
        <div className="flex items-center gap-4 p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <img
                src={LuarAngkasa}
                alt="Header Luar Angkasa"
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-400"
            />
            <div>
                <h1 className="font-bold text-2xl">Tugas Week 4</h1>
                <p className="text-sm text-gray-400">Front-End Developer Team</p>
            </div>
        </div>
    );
}

export default Header;