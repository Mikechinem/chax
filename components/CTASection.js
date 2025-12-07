
"use client";
export default function CTASection() {
  // Replace with your Telegram channel link
  const telegramLink = "https://t.me/YourChannelName";

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default page reload
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const whatsapp = form.whatsapp.value;

    // Optional: You could log or send the data to a backend here
    console.log({ fullName, email, whatsapp });

    // Redirect to Telegram channel
    window.location.href = telegramLink;
  };

  return (
    <section className="bg-gray-900 text-white py-20 text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Join Our Telegram Community!</h2>
      <p className="text-lg mb-6">
        Fill out the form below and get instant access to our exclusive Forex updates.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white text-gray-800 rounded-lg p-6 flex flex-col gap-4 shadow-lg"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number"
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
        >
          Submit & Join Telegram
        </button>
      </form>
    </section>
  );
}
