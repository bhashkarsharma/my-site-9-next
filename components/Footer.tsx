import { IconType } from 'react-icons';
import { FaCopyright, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

interface SocialLinkProps {
    Icon: IconType;
    href: string;
    title: string;
    color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href, color, title }) => (
    <a href={href} target="_blank" rel="noreferrer">
        <Icon
            className="inline text-4xl m-2 opacity-100 hover:opacity-60"
            title={title}
            color={color}
        />
    </a>
);

const Footer: React.FC = () => (
    <div className="bg-gray-600 p-10 text-center text-white">
        <div className="m-2">
            <SocialLink
                Icon={FaLinkedin}
                href="https://linkedin.com/in/bhashkarsharma"
                title="LinkedIn"
                color="#0a66c2"
            />
            <SocialLink
                Icon={FaTwitter}
                href="https://twitter.com/bhashkarsharma"
                title="Twitter"
                color="#1da1f2"
            />
            <SocialLink
                Icon={FaInstagram}
                href="https://instagram.com/bhashkarsharma"
                title="Instagram"
                color="#c32aa3"
            />
            <SocialLink
                Icon={FaGithub}
                href="https://github.com/bhashkarsharma"
                title="Github"
                color="#000"
            />
            <SocialLink
                Icon={SiGmail}
                href="mailto:info@bhashkar.me"
                title="Mail"
                color="#bb001b"
            />
        </div>
        <div className="m-2">
            <FaCopyright className="inline" /> Bhashkar Sharma
        </div>
    </div>
);

export default Footer;
