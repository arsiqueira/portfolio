import { Sparkles, GraduationCap, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            Sobre <span className="gradient-text">Mim</span>
          </h2>

          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-elegant space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl gradient-bg shadow-glow-pink">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quem sou eu?</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Tenho <span className="font-semibold text-primary">22 anos</span> e sou movida por tecnologia e inovação. 
                  Adoro aprender na prática e transformar conhecimento em soluções que realmente funcionam. Ainda estou me 
                  aprofundando em inteligência artificial, mas já aplico lógica, programação e criatividade em projetos 
                  digitais que fazem sentido no dia a dia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary shadow-glow-tiffany">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Formação Técnica</h3>
                <div className="space-y-2 text-foreground/80 leading-relaxed">
                  <p>📚 <span className="font-medium">Mecatrônica - Técnico (2021)</span>: Desenvolvi habilidades em automação, robótica e integração de sistemas mecânicos e eletrônicos, criando soluções práticas e funcionais.</p>
                  <p>💻 <span className="font-medium">Análise e Desenvolvimento de Sistemas - Graduação (2023)</span>: Experiência em desenvolvimento de softwares, bancos de dados, lógica de programação e construção de aplicações digitais eficientes.</p>
                  <p>🎓 <span className="font-medium">Informática para Negócios - FATEC (em andamento)</span>: Aprimorando visão estratégica para aplicar tecnologia em processos e projetos com resultados reais.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl gradient-bg shadow-glow-pink">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Meu estilo</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Gosto de explorar tecnologia e programação de forma 
                  prática e criativa, mesmo que seja só em projetos para apresentar ou testar ideias. 
                  Me guio por <span className="font-semibold text-secondary">criatividade, empatia e propósito</span>, 
                  buscando aprender, experimentar e imaginar como transformar conceitos em algo interessante e significativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
