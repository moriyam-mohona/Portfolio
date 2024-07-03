import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content rounded p-10 mt-20">
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a href="https://x.com/MohonaMoriyam">
            <FaTwitter className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/moriyam-mohona-5a1bb9252/">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/moriyam-mohona">
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
