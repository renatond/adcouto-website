import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users2, Lightbulb } from "lucide-react";
import deboraImg from "@/assets/debora-adriano.webp";
import rodolfoImg from "@/assets/rodolfo-couto.webp";

const Escritorio = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade e eficiência em cada atendimento"
    },
    {
      icon: Target,
      title: "Resultado",
      description: "Foco em soluções práticas e resultados concretos para nossos clientes"
    },
    {
      icon: Users2,
      title: "Parceria",
      description: "Relacionamento próximo e transparente com cada cliente"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Uso de tecnologia e métodos modernos na advocacia"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            O Escritório
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-slide-up">
            Profissionais experientes unidos por um objetivo comum: excelência no atendimento jurídico
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A <strong className="text-primary">Adriano & Couto Advocacia</strong> surgiu do encontro de 
              profissionais com vasta experiência na advocacia em âmbito nacional. Observando as carências 
              e deficiências na prestação de serviços jurídicos, decidimos unir forças para oferecer um 
              atendimento diferenciado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nossa sociedade nasceu da necessidade de proporcionar aos clientes uma experiência jurídica 
              completa, onde a técnica se alia ao atendimento humanizado e personalizado. Acreditamos que 
              cada caso merece atenção especial e soluções customizadas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com atuação consolidada em <strong className="text-primary">recuperação de crédito</strong>, 
              <strong className="text-primary"> direito civil</strong> e <strong className="text-primary">consultoria 
              empresarial</strong>, nos destacamos pela eficiência na resolução de conflitos e pela busca 
              constante de resultados favoráveis aos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam nossa atuação e garantem a qualidade dos nossos serviços
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Sócios
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes e comprometidos com a excelência no atendimento jurídico
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Débora Adriano */}
            <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={deboraImg} 
                  alt="Débora Adriano" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Débora Adriano</h3>
                <p className="text-accent font-medium mb-4">Sócia Fundadora</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advogada especialista em recuperação de crédito e direito civil, com ampla 
                  experiência em litígios complexos e consultoria empresarial.
                </p>
              </CardContent>
            </Card>

            {/* Rodolfo Couto */}
            <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={rodolfoImg} 
                  alt="Rodolfo Couto" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Rodolfo Couto</h3>
                <p className="text-accent font-medium mb-4">Sócio Fundador</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advogado especializado em contratos empresariais e direito empresarial, 
                  com sólida atuação em negociações e resolução de conflitos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Experiência e Credibilidade
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nossa equipe é formada por advogados altamente qualificados, com sólida formação acadêmica 
            e ampla experiência prática. Atuamos em todo o território nacional, sempre com foco na 
            proteção dos interesses de nossos clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Casos Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Escritorio;
