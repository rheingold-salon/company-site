import Image from 'next/image';

export const ImageWithTextBox = ({ text, imagePath }: { text: string, imagePath: string }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={imagePath}
                    alt="Landing Page Background"
                    quality={100}
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    priority
                />
            </div>

            {/* Text Overlay Container */}
            <div className="relative z-10 flex items-end justify-end h-full">
                <div className="ml-8 mb-40 mr-40 bg-white/90 p-8 rounded-tr-xl rounded-bl-xl max-w-xl text-center">
                    <p className="text-4xl text-left font-bold text-black">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

