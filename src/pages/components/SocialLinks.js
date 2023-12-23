import Twitter from "./icons/twitter.svg";
import GitHub from "./icons/github.svg";
import YouTube from "./icons/youtube.svg";
import linkedin from "./icons/linkedin.svg";
import document from "./icons/document.svg";
import Image from "next/image";

function SocialLinks() {
  const fillColor = "#262626";
  return (
    <div className="flex flex-row space-x-4">
      <a href="https://github.com/bachdumpling">
        <Image src={GitHub} className="w-5 h-5" name="My resume" />
      </a>
      <a href="https://www.linkedin.com/in/bachhoangle/">
        <Image src={linkedin} className="w-5 h-5" />
      </a>
      <a href="https://drive.google.com/file/d/10nnloQtrAujyDqxdxJYaIkeS4R7Uaq3p/view?usp=sharing">
        <Image src={document} className="w-5 h-5" name="My resume" />
      </a>
    </div>
  );
}

export default SocialLinks;
