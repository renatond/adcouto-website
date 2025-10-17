# 🏛️ Adriano & Couto Advocacia - Website

Website profissional para o escritório de advocacia Adriano & Couto, especializado em recuperação de crédito, direito civil e consultoria jurídica.

## ✨ Design Moderno

Este site foi desenvolvido com base em um design system profissional inspirado no Tailwind CSS:

### 🎨 Paleta de Cores
- **Primary (Azul Escuro)**: `hsl(215, 35%, 20%)` - #2c3e50
- **Accent (Dourado)**: `hsl(43, 74%, 52%)` - #d4a76a  
- **Background**: Branco puro
- **Text**: Cinza escuro

### 🔤 Tipografia
- **Títulos**: Playfair Display (Serif)
- **Corpo**: Inter (Sans-serif)

### 🎯 Características
- ✅ Design moderno e elegante
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves e transições
- ✅ Cards com hover effects
- ✅ Ícones Lucide
- ✅ Sistema de grid flexível
- ✅ SEO otimizado
- ✅ Performance otimizada

## 📁 Estrutura do Projeto

```
adcouto-website/
│
├── index.html                         # Página inicial (Hero, Serviços, Por que escolher)
├── o-escritorio.html                  # Sobre o escritório (Valores, Sócios, Estatísticas)
├── areas-de-atuacao.html             # 8 Áreas de atuação com grid
├── blog.html                         # Blog com filtros por categoria
├── contato.html                      # Formulário de contato e informações
│
├── img/                              # Imagens do projeto
│   ├── logo.webp                     # Logo da empresa (header colorido + footer branco)
│   ├── socios.webp                   # Foto dos sócios (seção "Por que escolher")
│   ├── debora-adriano.webp          # Foto da sócia Débora Adriano
│   ├── rodolfo-couto.webp           # Foto do sócio Rodolfo Couto
│   └── escritorio.webp              # Imagem do escritório
│
├── assets/
│   ├── css/
│   │   └── style.css                 # Design system completo (HSL colors)
│   └── js/
│       └── main.js                   # JavaScript para interatividade
│
├── scraped-htmls/                    # Conteúdo original (referência)
└── README.md                         # Este arquivo
```

## 🚀 Como Usar

### Visualização Local

1. **Método Simples**: Apenas abra o arquivo `index.html` no seu navegador
   - Clique duas vezes em `index.html`
   - Ou arraste o arquivo para o navegador

2. **Método com Live Server** (Recomendado):
   ```bash
   # Se tiver Python instalado
   python -m http.server 8000
   
   # Se tiver Node.js instalado
   npx serve
   ```
   
   Acesse: `http://localhost:8000`

### Navegação

- **Início**: Apresentação principal com hero section
- **O Escritório**: História, valores e equipe
- **Áreas de Atuação**: 8 especialidades jurídicas
- **Blog**: Artigos com filtros por categoria
- **Contato**: Formulário e informações de contato

## 🎨 Componentes Principais

### Hero Section
Hero moderno com imagem de fundo, overlay gradiente e call-to-actions.

### Cards
Cards elegantes com:
- Ícones coloridos em backgrounds arredondados
- Hover effects (elevação)
- Sombras suaves
- Bordas arredondadas

### Navbar
Navbar fixo com:
- **Logo** da empresa (colorido, posicionado à esquerda)
- Nome do escritório
- Links de navegação
- Menu mobile responsivo
- Efeito de sombra ao scroll

### Footer
Footer de 3 colunas com:
- **Logo branco** da empresa (filtro CSS aplicado)
- Sobre o escritório
- Links rápidos
- Informações de contato

### Blog
Sistema de blog com:
- Filtros por categoria
- Cards de artigos
- Meta informações (data, tempo de leitura)
- Newsletter

### Formulário
Formulário de contato com:
- Validação HTML5
- Estilos customizados
- Feedback visual

## 🎯 Páginas

### 1. Home (`index.html`)
- Hero section com imagem e CTAs
- Grid de 4 serviços principais
- Seção "Por que escolher" com lista de vantagens
- **Imagem profissional dos sócios** (`socios.webp`)
- CTA section final

### 2. O Escritório (`o-escritorio.html`)
- Texto sobre a história do escritório
- 4 valores principais em cards
- 2 sócios com **fotos profissionais** e bio:
  - Débora Adriano (`debora-adriano.webp`)
  - Rodolfo Couto (`rodolfo-couto.webp`)
- Estatísticas (15+ anos, 500+ casos, 95% sucesso)

### 3. Áreas de Atuação (`areas-de-atuacao.html`)
- Texto introdutório
- Grid de 8 áreas:
  - Recuperação de Crédito
  - Direito Civil
  - Direito Contratual
  - Direito Empresarial
  - Direito Imobiliário
  - Direito do Consumidor
  - Direito Bancário
  - Consultoria Preventiva
- CTA final

### 4. Blog (`blog.html`)
- Filtros por categoria (Todos, Recuperação de Crédito, etc.)
- Grid de posts (3 colunas)
- Cada post tem: imagem, categoria, título, resumo, data, tempo de leitura
- Newsletter section

### 5. Contato (`contato.html`)
- 4 cards de informação (Endereço, Telefone, Email, Horário)
- Formulário de contato (Nome, Email, Telefone, Assunto, Mensagem)
- Placeholder para mapa
- Texto sobre localização

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Design system com variáveis CSS (HSL)
- **JavaScript**: Interatividade (Vanilla JS)
- **Lucide Icons**: Ícones modernos via CDN
- **Google Fonts**: Inter e Playfair Display
- **WebP**: Imagens otimizadas para web (logo e fotos dos sócios)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 1024px (layout completo)
- **Tablet**: 768px - 1024px (grid ajustado)
- **Mobile**: < 768px (menu hamburguer, stacks)

### Mobile Features
- Menu hamburguer animado
- Cards em coluna única
- Formulários full-width
- Botões full-width
- Imagens otimizadas

## 🎨 Customização

### Cores

Edite em `assets/css/style.css`:

```css
:root {
    --primary: 215, 35%, 20%;      /* Azul escuro */
    --accent: 43, 74%, 52%;         /* Dourado */
    --background: 0, 0%, 100%;      /* Branco */
    --foreground: 215, 25%, 15%;    /* Texto */
}
```

### Fontes

No `<head>` de cada HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Ícones

Usando Lucide Icons:

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Uso -->
<i data-lucide="nome-do-icone"></i>

<!-- Inicialização -->
<script>
  lucide.createIcons();
</script>
```

## 📝 Conteúdo

Todo o conteúdo é baseado nas informações fornecidas do escritório real:

- **Endereço**: Av. Abelardo Bueno nº 1, Sala 308-C, Barra da Tijuca, RJ
- **Telefone**: (21) 3349-4608
- **Email**: contato@adrianoecoutoadv.com
- **Sócios**: Débora Adriano e Rodolfo Couto

## 🚀 Hospedagem na Hostinger

### Opção 1: Upload Direto

1. Acesse o hPanel da Hostinger
2. Vá em "Arquivos" > "Gerenciador de Arquivos"
3. Navegue até `public_html`
4. Faça upload de todos os arquivos
5. Acesse seu domínio

### Opção 2: WordPress

Para integração com WordPress, consulte o arquivo `WORDPRESS_INTEGRATION_GUIDE.md` (se disponível) ou:

1. Instale WordPress
2. Crie um tema customizado
3. Converta os HTMLs em templates PHP
4. Use os estilos CSS existentes

## 🌟 Destaques do Design

### Animations
- **Fade In**: Títulos principais
- **Slide Up**: Subtítulos e conteúdo
- **Hover Effects**: Cards, botões, links
- **Smooth Scrolling**: Navegação suave

### Shadows
- **Soft**: `0 4px 20px rgba(44, 62, 80, 0.08)`
- **Medium**: `0 8px 30px rgba(44, 62, 80, 0.12)`
- **Strong**: `0 12px 40px rgba(44, 62, 80, 0.16)`

### Border Radius
- **Default**: `0.75rem` (12px)
- **Medium**: `0.5rem` (8px)
- **Small**: `0.375rem` (6px)
- **Full**: `9999px` (pill shape)

## ✅ Checklist de Deploy

- [ ] Testar em diferentes navegadores
- [ ] Testar em diferentes dispositivos
- [ ] Verificar todos os links
- [x] ✅ Imagens otimizadas (formato WebP)
- [x] ✅ Logo adicionado no header e footer
- [x] ✅ Fotos dos sócios atualizadas
- [ ] Configurar domínio
- [ ] Adicionar Google Analytics (opcional)
- [ ] Configurar formulário de contato (backend)
- [ ] Adicionar mapa real (Google Maps API)
- [ ] Testar formulários
- [ ] Verificar SEO (meta tags)

## 🔧 Melhorias Futuras

- [ ] Adicionar página individual de artigos do blog
- [ ] Implementar busca no blog
- [ ] Adicionar galeria de fotos do escritório
- [ ] Integrar com WhatsApp Business API
- [ ] Adicionar chat online
- [ ] Implementar dark mode
- [ ] Adicionar depoimentos de clientes
- [ ] Criar área de clientes (login)

## 📞 Suporte

Para dúvidas sobre o código ou customizações:

1. **HTML/CSS**: Documentação em cada arquivo
2. **JavaScript**: Comentários inline no código
3. **Design**: Design system documentado no CSS

## 📄 Licença

Este projeto foi desenvolvido para Adriano & Couto Advocacia.

---

**Desenvolvido com ❤️ para Adriano & Couto Advocacia**

*Última atualização: Janeiro 2025*
