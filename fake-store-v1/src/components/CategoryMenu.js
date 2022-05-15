import { useSelector } from "react-redux";

const CategoryMenu = ({setCatfilter}) => {
    const categories = useSelector((state) => state.allCategories.categories);
    return (
        <div className=" bg-zinc-200 p-2 w-[200px] h-[80vh] text-left rounded-xl shadow-md">
            <button onClick={()=>setCatfilter('')}><h2 className="text-xl font-semibold pb-1">Categories</h2></button>
            {categories.map(category =>
            <div key={category} className="">
            <button key={category} onClick={()=>setCatfilter(category)}>
                <h2 key={category} className="">{category}</h2>
            </button></div>)}


        </div>
    );
};

export default CategoryMenu;
//{console.log(category)}