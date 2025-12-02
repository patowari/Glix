import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-blue-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Ambient background glows - adjusted for light mode */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[128px] animate-blob mix-blend-multiply"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[128px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 flex flex-col gap-20 pb-20">
        <Navbar />
        <main className="flex flex-col gap-24 md:gap-32 min-h-[60vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
