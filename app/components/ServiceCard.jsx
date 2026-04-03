"use client";
import Link from "next/link";
import { stripHtmlTags } from "../utils/richText";

export default function ServiceCard({ service, index }) {
  const isFirstRow = index < 3;
  const isSecondRow = index >= 3 && index < 6;
  const isThirdRow = index >= 6 && index < 9;

  let topLeftClass, topRightClass, bottomLeftClass, bottomRightClass;

  if (isFirstRow) {
    topLeftClass = "bg-transparent transition-all duration-500 ease-in-out text-center flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer";
    topRightClass = "bg-black border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    bottomLeftClass = "bg-black rounded-es-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    bottomRightClass = "bg-black rounded-ee-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
  } else if (isSecondRow) {
    topLeftClass = "bg-black rounded-ss-full flex justify-center text-center items-center border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    topRightClass = "bg-black rounded-se-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    bottomLeftClass = "bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-500 ease-in-out";
    bottomRightClass = "bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
  } else {
    topLeftClass = "bg-black rounded-ss-full flex justify-center text-center items-center border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    topRightClass = "bg-black rounded-se-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    bottomLeftClass = "bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    bottomRightClass = "bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-500 ease-in-out";
  }

  return (
    <Link href={`/services/${service.slug}`}>
      <div className="relative group h-[20rem] w-full gap-1">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
          <div
            className={topLeftClass}
            style={{
              backgroundImage: !isFirstRow && service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
              backgroundSize: "200% 200%",
              backgroundPosition: "0% 0%",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {isFirstRow && stripHtmlTags(service.title)}
          </div>
          <div
            className={topRightClass}
            style={{
              backgroundImage: service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
              backgroundSize: "200% 200%",
              backgroundPosition: "100% 0%",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          ></div>
          <div
            className={bottomLeftClass}
            style={{
              backgroundImage: !isSecondRow && service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
              backgroundSize: "200% 200%",
              backgroundPosition: "0% 100%",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {isSecondRow && stripHtmlTags(service.title)}
          </div>
          <div
            className={bottomRightClass}
            style={{
              backgroundImage: !isThirdRow && service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
              backgroundSize: "200% 200%",
              backgroundPosition: "100% 100%",
              backgroundRepeat: "no-repeat",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {isThirdRow && stripHtmlTags(service.title)}
          </div>
        </div>
      </div>
    </Link>
  );
}
