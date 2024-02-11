import React from 'react'
import {data} from '@/api/galleryData'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive';

const GalleryHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const homeData = data?.slice(0, isMobile ? 2 : 4)
  const router = useRouter()
  return (
    <div>
          <div>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
              Gallery
            </h1>
            <p class="mb-8 leading-relaxed">
            The Gallery section showcases the expertise and craftsmanship of Swati Enterprises through visually stunning images capturing the various services provided. From the intricate detailing of steel structures to the efficient execution of construction projects, each image tells a story of dedication and excellence. Explore our gallery to witness the mastery behind every project.
            </p>
            <div class="flex justify-center">
              <button onClick={()=> router.push('/gallery')} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View All
              </button>
            </div>
          </div>
          <div class="w-full sm:w-3/6 lg:w-3/6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeData?.map((item, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              {item.type === "image" && (
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item.content}
                  alt=""
                />
              )}
              {item.type === "video" && (
                <video
                  className="h-auto max-w-full rounded-lg"
                  controls
                >
                  <source src={item.content} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default GalleryHome