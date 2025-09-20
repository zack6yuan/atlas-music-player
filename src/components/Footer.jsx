import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="">
        <div className="text-center p-8 sm:mt-50">
            &copy; {year} Atlas School
        </div>
        <div className="theme-button text-center mb-10">
            <button>
                <img src={ moon } alt="dark-theme-icon" />
                <img src={ sun } alt="light-theme-icon" />
            </button>
        </div>
    </div>
  );
}
