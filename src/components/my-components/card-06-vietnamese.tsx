import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"

export default function Card06Vietnamese() {
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
                        <img className="h-full w-full object-cover" src="/pic-6-viet.png" alt="Cau 6" />
                    </div>
                </div>

                <p className="mt-[115px] text-center text-[#131B63] italic text-[15px] font-medium tracking-tight">
                    Cách xử lý viêm nướu hiệu quả
                </p>
            </div>
            <Dialog
                open={open}
                onOpenChange={setOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Cách xử lý viêm nướu hiệu quả</DialogTitle>
                    </DialogHeader>
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Bắt buộc mute để autoplay
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className="aspect-video w-full"
                    ></iframe>
                </DialogContent>
            </Dialog >
        </>
    )
}