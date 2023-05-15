import { FC } from "react";
import FooterAction from "./components/FooterAction";
import './FooterAction.css';

const Footer: FC = () => {
  return (
    <footer className="bg-eee mt-12 footer">
      <div className="text-base flex flex-col items-center">
          <div className="px-4 pt-4 text-lg font-semibold">
            Join Our Coupon List
          </div>
          <div className="px-4 pb-4 pt-2">
            <form>
              <p className="mb-2.5">
                Get the best deals on name brand fragrances & more!
              </p>
              <div className="flex items-center">
                <input
                  className="px-1 py-0.5 mr-2.5"
                  placeholder="Your email address"
                />
                <button className="bg-blue-081857 px-5 py-1 rounded text-white text-sm">
                  JOIN TODAY
                </button>
              </div>
            </form>
          </div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-10">
        <FooterAction 
          title="Our Services"
          link1="Web Design"
          link2="PPC Marketing"
          link3="SEO Marketing"
          link4="Print Design"
          link5="Perfume Bussiness"  
        />
        <FooterAction 
          title="About US"
          link1="Our Express"
          link2="Our Values"
          link3="Photogallery"
          link4="Company's History"
          link5="Our achievments"  
        />
        <FooterAction 
          title="Our Offices"
          link1="Hai Ba Trung District"
          link2="Hoan Kiem District"
          link3="Ba Đình District"
          link4="Tây Hồ District"
          link5="Long Biên District"  
        />
        <div>
          
        </div>
      </div>

    </footer>
  );
};

export default Footer;
