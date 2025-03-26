import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"

export default function Card02English() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => { setOpen(true) }}
                className="bg-[#2ECEBB] h-[192px] w-[270px] p-2 rounded-xl overflow-hidden flex flex-col gap-2 cursor-pointer transition-all hover:scale-105"
            >
                <div className="flex justify-end gap-1">
                    <span className="block size-3 bg-[#FF39C7] rounded-[50%]" />
                    <span className="block size-3 bg-[#131B63] rounded-[50%]" />
                    <span className="block size-3 bg-[#FFEB84] rounded-[50%]" />
                </div>

                <div className="relative">
                    <div className="absolute top-2 -right-[1px] bg-[#0E1B6B] h-[105px] w-[246px] rounded-tl-xl" />
                    <div className="absolute bg-[#FFFBE1] h-[105px] w-[246px] rounded-tl-xl">
                        <img className="h-full w-full object-contain" src="/pic-2-eng.png" alt="Cau 2" />
                    </div>
                </div>

                <p className="mt-[108px] text-center text-[#131B63] italic text-[15px] font-medium tracking-tight">
                    Effective methods to improve discolored teeth
                </p>
            </div>
            <Dialog
                open={open}
                onOpenChange={setOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Effective methods to improve discolored teeth</DialogTitle>
                    </DialogHeader>
                    <iframe
                        src="https://www.youtube.com/embed/dif-PL44A0U" // Bắt buộc mute để autoplay
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className="aspect-video w-full"
                    ></iframe>
                </DialogContent>
            </Dialog >
        </>
    )
}