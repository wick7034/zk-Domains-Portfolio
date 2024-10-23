import React from 'react';
import { Facebook, Twitter, Github, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-12 text-center text-gray-400">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="hover:text-white"><Facebook /></a>
        <a href="#" className="hover:text-white"><Twitter /></a>
        <a href="#" className="hover:text-white"><Github /></a>
        <a href="#" className="hover:text-white"><Mail /></a>
      </div>
      <p>&copy; 2024 zkNames. All rights reserved.</p>
    </footer>
  );
}

export default Footer;