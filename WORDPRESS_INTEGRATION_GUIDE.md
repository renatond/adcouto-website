# Guia de Integração WordPress - Adriano & Couto Advocacia

Este guia fornece instruções detalhadas para integrar o site no WordPress e fazer o deploy na Hostinger.

## 📋 Conteúdo

1. [Pré-requisitos](#pré-requisitos)
2. [Opção 1: Uso do HTML Estático](#opção-1-uso-do-html-estático)
3. [Opção 2: Conversão para Tema WordPress](#opção-2-conversão-para-tema-wordpress)
4. [Opção 3: Uso com Page Builder](#opção-3-uso-com-page-builder)
5. [Configuração do Formulário de Contato](#configuração-do-formulário-de-contato)
6. [Deploy na Hostinger](#deploy-na-hostinger)
7. [Configurações Finais](#configurações-finais)

---

## 🔧 Pré-requisitos

- Conta na Hostinger com WordPress instalado
- Acesso ao painel de controle (hPanel)
- Conhecimento básico de WordPress
- Acesso FTP (FileZilla ou similar)

---

## 📌 Opção 1: Uso do HTML Estático

### Vantagens
- Rápido de implementar
- Ótima performance
- Fácil manutenção

### Passos

1. **Fazer upload dos arquivos via FTP**
   ```
   public_html/
   ├── index.html
   ├── areas-de-atuacao.html
   ├── o-escritorio.html
   ├── contato.html
   └── assets/
       ├── css/
       │   └── style.css
       └── js/
           └── main.js
   ```

2. **Configurar redirecionamento no .htaccess**
   ```apache
   # Adicione no arquivo .htaccess
   DirectoryIndex index.html index.php
   ```

3. **Testar o site**
   - Acesse seu domínio e verifique se tudo está funcionando

---

## 🎨 Opção 2: Conversão para Tema WordPress

### Estrutura do Tema

Crie a seguinte estrutura de arquivos:

```
adriano-couto-theme/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── page-home.php
├── page-areas.php
├── page-escritorio.php
├── page-contato.php
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

### 1. Criar style.css (informações do tema)

```css
/*
Theme Name: Adriano & Couto Advocacia
Theme URI: https://adrianoecoutoadv.com.br
Author: Seu Nome
Author URI: https://seusite.com
Description: Tema profissional para escritório de advocacia
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: adriano-couto
*/
```

### 2. Criar functions.php

```php
<?php
/**
 * Adriano & Couto Theme Functions
 */

// Enqueue styles and scripts
function adriano_couto_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700&display=swap', array(), null);
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0');
    
    // Enqueue scripts
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('main-js', 'wp_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('contact_form_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'adriano_couto_scripts');

// Theme support
function adriano_couto_setup() {
    // Add title tag support
    add_theme_support('title-tag');
    
    // Add post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'adriano-couto'),
    ));
}
add_action('after_setup_theme', 'adriano_couto_setup');

// Register widgets
function adriano_couto_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'adriano-couto'),
        'id'            => 'sidebar-1',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'adriano_couto_widgets_init');

// Handle contact form submission
function handle_contact_form() {
    check_ajax_referer('contact_form_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Send email
    $to = 'contato@adrianoecoutoadv.com';
    $email_subject = "Contato do site: $subject";
    $email_body = "Nome: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Telefone: $phone\n";
    $email_body .= "Assunto: $subject\n\n";
    $email_body .= "Mensagem:\n$message";
    
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    if (wp_mail($to, $email_subject, $email_body, $headers)) {
        wp_send_json_success(array('message' => 'Mensagem enviada com sucesso!'));
    } else {
        wp_send_json_error(array('message' => 'Erro ao enviar mensagem. Tente novamente.'));
    }
}
add_action('wp_ajax_submit_contact_form', 'handle_contact_form');
add_action('wp_ajax_nopriv_submit_contact_form', 'handle_contact_form');
?>
```

### 3. Criar header.php

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="header" id="header">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <h1><?php bloginfo('name'); ?></h1>
                            <span><?php bloginfo('description'); ?></span>
                        </a>
                        <?php
                    }
                    ?>
                </div>
                
                <button class="mobile-menu-toggle" id="mobileMenuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu',
                    'container' => false,
                ));
                ?>
            </nav>
        </div>
    </header>
```

### 4. Criar footer.php

```php
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <div class="footer-logo">
                        <h3><?php bloginfo('name'); ?></h3>
                        <span><?php bloginfo('description'); ?></span>
                    </div>
                    <p>Escritório de advocacia comprometido com a excelência e a ética profissional.</p>
                </div>
                
                <div class="footer-col">
                    <h4>Links Rápidos</h4>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class' => '',
                        'container' => 'ul',
                    ));
                    ?>
                </div>
                
                <div class="footer-col">
                    <h4>Contato</h4>
                    <ul class="contact-info">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Avenida Abelardo Bueno n 1 sala 308 c, bloco Ayrton Senna II, Edifício Dimension<br>Barra da Tijuca - Rio de Janeiro, RJ</span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <span>21 3349-4608</span>
                        </li>
                        <li>
                            <i class="fab fa-whatsapp"></i>
                            <span>21 9 7445-2474</span>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <span>contato@adrianoecoutoadv.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Adriano E Couto Advogados Associados - 40.985.337/0001-10. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <a href="https://wa.me/5521974452474" class="whatsapp-float" target="_blank" aria-label="Contato via WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <?php wp_footer(); ?>
</body>
</html>
```

### 5. Instalação do Tema

1. Compacte a pasta `adriano-couto-theme` em formato .zip
2. No WordPress, vá em **Aparência > Temas > Adicionar novo**
3. Clique em **Enviar tema** e selecione o arquivo .zip
4. Clique em **Instalar agora** e depois **Ativar**

---

## 🔌 Opção 3: Uso com Page Builder

### Recomendação: Elementor

1. **Instalar o Elementor**
   - WordPress Admin > Plugins > Adicionar novo
   - Busque por "Elementor"
   - Instale e ative

2. **Importar CSS Personalizado**
   - Vá em **Elementor > Configurações > Avançado**
   - Cole o conteúdo de `assets/css/style.css`

3. **Criar as Páginas**
   - Crie páginas: Início, O Escritório, Áreas de Atuação, Contato
   - Use o Elementor para replicar o design do HTML

### Alternativa: WPBakery Page Builder

Similar ao Elementor, importando os estilos e recriando o layout.

---

## 📧 Configuração do Formulário de Contato

### Opção 1: WPForms (Recomendado)

1. **Instalar WPForms**
   ```
   WordPress Admin > Plugins > Adicionar novo > WPForms
   ```

2. **Criar Formulário**
   - Vá em **WPForms > Adicionar novo**
   - Use o template "Contato Simples"
   - Adicione campos: Nome, Email, Telefone, Assunto, Mensagem

3. **Configurar Notificações**
   - Configurações > Notificações
   - Email para: contato@adrianoecoutoadv.com

4. **Inserir na Página**
   ```php
   <?php echo do_shortcode('[wpforms id="123"]'); ?>
   ```

### Opção 2: Contact Form 7

1. **Instalar Contact Form 7**
2. **Criar formulário com os campos necessários**
3. **Usar shortcode na página de contato**

### Opção 3: Formulário Personalizado (do tema)

O código já está em `functions.php` com a função `handle_contact_form()`.

---

## 🚀 Deploy na Hostinger

### Passo 1: Preparar o Ambiente

1. **Acessar hPanel da Hostinger**
   - Login em hostinger.com.br
   - Acesse seu painel de hospedagem

2. **Instalar WordPress**
   - Auto Installer > WordPress
   - Escolha domínio e diretório
   - Configure usuário admin

### Passo 2: Upload dos Arquivos

#### Via FTP:

1. **Baixar FileZilla** (ou usar FTP da Hostinger)
   
2. **Conectar via FTP**
   ```
   Host: ftp.seudominio.com.br
   Usuário: seu_usuario_ftp
   Senha: sua_senha
   Porta: 21
   ```

3. **Upload dos arquivos**
   - Para HTML estático: envie para `public_html/`
   - Para tema WordPress: envie para `public_html/wp-content/themes/`

#### Via hPanel:

1. **Gerenciador de Arquivos**
   - hPanel > Arquivos > Gerenciador de Arquivos
   - Navegue até `public_html/`
   - Clique em "Upload" e envie os arquivos

### Passo 3: Configurar WordPress

1. **Ativar o Tema**
   - WordPress Admin > Aparência > Temas
   - Ative o tema "Adriano & Couto Advocacia"

2. **Criar Páginas**
   - Páginas > Adicionar nova
   - Crie: Início, O Escritório, Áreas de Atuação, Contato

3. **Configurar Menu**
   - Aparência > Menus
   - Crie menu "Principal"
   - Adicione as páginas
   - Atribua ao local "Menu Principal"

4. **Definir Página Inicial**
   - Configurações > Leitura
   - "Sua página inicial exibe": Uma página estática
   - Página inicial: Início

### Passo 4: Configurações de SEO

1. **Instalar Yoast SEO ou Rank Math**
   ```
   Plugins > Adicionar novo > Rank Math SEO
   ```

2. **Configurar meta descriptions e títulos**

3. **Criar sitemap XML**

### Passo 5: Otimizações

1. **Plugin de Cache**
   ```
   Recomendado: LiteSpeed Cache (Hostinger tem servidor LiteSpeed)
   ```

2. **Otimização de Imagens**
   ```
   Plugin: Smush ou ShortPixel
   ```

3. **CDN (Opcional)**
   ```
   Cloudflare (gratuito)
   ```

---

## ⚙️ Configurações Finais

### SSL/HTTPS

1. **Ativar SSL na Hostinger**
   - hPanel > Avançado > SSL
   - Instalar certificado gratuito Let's Encrypt

2. **Forçar HTTPS**
   - Adicione no `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### Backup

1. **Configurar backup automático**
   - Hostinger: hPanel > Backups
   - Plugin: UpdraftPlus

### Configurações de Email

1. **Configurar SMTP**
   - Plugin: WP Mail SMTP
   - Use as credenciais SMTP da Hostinger

2. **Testar envio de email**

### Performance

1. **Ativar Gzip**
   ```apache
   # No .htaccess
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>
   ```

2. **Configurar Cache do navegador**
   ```apache
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/jpg "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
       ExpiresByType image/gif "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

### Segurança

1. **Proteger wp-config.php**
   ```apache
   <files wp-config.php>
       order allow,deny
       deny from all
   </files>
   ```

2. **Desabilitar editor de arquivos**
   ```php
   // No wp-config.php
   define('DISALLOW_FILE_EDIT', true);
   ```

3. **Limite de tentativas de login**
   - Plugin: Limit Login Attempts Reloaded

---

## 📝 Checklist Final

- [ ] WordPress instalado e configurado
- [ ] Tema ativado
- [ ] Páginas criadas
- [ ] Menu configurado
- [ ] Formulário de contato funcionando
- [ ] SSL ativado (HTTPS)
- [ ] SEO configurado
- [ ] Cache ativado
- [ ] Backup configurado
- [ ] Email funcionando
- [ ] Site testado em mobile
- [ ] Performance otimizada
- [ ] Google Analytics configurado

---

## 🆘 Suporte

### Problemas Comuns

**1. Erros de permissão**
```bash
# Via SSH na Hostinger
chmod 755 public_html/
chmod 644 public_html/.htaccess
```

**2. White screen of death**
- Ativar debug no wp-config.php:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

**3. Problemas com permalinks**
- Configurações > Links permanentes > Salvar alterações

---

## 📞 Contato para Suporte Técnico

- **Hostinger**: chat 24/7 no hPanel
- **Documentação Hostinger**: support.hostinger.com.br
- **WordPress**: br.wordpress.org/support

---

## 8. 📝 Integração do Blog Jurídico

### 8.1. Usando Posts Nativos do WordPress

A maneira mais simples é utilizar os posts nativos do WordPress:

**1. Criar Categorias**
- Vá em: `Posts > Categorias`
- Adicione as categorias:
  - Recuperação de Crédito
  - Direito Empresarial
  - Direito do Consumidor
  - Direito Bancário
  - Direito Trabalhista
  - Direito Previdenciário

**2. Configurar o Loop do WordPress**

Crie um arquivo `template-blog.php` no seu tema:

```php
<?php
/*
Template Name: Blog Jurídico
*/
get_header(); ?>

<section class="blog-posts">
    <div class="container">
        <div class="posts-grid" id="postsGrid">
            <?php
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => 9,
                'orderby' => 'date',
                'order' => 'DESC'
            );
            
            $blog_query = new WP_Query($args);
            
            if ($blog_query->have_posts()) :
                while ($blog_query->have_posts()) : $blog_query->the_post();
                    $categories = get_the_category();
                    $category_slug = !empty($categories) ? $categories[0]->slug : '';
                    $category_name = !empty($categories) ? $categories[0]->name : '';
                    $reading_time = ceil(str_word_count(get_the_content()) / 200);
            ?>
                <article class="blog-card" data-category="<?php echo esc_attr($category_slug); ?>">
                    <div class="blog-card-image">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('medium', array('loading' => 'lazy')); ?>
                        <?php else : ?>
                            <img src="https://via.placeholder.com/800x400" alt="<?php the_title(); ?>" loading="lazy">
                        <?php endif; ?>
                    </div>
                    <div class="blog-card-content">
                        <span class="blog-category"><?php echo esc_html($category_name); ?></span>
                        <h3 class="blog-card-title"><?php the_title(); ?></h3>
                        <p class="blog-card-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                        <div class="blog-card-meta">
                            <span class="blog-date">
                                <i class="far fa-calendar"></i> <?php echo get_the_date('d M Y'); ?>
                            </span>
                            <span class="blog-read-time">
                                <i class="far fa-clock"></i> <?php echo $reading_time; ?> min
                            </span>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="blog-read-more">
                            Ler mais <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </article>
            <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
```

### 8.2. Filtro AJAX (Avançado)

Para filtros dinâmicos sem recarregar a página, adicione em `functions.php`:

```php
// AJAX Filter for Blog
function filter_blog_posts() {
    $category = isset($_POST['category']) ? $_POST['category'] : 'all';
    
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 9,
        'orderby' => 'date',
        'order' => 'DESC'
    );
    
    if ($category != 'all') {
        $args['category_name'] = $category;
    }
    
    $query = new WP_Query($args);
    
    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            // Include card template
            get_template_part('template-parts/content', 'blog-card');
        endwhile;
    else :
        echo '<p>Nenhum artigo encontrado.</p>';
    endif;
    
    wp_reset_postdata();
    wp_die();
}
add_action('wp_ajax_filter_blog_posts', 'filter_blog_posts');
add_action('wp_ajax_nopriv_filter_blog_posts', 'filter_blog_posts');
```

### 8.3. Newsletter Integration

Use plugins como:
- **MailChimp for WordPress**: Integração com MailChimp
- **Newsletter**: Plugin gratuito
- **Contact Form 7**: Com extensão de newsletter

---

## 🎯 Próximos Passos

1. ✅ ~~Adicionar blog/notícias~~ (Implementado!)
2. Integrar com Google Analytics
3. Adicionar chat online
4. Implementar área de clientes
5. Adicionar certificações e prêmios

---

**Desenvolvido com ❤️ para Adriano & Couto Advocacia**

