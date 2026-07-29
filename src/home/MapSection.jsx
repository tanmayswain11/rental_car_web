export default function MapSection() {
  return (
    <section className="py-24 bg-[#0b0b0b]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="uppercase tracking-widest text-orange-500 font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl font-black mt-4">
            Visit Our Office
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We are located in the heart of Bhubaneswar.
            Visit us to explore our premium collection of rental cars.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">

          <iframe
            title="ZibaGo Location"
            src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            className="w-full"
          ></iframe>

        </div>

      </div>

    </section>
  );
}