const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amanda Ramos. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com{" "}
            <span className="gradient-text font-semibold">tecnologia</span>,{" "}
            <span className="text-primary">criatividade</span> e{" "}
            <span className="text-secondary">propósito</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
