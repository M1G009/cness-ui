import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-bgGray">
      <div className="container px-4 lg:px-6 py-2.5">
        <div className="justify-between	flex py-[30px]">
          <div>
            <h3 className="text-mainColor">Be Connected. Be Conscious</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <input
              type="email"
              className="p-[12px] border rounded"
              placeholder="Enter Your Email"
            />
            <Button
              variant="secondary"
              Icon={FaCircleChevronLeft}
              iconColor="text-mainColor"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="pt-[30px] md:gap-[40px] md:flex justify-between">
          <div className="mb-6 md:mb-0 max-w-[350px]">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold text-mainColor">
                logo
              </span>
            </Link>
            <p className="mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-mainColor">
                Organizations
              </h2>
              <ul className="">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Certifications
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Best Practices
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Social
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Directory
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Build Your Dream
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-mainColor">
                Organizations
              </h2>
              <ul className="">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Certifications
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Best Practices
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Social
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Directory
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Build Your Dream
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-mainColor">
                Organizations
              </h2>
              <ul className="">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Certifications
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Best Practices
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Social
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Directory
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Build Your Dream
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-mainColor">
                Organizations
              </h2>
              <ul className="">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Certifications
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Best Practices
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Social
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Directory
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Build Your Dream
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              CNESS
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
