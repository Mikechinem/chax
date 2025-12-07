export default function VideoSection() {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center p-6">
      <video
        src="https://res.cloudinary.com/dojweqe65/video/upload/v1765073646/The_ABC_of_forex_trading_gksvwx.mp4"
        autoPlay
        muted
        controls
        className="w-full max-w-xl rounded-lg shadow-lg"
      />
    </section>
  );
}
