import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart,  FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
const [cart] = useCart();
const [isAdmin, isLoading] = useAdmin();

  // TODO: get isAdmin value from the database
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-sky-400 ">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
            <FaUtensils></FaUtensils>
              Add Items</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
             <FaList></FaList>
              Manage Items</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
             <FaBook></FaBook>
             Manage Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
             <FaUsers></FaUsers>
              All Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addStudents">
              <FaList></FaList>
              Add Students</NavLink>
          </li>
            </>
            :
            <>
            <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaCalendar></FaCalendar>
              Not History</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaList></FaList>
              Payment Real History</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addStudents">
              <FaList></FaList>
              Add Students</NavLink>
          </li>
            </>
          }
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/primary">
              <FaHome></FaHome>
              Primary
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
            <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>


        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
