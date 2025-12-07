'use client';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-black text-white px-6 pt-8 md:pt-16">
      
      {/* Hero Text */}
      <div className="text-center mb-10 md:mb-10">
     <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug mb-8">
  You Can Make <span className="text-purple-400 font-extrabold">Crazy Money</span> In Forex<br />
  Even As A <span className="underline decoration-yellow-400 underline-offset-4">TOTAL BEGINNER</span>
</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-300">
  Discover how to trade Forex confidently even as a complete beginner with expert support and easy-to-follow lessons.
</p>

      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center mb-6 md:mb-10">
        <video
          src="https://res.cloudinary.com/dojweqe65/video/upload/v1765073646/The_ABC_of_forex_trading_gksvwx.mp4"
          controls
          autoPlay
          muted
          className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-lg shadow-lg"
        />
      </div>

      {/* Signup Form */}
      <div className="w-full max-w-md mx-auto mb-12 md:mb-16">
        <form className="flex flex-col gap-4 bg-gray-300 p-6 rounded-xl shadow-xl animate-fadeInUp">
          
          <input
  id="fullName"
  type="text"
  placeholder="Full Name"
  className="w-full px-4 py-3 rounded-md bg-purple-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transition"
/>

<input
  id="email"
  type="email"
  placeholder="Email"
  className="w-full px-4 py-3 rounded-md bg-purple-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transition"
/>

<input
  id="whatsapp"
  type="text"
  placeholder="WhatsApp Number"
  className="w-full px-4 py-3 rounded-md bg-purple-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transition"
/>

         <button
  type="submit"
  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:scale-105 transition-transform duration-200 w-full"
  onClick={(e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();

    if (!name || !email || !whatsapp) {
      alert("Please fill in Full Name, Email, and WhatsApp Number.");
      return;
    }

    // Redirect only if all fields are filled
    window.location.href = "https://t.me/everythingchax";
  }}
>
  Join Telegram
</button>

        </form>
      </div>

      {/* Divider */}
      <div className="w-3/4 mx-auto my-8 md:my-12 h-1 rounded-full bg-gradient-to-r from-purple-500 via-gray-700 to-blue-500 shadow-md"></div>
    </section>
  );
}
