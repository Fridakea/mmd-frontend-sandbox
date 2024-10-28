import { LiaCookieBiteSolid } from "react-icons/lia";

const CookiePopup = () => {
  return (
    <section className="bg-white w-[100vw] h-[100vh]">
      <div className="w-fit bg-black p-4 rounded-xl">
        <div className="flex flex-row">
          <LiaCookieBiteSolid className="text-red-500 fill-green-600" />
          <h2>x</h2>
        </div>
        <p>We use Cookies to improve your service experience.</p>
        <button className="w-[100%] text-black bg-white  py-4 rounded-xl">
          I like Cookies
        </button>
      </div>
    </section>
  );
};

export default CookiePopup;
