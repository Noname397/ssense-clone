import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";

export const DropdownAccount = () => {
  const navigate = useNavigate();
  const { logout } = UserAuth();
  return (
    <ul className="absolute top-[19px] min-w-[140px] p-1 border-black border-[0.8px] grid place-items-center bg-white">
      <Link className="block px-3 mt-2.5" to={"/account/order-history"}>
        Order history
      </Link>
      <Link className="block px-3 mt-2.5" to={"/account/account-details"}>
        Account details
      </Link>
      <Link className="block px-3 mt-2.5" to={"/account/email-preference"}>
        Email preference
      </Link>
      <Link className="block px-3 mt-2.5" to={"/account/addresses"}>
        Addresses
      </Link>
      <a
        className="block px-3 mt-2.5"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/")
          logout();
        }}
      >
        LOG OUT
      </a>
    </ul>
  );
};
