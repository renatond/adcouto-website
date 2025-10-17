import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale, 
  FileText, 
  Building2, 
  Users, 
  Home, 
  Briefcase,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

const AreasAtuacao = () => {
  const areas = [
    {
      icon: TrendingUp,
      title: "Recuperação de Crédito",
      description: "Especialização em cobrança judicial e extrajudicial, negociação de dívidas e recuperação de valores. Atuamos com estratégias eficazes para recuperar créditos de forma ágil e segura."
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuação completa em questões cíveis, incluindo responsabilidade civil, direitos reais, obrigações e direito das sucessões. Defesa de interesses de pessoas físicas e jurídicas."
    },
    {
      icon: FileText,
      title: "Direito Contratual",
      description: "Elaboração, análise e revisão de contratos comerciais e civis. Consultoria preventiva e solução de conflitos contratuais, garantindo segurança jurídica nas relações negociais."
    },
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas, incluindo constituição societária, contratos empresariais, compliance e governança corporativa."
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Consultoria em transações imobiliárias, regularização de propriedades, contratos de compra e venda, locação e questões condominiais."
    },
    {
      icon: Users,
      title: "Direito do Consumidor",
      description: "Defesa dos direitos do consumidor, ações contra fornecedores, restituição de valores e reparação de danos materiais e morais."
    },
    {
      icon: Briefcase,
      title: "Direito Bancário",
      description: "Questões relacionadas a operações bancárias, revisão de contratos bancários, financiamentos e defesa contra cobranças indevidas."
    },
    {
      icon: ShieldCheck,
      title: "Consultoria Preventiva",
      description: "Assessoria jurídica preventiva para empresas e particulares, evitando litígios e garantindo conformidade legal nas operações do dia a dia."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Áreas de Atuação
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-slide-up">
            Soluções jurídicas completas em diversas áreas do Direito
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <strong className="text-primary">Adriano & Couto Advocacia</strong> atua em todas as áreas 
            do Direito Cível, tanto na defesa de interesses de pessoas físicas como também de pessoas 
            jurídicas. Nossa expertise abrange desde consultoria preventiva até a representação em 
            demandas judiciais complexas.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Precisa de Assessoria em Alguma Dessas Áreas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato conosco para uma consulta personalizada. Nossa equipe está pronta 
            para analisar seu caso e propor as melhores soluções jurídicas.
          </p>
          <a 
            href="/contato" 
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Fale com Nossos Especialistas
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasAtuacao;
