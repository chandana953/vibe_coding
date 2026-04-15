import React from 'react';
import { Mail, Phone, MapPin, User, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-20 border-t border-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 to-transparent blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              CDC.
            </a>
            <p className="text-slate-400 max-w-sm">
              Eager to start my career in a collaborative environment where I can learn, build real-world projects, and grow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-nav flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <User size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-nav flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Code size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-100">Get In Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-nav flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href="mailto:chandanacd17@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                    chandanacd17@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-nav flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <a href="tel:+918296526739" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                    +91 8296526739
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group sm:col-span-2">
                <div className="w-12 h-12 rounded-xl glass-nav flex items-center justify-center text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-slate-300 font-medium">
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} C D Chandana. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
