import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "MediLink – Saúde mais próxima de você",
      type: "Em Desenvolvimento",
      year: "2025",
      description:
        "Projeto integrador com foco em soluções digitais para facilitar o acesso à saúde. A proposta inclui funcionalidades como agendamento de consultas, telemedicina, suporte a idosos e recursos de emergência, sempre com atenção à acessibilidade, impacto social e propósito.",
      highlights: "Foco social e acessibilidade",
      gradient: "pink" as const,
    },
    {
      title: "O Futuro do Trabalho – Como a IA está redesenhando o amanhã",
      type: "Site de Apresentação",
      year: "2025",
      description:
        "Site desenvolvido para explorar o impacto da IA na sociedade, educação e mercado de trabalho.",
      highlights: "Design limpo, linguagem acessível, integração de conteúdo criado com IA",
      tools: "IA + HTML/CSS/JS",
      gradient: "tiffany" as const,
      videoUrl: "https://youtu.be/-6aE9QgImBc",
    },
    {
      title: "IA na Engenharia de Software",
      type: "Site Acadêmico",
      year: "2025",
      description:
        "Mostra como a IA está sendo usada na engenharia de software, da automação de testes à geração de código.",
      highlights: "Clareza técnica e estética moderna",
      tools: "IA + HTML/CSS/JS",
      gradient: "pink" as const,
      videoUrl: "https://youtu.be/Bd8lr3KKMjEa",
    },
    {
      title: "App de Agendamento de Unhas",
      type: "Aplicativo Acadêmico",
      year: "2023",
      description:
        "Aplicativo desenvolvido para facilitar o agendamento de serviços de manicure, criado para um negócio real (da minha mãe).",
      highlights: "Impacto real na comunidade, interface intuitiva, visão empreendedora",
      tools: "React Native, Firebase",
      gradient: "tiffany" as const,
    },
    {
      title: "A Menina que Roubava Livros",
      type: "Site Acadêmico",
      year: "2024",
      description:
        "Site criado para apresentar o livro 'A Menina que Roubava Livros', com design sensível e narrativo.",
      highlights: "Combinação entre literatura, arte e tecnologia",
      tools: "HTML, CSS, JavaScript",
      gradient: "pink" as const,
      videoUrl: "https://youtu.be/hnK0c5LcP2w",
    },
    {
      title: "Currículo Interativo",
      type: "Site Pessoal",
      year: "2022",
      description:
        "Site criado para apresentar meu currículo de forma interativa, desenvolvido durante a faculdade de ADS como um desafio pessoal, sem auxílio de IA.",
      highlights: "Experimentação em design, organização de informações e habilidades técnicas em web",
      tools: "HTML, CSS, JavaScript",
      gradient: "tiffany" as const,
      videoUrl: "https://youtu.be/RmJlfVFv1zM",
    },
  ];

  return (
    <section id="projetos" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvi, unindo tecnologia, criatividade e impacto social
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
