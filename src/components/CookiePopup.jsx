"use client";
import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import CookieButton from "./CookieButton";
import Show from "./Show";

const CookiePopup = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  return (
    <Show condition={!isCookieAccepted}>
      <div className="w-[300px] fixed bottom-0 right-0 bg-black py-2 px-4 rounded-xl">
        <div className="mb-16 flex flex-row justify-between">
          <LiaCookieBiteSolid className="w-16 h-16 mt-4 ml-3 scale-x-[-1] fill-gray-200" />
          <p className="text-gray-400 text-xl">x</p>
        </div>
        <div className="py-4 px-4">
          <p className="text-xl mb-6 font-sans">
            We use cookies to improve your user experience.
          </p>
          <CookieButton buttonText="I like Cookies" onClick={() => setIsCookieAccepted(true)} />
        </div>
      </div>
    </Show>
  );
};

export default CookiePopup;
