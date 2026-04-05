interface FounderCardProps {
  image: string;
  name: string;
  role: string;
  rotate?: string;
  className?: string;
}

function FounderCard({
  image,
  name,
  role,
  rotate = '',
  className = "",
}: FounderCardProps) {
  return (
    <div className={`flex flex-col ${rotate} ${className}`.trim()}>
      {/* Photo */}
      <img src={image} alt={name} className="w-full object-cover block" />

      {/* Yellow name box — matches what you have in the screenshot */}
      <div className="bg-[#FFDC5C] border-2 border-black p-3 sm:p-4">
        <span className="font-inter font-bold text-lg sm:text-xl md:text-2xl text-purple-700 block">
          {name}
        </span>
        <span className="font-inter font-semibold text-sm sm:text-base text-purple-700">
          {role}
        </span>
      </div>
    </div>
  );
}

export default FounderCard;
