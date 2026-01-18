import { MapPin, Star, IndianRupee, Users, Clock, Phone } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const topPlaces = [
  {
    name: 'Mysore Palace',
    description: 'A historical palace and a royal residence. It is one of the most visited monuments in India.',
    image: 'https://images.unsplash.com/photo-1753123303438-edf153d6e0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBQYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3Njg3MjgwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mysore+Palace'
  },
  {
    name: 'Chamundi Hills',
    description: 'Sacred hill with the Chamundeshwari Temple and panoramic views of Mysore city.',
    image: 'https://images.unsplash.com/photo-1595165989697-6c57f7536758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGFtdW5kaSUyMEhpbGxzJTIwTXlzb3JlfGVufDF8fHx8MTc2ODcyODA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chamundi+Hills+Mysore'
  },
  {
    name: 'Brindavan Gardens',
    description: 'Beautiful terrace gardens with musical fountain show and colorful illumination.',
    image: 'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmluZGF2YW4lMjBHYXJkZW5zJTIwTXlzb3JlfGVufDF8fHx8MTc2ODcyODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Brindavan+Gardens+Mysore'
  },
  {
    name: 'Mysore Zoo',
    description: 'One of the oldest and most popular zoos in India with diverse wildlife collection.',
    image: 'https://images.unsplash.com/photo-1735552611948-9331461a5d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBab28lMjBhbmltYWxzfGVufDF8fHx8MTc2ODcyODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mysore+Zoo'
  },
  {
    name: 'St. Philomena\'s Cathedral',
    description: 'Neo-Gothic style church, one of the tallest churches in Asia with stunning architecture.',
    image: 'https://images.unsplash.com/photo-1570553181537-8fdcef2f6f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdCUyMFBoaWxvbWVuYSUyMENhdGhlZHJhbCUyME15c29yZXxlbnwxfHx8fDE3Njg3MjgwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=St+Philomena+Cathedral+Mysore'
  }
];

const packages = [
  {
    name: 'Budget Explorer',
    price: 10000,
    duration: '2 Days / 1 Night',
    features: ['Palace Visit', 'City Tour', 'Hotel Stay', 'Breakfast'],
    popular: false
  },
  {
    name: 'Heritage Special',
    price: 25000,
    duration: '3 Days / 2 Nights',
    features: ['All Major Attractions', 'Hotel Stay', 'All Meals', 'Local Guide', 'Transport'],
    popular: true
  },
  {
    name: 'Premium Package',
    price: 50000,
    duration: '4 Days / 3 Nights',
    features: ['Luxury Hotel', 'All Attractions', 'All Meals', 'Private Guide', 'Premium Transport', 'Shopping Tour'],
    popular: false
  },
  {
    name: 'Royal Experience',
    price: 100000,
    duration: '7 Days / 6 Nights',
    features: ['5-Star Hotels', 'Complete Mysore Tour', 'Day Trips to Nearby Cities', 'All Meals', 'Private Luxury Car', 'Personal Guide', 'Cultural Shows', 'Shopping'],
    popular: false
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-amber-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Mysore</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Experience the City of Palaces - Rich Heritage, Culture & Royal Splendor</p>
          <a
            href="https://wa.me/918951521128?text=Hello%20I%20would%20like%20to%20book%20a%20Mysore%20tour%20package.%20Please%20share%20the%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Book Your Tour Now
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-8 w-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-gray-800">Explore Mysore</h2>
          </div>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124434.16763773178!2d76.56070907231447!3d12.311827252721635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mysore Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Top Places Section */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Top 5 Must-Visit Places</h2>
            <p className="text-gray-600 text-lg">Click on any place to view on Google Maps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topPlaces.map((place, index) => (
              <a
                key={index}
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 fill-white" />
                    <span className="text-sm font-semibold">Top {index + 1}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition">{place.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{place.description}</p>
                  <div className="mt-4 flex items-center text-amber-600 font-semibold">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>View on Google Maps →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tour Packages</h2>
            <p className="text-gray-600 text-lg">Choose the perfect package for your Mysore adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-6 border-2 ${pkg.popular ? 'border-amber-500' : 'border-gray-200'
                  } hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="flex items-center text-amber-600 text-3xl font-bold mb-4">
                  <IndianRupee className="h-7 w-7" />
                  <span>{pkg.price.toLocaleString()}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{pkg.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Star className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+918951521128"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition ${pkg.popular
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Mysore Tourism by Manoj MC</p>
          <p className="text-amber-100">Creating memorable experiences since day one</p>
        </div>
      </footer>
    </div>
  );
}
