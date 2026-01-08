function Hero() {
  const title = <span className="uppercase">shipeasy</span>;
  return (
    <div className="text-center p-4 flex-col justify-center py-28 font-inter">
      <h1 className="font-bold text-7xl">
        Envoyez vos colis à <br /> l'international en toute{" "}
        <span className="text-blue-800">simplicité</span>
      </h1>
      <h3 className="pt-8 text-gray-500 text-xl">
        {title} connecte les clients avec des transporteurs GP de <br />
        confiance pour vos envois internationaux.
      </h3>
    </div>
  );
}

export default Hero;
