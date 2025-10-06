import Image from "next/image"

const HeroImage = () => {
  return (
    <div className="relative w-[440px] h-[440px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[440px] lg:h-[440px] mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out">
      <Image
        src="/portfolioLogo.png"
        alt="Adil Dotes"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}

export default HeroImage
