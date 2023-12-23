import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <div className="md:max-w-4xl lg:mx-auto pt-10 pb-20">
      <div className="flex h-full flex-row justify-start items-center">
        <SocialLinks />
      </div>
      {/* <div className="flex justify-end">
        <p className="text-gray-200 text-sm"> @Bach Le </p>
      </div> */}
    </div>
  );
}

export default Footer;
