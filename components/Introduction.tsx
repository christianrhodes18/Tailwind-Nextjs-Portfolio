import Image from 'next/image'
import profileImage from 'public/static/images/transparent-hand.png'
import { TypeAnim } from 'components/TypeAnim'
import Link from 'next/link'

const Introduction = () => {
  return (
    <>
      {/* intro section */}
      <section className="md:flex w-full py-20">
        <div className="flex-1 basis-1/2">
          <div className="flex-1 text-left">
            {/* Gradient Text */}
            {/* <h1 className="text-5xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-blue-600 via-rose-300 to-orange-300 pt-4 md:pt-12">
                            Hi. I'm Christian.
                        </h1> */}
            <h1 className="text-5xl font-bold">Hi. I'm Christian</h1>
            <h2 className="text-4xl font-medium pt-4">A Creative Developer</h2>
          </div>
          <div className="py-8 flex flex-row">
            <div className="border-2 border-[#D9D9D9]"></div>
            <div className="pl-6">
              <p className="text-left text-2xl bg-clip-text pt-4 pb-6">
                <TypeAnim />
              </p>
              <button className="bg-[#D9D9D9] rounded-xl text-black font-medium p-2 mb-2">
                <Link href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
                  Download Resume
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-2 flex basis-1/2 justify-center">
          <Image
            alt="Animation"
            src={profileImage}
            // src="https://drive.google.com/uc?export=view&id=1ZTlUvHiImi6sJ8Ydg-GVoZ3Taarjhk_A"
            className="hover:scale-110 ease-in duration-500 overflow-hidden motion-safe:animate-pulse"
            width="200"
            height="300"
            layout="intrinsic"
            /* sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw" */
          />
        </div>
      </section>

      {/* link cards section */}
      <section className="flex flex-col md:flex-row gap-8">
        <div className="bg-slate-500 w-full">
          <Image src="/" height="500" width="300" />
        </div>
        <div className="bg-slate-500 w-full">
          <Image src="/" height="500" width="300" />
        </div>
      </section>

      {/* blog posts title */}
      <section className="pt-28">
        <h1 className="text-center text-5xl uppercase font-medium">Blog Posts</h1>
      </section>
    </>
  )
}

export default Introduction
