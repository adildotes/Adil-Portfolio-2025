// import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={"/portfolioLogo.png"}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
          className="rounded-full hover:scale-110 transform transition duration-500 ease-in-out"
        />
        </>
    )
}
export default HeroImage