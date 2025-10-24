import { Button } from "@/components/ui/button";
import { ArrowDown, Instagram, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const img = document.getElementById("decoracao");
      if (!img) return;

      // Diminui a opacidade à medida que o usuário rola
      const opacity = Math.max(1 - scrollY / 300, 0);
      img.style.opacity = opacity.toString();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="pt-20 flex flex-col items-center justify-center min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in-up">

          <div className="space-y-4">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Oii, me chamo{" "}
              <span className="gradient-text">Amanda</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Bem-vindo(a) ao meu portfólio pessoal e acadêmico
            </p>
          </div>

          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
            Desenvolvendo experiências digitais que unem <span className="font-semibold text-primary">criatividade, empatia e propósito</span>
          </p>

     <img
  src="ananda-oi.png"
  alt="Decoração"
  id="decoracao"
  className="absolute bottom-0 right-0
    w-[11rem] sm:w-[15rem] md:w-[22rem] lg:w-[26rem] xl:w-[30rem]
    opacity-60 sm:opacity-75 md:opacity-90
    pointer-events-none
    transition-all duration-700 ease-in-out
    translate-x-7 sm:translate-x-9 md:translate-x-11 lg:translate-x-13 xl:translate-x-15"
/>




          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="gradient-bg shadow-glow-pink hover:scale-105 transition-all text-base sm:text-lg px-8"
              onClick={() => scrollToSection("#projetos")}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/10 transition-all text-base sm:text-lg px-8"
              onClick={() => scrollToSection("#contato")}
            >
              Entrar em Contato
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://www.instagram.com/amandars.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:shadow-glow-pink transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/arsiqueira"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:shadow-glow-tiffany transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato.amandarsiqueira@gmail.com"
              className="p-3 rounded-full glass-card hover:shadow-glow-pink transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-12 animate-float">
            <button
              onClick={() => scrollToSection("#sobre")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
