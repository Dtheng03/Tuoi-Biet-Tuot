import { useEffect, useState } from "react"
import { Sparkle, Triangle } from "lucide-react"
import EnglishContent from "./components/my-components/english-content";
import VietnameseContent from "./components/my-components/vietnamese-content"

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const isInEnglish = localStorage.getItem("isEnglish");
    if (isInEnglish === "true") {
      setIsEnglish(true)
    } else {
      setIsEnglish(false)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#2E26DB] relative overflow-auto flex flex-col">
      {/* Border decorations */}
      <div className="absolute top-0 left-0 w-full h-6 flex justify-between items-center px-6 text-[#5586FD] text-xs">
        <div className="flex items-center">
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
        </div>
        <div className="text-center flex-1">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <div className="text-center flex-1">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <div className="text-center flex-1">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <div className="flex items-center">
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-6 flex justify-between items-center px-6 text-[#5586FD] text-xs">
        <div className="flex items-center">
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
          <Triangle className="size-3 rotate-90" />
        </div>
        <div className="text-center flex-1">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <div className="text-center flex-1">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <div className="text-center flex-1">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <div className="flex items-center">
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
          <Triangle className="size-3 -rotate-90" />
        </div>
      </div>

      {/* Left border */}
      <div className="absolute left-0 top-0 h-full w-6 flex flex-col justify-between items-center text-[#5586FD] text-xs py-4">
        <Sparkle className="size-3" />
        <Sparkle className="size-3" />
        <div className="-rotate-90 whitespace-nowrap">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <Sparkle className="size-3" />
        <Sparkle className="size-3" />
      </div>

      {/* Right border */}
      <div className="absolute right-0 top-0 h-full w-6 flex flex-col justify-between items-center text-[#5586FD] text-xs py-4">
        <Sparkle className="size-3" />
        <Sparkle className="size-3" />
        <div className="-rotate-90 whitespace-nowrap">ORAL HEALTH - SỨC KHỎE RĂNG MIỆNG</div>
        <Sparkle className="size-3" />
        <Sparkle className="size-3" />
      </div>

      {/* Main content */}
      <div className="min-h-[calc(100vh-48px)] overflow-auto flex-1 flex flex-col justify-between m-6 border-2 border-[#131B63] bg-contain bg-bottom bg-no-repeat" style={{ backgroundImage: "url('/element giao diện 2.png')" }}>
        {/* Logo and decorative waves */}

        <img className="-mt-4 w-[80%] mx-auto object-contain" src="/LOGO GIAO DIEN.png" alt="Tai tro" />

        <img className="-mt-8 w-full" src="/element giao diện 1.png" alt="Logo" />

        <div className="flex justify-center items-center -mt-4 mb-6">
          <span
            onClick={() => {
              localStorage.setItem("isEnglish", "false")
              setIsEnglish(false)
            }}
            className={`inline-block w-[117px] p-4 border-[3px] border-[#131B63] rounded-l-2xl text-center text-[#FFEB84] text-xs italic font-medium select-none cursor-pointer ${!isEnglish && "bg-[#FF39C7]"}`}
          >
            VIETNAMESE
          </span>
          <span
            onClick={() => {
              localStorage.setItem("isEnglish", "true")
              setIsEnglish(true)
            }} className={`inline-block w-[117px] p-4 border-[3px] border-l-0 border-[#131B63] rounded-r-2xl text-center text-[#FFEB84] text-xs italic font-medium select-none cursor-pointer ${isEnglish && "bg-[#FF39C7]"}`}
          >
            ENGLISH
          </span>
        </div>

        {isEnglish ? <EnglishContent /> : <VietnameseContent />}
      </div>
    </main >

  )
}

export default App
