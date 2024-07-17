import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import styles from "@/utils/styles";
const Socials = () => {
  return (
   
    <section className="flex flex-wrap w-full gap-3 p-4 text-white justify-center ">
      <div className="  text-gray-600">
        <h2 className="text-[16px] leading-tight">85.5 K</h2>
        <p className="text-[10px] text-center">Shares</p>
      </div>
      <button className={`${styles.socialButtons} bg-[#4267B2] hover:bg-[#37599c]`}>
     {/* "bg-blue-900  flex justify-center items-center md:px-6 md:py-0 gap-4 min-w-12  hover:-translate-y-1 transition-all duration-300 " */}
        <FaFacebookF size={15}  />
        <span className={`${styles.shareStyles}`}>17.3k</span>
      </button>
      <button className={`${styles.socialButtons} bg-black`}>
        <FaXTwitter size={15} />

        <span className={`${styles.shareStyles} `}>17.3k</span>
      </button>
      <button className={`${styles.socialButtons} bg-[#25D366] hover:bg-[#29b75d]`}>
        <IoLogoWhatsapp size={15} />
        <span className={`${styles.shareStyles}`}>17.3k</span>
      </button>
      <button className={`${styles.socialButtons} bg-[#FF4500] hover:bg-[#db5243]`}>
        <FaRedditAlien size={15} />
        <span className={`${styles.shareStyles}`}>17.3k</span>
      </button>
      <button className={`${styles.transitionButtons} sm:flex bg-[#448AFF] hover:bg-[#3264bb]`}>
        <FaFacebookMessenger size={15} />
        <span className="hidden lg:flex text-xs">17.3k</span>
      </button>
      <button className={` sm:flex  bg-[#0088CC] hover:bg-[#3988af] lg:w-[106px]   ${styles.transitionButtons}` }>
      <FaTelegram size={15} />
      </button>
    </section>
    
  );
};

export default Socials;
