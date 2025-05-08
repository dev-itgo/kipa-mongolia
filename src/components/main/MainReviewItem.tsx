import Image from "next/image";

export type MainReviewItemProps = {
  desc: string;
  reviewer: string;
  type: string;
  image?: string;
};

const MainReviewItem = ({
  image,
  desc,
  reviewer,
  type,
}: MainReviewItemProps) => {
  return (
    <div>
      <div className="mb-6 aspect-[400/241] bg-slate-500">
        {image && <Image src={image} alt={reviewer} />}
      </div>
      <p className="mb-3 text-xs md:text-sm">{desc}</p>
      <h5 className="mb-2 text-xs font-bold md:text-sm">{reviewer}</h5>
      <p className="text-xs font-bold md:text-sm">{type}</p>
    </div>
  );
};

export default MainReviewItem;
