import Image from 'next/image'

const Introduction = () => {
    return (
        <>
            <div className="md:flex w-full">
                <div className="flex-1 basis-1/2">
                    <div className="flex-1">
                        <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text 
                            bg-gradient-to-r from-blue-900 to-rose-400 py-4">
                            Christian Rhodes
                        </h1>
                    </div>
                    <div className="flex-2">
                        <h1 className="text-center text-2xl font-extrabold text-transparent bg-clip-text 
                            bg-gradient-to-l from-blue-900 to-rose-400 underline decoration-sky-500
                            py-4">
                            Frontend Developer
                        </h1>
                    </div>
                </div>
                <div className="flex flex-2 basis-1/2 justify-center">
                    <Image 
                    alt="Animation"
                    src="/../public/static/images/transparent-hand.png"
                    className="hover:scale-110 ease-in duration-500 overflow-hidden motion-safe:animate-pulse"
                    width="200"
                    height="300"
                    layout='intrinsic'
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </div>
            </div>
        </>
    )
}

export default Introduction