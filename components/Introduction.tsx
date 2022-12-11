import Image from 'next/image'
import Typical from 'react-typical'

const Introduction = () => {
    return (
        <>
            <div className="md:flex w-full">
                <div className="flex-1 basis-1/2">
                    <div className="flex-1">
                        <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text 
                            bg-gradient-to-r from-blue-600 via-rose-300 to-orange-300 py-4 md:py-12">
                            Hi. I'm Christian. <br></br> A Creative Developer
                        </h1>
                    </div>
                    <div className="flex-2">
                        <p className="text-center text-2xl bg-clip-text py-4">
                            I make{' '}
                            <strong className="font-extrabold underline decoration-sky-500">
                                <Typical
                                    steps={[
                                        'Frontends',
                                        1500,
                                        'Software',
                                        1500,
                                        'Web3 Content',
                                        1200,
                                        'Video Games',
                                        1200,
                                        'Web Designs',
                                        1400,
                                        ]}
                                        wrapper="b"
                                        loop={Infinity}
                                />
                            </strong>
                        </p>
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