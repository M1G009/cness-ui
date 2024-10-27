import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function Footer() {
  const sections = [
    {
      title: "Organizations",
      links: [
        "Certifications",
        "Best Practices",
        "Social",
        "Directory",
        "Build Your Dream",
      ],
    },
    {
      title: "Individuals",
      links: [
        "Social",
        "Build Your Dream",
        "Directory",
        "Marketplace",
        "Best Practices",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "News", "Contact"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"],
    },
  ];
  return (
    <footer className="bg-bgGray">
      <div className="container px-4 lg:px-6 py-2.5">
        <div className="justify-between	flex py-[30px]">
          <div>
            <h3 className="text-primary-main">Be Connected. Be Conscious</h3>
            <p>
              Get the latest updates, insights, and stories from our conscious
              community <br /> delivered straight to your inbox.
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
              iconColor="text-primary-main"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="pt-[30px] md:gap-[40px] md:flex justify-between">
          <div className="mb-6 md:mb-0 max-w-[400px]">
          <Link to="/" className="">
            <img
              src={"/images/logo/cness-logo.png"}
              alt="Logo"
              className="max-w-[144px] h-[62px]"
            />
          </Link>
            <p className="mt-[20px]">
              Embark on a journey with CNESS, where every step you take is
              towards a more conscious and connected world. Here, your dreams
              find wings, your ideas find companions, and your actions inspire
              change.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            {sections.map(({ title, links }, idx) => (
              <div key={idx}>
                <h2 className="mb-6 text-sm font-semibold text-primary-main">
                  {title}
                </h2>
                <ul>
                  {links.map((link, i) => (
                    <li key={i} className="mb-4">
                      <Link to="" className="hover:underline">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
