# 🪑 MadeiraPura - Móveis Planejados & Esquadrias em Alumínio

<div align="center">

![Status](https://img.shields.io/badge/status-concluído-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC)

**Landing page moderna e responsiva para empresa de móveis planejados e esquadrias em alumínio**

[Ver Demo](#) • [Reportar Bug](https://github.com/SEU_USUARIO/Moveis-Planejados/issues) • [Sugerir Melhoria](https://github.com/SEU_USUARIO/Moveis-Planejados/issues)

</div>

---

## 📋 Sobre o Projeto

O **MadeiraPura** é uma landing page desenvolvida para uma empresa especializada em móveis planejados e esquadrias em alumínio. O projeto visa apresentar os serviços da empresa de forma moderna, intuitiva e profissional, facilitando o contato e agendamento de orçamentos.

### ✨ Funcionalidades

- 🎨 **Design Moderno e Responsivo** - Layout adaptável para mobile, tablet e desktop
- 🌓 **Tema Claro/Escuro** - Alternância entre temas com persistência local
- 📱 **Menu Responsivo** - Navegação otimizada para dispositivos móveis
- ️ **Galeria de Projetos** - Showcase dos trabalhos realizados
- 📝 **Formulário de Contato** - Agendamento de visita técnica
- 🎯 **Rolagem Suave** - Navegação fluida entre seções
- 🔗 **Links Diretos** - Integração com WhatsApp, Instagram e telefone
- ⚡ **Performance Otimizada** - Carregamento rápido e animações eficientes

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [React](https://reactjs.org/) | 18.2.0 | Biblioteca para construção da UI |
| [Vite](https://vitejs.dev/) | 5.0.0 | Build tool rápida e moderna |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.0 | Framework CSS utilitário |
| [Framer Motion](https://www.framer.com/motion/) | 10.x | Biblioteca de animações |
| [Lucide React](https://lucide.dev/) | Latest | Ícones modernos e customizáveis |

---

## 📦 Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU_USUARIO/Moveis-Planejados.git
   cd Moveis-Planejados
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente (opcional)**
   
   Crie um arquivo `.env` na raiz do projeto se necessário.

4. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

---

##  Estrutura do Projeto

```
moveis-planejados/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/
│   │   └── ui/            # Componentes reutilizáveis
│   │       ├── SectionTitle.jsx
│   │       └── StepCard.jsx
│   ├── sections/          # Seções da página
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Process.jsx
│   │   ├── Aluminio.jsx
│   │   ├── Gallery.jsx
│   │   ├── Diferenciais.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── index.html            # HTML base
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do Tailwind
├── vite.config.js        # Configuração do Vite
└── README.md             # Documentação
```

---

## 🎨 Seções do Site

1. **Navbar** - Menu de navegação fixo com toggle de tema
2. **Hero** - Banner principal com call-to-action
3. **Processo** - Como funciona (3 etapas)
4. **Alumínio** - Portas e janelas em alumínio
5. **Galeria** - Portfolio de projetos
6. **Diferenciais** - Por que escolher a empresa
7. **Contato** - Formulário de orçamento + redes sociais
8. **Footer** - Informações e links rápidos

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build de produção |
| `npm run lint` | Verifica qualidade do código |

---

## 📱 Responsividade

O projeto é totalmente responsivo e testado nos seguintes breakpoints:

- 📱 **Mobile**: 320px - 767px
- 💻 **Tablet**: 768px - 1023px
- 🖥️ **Desktop**: 1024px+

---

## 🔧 Personalização

### Alterar Cores

Edite o arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#D97706', // Âmbar
      secondary: '#1F2937', // Cinza escuro
    }
  }
}
```

### Alterar Informações de Contato

Edite o arquivo `src/sections/Contact.jsx` e `src/sections/Footer.jsx`:

- Telefone/WhatsApp
- E-mail
- Links das redes sociais
- Horário de atendimento

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arraste a pasta 'dist' para o Netlify
```

### GitHub Pages

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍ Autor

<div align="center">

**Edson Carvalho**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/edson-carvalho-213b051b1/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Edson468)

</div>

---

##  Agradecimentos

- [Unsplash](https://unsplash.com/) - Imagens gratuitas
- [iStock](https://www.istockphoto.com/) - Imagens premium
- [Lucide Icons](https://lucide.dev/) - Ícones modernos
- [Tailwind UI](https://tailwindui.com/) - Inspiração de componentes

---

<div align="center">

**Feito por Edson Carvalho**

[⬆️ Voltar ao topo](#-madeirapura---móveis-planejados--esquadrias-em-alumínio)

</div>
```
