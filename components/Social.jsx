import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Yagoai" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/anh-nguyen-b93814254/" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles} target="blank">
            {item.icon}
        </Link>
    })}
  </div>;
};

export default Social;
