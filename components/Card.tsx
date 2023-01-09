import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, hrefSrc, hrefLive }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (hrefSrc ? (
          <Link href={hrefSrc} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48 hover:scale-110 ease-in duration-300 "
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {hrefSrc ? (
            <Link href={hrefSrc} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex justify-between">
          {hrefSrc && (
            <Link
              href={hrefSrc}
              // className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              className="bg-white/90 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              aria-label={`Link to ${title}`}
            >
              View Source Code{/*  &rarr; */}
            </Link>
          )}
          {hrefLive && (
            <Link
              href={hrefLive}
              // className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              className="bg-white/90 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              aria-label={`Link to ${title}`}
            >
              View Site {/* &rarr; */}
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
