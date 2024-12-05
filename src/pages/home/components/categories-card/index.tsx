import { memo } from "react";

type TCategoriesCardProps = {
  image: string;
  title: string;
};

const CategoriesCard = memo(function useMemo(props: TCategoriesCardProps) {
  return (
    <div className="shadow-md rounded-xl h-[200px] w-[250px] overflow-hidden relative ">
      <img src={props.image} className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white font-semibold text-lg">{props.title}</h1>
      </div>
    </div>
  );
});

export default CategoriesCard;
