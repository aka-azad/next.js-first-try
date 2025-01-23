import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
    </>
  );
  const PrivateLinks = (
    <>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-300">
      <nav className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links} {isAuthenticated && user && PrivateLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">First Try</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
            {isAuthenticated && user && PrivateLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <ThemeToggle />
          {isAuthenticated && user ? (
            <>
              <LogoutLink className="btn">Sign Out</LogoutLink>
            </>
          ) : (
            <>
              <RegisterLink className="btn">Sign Up</RegisterLink>
              <LoginLink className="btn">Sign In</LoginLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
