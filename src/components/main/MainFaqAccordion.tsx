type MainFaqAccordionProps = {
  title: string;
  desc: string;
};

const MainFaqAccordion = ({ title, desc }: MainFaqAccordionProps) => {
  return (
    <div className="rounded-xl border-1 border-[#333] p-6">
      <h5 className="text-sm font-bold md:text-[16px]">{title}</h5>
      <hr className="my-4 border-t-1 border-t-[#333]" />
      <p className="text-xs md:text-sm">{desc}</p>
    </div>
  );
};

export default MainFaqAccordion;
