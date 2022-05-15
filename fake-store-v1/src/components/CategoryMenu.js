import { useSelector } from "react-redux";

const CategoryMenu = () => {
    const categories = useSelector((state) => state.allCategories.categories);
    return (
        <div className=" bg-zinc-200 p-2 w-[200px] h-[80vh] text-left rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold pb-1">Categories</h2>
            {categories.map(category =>
                <h2 key={category}
                    className=""
                    >{category}</h2>)}


        </div>
    );
};

export default CategoryMenu;
//{console.log(category)}