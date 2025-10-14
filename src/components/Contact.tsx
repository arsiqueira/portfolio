import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Detecta scroll para esconder imagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(false);
      else setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "contato.amandarsiqueira@gmail.com",
      href: "mailto:contato.amandarsiqueira@gmail.com",
      gradient: "pink",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Amanda Ramos de Siqueira",
      href: "https://linkedin.com/in/arsiqueira",
      gradient: "tiffany",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@amandars.dev",
      href: "https://instagram.com/amandars.dev",
      gradient: "tiffany",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@amandarsiqueira",
      href: "https://t.me/amandarsiqueira",
      gradient: "pink",
    },
  ];

  return (
    <section id="contato" className="relative py-20 sm:py-32 overflow-hidden">
      {/* --- IMAGEM DECORATIVA ESQUERDA --- */}
      <img
        src="../../public/ananda-ipad.png"
        alt="Imagem decorativa"
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-64 md:w-96 opacity-30 md:opacity-80 pointer-events-none transition-all duration-700 ease-in-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="gradient-text">Conversar?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberta a novos projetos, colaborações e conversas sobre tecnologia e inovação
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-elegant">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                    <div
                      className={`p-3 rounded-xl ${
                        link.gradient === "pink"
                          ? "gradient-bg shadow-glow-pink"
                          : "bg-secondary shadow-glow-tiffany"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <Button
                size="lg"
                className="gradient-bg shadow-glow-pink hover:scale-105 transition-all text-base sm:text-lg px-8"
                onClick={() =>
                  (window.location.href = "mailto:contato.amandarsiqueira@gmail.com")
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
