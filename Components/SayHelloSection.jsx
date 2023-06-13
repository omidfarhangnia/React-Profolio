import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext } from "react";

const SayHelloSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  return (
    <section
      className={`w-full h-full bg-black ${
        currentActivePage !== 5 && "top-[100%]"
      } fixed sayHelloSection`}
    >
      <div className="overloads break-words text-customGreen3/80 text-[100px] md:text-[140px] lg:text-[180px] w-full h-full text-center absolute top-[10%] md:top-[8%] left-0 select-none">
        01010111000001101001000010101011100000110100100001010101001010010101001010
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-end gap-5">
        <div className="w-full h-auto flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-customGreen3/50 w-[90%] max-w-[900px] flex flex-col gap-4 p-5"
          >
            {/* this is for name */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0" htmlFor="firstNameInput">your name : </label>
              <input className="w-[50%] max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] px-6 py-2 rounded-full focus:outline-none" type="text" placeholder="first name" id="firstNameInput" />
            </div>
            {/* this is for last name */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0" htmlFor="lastNameInput">your last name : </label>
              <input className="w-[50%] max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] px-6 py-2 rounded-full focus:outline-none" type="text" placeholder="last name" id="lastNameInput" />
            </div>
            {/* this is for email */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0" htmlFor="emailInput">email : </label>
              <input className="w-[50%] max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] px-6 py-2 rounded-full focus:outline-none" type="email" placeholder="email" id="emailInput" />
            </div>
            {/* this is for message */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0" htmlFor="messageInput">message : </label>
              <textarea className="w-[50%] max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] md:h-[230px] md:rounded-lg px-6 py-2 rounded-full focus:outline-none resize-none" placeholder="your message" id="messageInput"></textarea>
            </div>
            <button className="bg-white text-customGreen2/90 p-3 text-[14px] md:text-[18px] lg:text-[23px] rounded-full uppercase mt-6">send</button>
          </form>
        </div>
        <footer className="w-full h-[15%] md:h-[10%] bg-blue-500">this is footer</footer>
      </div>
    </section>
  );
};

export default SayHelloSection;
