import { memo, useMemo } from "react";
import { Images } from "../../../../assets";
import TeamCard from "../team-card";

const Team = memo(function Team() {
  const TeamData = useMemo(() => {
    return [
      {
        id: 1,
        name: "Muhammad gul",
        title: "(Owner)",
        image: Images.team.owner,
      },
      {
        id: 2,
        name: "Stana Gul",
        title: "( Sale Manager )",
        image: Images.team.saleManager,
      },
      {
        id: 3,
        name: "Awal Gul",
        title: "( Sale Associate )",
        image: Images.team.saleAssciative,
      },
    ];
  }, []);
  return (
    <div className="mt-6">
      <h1 className="font-semibold text-2xl px-4">Meet Our Experienced Team</h1>
      <div className="mt-6 gap-4 grid grid-cols-3 px-6">
        {TeamData.map((it) => (
          <TeamCard
            key={it.id}
            image={it.image}
            name={it.name}
            title={it.title}
          />
        ))}
      </div>
    </div>
  );
});

export default Team;