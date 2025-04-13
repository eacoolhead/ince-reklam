
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up", "opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans transition-all duration-500 ease-in-out">
      {/* ...İçerik bu alana gelecek... */}
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">İnce Reklam Demo</h1>
        <p className="text-gray-600 mt-2">Bu alanlar demo bileşeni temsil ediyor.</p>
      </div>
    </main>
  );
}
