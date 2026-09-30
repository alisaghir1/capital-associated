import Link from "next/link";
import Image from "next/image";
import { stripHtmlTags } from "../utils/richText";
import { getServiceMeta } from "../utils/serviceGroups";

export default function ServiceCard({ service }) {
  const { summary, sectors } = getServiceMeta(service);
  const title = stripHtmlTags(service.title);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <Image
          src={service.hero_image_url || "/main.jpg"}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold text-black leading-snug">{title}</h3>
        {summary && <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>}
        {sectors.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {sectors.map((sector) => (
              <li key={sector} className="text-xs font-medium text-gray-700 bg-slate-100 rounded-full px-2.5 py-1">
                {sector}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto pt-2 text-sm font-semibold text-black inline-flex items-center gap-1">
          View service
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
