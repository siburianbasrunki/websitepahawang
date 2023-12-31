"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#F8F9FA]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Booking">Booking</Link>
              </li>
              <li>
                <Link href="/Donate">Donate</Link>
              </li>
              <li>
                <Link href="/Volunteer">Volunteer</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Pahawang Island</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Special">Special Offer</Link>
            </li>
            <li>
              <Link href="/Donate">Donate</Link>
            </li>
            <li>
              <Link href="/Volunteer">Volunteer</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn" onClick={() => signIn()}>Login</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
