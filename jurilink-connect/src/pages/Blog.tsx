import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Recuperação de Crédito: Estratégias Eficazes para Empresas",
      excerpt: "Conheça as principais estratégias jurídicas para recuperar créditos de forma eficiente e reduzir a inadimplência na sua empresa.",
      category: "Recuperação de Crédito",
      date: "15 de Outubro, 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Direitos do Consumidor: O Que Você Precisa Saber",
      excerpt: "Entenda seus direitos como consumidor e saiba quando procurar assistência jurídica para resolver problemas com produtos e serviços.",
      category: "Direito do Consumidor",
      date: "10 de Outubro, 2025",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Contratos Empresariais: Cláusulas Essenciais",
      excerpt: "Descubra quais cláusulas são indispensáveis em contratos empresariais e como proteger sua empresa de riscos jurídicos.",
      category: "Direito Empresarial",
      date: "5 de Outubro, 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Inadimplência: Como Prevenir e Agir Legalmente",
      excerpt: "Saiba como sua empresa pode se prevenir contra a inadimplência e quais medidas legais tomar quando ela ocorre.",
      category: "Recuperação de Crédito",
      date: "1 de Outubro, 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Compliance Empresarial: A Importância da Conformidade Legal",
      excerpt: "Entenda como a implementação de programas de compliance pode proteger sua empresa de riscos legais e reputacionais.",
      category: "Direito Empresarial",
      date: "25 de Setembro, 2025",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Revisão de Contratos Bancários: Quando é Possível?",
      excerpt: "Descubra em quais situações é possível revisar contratos bancários e recuperar valores pagos indevidamente.",
      category: "Direito Bancário",
      date: "20 de Setembro, 2025",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
    }
  ]);

  const categories = ["Todos", "Recuperação de Crédito", "Direito Empresarial", "Direito do Consumidor", "Direito Bancário"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Blog Jurídico
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-slide-up">
            Artigos, análises e orientações sobre temas jurídicos relevantes
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-accent/10 text-accent border-accent/20">
                    {post.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-semibold text-primary line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Receba Nossos Artigos
          </h2>
          <p className="text-muted-foreground mb-8">
            Cadastre-se para receber em primeira mão nossos artigos jurídicos e atualizações
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            />
            <button className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
