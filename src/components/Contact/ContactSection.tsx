import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { useTheme } from '../../App';
const ContactSection = () => {
  const {
    theme
  } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  const contactInfo = [{
    icon: <MailIcon className="w-5 h-5" />,
    label: 'Email',
    value: 'john.developer@example.com',
    link: 'mailto:john.developer@example.com'
  }, {
    icon: <PhoneIcon className="w-5 h-5" />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  }, {
    icon: <MapPinIcon className="w-5 h-5" />,
    label: 'Location',
    value: 'San Francisco, CA',
    link: '#'
  }];
  return <section id="contact" className={`py-20 w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              Get in{' '}
            </span>
            <span className="text-purple-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="lg:w-2/5">
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex items-start">
                  <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-100'} text-purple-600 mr-4`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.label}
                    </h4>
                    <a href={item.link} className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} hover:text-purple-600 transition-colors`}>
                      {item.value}
                    </a>
                  </div>
                </motion.div>)}
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Connect with me
              </h4>
              <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Follow me on social media to see my latest projects and updates.
              </p>
              <div className="flex space-x-4">
                <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1,
                y: -3
              }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1,
                y: -3
              }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1,
                y: -3
              }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1,
                y: -3
              }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="lg:w-3/5">
            <div className={`p-8 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Send Me a Message
              </h3>
              {submitted ? <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline">
                    {' '}
                    Your message has been sent successfully. I'll get back to
                    you soon!
                  </span>
                </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={`w-full px-4 py-2 rounded-md border ${theme === 'dark' ? 'bg-gray-600 border-gray-500 text-white focus:border-purple-500' : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`} />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Email
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full px-4 py-2 rounded-md border ${theme === 'dark' ? 'bg-gray-600 border-gray-500 text-white focus:border-purple-500' : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={`w-full px-4 py-2 rounded-md border ${theme === 'dark' ? 'bg-gray-600 border-gray-500 text-white focus:border-purple-500' : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`} />
                  </div>
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Message
                    </label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className={`w-full px-4 py-2 rounded-md border ${theme === 'dark' ? 'bg-gray-600 border-gray-500 text-white focus:border-purple-500' : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}></textarea>
                  </div>
                  <motion.button type="submit" disabled={isSubmitting} whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className={`px-6 py-3 bg-purple-600 text-white rounded-md font-medium flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'} transition-colors w-full md:w-auto`}>
                    {isSubmitting ? <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </> : <>
                        <SendIcon className="w-5 h-5 mr-2" /> Send Message
                      </>}
                  </motion.button>
                </form>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;