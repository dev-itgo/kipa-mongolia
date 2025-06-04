import Image from "next/image";

export type MainReviewItemProps = {
  desc: string;
  reviewer: string;
  type: string;
  image?: string;
};

const MainReviewItem = ({
  image,
  // desc,
  // reviewer,
  // type,
}: MainReviewItemProps) => {
  return (
    <div>
      {image && (
        <div className="mb-6 aspect-[1500/844]">
          <Image
            src={image}
            width={1500}
            height={844}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}
      {/* <p className="mb-3 text-xs md:text-sm">{desc}</p>
      <h5 className="mb-2 text-xs font-bold md:text-sm">{reviewer}</h5>
      <p className="text-xs font-bold md:text-sm">{type}</p> */}
    </div>
  );
};

export default MainReviewItem;
