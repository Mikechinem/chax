'use client';
export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl sm:text-4xl font-bold text-center mb-12">
          What Our Traders Are Saying....
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-4 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dojweqe65/image/upload/v1765082819/forex-testimony-3_euib0p.jpg"
              alt="Telegram testimonial 1"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <p className="text-gray-300 text-sm text-center">
              - @Bume
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-4 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dojweqe65/image/upload/v1765082820/forex-testimony-4_vzu9k1.jpg"
              alt="Telegram testimonial 2"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <p className="text-gray-300 text-sm text-center">
              - @Mike Chinem
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-4 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/dojweqe65/image/upload/v1765082825/forex-testimony-6_t86dor.jpg"
              alt="Telegram testimonial 3"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <p className="text-gray-300 text-sm text-center">
              - @Aramide
            </p>
          </div>
          
        </div>

        <div className="w-full flex justify-center mt-6">
           <button
         type="button"
        onClick={() => {
        const section = document.getElementById("hero");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
  >
    Start My Profit Journey Now!
  </button>
</div>
      </div>
    </section>
  );
}
