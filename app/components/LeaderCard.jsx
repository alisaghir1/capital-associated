import Image from "next/image";

const LeaderCard = ({ image, name, role, bio, points = [] }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center text-center gap-3 w-full max-w-sm">
      {image ? (
        <div className="relative w-28 h-28 rounded-full overflow-hidden border border-gray-200">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      ) : (
        // No verified portrait on file yet — shown as initials until one is supplied
        <div className="w-28 h-28 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-500">
          {initials}
        </div>
      )}
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{bio}</p>
      {points.length > 0 && (
        <ul className="w-full text-left text-sm text-gray-700 space-y-1.5 mt-1">
          {points.slice(0, 3).map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">&#10003;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeaderCard;
