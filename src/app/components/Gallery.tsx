import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1753123303438-edf153d6e0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBQYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3Njg3MjgwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mysore Palace',
    description: 'The magnificent Mysore Palace illuminated at night, showcasing its Indo-Saracenic architecture. This iconic landmark is a must-visit attraction that hosts thousands of visitors daily.'
  },
  {
    url: 'https://images.unsplash.com/photo-1595165989697-6c57f7536758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGFtdW5kaSUyMEhpbGxzJTIwTXlzb3JlfGVufDF8fHx8MTc2ODcyODA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Chamundi Hills',
    description: 'Panoramic view from Chamundi Hills, offering breathtaking vistas of the entire Mysore city. The sacred temple atop the hill is dedicated to Goddess Chamundeshwari.'
  },
  {
    url: 'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmluZGF2YW4lMjBHYXJkZW5zJTIwTXlzb3JlfGVufDF8fHx8MTc2ODcyODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Brindavan Gardens',
    description: 'The beautiful Brindavan Gardens with its symmetric design and colorful flower beds. Famous for its musical fountain show that attracts visitors from around the world.'
  },
  {
    url: 'https://images.unsplash.com/photo-1735552611948-9331461a5d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBab28lMjBhbmltYWxzfGVufDF8fHx8MTc2ODcyODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mysore Zoo',
    description: 'One of the oldest and most well-maintained zoos in India, home to a diverse collection of animals including tigers, elephants, and exotic birds in naturalistic habitats.'
  },
  {
    url: 'https://images.unsplash.com/photo-1570553181537-8fdcef2f6f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdCUyMFBoaWxvbWVuYSUyMENhdGhlZHJhbCUyME15c29yZXxlbnwxfHx8fDE3Njg3MjgwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'St. Philomena\'s Cathedral',
    description: 'This Neo-Gothic architectural marvel is one of the tallest churches in Asia. Built in 1936, it features stunning stained glass windows and twin spires reaching 175 feet.'
  },
  {
    url: 'https://images.unsplash.com/photo-1647250948954-968ed96897f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBjaXR5JTIwSW5kaWF8ZW58MXx8fHwxNzY4NzI4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mysore City View',
    description: 'A stunning aerial view of Mysore city showcasing the blend of modern development and historical heritage. Known as the Cultural Capital of Karnataka.'
  },
  {
    url: 'https://images.unsplash.com/photo-1702970091346-8e4e72427691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXJuYXRha2ElMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY4NzI4MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Temple Architecture',
    description: 'Exquisite Dravidian temple architecture found in and around Mysore. The intricate carvings and sculptures showcase the rich cultural heritage of Karnataka.'
  },
  {
    url: 'https://images.unsplash.com/photo-1708372064789-3d54a30c7c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBnYXJkZW4lMjBmb3VudGFpbnxlbnwxfHx8fDE3Njg3MjgxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Garden Fountains',
    description: 'Beautiful water fountains and landscaped gardens that are a signature feature of Mysore. These gardens offer a peaceful retreat and are perfect for evening strolls.'
  },
  {
    url: 'https://images.unsplash.com/photo-1752469126143-9de2078e5281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzY4NzI4MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mysore Silk',
    description: 'World-famous Mysore silk sarees known for their fine texture and brilliant sheen. These handwoven masterpieces are a must-buy souvenir from your Mysore visit.'
  }
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="h-12 w-12" />
            <h1 className="text-5xl font-bold">Photo Gallery</h1>
          </div>
          <p className="text-xl text-amber-100">Explore the beauty of Mysore through our curated collection</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{image.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Want to Experience This in Person?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Book your Mysore tour package today and create your own unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918951521128"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Call Now: +91 8951521128
            </a>
            <a
              href="mailto:manojmshetty12@gmail.com"
              className="bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-900 transition inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Mysore Tourism by Manoj MC</p>
          <p className="text-gray-400">Discover the heritage of Karnataka</p>
        </div>
      </footer>
    </div>
  );
}
