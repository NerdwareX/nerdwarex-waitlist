import CosmicLogo from "../../assets/partners/cosmic.svg";
import GoogleLogo from "../../assets/partners/google.svg";
import MicrosoftLogo from "../../assets/partners/microsoft.svg";
import React from "react";
import WebflowLogo from "../../assets/partners/webflow.svg";
import kryptoextractLogo from "../../assets/partners/kryptoextract.png";

const Partners = () => {
  return (
    <section className="2xl:px-[186px] lg:px-20 px-8 bg-[#FFFFFF] py-[30px]">
      <div className="text-center mb-5">
        <h2 className="text-[32px] font-semibold">Our Partners</h2>
        <p>Trusted by leading companies in the technology and blockchain industry</p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:gap-10 md:grid-cols-4 items-end justify-items-center ">
        <img src={GoogleLogo} alt="google.svg" />
        <img src={MicrosoftLogo} alt="microsoft.svg" />
        <img src={WebflowLogo} alt="webflow.svg" />
        <img src={CosmicLogo} alt="cosmic.svg" />
        <img src={kryptoextractLogo} alt="kryptoextract.png" />
      </div>
    </section>
  );
};

export default Partners;
