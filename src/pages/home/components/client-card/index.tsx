import { memo } from "react";

type TClientCardProps = {
  name: string;
  description: string;

  rating: number;
};

const ClientCard = memo(function ClientCard(props: TClientCardProps) {
  return (
    <>
      <div className="shadow md border bg-gray-200  h-[300px] w-[400px] px-4  rounded-xl py-8">
        <h3 className="">{props.name}</h3>
        <p className="">{props.description}</p>
        <span className="flex items-center">
          <span className="text-yellow-500 mr-1 ">⭐⭐⭐⭐</span>
          {props.rating}
        </span>
      </div>
    </>
  );
});

export default ClientCard;
