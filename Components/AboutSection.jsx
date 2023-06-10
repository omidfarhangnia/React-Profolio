import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";
import { gsap } from "gsap";

const AboutSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  useEffect(() => {
    let aboutPageTl = gsap.timeline();

    aboutPageTl
    .fromTo(".about--contentContainer", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: .5,
      ease: "expo.out"
    })
    .to(".about--header", {
      delay: .5,
      opacity: 1,
      duration: .4,
      ease: "linear"
    })
    .to(".about--pragOne", {
      opacity: 1,
      duration: .4,
      ease: "linear"
    })
    .to(".about--pragTwo", {
      opacity: 1,
      duration: .4,
      ease: "linear"
    })
  }, [currentActivePage]);
  return (
    <section
      className={`w-full h-full ${currentActivePage !== 2 && "top-[100%]"
        } fixed flex justify-center items-center aboutSection`}
    >
      <div className="text-[20px] md:text-[25px] lg:text-[30px] w-full h-full absolute top-0 left-0 bg-black select-none text-customGreen4/40 break-words px-1">
        01011011101101000010000001010010100110011010111010000010000110111011101111011100010101101111111001011010100010001111010100001100000010011000011110110000000011000010101000001101010100100000010011101110101110110011101100110011111101110100110111010101111110110110100011100001010010101010000011010000001110101111001001000111110110000000000001100100110111101000001011110100011001111000101111110100010011010000110001010110111011000100010010111000000011111100010110010100001011001011001110100100011011110101000000011011010011000110111011000100001001101000001000111101011110011001010111010000101110010010010111101110100000111000100101110000110010010101010000001100010101101001010101111110000110101110110001001100000001011101111111100110110110001111001100111010111110011000010100110010100111101000111001110100101110000011001000100101011100110000001100011000000011100011111000000011101100111010111010011101100001011110001001001010111110001000011001011001001011100001011010010110010000100111111111110011001111100101001100011001010101011001010111010011100001100100001101101101001001001010110010000000001000100100010101010001011111010011000100100001000100100010001001011110110110011011010100101000111110000000010101001100011110100000011000111100001101000101010101000011000111101011100111101111110110010101010000100101010110001111100011110110010101110101011010100011010010000011101110011011010000110001111110000100111000101011000111001000100100000000011010010110010001000001110000010111000101001101001100101010101000001110001001011100001100100101010100000011000101011010010101011111100001101011101100010011000000010111011111111001101101100011110011001110101111100110000101001100101001111010001110011101001011100000110010001001010111001100000011000110000000111000111110000000111011001110101110100111011000010111100010010010101111100010000110010110010010111000010110100101100100001001111111111100110011111001010011000110010101010110010101110100111000011001000011011011010010010010101100100000000010001001000101010100010111110100110001001000010001001000100010010111101101100110110101001010001111100000000101010011000111101000000110001111000011010001010101010000110001111010111001111011111101100101010100001001010101100011111000111101100101011101010110101000110100100000111011100110110100001100011111100001001110001010110001110010001001000000000110100101100100010000011100000101110001010011010011001010101010
      </div>
      <div className="w-[80%] max-w-[800px] z-10 bg-customGreen4/40 mt-16 rounded-[30px] p-5 flex flex-wrap justify-center about--contentContainer">
        <h2 className="opacity-0 text-white capitalize text-[23px] lg:text-[30px] text-center mb-3 about--header">hello i am omid nice to meet you</h2>
        <div className="flex flex-col md:flex-row justify-between p-3">
          <p className="opacity-0 text-white/70 capitalize text-justify text-[12px] md:text-[15px] lg:text-[16px] md:w-[45%] w-full about--pragOne">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis placeat animi ullam voluptate porro quidem sit dolorem aspernatur quis perspiciatis laboriosam sed mollitia ea dignissimos, optio deleniti? Cupiditate, laboriosam quia.
            Placeat quasi ipsam iusto quis fuga deserunt! Adipisci esse est optio a doloribus dolore voluptates nesciunt? Magnam cum, repellendus ad fugiat commodi minus asperiores quis delectus dolorum quibusdam reiciendis soluta.
            Doloribus sint ipsam alias pariatur nobis ut tempora quos placeat veniam voluptate recusandae suscipit maiores minus distinctio repudiandae inventore itaque incidunt quod voluptatibus qui earum, omnis tenetur. Id, culpa ullam.
            Labore totam harum alias, dolore velit minus nihil odio? Sapiente cupiditate unde aut repudiandae possimus, ducimus molestias reiciendis mollitia quia</p>
          <p className="opacity-0 text-white/70 capitalize text-justify text-[12px] md:text-[15px] lg:text-[16px] md:w-[45%] w-full about--pragTwo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis placeat animi ullam voluptate porro quidem sit dolorem aspernatur quis perspiciatis laboriosam sed mollitia ea dignissimos, optio deleniti? Cupiditate, laboriosam quia.
            Placeat quasi ipsam iusto quis fuga deserunt! Adipisci esse est optio a doloribus dolore voluptates nesciunt? Magnam cum, repellendus ad fugiat commodi minus asperiores quis delectus dolorum quibusdam reiciendis soluta.
            Doloribus sint ipsam alias pariatur nobis ut tempora quos placeat veniam voluptate recusandae suscipit maiores minus distinctio repudiandae inventore itaque incidunt quod voluptatibus qui earum, omnis tenetur. Id, culpa ullam.
            Labore totam harum alias, dolore velit minus nihil odio? Sapiente cupiditate unde aut repudiandae possimus, ducimus molestias reiciendis mollitia quia</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
