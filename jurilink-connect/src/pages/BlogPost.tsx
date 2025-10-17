import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogPost = () => {
  const { id } = useParams();

  // In a real application, this would fetch from an API
  const post = {
    id: Number(id),
    title: "Recuperação de Crédito: Estratégias Eficazes para Empresas",
    category: "Recuperação de Crédito",
    date: "15 de Outubro, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    content: `
      <p>A recuperação de crédito é um dos principais desafios enfrentados pelas empresas brasileiras. 
      A inadimplência afeta o fluxo de caixa e pode comprometer a saúde financeira de qualquer negócio.</p>

      <h2>Entendendo a Inadimplência</h2>
      <p>A inadimplência ocorre quando um devedor deixa de cumprir suas obrigações contratuais no prazo 
      estabelecido. No Brasil, os índices de inadimplência têm se mantido elevados, especialmente em 
      períodos de instabilidade econômica.</p>

      <h2>Estratégias de Cobrança Extrajudicial</h2>
      <p>Antes de recorrer ao judiciário, é fundamental explorar alternativas de cobrança extrajudicial:</p>
      <ul>
        <li><strong>Negociação direta:</strong> Contato com o devedor para propor acordos de pagamento</li>
        <li><strong>Desconto para pagamento à vista:</strong> Oferta de condições especiais</li>
        <li><strong>Parcelamento:</strong> Flexibilização das condições de pagamento</li>
        <li><strong>Mediação:</strong> Utilização de mediadores para facilitar o acordo</li>
      </ul>

      <h2>Cobrança Judicial</h2>
      <p>Quando as tentativas extrajudiciais se esgotam, a cobrança judicial torna-se necessária. 
      Existem diferentes procedimentos:</p>
      <ul>
        <li><strong>Ação Monitória:</strong> Para créditos documentados</li>
        <li><strong>Execução de Título Extrajudicial:</strong> Para títulos líquidos, certos e exigíveis</li>
        <li><strong>Ação de Cobrança:</strong> Procedimento comum para créditos diversos</li>
      </ul>

      <h2>Prevenção da Inadimplência</h2>
      <p>A melhor estratégia é prevenir. Algumas medidas importantes:</p>
      <ul>
        <li>Análise criteriosa de crédito antes de fechar negócios</li>
        <li>Contratos bem elaborados e claros</li>
        <li>Monitoramento constante das contas a receber</li>
        <li>Política de cobrança bem estruturada</li>
        <li>Uso de garantias contratuais adequadas</li>
      </ul>

      <h2>Aspectos Legais Importantes</h2>
      <p>É fundamental observar os limites legais da cobrança:</p>
      <ul>
        <li>Respeito ao Código de Defesa do Consumidor</li>
        <li>Vedação a práticas abusivas de cobrança</li>
        <li>Observância dos prazos prescricionais</li>
        <li>Documentação adequada dos créditos</li>
      </ul>

      <h2>O Papel da Assessoria Jurídica</h2>
      <p>Contar com assessoria jurídica especializada faz toda a diferença na recuperação de crédito. 
      Um advogado experiente pode:</p>
      <ul>
        <li>Avaliar a melhor estratégia para cada caso</li>
        <li>Conduzir negociações de forma profissional</li>
        <li>Manejar as ações judiciais adequadas</li>
        <li>Garantir o cumprimento da legislação</li>
        <li>Maximizar as chances de recuperação do crédito</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A recuperação de crédito exige conhecimento técnico, estratégia e persistência. Com as 
      ferramentas jurídicas adequadas e uma abordagem profissional, é possível reduzir 
      significativamente os índices de inadimplência e melhorar a saúde financeira da empresa.</p>

      <p><em>Nossa equipe está pronta para auxiliar sua empresa na recuperação de créditos e na 
      implementação de políticas preventivas de inadimplência. Entre em contato para uma consulta 
      personalizada.</em></p>
    `
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="pt-20">
        <div className="relative h-[400px] w-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o Blog
            </Link>
            
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              {post.category}
            </Badge>
            
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Article Body */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-primary prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-li:text-foreground prose-li:mb-2
                prose-strong:text-primary prose-strong:font-semibold
                prose-em:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Precisa de Ajuda com Recuperação de Crédito?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Nossa equipe está pronta para ajudar sua empresa
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Agende uma Consulta
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
