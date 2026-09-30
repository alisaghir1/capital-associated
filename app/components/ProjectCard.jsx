import Link from "next/link";
import Image from "next/image";
import { stripHtmlTags } from "../utils/richText";

export default function ProjectCard({ project, headingLevel = "h3" }) {
  const Heading = headingLevel;
  const title = stripHtmlTags(project.title);

  return (
    <Link
      href={`/our-work/${project.slug}`}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <Image
          src={project.hero_image_url || "/main.jpg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 gap-1.5">
        <Heading className="text-lg font-bold text-black leading-snug">{title}</Heading>
        {project.project_type && (
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">{project.project_type}</p>
        )}
        {project.location && <p className="text-sm text-gray-700">{project.location}</p>}
        <span className="mt-auto pt-3 text-sm font-semibold text-black inline-flex items-center gap-1">
          View project
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
