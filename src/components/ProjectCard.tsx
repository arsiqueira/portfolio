import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  year: string;
  description: string;
  highlights: string;
  tools?: string;
  websiteUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  gradient?: "pink" | "tiffany";
}

const ProjectCard = ({
  title,
  type,
  year,
  description,
  highlights,
  tools,
  websiteUrl,
  githubUrl,
  videoUrl,
  gradient = "pink",
}: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 hover:shadow-elegant group">
      <div className="space-y-4">
        {/* Header with gradient accent */}
        <div className={`h-2 w-20 rounded-full ${gradient === "pink" ? "bg-primary" : "bg-secondary"}`}></div>
        
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
              {type}
            </span>
            <span className="text-xs text-muted-foreground">{year}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        {tools && (
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Ferramentas:</span> {tools}
          </p>
        )}

        <p className="text-foreground/80 leading-relaxed">
          {description}
        </p>

        <div className="pt-2">
          <p className="text-sm">
            <span className="font-semibold text-secondary">Destaques:</span>{" "}
            <span className="text-foreground/80">{highlights}</span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-4">
          {websiteUrl && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => window.open(websiteUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Acessar Site
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          )}
          {videoUrl && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => window.open(videoUrl, "_blank")}
            >
              <Video className="w-4 h-4" />
              Ver Vídeo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
