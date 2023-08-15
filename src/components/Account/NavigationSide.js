import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export const NavigationSide = () => {
    const navigate = useNavigate()
    const {user,logout} = UserAuth();
    return (
        <ul>
          <li className="text-[13px] font-bold mb-[15px]">Account</li>
          <li className="text-xs mb-0.5">
            <Link
              to="/account/order-history"
            >
              Order History
            </Link>
          </li>
          <li className="text-xs mb-0.5">
            <Link
             to="/account/account-details"
            >
              Account details
            </Link>
          </li>
          <li className="text-xs mb-0.5">
            <Link
              to="/account/email-preference"
            >
              Email Preference
            </Link>
          </li>
          <li className="text-xs mb-0.5">
            <Link
                to="/account/addresses"
            >
              Addresses
            </Link>
          </li>

          <li className="text-xs mb-0.5">
            <a
              href="/"
              onClick={() => {
               logout();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
    )
}