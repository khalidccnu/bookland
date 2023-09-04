import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`mt-auto bg-white text-blue-cetacean`}>
      <div className="container">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 py-16`}>
          <div className={`max-w-sm space-y-5`}>
            <p>
              BookLand is the largest online bookstore in Bangladesh. Discover
              BookLand, where the magic of reading comes alive. Dive into a vast
              collection, and let your reading journey thrive in the realm of
              BookLand.
            </p>
            <ul className={`flex space-x-3`}>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className={`hover:text-yellow-indian transition-colors duration-500`}
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className={`hover:text-yellow-indian transition-colors duration-500`}
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className={`hover:text-yellow-indian transition-colors duration-500`}
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className={`hover:text-yellow-indian transition-colors duration-500`}
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className={`hover:text-yellow-indian transition-colors duration-500`}
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`order-first sm:order-none sm:justify-self-end max-w-xs text-sm space-y-5`}
          >
            <h3 className={`font-semibold text-lg`}>Get in Touch</h3>
            <ul className={`space-y-3`}>
              <li className={`flex items-center space-x-3`}>
                <FaLocationDot className={`text-yellow-indian`} />
                <span>2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000</span>
              </li>
              <li className={`flex items-center space-x-3`}>
                <FaPhone className={`text-yellow-indian rotate-90`} />
                <Link href="tel:+8801708166238">(+880) 1708166238</Link>
              </li>
              <li className={`flex items-center space-x-3`}>
                <FaEnvelope className={`text-yellow-indian`} />
                <Link href="mailto:support@bookland.com">
                  support@bookland.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={`opacity-50`} />
      <div className="container">
        <div
          className={`flex flex-col sm:flex-row items-center sm:items-start sm:justify-between text-xs py-5`}
        >
          <p>
            BookLand - &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <p>
            Made with <span className={`text-red-600`}>♥</span> by SK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
