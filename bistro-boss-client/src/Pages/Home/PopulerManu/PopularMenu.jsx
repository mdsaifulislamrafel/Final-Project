import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    if (loading) return <div className="w-10 mx-auto h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
    return (
        <section className="mb-12">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.filter(item => item.category === 'popular').map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn flex mx-auto items-center btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;