import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {

    // Images used in carousel
    const images = [
        "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1170&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1170&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop"
    ];

    // Stores current image index
    const [current, setCurrent] = useState(0);

    // Move to next image
    function nextSlide() {

        setCurrent((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    }

    // Move to previous image
    function prevSlide() {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    }

    return (
        <div className='relative rounded-4xl'>

            {/* Current carousel image */}
            <img src={images[current]} alt="carousel" className='h-52 sm:h-96 w-full object-cover rounded-lg brightness-60' />

            {/* Previous slide button */}
            <button
                className='absolute top-[50%] translate-y-[-50%] left-[10%] sm:left-[5%] bg-gray-400 rounded-2xl p-2'
                onClick={prevSlide}><ChevronLeft /></button>

            {/* Next slide button */}
            <button
                className='absolute top-[50%] translate-y-[-50%] right-[10%] sm:right-[5%] bg-gray-400 rounded-2xl p-2'
                onClick={nextSlide}><ChevronRight /></button>

            {/* Carousel indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">

                {images.map((_, index) => (

                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300
                        ${current === index
                                ? "bg-white scale-125"
                                : "bg-gray-400"
                            }`}
                    />

                ))}

            </div>
        </div>
    );
}

export default Carousel;