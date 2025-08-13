import { ExternalLink } from 'lucide-react';
import React from 'react'

const certificates = [
    {
        id: 1,
        title: "HackerRank Frontend Developer",
        image: "/certificates/Frontend.jpg",
        demoUrl: "https://drive.google.com/file/d/1YW90q3XfoVIt5Kp1nYaEgq3nfsTrwxuc/view?usp=drive_link",
    },
    {
        id: 2,
        title: "CodeChef Rating Certificate",
        image: "/certificates/CodeChefRating.jpg",
        demoUrl: "https://drive.google.com/file/d/1Vk8UwJ9CURqqXC8v3Sf3ev0MoKa-wHzi/view?usp=drive_link",
    },
    {
        id: 3,
        title: "Internship Certificate",
        image: "/certificates/Internship.jpg",
        demoUrl: "https://drive.google.com/file/d/1U4LayCWlxlYRf3a5RZfri2-qi2d9wghQ/view?usp=drive_link",
    },
];

const CertificationSection = () => {
  return (
    <section id='cetifications' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl '>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
           My
           <span className='text-primary'> Certifications </span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          These certifications highlight my learning journey, technical growth, and dedication to building reliable, modern solutions with confidence.

        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {certificates.map((certificate, key)=>(
            <div 
              key={key} 
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img src={certificate.image} alt={certificate.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
              </div>
              <div className='p-6'>
              <h3 className='text-xl font-semibold mb-1'>
                {certificate.title}
              </h3>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a 
                   href={certificate.demoUrl} 
                   target='_blank'
                   className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
