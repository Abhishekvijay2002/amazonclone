import { useRef } from "react";

const categories = [
    { id: 5, title: ["Watches"], img: "/images/watch.png" },
    { id: 6, title: ["Beauty"], img: "/images/beauty.png" },
    { id: 7, title: ["Handbags"], img: "/images/handbag.png" },
    { id: 8, title: ["Kid’s", "Fashion"], img: "/images/kids.png" },
    { id: 9, title: ["Sunglasses &", "Frames"], img: "/images/sunglass.png" },
    { id: 1, title: ["Women's", "Clothing"], img: "/images/women.png" },
    { id: 2, title: ["Footwear"], img: "/images/footwear.png" },
    { id: 3, title: ["Luggage &", "Bags"], img: "/images/luggage.png" },
    { id: 4, title: ["Jewellery"], img: "/images/jewellery.png" },
    { id: 5, title: ["Watches"], img: "/images/watch.png" },
    { id: 6, title: ["Beauty"], img: "/images/beauty.png" },
    { id: 7, title: ["Handbags"], img: "/images/handbag.png" },
    { id: 8, title: ["Kid’s", "Fashion"], img: "/images/kids.png" },
    { id: 9, title: ["Sunglasses &", "Frames"], img: "/images/sunglass.png" },
];

export default function CategorySlider() {
    const sliderRef = useRef(null);

    const scrollLeftBtn = () => {
        sliderRef.current.scrollBy({
            left: -250,
            behavior: "smooth",
        });
    };

    const scrollRightBtn = () => {
        sliderRef.current.scrollBy({
            left: 250,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full bg-white">

            <div className="absolute left-0 top-0 h-full w-8 bg-white z-20"></div>

            <div className="absolute right-0 top-0 h-full w-8 bg-white z-20"></div>

            <div
                ref={sliderRef}
                className="flex gap-12 overflow-x-auto scroll-smooth scrollbar-hide px-14 py-6"
            >
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="flex flex-col items-center shrink-0 cursor-pointer"
                    >
                        <div className="w-26 h-26 rounded-full bg-[#fbeae1] flex items-end justify-center overflow-hidden">
                            <img
                                src={cat.img}
                                alt={cat.title.join(" ")}
                                className="h-[90%] object-contain"
                            />
                        </div>

                        <p className="mt-3 text-base font-medium text-center leading-tight">
                            {cat.title.map((line, i) => (
                                <span key={i} className="block">
                                    {line}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>

            <button
                onClick={scrollLeftBtn}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-24 w-12 bg-white border-2 border-teal-600 rounded-lg flex items-center justify-center shadow-md z-30"
            >
                <span className="text-2xl font-bold">‹</span>
            </button>

            <button
                onClick={scrollRightBtn}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-24 w-12 bg-white border-2 border-teal-600 rounded-lg flex items-center justify-center shadow-md z-30"
            >
                <span className="text-2xl font-bold">›</span>
            </button>
        </div>
    );
}

