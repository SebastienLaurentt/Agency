import Image from "next/image";
import TSV from "../public/TSV.webp";

const Hero = () => {
  return (
    <div className="mb-20 mt-32 flex flex-col items-center">
      <h1>Propulsez votre entreprise avec une refonte web stratégique</h1>
      <p className="mb-8 text-center md:text-lg">
        Optimisez votre présence en ligne et captivez votre audience. <br />{" "}
        Améliorez l&apos;expérience utilisateur et augmentez vos conversions.
      </p>
      <button className=" mb-12 rounded-lg  bg-primary px-4 py-2 text-primary-foreground">
        Discuttons en !{" "}
      </button>
      <div className="rounded-lg border-2 border-primary p-2 shadow-lg shadow-primary">
        <Image src={TSV} alt="TSV" className="w-[600px] rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
