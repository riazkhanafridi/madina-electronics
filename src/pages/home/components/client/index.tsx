import { memo, useMemo } from "react";
import ClientCard from "../client-card";

const ClientPage = memo(function ClientPage() {
  const clientData = useMemo(
    () => [
      {
        id: 1,
        name: "Riaz",
        description:
          "Immerse yourself in crystal-clear sound with these over-ear wireless headphones. Featuring advanced noise-canceling technology for an uninterrupted audio experience. Perfect for work, travel, and gaming sessions.",
        rating: "",
      },
      {
        id: 2,
        name: "Ali",
        description:
          "Immerse yourself in crystal-clear sound with these over-ear wireless headphones. Featuring advanced noise-canceling technology for an uninterrupted audio experience. Perfect for work, travel, and gaming sessions.",
        rating: "",
      },
      {
        id: 3,
        name: "Asif",
        description:
          "Immerse yourself in crystal-clear sound with these over-ear wireless headphones. Featuring advanced noise-canceling technology for an uninterrupted audio experience. Perfect for work, travel, and gaming sessions.",
        rating: "",
      },
    ],
    []
  );

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-center">
        What Clients Are Saying
      </h1>
      <div className=" mt-6 flex justify-center gap-6">
        {clientData.map((it) => (
          <ClientCard
            key={it.id} // Unique key for each item
            name={it.name}
            description={it.description}
            rating={it.rating}
          />
        ))}
      </div>
    </div>
  );
});

export default ClientPage;
