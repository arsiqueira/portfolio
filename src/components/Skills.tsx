import { Code, Brain, Users, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Tecnologia & Desenvolvimento",
      skills: ["HTML", "CSS", "JavaScript", "React", "Lógica de Programação", "TypeScript", "GitHub", "Java", "Python"],
      gradient: "pink",
    },
    {
      icon: Brain,
      title: "IA & Inovação",
      skills: ["GPT", "Interesse em IA", "IA Generativa", "Machine Learning", "Automação", "Aplicações com foco humano"],
      gradient: "tiffany",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Trabalho em equipe", "Criatividade", "Empatia", "Comunicação", "Apresentação de projetos", "Proatividade", "Aprendizado contínuo"],
      gradient: "pink",
    },
  ];

  return (
    <section id="habilidades" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competências técnicas e interpessoais que me permitem criar soluções inovadoras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        category.gradient === "pink" ? "gradient-bg shadow-glow-pink" : "bg-secondary shadow-glow-tiffany"
                      }`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          category.gradient === "pink"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Purpose section */}
          <div className="mt-16 glass-card rounded-3xl p-8 sm:p-12 shadow-elegant text-center animate-fade-in">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl gradient-bg shadow-glow-pink">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Meu Propósito</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Acredito que a verdadeira inovação acontece quando a tecnologia se 
                conecta com as pessoas. Meu propósito é criar soluções humanas, 
                acessíveis e com impacto social, unindo 
                <span className="font-semibold gradient-text"> desenvolvimento, criatividade e inteligência tecnológica </span> 
                 para transformar ideias em experiências que realmente fazem diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
