// src/Home.js
import React from "react";
import { Button } from "./components/ui/button"; // Button bileşenini import et

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Başlık */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Yaratıcı & Modern Reklam Stüdyosu</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Markanız için etkileyici ve akılda kalıcı dijital deneyimler tasarlıyoruz.
        </p>
        <Button className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200">
          Çalışmalarımızı Keşfedin
        </Button>
      </section>

      {/* Hizmetler */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-10">Hizmetlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-2">İnce Reklam</h3>
            <p>Tabela, kutu harf, yönlendirme sistemleri ve özel çözümler.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">İnce Tabela</h3>
            <p>Dış cephe tabela, iç mekan çözümleri ve kurumsal uygulamalar.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">İnce Ekran</h3>
            <p>Dijital ekran sistemleri, led ekran ve video duvarı çözümleri.</p>
          </div>
        </div>
      </section>

      {/* Örnek Projeler */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">Örnek Projeler</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl">Proje 1 Yer Tutucu</div>
          <div className="bg-gray-100 p-6 rounded-xl">Proje 2 Yer Tutucu</div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Hakkımızda</h2>
        <p className="max-w-3xl mx-auto text-lg">
          İnce Group olarak yaratıcı fikirler, güçlü tasarımlar ve kaliteli uygulamalarla markanıza değer katıyoruz. Reklam sektöründe yılların verdiği tecrübe ile hizmet veriyoruz.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center text-sm">
        © 2025 İnce Reklam. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
