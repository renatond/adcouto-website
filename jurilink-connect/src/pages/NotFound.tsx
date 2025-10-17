import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Página Não Encontrada</h2>
        <p className="text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <HomeIcon className="h-5 w-5" />
            Voltar para Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
