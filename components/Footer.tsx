import { FaCopyright, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

const Footer: React.FC = () => (
    <div className="bg-gray-600 p-10 text-center text-white">
        <div className="m-2">
            <a href="https://linkedin.com/in/bhashkarsharma" target="_blank" rel="noreferrer">
                <FaLinkedin title="LinkedIn" className="inline text-4xl m-2" color="#0a66c2" />
            </a>
            <a href="https://twitter.com/bhashkarsharma" target="_blank" rel="noreferrer">
                <FaTwitter title="Twitter" className="inline text-4xl m-2" color="#1da1f2" />
            </a>
            <a href="https://instagram.com/bhashkarsharma" target="_blank" rel="noreferrer">
                <FaInstagram title="Instagram" className="inline text-4xl m-2" color="#c32aa3" />
            </a>
            <a href="https://github.com/bhashkarsharma" target="_blank" rel="noreferrer">
                <FaGithub title="Github" className="inline text-4xl m-2" color="#000" />
            </a>
            <a href="mailto:info@bhashkar.me" target="_blank" rel="noreferrer">
                <SiGmail title="Mail" className="inline text-4xl m-2" color="#bb001b" />
            </a>
        </div>
        <div className="m-2">
            <FaCopyright className="inline" /> Bhashkar Sharma
        </div>
    </div>
);

export default Footer;
