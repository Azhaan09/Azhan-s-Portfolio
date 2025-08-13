import { Linkedin, Mail, Phone, Send, Twitch, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import {cn} from '@/lib/utils';
import {useToast} from '@/Hooks/use-toast';

const ContactSection = () => {
  const{ toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true);

    setTimeout(() => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          })
          setIsSubmitting(false); 
    }, 1500);
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>  
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> 
           Get In <span className='text-primary'> Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
           Let’s connect—whether it’s collaboration, feedback, or just a good tech conversation.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium '>
                    Email
                  </h4>
                  <a href='mailto:mohammadazhan09@outlook.com'
                     target='_blank'
                     className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    mohammadazhan09@outlook.com
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>
                    Phone
                  </h4>
                  <a href='tel:+919335978956'
                     target='_blank'
                     className='text-muted-foreground hover:text-primary transition-colors'
                  >
                   +91-9335978957
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Linkedin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>
                    LinkedIn
                  </h4>
                  <a href='https://www.linkedin.com/in/mohammad-azhan0009/'
                     target='_blank'
                     className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    Mohd Azhan Ansari
                  </a>
                </div>
              </div>
            </div>
            <div className='pt-8'>
              <h4 className='font-medium mb-4'> Connect With Me</h4>
              <div className='flex space-x-4 justify-center '>
                <a href='https://www.linkedin.com/in/mohammad-azhan0009/'
                   target='_blank'
                   className='hover:text-primary'
                >
                  <Linkedin />
                </a>
                <a href='#' 
                   target='_blank'
                   className='hover:text-primary'
                >
                  <Twitter />
                </a>
                <a href='#'
                   target='_blank'
                   className='hover:text-primary'
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit}>
            <h3 className='text-2xl font-semibold mb-6'> Send a Meesage</h3>
            <form className='space-y-6'>
              <div>
                <label 
                htmlFor='name' 
                className='block text-sm font-medium mb-2'
                >
                   Your Name
                </label>
                <input 
                type='text' 
                id='name' 
                name='name' 
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                placeholder='Zara Whitmore...'
                />
              </div>
              <div>
                <label 
                htmlFor='email' 
                className='block text-sm font-medium mb-2'
                >
                   Your Email
                </label>
                <input 
                type='email' 
                id='email' 
                name='email' 
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                placeholder='zarawhitmore@gmail.com'
                />
              </div>
              <div>
                <label 
                htmlFor='message' 
                className='block text-sm font-medium mb-2'
                >
                   Your Message
                </label>
                <textarea
                id='message' 
                name='message' 
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button 
                type='submit'
                disabled={isSubmitting}
                className={cn(
                'cosmic-button w-full flex items-center justify-center gap-2',
                
                )}>
                 {isSubmitting ? "Sending..." : "Send Message"} 
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
