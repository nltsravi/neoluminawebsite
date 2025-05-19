import Image from 'next/image';

export default function About() {
  const founders = [
    {
      name: "Vasanth Parthasarathy",
      role: "Director & Founder",
      bio: "With over 20 years of experience in tech innovation, Vasanth leads Neolumina's vision and strategic direction.",
      image: "/neoluminawebsite/vasanth.jpg"
    },
    {
      name: "Sudharshan Aravamudan",
      role: "Director & Founder",
      bio: "With his strategic financial planning, Sudarshan helps maintain our strong market position and growth.",
      image: "/neoluminawebsite/sudarshan.jpg"
    },
    {
      name: "Ravishankar Jayaraman",
      role: "Director & Founder",
      bio: "A pioneer in AI and machine learning, Ravi drives our technological advancement and innovation initiatives.",
      image: "/neoluminawebsite/ravishankar.jpg"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7e2cfd] via-[#6555fb] to-[#26bdf2] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Meet the visionaries behind Neolumina Tech Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-[#7e2cfd] font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Neolumina Tech Solutions, we&apos;re committed to pushing the boundaries of what&apos;s possible in technology. 
              Our diverse team of experts brings together decades of experience in AI, cloud computing, and digital transformation 
              to create solutions that drive real business value. We believe in the power of innovation to transform industries 
              and improve lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 