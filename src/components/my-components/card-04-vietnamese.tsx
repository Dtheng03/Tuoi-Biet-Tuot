import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"

export default function Card04Vietnamese() {
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
                    <div className="absolute bg-[#FFEB84] h-[105px] w-[246px] rounded-tl-xl">
                        <img className="h-full w-full object-contain" src="/pic-4-viet.png" alt="Cau 4" />
                    </div>
                </div>

                <p className="mt-[108px] text-center text-[#131B63] italic text-[15px] font-medium tracking-tight">
                    Nguyên nhân và biện pháp khắc phục tình trạng lưỡi trắng
                </p>
            </div>
            <Dialog
                open={open}
                onOpenChange={setOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Nguyên nhân và biện pháp khắc phục tình trạng lưỡi trắng</DialogTitle>
                    </DialogHeader>
                    <iframe
                        src="https://www.youtube.com/embed/xconCltCm2c" // Bắt buộc mute để autoplay
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className="aspect-video w-full"
                    ></iframe>
                </DialogContent>
            </Dialog >
        </>
    )
}