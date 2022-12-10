import Image from 'next/image'

const Personable = () => {
    return (
        <>
            <div className="flex">
                <div className="justify-center">
                    <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-600 to-rose-300 py-4 md:py-12">
                        Thank you for visiting my Site.
                    </h1>
                    <h3 className="text-lg text-center">
                        Feel free to explore the about page or 
                        reach out to me on any of my socials linked below. 
                        I will be adding posts as I continue to develop my skills
                        and improve overall. 
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Personable