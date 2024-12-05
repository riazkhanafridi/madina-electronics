import { memo, useMemo } from "react";
import CategoriesCard from "../categories-card";

import { Images } from "../../../../assets";

const OurCategories = memo(function OurCategories() {
  const categoriesData = useMemo(() => {
    return [
      { id: 1, title: "kitchenware", image: Images.categoriesImage.category1 },
      { id: 2, title: "Glass", image: Images.categoriesImage.category2 },
      { id: 3, title: "kitchenware", image: Images.categoriesImage.category3 },
      { id: 4, title: "Spoon Set", image: Images.categoriesImage.category4 },
      {
        id: 5,
        title: "Swimming Googles",
        image: Images.categoriesImage.category5,
      },
      { id: 6, title: "Cookware ", image: Images.categoriesImage.category6 },
      { id: 7, title: "Electronics", image: Images.categoriesImage.category7 },
      { id: 8, title: "Luxurious", image: Images.categoriesImage.category8 },
    ];
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-6">Our Categories</h1>
      <div className="grid grid-cols-4 gap-y-16 mt-10 px-8 ">
        {categoriesData.map((category) => (
          <CategoriesCard
            key={category.id}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </>
  );
});

export default OurCategories;
