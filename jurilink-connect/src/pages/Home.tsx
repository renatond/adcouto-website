import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Shield, FileText, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import escritorioImg from "@/assets/escritorio.webp";
import sociosImg from "@/assets/socios.webp";

const Home = () => {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuação completa em todas as áreas do Direito Cível para pessoas físicas e jurídicas"
    },
    {
      icon: Shield,
      title: "Recuperação de Crédito",
      description: "Especialistas em recuperação de valores e gestão de inadimplência"
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Elaboração, análise e negociação de contratos empresariais"
    },
    {
      icon: Users,
      title: "Consultoria Jurídica",
      description: "Assessoria preventiva para empresas e particulares"
    }
  ];

  const advantages = [
    "Experiência comprovada em recuperação de crédito",
    "Atendimento personalizado",
    "Atuação em âmbito nacional",
    "Soluções jurídicas eficientes"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src={escritorioImg} 
            alt="Escritório Adriano & Couto" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Recuperação de Crédito com Segurança Jurídica
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Especialistas em crédito, inadimplência e contratos. 
            Conte com Adriano & Couto para recuperar seus valores com toda a segurança jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Agende uma Consulta
              </Button>
            </Link>
            <Link to="/areas-de-atuacao">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Nossas Especialidades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções jurídicas completas para atender às necessidades de nossos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Por que escolher o Adriano & Couto?
              </h2>
              <p className="text-muted-foreground mb-6">
                A sociedade de advogados surgiu do encontro de profissionais com vasta experiência 
                na advocacia em âmbito nacional. Observando as carências e deficiências na prestação 
                de serviços jurídicos, buscamos oferecer um atendimento diferenciado.
              </p>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
              <Link to="/escritorio" className="inline-block mt-8">
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Conheça o Escritório
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={sociosImg} 
                  alt="Sócios Adriano & Couto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a resolver sua questão jurídica
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
