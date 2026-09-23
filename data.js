// ============================================================
//  EDITE AQUI — todo o conteúdo do portfólio vem deste arquivo
// ============================================================

const PORTFOLIO = {
  nome: "Vitor Manoel",
  cargo: "Desenvolvedor Full Stack",
  local: "Teresina, PI",
  resumo:
    "Desenvolvo aplicações web de ponta a ponta, das APIs REST em C#, .NET e Java às interfaces em Angular e React, com foco em código organizado e bem integrado ao banco de dados.",
  sobre: [
    "Sou estudante de Ciência da Computação e estagiário em Desenvolvimento Full Stack na Medsafe Brasil, onde trabalho com Spring Boot e Angular, dashboards analíticos e suporte a sistemas internos.",
    "No back-end, trabalho com C#, ASP.NET Core, Java e Spring Boot. No front-end, com Angular, React, TypeScript e Tailwind. Também tenho experiência prática com suporte técnico, análise de logs, resolução de problemas e automação de processos com IA e N8N.",
    "Busco oportunidades como Desenvolvedor Full Stack Júnior para continuar evoluindo em arquitetura de software e cloud computing.",
  ],
  disponivel: true, // mostra o selo "Disponível para novos projetos"
  email: "vitormanoel.executivo@gmail.com",
  curriculo: "Curriculo%20Vitor%20Manoel.docx.pdf", // link para PDF do currículo (deixe "" para esconder o botão)

  redes: [
    { nome: "GitHub", url: "https://github.com/VitinhoProgramador", icone: "devicon-github-original" },
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/vitor-manoel-886827272", icone: "devicon-linkedin-plain" },
  ],

  // Ícones: https://devicon.dev  (use a classe, ex: "devicon-react-original"; deixe "" se não houver)
  stacks: [
    {
      categoria: "Linguagens",
      itens: [
        { nome: "C#", icone: "devicon-csharp-plain" },
        { nome: "Java", icone: "devicon-java-plain" },
        { nome: "TypeScript", icone: "devicon-typescript-plain" },
        { nome: "SQL", icone: "devicon-azuresqldatabase-plain" },
      ],
    },
    {
      categoria: "Back-end",
      itens: [
        { nome: "ASP.NET Core", icone: "devicon-dotnetcore-plain" },
        { nome: "Entity Framework", icone: "devicon-dot-net-plain" },
        { nome: "Spring Boot", icone: "devicon-spring-original" },
        { nome: "Swagger", icone: "devicon-swagger-plain" },
      ],
    },
    {
      categoria: "Front-end",
      itens: [
        { nome: "Angular", icone: "devicon-angular-plain" },
        { nome: "React", icone: "devicon-react-original" },
        { nome: "React Native", icone: "devicon-react-original" },
        { nome: "Next.js", icone: "devicon-nextjs-plain" },
        { nome: "HTML", icone: "devicon-html5-plain" },
        { nome: "CSS", icone: "devicon-css3-plain" },
        { nome: "Tailwind", icone: "devicon-tailwindcss-original" },
      ],
    },
    {
      categoria: "Banco de dados",
      itens: [
        { nome: "PostgreSQL", icone: "devicon-postgresql-plain" },
        { nome: "MySQL", icone: "devicon-mysql-original" },
      ],
    },
    {
      categoria: "DevOps & Ferramentas",
      itens: [
        { nome: "Git", icone: "devicon-git-plain" },
        { nome: "GitHub", icone: "devicon-github-original" },
        { nome: "Docker", icone: "devicon-docker-plain" },
        { nome: "Jenkins", icone: "devicon-jenkins-line" },
        { nome: "N8N", icone: "" },
      ],
    },
  ],

  // Conceitos e metodologias (aparecem em um bloco separado, abaixo das stacks)
  conceitos: [
    { nome: "APIs REST", descricao: "Design de endpoints, DTOs e respostas padronizadas" },
    { nome: "Autenticação JWT", descricao: "Login, refresh token e controle de acesso por cargo" },
    { nome: "Arquitetura em Camadas", descricao: "Controllers, services e repositórios bem separados" },
    { nome: "Automação com IA", descricao: "Fluxos automatizados com N8N e integrações com IA" },
    { nome: "Scrum", descricao: "Trabalho em sprints, com entregas curtas e contínuas" },
    { nome: "LGPD & Segurança", descricao: "Noções de proteção de dados e boas práticas" },
    { nome: "Análise de Logs", descricao: "Monitoramento e diagnóstico de falhas em sistemas" },
    { nome: "Documentação", descricao: "Base de conhecimento e documentação de soluções" },
  ],

  experiencias: [
    {
      cargo: "Estagiário em Desenvolvimento Full Stack",
      empresa: "Medsafe Brasil",
      periodo: "Mar 2026 — Atual",
      descricao: "Desenvolvimento de soluções full stack e suporte aos sistemas internos da empresa.",
      destaques: [
        "Desenvolvimento de soluções usando Spring Boot e Angular",
        "Desenvolvimento de dashboards analíticos dentro do sistema",
        "Diagnóstico e resolução de problemas de usuários finais",
        "Suporte a sistemas internos e infraestrutura de TI",
        "Documentação de soluções e criação de base de conhecimento",
      ],
      tecnologias: ["Java", "Spring Boot", "Angular", "SQL"],
    },
    {
      cargo: "Estagiário em Robótica",
      empresa: "Colégio Diocesano",
      periodo: "Mar 2024 — Dez 2024",
      descricao: "Ensino de robótica e suporte técnico aos equipamentos educacionais.",
      destaques: [
        "Aulas de robótica para alunos de diferentes níveis",
        "Elaboração e execução de projetos práticos educacionais",
        "Manutenção de notebooks, tablets e equipamentos educacionais",
        "Organização de dados em plataformas digitais e relatórios de atividades",
      ],
      tecnologias: ["Robótica", "Suporte Técnico"],
    },
    {
      cargo: "Entrevistador Censitário e de Pesquisas Amostrais",
      empresa: "Agenda Control Serviços Ltda",
      periodo: "Mai 2023 — Ago 2023",
      descricao: "Coleta, validação e estruturação de dados em sistemas internos.",
      destaques: [
        "Digitalização e estruturação de informações para bases de dados",
        "Organização de relatórios e controle de qualidade das informações",
      ],
      tecnologias: ["Dados", "Qualidade da Informação"],
    },
    {
      cargo: "Auxiliar de Informática (CPD)",
      empresa: "Atacadão S.A",
      periodo: "Mai 2022 — Ago 2022",
      descricao: "Suporte técnico a usuários e sistemas internos da empresa.",
      destaques: [
        "Monitoramento de sistemas e análise de logs para identificação de falhas",
        "Apoio à equipe de TI em rotinas de manutenção e infraestrutura",
      ],
      tecnologias: ["Suporte", "Análise de Logs", "Infraestrutura"],
    },
    {
      cargo: "Jovem Aprendiz — Atendimento ao Cliente",
      empresa: "Atacadão S.A",
      periodo: "Mai 2019 — Dez 2020",
      descricao: "Atendimento ao cliente, controle de estoque e apoio administrativo.",
      destaques: [],
      tecnologias: [],
    },
  ],

  formacao: [
    {
      curso: "Bacharelado em Ciência da Computação",
      instituicao: "UNIP",
      periodo: "Conclusão prevista: Jan 2027",
      detalhe: "8º período · Noturno",
    },
  ],

  cursos: ["DevOps com Docker e Jenkins"],

  projetos: [
    {
      nome: "Livraria Pensar",
      descricao:
        "Sistema full stack de livraria com API em ASP.NET Core (autenticação, usuários, autores e livros, envio de e-mail) e front-end em React.",
      tecnologias: ["C#", "ASP.NET Core", "EF Core", "React", "TypeScript", "Tailwind"],
      github: "https://github.com/VitinhoProgramador/livraria-pensar",
      demo: "",
    },
    {
      nome: "API de Autenticação com Refresh Token",
      descricao:
        "API REST de autenticação e perfis de usuário com JWT, refresh token, controle de cargos e documentação via Swagger.",
      tecnologias: ["C#", "ASP.NET Core", "PostgreSQL", "JWT", "Swagger"],
      github: "https://github.com/VitinhoProgramador/Login-RefreshToken-DotNet",
      demo: "",
    },
  ],
};
