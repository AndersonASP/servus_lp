# Servus Landing Page

Landing page completa e production-ready para o Servus / We Are Servus, construída com Next.js 14 (App Router), TypeScript e TailwindCSS.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui** (componentes)
- **Lucide React** (ícones)
- **Google Apps Script + Planilha** (captura de leads do programa pioneiros)

## 📁 Estrutura do Projeto

```
servus_lp/
├── app/
│   ├── components/       # Header, Hero, seções, CTA, Footer, ui/
│   ├── lib/
│   │   └── sheets.ts     # Envio do lead para o webhook do Apps Script
│   ├── privacidade/
│   │   └── page.tsx
│   ├── actions.ts        # Server Action submitPioneerInterest
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── utils.ts          # Utilitários (ex.: cn para Tailwind)
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Cores da Marca

As cores do Servus estão configuradas no Tailwind:

- **brand-500**: `#4058DB` (azul principal)
- **brand-700**: `#2C3FA6` (azul escuro)
- **servus.coral**: `#FFA07A` (coral para CTAs)

Você pode usar essas cores nos componentes:
```tsx
className="bg-brand-500 text-white"
className="border-brand-700"
```

## ✨ Recursos Implementados

### Background Illumination Effect

O Hero possui um efeito de iluminação animado com blobs que flutuam suavemente. O efeito usa:

- **CSS Variables**: `--servus-blue`, `--servus-dark`, `--servus-coral` em `app/globals.css`
- **Blobs animados**: classes `illumination-blob-*` com `float-blob-*`
- **Mix-blend-mode**: `screen` no hero
- **Reduced Motion**: Respeita `prefers-reduced-motion`

**Para desabilitar o efeito**, comente as `div` com classe `illumination-blob` no `Hero.tsx`.

### Seções da home

1. **Hero**: gradiente Servus, CTAs (pioneiro + como funciona), e-mail para scroll ao formulário
2. **DemoVisual** (`#produto`): tabs com módulos do produto
3. **DoresLider**: dores comuns de líderes
4. **Beneficios** (`#recursos`): resultados para o ministério
5. **ParaQuem**: personas (líder, supervisão, voluntário)
6. **Depoimentos**: expectativas / linguagem de líderes (não depoimentos de clientes pagantes)
7. **ComoFunciona** (`#como-funciona`): 4 passos
8. **Pioneiros** (`#pioneiros`): benefícios do programa + CTA
9. **InlineCta**: faixa de conversão
10. **FAQ** (`#faq`): acordeão nativo (`<details>`)
11. **CTA** (`#waitlist`): formulário completo + LGPD
12. **Footer**

### Captura de leads (Google Sheets)

A **Server Action** `submitPioneerInterest` envia um `POST` JSON para a URL configurada em `GOOGLE_APPS_SCRIPT_URL` (implantação como **Web App** do Google Apps Script, executando como você). Opcionalmente envie `GOOGLE_APPS_SCRIPT_SECRET` no body; o script pode comparar com `PropertiesService.getScriptProperties().getProperty('SECRET')`.

Colunas sugeridas na primeira linha da planilha:

`created_at | name | email | phone | church | role | church_size | message | wants_pioneer_benefits | consent | source`

Exemplo mínimo de **Code.gs** (ajuste o ID da planilha ou use `SpreadsheetApp.getActiveSpreadsheet()` se o script estiver vinculado ao ficheiro):

```javascript
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const secret = PropertiesService.getScriptProperties().getProperty('SECRET');
  if (secret && body.secret !== secret) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sh.appendRow([
    body.created_at,
    body.name,
    body.email,
    body.phone || '',
    body.church || '',
    body.role || '',
    body.church_size || '',
    body.message || '',
    body.wants_pioneer_benefits ? 'sim' : 'não',
    body.consent ? 'sim' : 'não',
    body.source || 'servus_lp',
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Depois: **Implementar** como aplicação web, acesso **Qualquer pessoa** (para o servidor Next conseguir POST), copie a URL para `GOOGLE_APPS_SCRIPT_URL`.

## 🛠️ Instalação

1. **Clone o repositório** (ou use este projeto)

2. **Instale as dependências**:
```bash
npm install
```

3. **Variáveis de ambiente** (opcional para desenvolvimento local):

- **Sem Google Sheets:** em `npm run dev`, se `GOOGLE_APPS_SCRIPT_URL` não estiver definido, o formulário **aceita o envio** e o lead aparece no **terminal do servidor** (`[servus_lp] Lead (modo sem Google Sheets): ...`). Para `npm run build` + `npm start` sem Sheets, defina `SKIP_SHEETS=1` no `.env.local`.
- **Com Google Sheets:** crie `.env.local` com:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
# Opcional: o mesmo valor deve estar em Script Properties como SECRET
GOOGLE_APPS_SCRIPT_SECRET=uma_string_longa_aleatoria
```

4. **Execute o servidor de desenvolvimento**:
```bash
npm run dev
```

5. **Acesse** [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 🎯 Acessibilidade

O projeto implementa:

- **ARIA labels** em elementos interativos
- **Focus states** visíveis em todos os elementos
- **Keyboard navigation** funcional
- **Semantic HTML** (header, nav, main, section, footer)
- **Contraste WCAG AA** garantido
- **Reduced motion** respeitado

## 📱 Responsividade

- **Mobile-first** design
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Testado em dispositivos móveis, tablets e desktop

## 🎨 Customização

### Desabilitar Background Illumination

No ficheiro `app/components/Hero.tsx`, remova ou comente as `div` com classes `illumination-blob`.

### Alterar Cores

Edite `tailwind.config.ts` (`servus`, `brand`) e `app/globals.css` (`:root`).

## 📊 Analytics (Placeholder)

Para adicionar analytics, descomente e configure no `app/layout.tsx`:

```tsx
// Exemplo com Google Analytics
// import Script from 'next/script'
// 
// <Script
//   src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
//   strategy="afterInteractive"
// />
```

## 🔒 Privacidade

- Checkbox obrigatório de consentimento (LGPD) com link para `/privacidade`
- Resumo da política na página estática `app/privacidade/page.tsx`

## 📄 Licença

© Servus. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para líderes de ministério**
