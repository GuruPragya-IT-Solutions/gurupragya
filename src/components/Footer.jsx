import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-800 py-10 px-6 font-['Ostrich Sans']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Navigation Section */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold mb-4 text-lg">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Main Message Section */}
        <div className="text-center">
          <p className="text-sm mb-2 font-['Allura'] text-gray-700">
            Got a project? Need an unfair advantage?
          </p>
          <h1 className="text-4xl font-bold font-['Pacifico'] text-gray-900">
            GET IN <span className="text-gray-500">TOUCH</span>
          </h1>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Shivika Garg. All Rights Reserved.
          </p>
        </div>

        {/* Socials Section */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold mb-4 text-lg">Socials</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-600 transition"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-600 transition"
              >
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-600 transition"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-600 transition"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        {/* <div className="text-center md:text-left">
          <h2 className="font-semibold mb-4 text-lg">Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Pillarstack
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Figma Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600 transition">
                Portfolio V1
              </a>
            </li>
          </ul>
        </div> */}
      </div>

      {/* Local Time */}
      <div className="text-center mt-10 text-sm text-black-900 font-bold">
  <p>
    &copy; {new Date().getFullYear()} Gurupragya IT Solution. All rights reserved.
  </p>
</div>

    </footer>
  );
}

export default Footer;
