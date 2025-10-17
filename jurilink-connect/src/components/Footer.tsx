import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Adriano & Couto Advocacia" className="h-8 w-auto brightness-0 invert" />
              <h3 className="font-serif text-xl font-bold">Adriano & Couto Advocacia</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Especialistas em recuperação de crédito, inadimplência e contratos. 
              Atuação em todas as áreas do Direito Cível.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/escritorio" className="hover:text-accent transition-colors">O Escritório</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao" className="hover:text-accent transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-accent transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Avenida Abelardo Bueno nº 1, Sala 308-C, Bloco Ayrton Senna II, 
                  Edifício Dimension - Barra da Tijuca, Rio de Janeiro/RJ
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">(21) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">contato@adrianoecoutoadv.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Adriano & Couto Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
