import { NavLink, Outlet } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaBook, FaEnvelope, FaList, FaRegCalendarAlt, FaUser, FaUtensils } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { MdPlaylistAddCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    //TODO: get admin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {isAdmin ? <>
                        <li><NavLink to={'/dashboard/adminHome'}><IoMdHome /> Admin Home</NavLink></li>
                        <li><NavLink to={'/dashboard/addItems'}><FaUtensils /> Add items</NavLink></li>
                        <li><NavLink to={'/dashboard/manageItems'}><FaList /> Manage Items</NavLink></li>
                        <li><NavLink to={'/dashboard/bookings'}><FaBook /> Manage Bookings</NavLink></li>
                        <li><NavLink to={'/dashboard/users'}><FaUser /> All Users</NavLink></li>
                    </> : <>
                        <li><NavLink to={'/dashboard/userHome'}><IoMdHome /> User Home</NavLink></li>
                        <li><NavLink to={'/dashboard/reservation'}><FaRegCalendarAlt /> Reservation</NavLink></li>
                        <li><NavLink to={'/dashboard/cart'}><IoCart /> My Cart</NavLink></li>
                        <li><NavLink to={'/dashboard/review'}><MdRateReview /> add review</NavLink></li>
                        <li><NavLink to={'/dashboard/bookings'}><MdPlaylistAddCircle /> My Bookings</NavLink></li>
                    </>}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><IoMdHome />Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><IoMdMenu /> Menu</NavLink></li>
                    <li><NavLink to={'/order/contact'}><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;