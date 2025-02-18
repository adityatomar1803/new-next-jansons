function Hero() {
	return (
		<div className="relative bg-[url('/mb-collabs-banner.png')] md:bg-[url('/oc.png')]  bg-cover bg-top lg:h-[400px] flex items-start sm:items-center justify-center flex-col text-center md:text-left pl-4 md:pl-8 sm:pl-0 py-5">
			{/* Blackish Red Overlay */}
			<div className="lg:hidden absolute inset-0 bg-[#EDCD1F] opacity-75"></div>

			<div className="container text-center z-10  mx-auto md:text-left space-y-2 md:space-y-9">
				<h1 className="text-white font-bold text-xl md:text-[24px] lg:text-[48px] z-[1]">
					Connecting Quality
				</h1>
				<h1 className="text-white font-bold text-xl md:text-[24px] lg:text-[48px]  z-[1]">
					with Performance.
				</h1>
			</div>
		</div>
	);
}

export default Hero;
