import ServiceCard from "./ServiceCard";
import { groupServices } from "../utils/serviceGroups";

export default function ServiceGroups({ services = [] }) {
  const groups = groupServices(services);

  if (groups.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <p>No services available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 xl:px-20 flex flex-col gap-14">
      {groups.map((group) => (
        <section key={group.key} aria-labelledby={`services-${group.key}`}>
          <div className="mb-6">
            <h3 id={`services-${group.key}`} className="text-xl md:text-2xl font-bold text-black">
              {group.title}
            </h3>
            {group.intro && <p className="text-sm md:text-base text-gray-700 mt-1">{group.intro}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {group.items.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
