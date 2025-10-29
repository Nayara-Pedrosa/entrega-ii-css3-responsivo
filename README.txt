# 🎨 Entrega II — Projeto CSS3 Responsivo

**Autora:** Nayara Pedrosa

## 🧩 Objetivo

Este projeto foi desenvolvido como parte da **Entrega II** da disciplina de *Desenvolvimento Web*.
O objetivo é aplicar **CSS3** para transformar a estrutura HTML da Entrega I em uma **interface visual profissional, responsiva e acessível**, demonstrando domínio de **design system**, **leiautes modernos** e **componentes interativos**.

---

## 🪄 Tecnologias Utilizadas

* **HTML5**
* **CSS3 (Grid e Flexbox)**
* **JavaScript (interatividade e validação visual)**

---

## 🎨 Sistema de Design

| Elemento                      | Especificação                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| 🎨 **Paleta de Cores**        | Azul bebê `#a8d8ff` (primária), Rosa `#ffd1e8` (secundária), +6 tons neutros e de apoio |
| 🔠 **Tipografia**             | Hierarquia com 5 tamanhos (`--fs-sm` a `--fs-xxl`)                                      |
| 📏 **Sistema de Espaçamento** | Modular (8px, 16px, 24px, 32px, 48px, 64px)                                             |
| 🧱 **Grid**                   | Sistema de 12 colunas com `gap` configurável                                            |
| 💠 **Radius & Shadows**       | Bordas arredondadas (`12px`) e sombras suaves                                           |
| 🔁 **Transições**             | Interações com `transition` rápida de 180ms                                             |

---

## 📱 Responsividade

O projeto é **totalmente responsivo** e utiliza **CSS Grid** e **Flexbox** para diferentes seções.
Foram definidos **5 breakpoints principais**:

| Dispositivo        | Largura Máxima | Descrição                                 |
| ------------------ | -------------- | ----------------------------------------- |
| 🖥️ Desktop grande | 1200px         | Layout completo em 3 colunas              |
| 💻 Laptop          | 992px          | Ajuste de margens e gaps                  |
| 📱 Tablet          | 768px          | Menu hambúrguer ativado, grid 1-2 colunas |
| 📲 Mobile          | 576px          | Fontes e espaçamentos reduzidos           |
| 📞 Extra Small     | 420px          | Layout simplificado, tipografia menor     |

---

## 🧭 Navegação Interativa

* **Menu principal responsivo** com submenu *dropdown*.
* **Menu hambúrguer** para telas pequenas.
* Foco em **acessibilidade**, com `aria-labels` e `aria-expanded`.

---

## 🧱 Componentes Desenvolvidos

### 🔹 Cards Responsivos

* Dispostos em grid adaptável.
* Incluem título, descrição, badges e botões com estados (`hover`, `focus`, `active`, `disabled`).

### 🔹 Botões

* Variantes: `primary`, `secondary`, `outline`, `ghost`.
* Transições suaves e acessibilidade com `focus` visível.

### 🔹 Formulário Estilizado

* Campos validados visualmente (HTML + JS).
* Erros exibidos dinamicamente com `aria-live="polite"`.

### 🔹 Componentes de Feedback

* **Toast**: mensagens temporárias no canto inferior direito.
* **Modal**: janela sobreposta com conteúdo e botão de fechar.

---

## 🗂️ Estrutura de Pastas

```
entrega_experiencia_pratica_ii/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── assets/
    └── README.txt  (pasta para imagens)
```

---

## 🚀 Como Executar o Projeto

1. Baixe ou clone este repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/entrega-ii-css3-responsivo.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Ajuste o conteúdo conforme desejar (ex.: nome, textos, cores, imagens).

---

## 🧭 Como Fazer a Entrega no GitHub

1. Crie um repositório **público** (obrigatório).
2. Faça o upload dos arquivos do projeto.
3. No terminal, rode:

   ```bash
   git init
   git add .
   git commit -m "Entrega II — Projeto CSS3 Responsivo"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git
   git push -u origin main
   ```
4. Copie o link público do repositório e envie no Ambiente Virtual.

---

## 💬 Observações

* Este projeto foi desenvolvido de forma **modular e responsiva**.
* Segue boas práticas de **acessibilidade, semântica e organização CSS**.
* Todas as cores, espaçamentos e tamanhos são controlados via **variáveis CSS**.

---

## ✨ Autora

👩‍💻 **Nayara Pedrosa**
💙 Desenvolvido com HTML, CSS3 e JavaScript.
📍 São Paulo — Brasil
📚 Estudante de Análise e Desenvolvimento de Sistemas | Foco em Front-End.
Coloque aqui suas imagens. Ex: avatar.jpg, projeto1.png
