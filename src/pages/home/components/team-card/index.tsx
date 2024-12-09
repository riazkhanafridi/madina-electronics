import { memo } from "react";

type TTeamCardProps = {
  name: string;
  image: string;
  title: string;
};

const TeamCard = memo(function useMemo(props: TTeamCardProps) {
  return (
    <div className="border-2 md:w-[400px] h-[500px] shadow-md rounded-xl flex flex-col justify-between w-full">
      <div className="  h-[350px] w-full">
        <img src={props.image} className=" h-full w-full overflow-hidden " />
      </div>

      <div className="flex flex-col items-center my-6 ">
        <h1>{props.name}</h1>

        <h1>{props.title}</h1>
      </div>
    </div>
  );
});

export default TeamCard;
