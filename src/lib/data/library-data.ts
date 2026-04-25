// ─────────────────────────────────────────────
// VICO Library Ecosystem — Data
// Types imported from centralized @/types module
// ─────────────────────────────────────────────

import type {
  LibraryItem,
  AgentItem,
  SkillItem,
  PromptItem,
  MCPItem,
} from "@/types";

export type { LibraryItem, AgentItem, SkillItem, PromptItem, MCPItem };

// ─── AGENTS ───
export const AGENTS_DATA: AgentItem[] = [
  {
    id: "system-analyst",
    title: "System Analyst Agent",
    description: "Interviews users to gather product requirements and generates structured PRD documents in JSON format.",
    icon: "bot",
    category: "Product",
    tags: ["PRD", "Requirements", "Analysis"],
    popularity: 95,
    author: "VICO Team",
    updatedAt: "2026-04-15",
    overview: "The System Analyst Agent is VICO's core intelligence. It conducts structured interviews with users to extract product requirements, identifies technical constraints, recommends appropriate tech stacks, and generates complete PRD documents.\n\nThis agent follows the MoSCoW prioritization method (Critical, High, Medium, Low) and outputs JSON conforming to VICO's PRD schema. It's designed to be conversational yet thorough — asking one question at a time while building a comprehensive understanding of the product.",
    implementation: `# System Analyst Agent\n\nYou are a Senior System Analyst for VICO. Your task is to interview the user to gather requirements for their software project.\n\n## Guidelines\n- Ask one question at a time. Be conversational but professional.\n- Help the user think through their idea. If they are non-technical, suggest appropriate technologies.\n- Once you have enough information, output a valid JSON object conforming to the PRD schema.\n- If the user asks to update a specific section, modify only that part and return the full JSON.\n\n## Your Expertise\n- Product strategy and market analysis\n- Technical architecture and tech stack decisions\n- Feature prioritization using MoSCoW method\n- User experience design principles\n- Agile development methodologies\n\n## Output Schema\n\`\`\`json\n{\n  "overview": { "name": "", "tagline": "", "problemStatement": "", "coreObjective": "", "targetAudience": "" },\n  "techstack": { "frontend": [], "backend": [], "database": [], "ai": [], "infrastructure": [] },\n  "coreFeatures": [{ "id": "", "name": "", "description": "", "priority": "high", "status": "planned" }],\n  "rules": [{ "id": "", "category": "", "content": "" }]\n}\n\`\`\``,
  },
  {
    id: "code-reviewer",
    title: "Code Review Agent",
    description: "Analyzes code for quality, security vulnerabilities, and adherence to best practices with actionable feedback.",
    icon: "bot",
    category: "Development",
    tags: ["Code Quality", "Security", "Review"],
    popularity: 88,
    author: "VICO Team",
    updatedAt: "2026-04-12",
    overview: "The Code Review Agent performs thorough analysis of submitted code. It evaluates code quality, identifies potential security vulnerabilities, checks for adherence to best practices, and provides actionable improvement suggestions.\n\nIt supports multiple languages and frameworks, with specialized knowledge of React/Next.js, Python, and TypeScript patterns.",
    implementation: `# Code Review Agent\n\nYou are an expert code reviewer. Analyze the provided code and give structured feedback.\n\n## Review Checklist\n1. **Security**: SQL injection, XSS, CSRF, exposed secrets\n2. **Performance**: N+1 queries, unnecessary re-renders, memory leaks\n3. **Readability**: Naming conventions, function length, comments\n4. **Architecture**: SOLID principles, separation of concerns\n5. **Type Safety**: Proper TypeScript usage, no \`any\` types\n\n## Output Format\nFor each issue found:\n- **Severity**: Critical / Warning / Info\n- **Location**: File and line reference\n- **Issue**: Clear description\n- **Fix**: Suggested solution with code example`,
  },
  {
    id: "test-architect",
    title: "Test Architect Agent",
    description: "Designs comprehensive test strategies and generates unit, integration, and E2E test cases for your codebase.",
    icon: "bot",
    category: "Testing",
    tags: ["Testing", "QA", "Automation"],
    popularity: 76,
    author: "VICO Team",
    updatedAt: "2026-04-10",
    overview: "The Test Architect Agent analyzes your application architecture and generates comprehensive test strategies. It creates unit tests, integration tests, and E2E test scenarios based on your codebase structure.\n\nSupports Vitest, Jest, Playwright, and Cypress frameworks.",
    implementation: `# Test Architect Agent\n\nYou are a test architecture specialist. Design test strategies and generate test code.\n\n## Process\n1. Analyze the component/function under test\n2. Identify edge cases, boundary conditions, and error paths\n3. Generate test cases following AAA pattern (Arrange, Act, Assert)\n4. Include both happy path and failure scenarios\n\n## Frameworks\n- Unit: Vitest / Jest\n- Integration: Testing Library\n- E2E: Playwright\n\n## Rules\n- Each test should test ONE thing\n- Use descriptive test names\n- Mock external dependencies\n- Include setup and teardown helpers`,
  },
  {
    id: "api-designer",
    title: "API Designer Agent",
    description: "Creates RESTful or GraphQL API specifications with proper schemas, validation, and error handling patterns.",
    icon: "bot",
    category: "Backend",
    tags: ["API", "REST", "GraphQL"],
    popularity: 82,
    author: "VICO Team",
    updatedAt: "2026-04-08",
    overview: "The API Designer Agent helps architects design clean, consistent APIs. It generates OpenAPI/Swagger specifications, defines request/response schemas with Zod validation, and establishes error handling conventions.\n\nSupports both REST and GraphQL paradigms.",
    implementation: `# API Designer Agent\n\nYou are an API design expert. Create clean, consistent API specifications.\n\n## Design Principles\n- RESTful resource naming conventions\n- Consistent error response format\n- Proper HTTP status code usage\n- Pagination, filtering, and sorting patterns\n- Rate limiting and versioning strategies\n\n## Output\nProvide:\n1. Endpoint definitions with methods\n2. Request/Response schemas (TypeScript + Zod)\n3. Error handling patterns\n4. Authentication flow\n5. Example curl commands`,
  },
  {
    id: "ux-advisor",
    title: "UX Advisor Agent",
    description: "Provides UI/UX recommendations based on heuristics, accessibility standards, and modern design patterns.",
    icon: "bot",
    category: "Design",
    tags: ["UX", "Accessibility", "Design"],
    popularity: 71,
    author: "VICO Team",
    updatedAt: "2026-04-06",
    overview: "The UX Advisor Agent evaluates your interface designs against established usability heuristics (Nielsen's 10), WCAG accessibility guidelines, and modern design patterns. It provides concrete, actionable recommendations.",
    implementation: `# UX Advisor Agent\n\nYou are a UX expert. Evaluate interfaces and provide design recommendations.\n\n## Evaluation Framework\n1. **Nielsen's Heuristics**: Visibility, feedback, consistency, error prevention\n2. **Accessibility (WCAG 2.1)**: Color contrast, keyboard navigation, screen reader support\n3. **Information Architecture**: Navigation clarity, content hierarchy\n4. **Interaction Design**: Affordances, micro-interactions, loading states\n\n## Output\nFor each recommendation:\n- **Category**: Usability / Accessibility / Visual / Interaction\n- **Priority**: Must-fix / Should-fix / Nice-to-have\n- **Current State**: What exists now\n- **Recommendation**: What to change and why`,
  },
  {
    id: "devops-planner",
    title: "DevOps Planner Agent",
    description: "Plans CI/CD pipelines, containerization strategies, and deployment architectures for your projects.",
    icon: "bot",
    category: "Infrastructure",
    tags: ["CI/CD", "Docker", "Deployment"],
    popularity: 67,
    author: "VICO Team",
    updatedAt: "2026-04-04",
    overview: "The DevOps Planner Agent designs deployment pipelines and infrastructure architectures. It creates GitHub Actions workflows, Docker configurations, and deployment strategies tailored to your tech stack.",
    implementation: `# DevOps Planner Agent\n\nYou are a DevOps specialist. Plan deployment strategies and CI/CD pipelines.\n\n## Capabilities\n- GitHub Actions workflow generation\n- Docker / Docker Compose configuration\n- Vercel / AWS / GCP deployment setup\n- Environment variable management\n- Monitoring and alerting setup\n\n## Output\n1. CI/CD pipeline YAML\n2. Dockerfile and compose files\n3. Environment configuration templates\n4. Deployment checklist\n5. Rollback strategy`,
  },
];

// ─── SKILLS ───
export const SKILLS_DATA: SkillItem[] = [
  {
    id: "nextjs-expert",
    title: "Next.js 15 Expert",
    description: "Deep expertise in App Router, Server Components, Server Actions, and the latest Next.js patterns.",
    icon: "bolt",
    category: "Framework",
    tags: ["Next.js", "React", "SSR"],
    popularity: 94,
    author: "VICO Team",
    updatedAt: "2026-04-16",
    overview: "This skill configures your AI assistant with deep knowledge of Next.js 15's App Router architecture. It covers Server Components vs Client Components, Server Actions, middleware, route handlers, streaming, and Suspense boundaries.\n\nPerfect for teams building modern full-stack applications with Next.js.",
    implementation: `# Next.js 15 Expert Skill\n\n## Core Rules\n- Always use the App Router (\`/app\` directory)\n- Default to Server Components; add "use client" only when needed\n- Use Server Actions for form mutations\n- Implement proper loading.tsx and error.tsx boundaries\n- Use \`next/image\` for all images, \`next/link\` for navigation\n\n## Patterns\n- Collocate related files (page, layout, loading, error) in route folders\n- Use Route Groups \`(groupName)\` for layout organization\n- Implement Parallel Routes for complex UIs\n- Cache with \`unstable_cache\` or \`revalidatePath\`\n\n## Anti-Patterns to Avoid\n- No \`getServerSideProps\` or \`getStaticProps\` (Pages Router)\n- No client-side data fetching for initial renders\n- No \`useEffect\` for data that can be server-fetched\n- No barrel exports in large component libraries`,
  },
  {
    id: "typescript-strict",
    title: "TypeScript Strict Mode",
    description: "Enforces strict TypeScript patterns with advanced type utilities, generics, and zero-any policies.",
    icon: "bolt",
    category: "Language",
    tags: ["TypeScript", "Type Safety", "Generics"],
    popularity: 91,
    author: "VICO Team",
    updatedAt: "2026-04-14",
    overview: "This skill enforces rigorous TypeScript practices. It eliminates `any` types, leverages advanced generics, uses discriminated unions, and applies proper type narrowing throughout your codebase.",
    implementation: `# TypeScript Strict Mode Skill\n\n## Rules\n- NEVER use \`any\` — use \`unknown\` and narrow with type guards\n- Enable all strict flags in tsconfig.json\n- Use discriminated unions over optional properties\n- Prefer \`interface\` for object shapes, \`type\` for unions/intersections\n- Use \`satisfies\` operator for type-safe config objects\n\n## Advanced Patterns\n- Branded types for IDs: \`type UserId = string & { __brand: "UserId" }\`\n- Template literal types for string patterns\n- Conditional types for flexible APIs\n- \`const\` assertions for literal types\n\n## Validation\n- Use Zod for runtime validation with type inference\n- Always infer types from schemas: \`type User = z.infer<typeof UserSchema>\``,
  },
  {
    id: "tailwind-architect",
    title: "Tailwind CSS Architect",
    description: "Master of utility-first CSS with component patterns, design tokens, and responsive design strategies.",
    icon: "bolt",
    category: "Styling",
    tags: ["Tailwind", "CSS", "Responsive"],
    popularity: 87,
    author: "VICO Team",
    updatedAt: "2026-04-11",
    overview: "This skill provides expertise in Tailwind CSS architecture. It covers design token configuration, component pattern extraction, responsive strategies, and performance optimization through proper utility composition.",
    implementation: `# Tailwind CSS Architect Skill\n\n## Principles\n- Utility-first: compose in HTML, not in CSS files\n- Extract components only when truly reused 3+ times\n- Use @theme inline for design tokens, not hardcoded values\n- Mobile-first responsive design with consistent breakpoints\n\n## Organization\n- Define color palette in CSS variables + @theme inline\n- Use \`cn()\` helper (clsx + tailwind-merge) for conditional classes\n- Group classes: layout → sizing → spacing → typography → visual → state\n\n## Performance\n- Avoid dynamic class concatenation\n- Use data attributes for state-based styling\n- Prefer Tailwind's built-in animations over custom CSS`,
  },
  {
    id: "database-designer",
    title: "Database Schema Designer",
    description: "Designs normalized database schemas with Drizzle ORM, migrations, and query optimization techniques.",
    icon: "bolt",
    category: "Backend",
    tags: ["PostgreSQL", "Drizzle", "Schema"],
    popularity: 79,
    author: "VICO Team",
    updatedAt: "2026-04-09",
    overview: "This skill provides expertise in database design using Drizzle ORM with PostgreSQL. It covers schema normalization, migration strategies, indexing, and query optimization for full-stack TypeScript applications.",
    implementation: `# Database Schema Designer Skill\n\n## Principles\n- 3NF normalization by default, denormalize only with benchmarks\n- Always define explicit foreign key relationships\n- Use UUID v7 for primary keys (time-sortable)\n- Add created_at/updated_at timestamps to all tables\n\n## Drizzle ORM Patterns\n- Define schemas in src/db/schema/ directory\n- One file per domain entity\n- Use drizzle-zod for validation schema generation\n- Migrations via drizzle-kit push/generate\n\n## Indexing Rules\n- Index all foreign keys\n- Composite indexes for common query patterns\n- Partial indexes for filtered queries\n- GIN indexes for JSONB and full-text search`,
  },
  {
    id: "security-hardener",
    title: "Security Hardener",
    description: "Applies OWASP security best practices, input validation, authentication patterns, and threat modeling.",
    icon: "bolt",
    category: "Security",
    tags: ["OWASP", "Auth", "Validation"],
    popularity: 84,
    author: "VICO Team",
    updatedAt: "2026-04-07",
    overview: "This skill enforces security best practices across your full-stack application. It covers OWASP Top 10 prevention, secure authentication with NextAuth.js, input validation, CSRF protection, and secure headers configuration.",
    implementation: `# Security Hardener Skill\n\n## OWASP Top 10 Prevention\n- Validate ALL inputs with Zod (server-side mandatory)\n- Parameterized queries only (never string concatenation)\n- HTTP-only, Secure, SameSite cookies for sessions\n- Content Security Policy headers\n- Rate limiting on all auth endpoints\n\n## Authentication\n- Use NextAuth.js with JWT strategy\n- Implement refresh token rotation\n- MFA support for sensitive operations\n- Session invalidation on password change\n\n## Headers\n- Strict-Transport-Security\n- X-Content-Type-Options: nosniff\n- X-Frame-Options: DENY\n- Referrer-Policy: strict-origin-when-cross-origin`,
  },
];

// ─── PROMPTS ───
export const PROMPTS_DATA: PromptItem[] = [
  {
    id: "debug-react",
    title: "React Component Debugger",
    description: "Systematic prompt for diagnosing and fixing React component issues including re-renders and state bugs.",
    icon: "book",
    category: "Debugging",
    tags: ["React", "Debug", "Performance"],
    popularity: 92,
    author: "VICO Team",
    updatedAt: "2026-04-15",
    promptString: `Analyze the following React component for issues. Check for: (1) unnecessary re-renders caused by missing memo/useMemo/useCallback, (2) stale closures in useEffect, (3) incorrect dependency arrays, (4) state updates during render, (5) memory leaks from uncleared subscriptions. For each issue found, explain WHY it's a problem and provide the corrected code.`,
    format: "Paste the prompt followed by your component code. The AI will return a structured analysis with severity levels and fixes.",
    usage: "Use this when a React component behaves unexpectedly — flickering, infinite loops, stale data, or performance degradation.",
    purpose: "Provides a systematic diagnostic framework that catches the 5 most common React bugs. Eliminates guesswork by enforcing a checklist-based analysis.",
  },
  {
    id: "refactor-legacy",
    title: "Legacy Code Refactorer",
    description: "Transforms legacy JavaScript/TypeScript code into modern, maintainable patterns step by step.",
    icon: "book",
    category: "Refactoring",
    tags: ["Refactoring", "Legacy", "Modernize"],
    popularity: 85,
    author: "VICO Team",
    updatedAt: "2026-04-13",
    promptString: `Refactor the following legacy code to modern standards. Apply these transformations in order: (1) Convert var to const/let, (2) Replace callbacks with async/await, (3) Extract pure functions, (4) Add TypeScript types, (5) Apply SOLID principles. Show the refactored code and explain each change. Preserve all existing functionality — this is a refactor, not a rewrite.`,
    format: "Paste the prompt, then your legacy code block. Output will be the transformed code with inline comments explaining each change.",
    usage: "Use when inheriting old codebases or upgrading JavaScript to TypeScript. Apply to one file at a time for manageable diffs.",
    purpose: "Provides a deterministic, ordered refactoring process that minimizes risk. Each step is independently testable, so you can verify correctness incrementally.",
  },
  {
    id: "api-documentation",
    title: "API Documentation Writer",
    description: "Generates comprehensive API documentation with examples, error codes, and usage patterns.",
    icon: "book",
    category: "Documentation",
    tags: ["API", "Docs", "OpenAPI"],
    popularity: 78,
    author: "VICO Team",
    updatedAt: "2026-04-10",
    promptString: `Generate comprehensive API documentation for the following endpoint(s). Include: (1) endpoint URL and method, (2) request headers and authentication, (3) request body schema with example, (4) response schema with example for success AND error cases, (5) rate limiting info, (6) curl example. Format as Markdown.`,
    format: "Provide the prompt followed by your route handler code or endpoint description. Output is ready-to-use Markdown documentation.",
    usage: "Run this prompt for each API endpoint after implementation. Collect outputs into your /docs directory.",
    purpose: "Standardizes API documentation across your project. Ensures every endpoint has consistent, complete documentation including error scenarios that are often forgotten.",
  },
  {
    id: "commit-message",
    title: "Conventional Commit Generator",
    description: "Creates structured conventional commit messages from diffs with proper type, scope, and description.",
    icon: "book",
    category: "Workflow",
    tags: ["Git", "Commits", "Convention"],
    popularity: 73,
    author: "VICO Team",
    updatedAt: "2026-04-08",
    promptString: `Write a conventional commit message for the following code diff. Follow this format exactly: <type>(<scope>): <description>\n\n<body>\n\nTypes: feat, fix, docs, style, refactor, test, chore. The scope should be the affected module/component. Description must be imperative, lowercase, no period. Body should explain WHY, not what.`,
    format: "Paste the prompt with a git diff. Output is a ready-to-use commit message following Conventional Commits v1.0.0.",
    usage: "Pipe your `git diff --staged` output after the prompt. Copy the generated message directly into `git commit -m`.",
    purpose: "Enforces Conventional Commits standard for automated changelog generation and semantic versioning. Eliminates vague commit messages like 'fix stuff'.",
  },
  {
    id: "test-generator",
    title: "Unit Test Generator",
    description: "Creates comprehensive test suites with edge cases, mocks, and assertion patterns for any function.",
    icon: "book",
    category: "Testing",
    tags: ["Vitest", "Testing", "Coverage"],
    popularity: 81,
    author: "VICO Team",
    updatedAt: "2026-04-06",
    promptString: `Generate a comprehensive Vitest test suite for the following function/component. Include: (1) happy path tests, (2) edge cases (null, undefined, empty, boundary values), (3) error scenarios with expect().toThrow(), (4) mock setup for external dependencies, (5) describe/it blocks with descriptive names. Use AAA pattern (Arrange, Act, Assert).`,
    format: "Paste the prompt followed by the function or component code. Output is a complete .test.ts file ready to save.",
    usage: "Use after writing any new utility function, hook, or component. Target 80%+ line coverage on critical paths.",
    purpose: "Automates the tedious parts of test writing while ensuring comprehensive coverage. Catches edge cases developers commonly overlook.",
  },
];

// ─── MCP SERVERS ───
export const MCP_DATA: MCPItem[] = [
  {
    id: "filesystem-server",
    title: "Filesystem MCP Server",
    description: "Provides AI assistants with safe, sandboxed read/write access to project files and directories.",
    icon: "puzzle",
    category: "Core",
    tags: ["Files", "Read/Write", "Core"],
    popularity: 96,
    author: "Anthropic",
    updatedAt: "2026-04-16",
    configJson: {
      mcpServers: {
        filesystem: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-filesystem", "--root", "./"],
          env: { ALLOWED_DIRS: "./src,./public,./docs" },
        },
      },
    },
    documentation: "## Filesystem MCP Server\n\nThe Filesystem MCP Server gives AI coding assistants safe access to read and write files within a sandboxed project directory.\n\n### Capabilities\n- **Read files**: View source code, configs, and docs\n- **Write files**: Create and modify files with safety checks\n- **List directories**: Navigate project structure\n- **Search files**: Find files by name or content pattern\n\n### Security\nAccess is restricted to the directories specified in `ALLOWED_DIRS`. The server prevents:\n- Path traversal attacks (../ sequences)\n- Access outside the project root\n- Writing to node_modules or .git directories\n\n### Use Cases\n- Automated code generation and file scaffolding\n- Documentation generation from source code\n- Bulk file refactoring operations",
  },
  {
    id: "github-server",
    title: "GitHub MCP Server",
    description: "Integrates with GitHub API for repository management, PR reviews, issue tracking, and code search.",
    icon: "puzzle",
    category: "Integration",
    tags: ["GitHub", "Git", "API"],
    popularity: 91,
    author: "GitHub",
    updatedAt: "2026-04-14",
    configJson: {
      mcpServers: {
        github: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-github"],
          env: { GITHUB_TOKEN: "<your-github-token>" },
        },
      },
    },
    documentation: "## GitHub MCP Server\n\nConnects AI assistants to the GitHub API for comprehensive repository management.\n\n### Capabilities\n- **Repositories**: List, create, fork repos\n- **Pull Requests**: Create, review, merge PRs\n- **Issues**: Create, update, label, assign issues\n- **Code Search**: Search across repos with GitHub's search API\n- **Actions**: View workflow runs and status\n\n### Authentication\nRequires a GitHub Personal Access Token with appropriate scopes.\n\n### Use Cases\n- Automated PR creation after code generation\n- Issue triage and labeling\n- Cross-repo code search for patterns\n- Release management and changelog generation",
  },
  {
    id: "database-server",
    title: "PostgreSQL MCP Server",
    description: "Enables AI assistants to query, inspect schemas, and analyze data in PostgreSQL databases safely.",
    icon: "puzzle",
    category: "Database",
    tags: ["PostgreSQL", "SQL", "Database"],
    popularity: 84,
    author: "Community",
    updatedAt: "2026-04-11",
    configJson: {
      mcpServers: {
        postgres: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-postgres"],
          env: { DATABASE_URL: "postgresql://user:pass@localhost:5432/dbname" },
        },
      },
    },
    documentation: "## PostgreSQL MCP Server\n\nProvides safe, read-optimized access to PostgreSQL databases for AI analysis and query generation.\n\n### Capabilities\n- **Schema inspection**: List tables, columns, indexes, and relationships\n- **Query execution**: Run SELECT queries (write operations require explicit flag)\n- **Query optimization**: EXPLAIN ANALYZE support\n- **Data sampling**: Preview table contents with LIMIT\n\n### Security\n- Read-only by default\n- Query timeout enforcement (30s max)\n- No DDL operations in read mode\n- Connection string via environment variable only\n\n### Use Cases\n- Schema documentation generation\n- Query optimization suggestions\n- Data analysis and reporting\n- Migration planning and impact analysis",
  },
  {
    id: "browser-server",
    title: "Browser Automation MCP",
    description: "Allows AI to interact with web pages: navigate, screenshot, click, and extract content via Playwright.",
    icon: "puzzle",
    category: "Automation",
    tags: ["Browser", "Playwright", "Scraping"],
    popularity: 77,
    author: "Community",
    updatedAt: "2026-04-09",
    configJson: {
      mcpServers: {
        browser: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-browser"],
          env: { HEADLESS: "true", TIMEOUT: "30000" },
        },
      },
    },
    documentation: "## Browser Automation MCP\n\nEnables AI assistants to interact with web pages using Playwright-powered browser automation.\n\n### Capabilities\n- **Navigation**: Open URLs, follow links\n- **Screenshots**: Capture full-page or element screenshots\n- **Interaction**: Click buttons, fill forms, select options\n- **Extraction**: Read text content, DOM structure, and accessibility trees\n- **Console**: Capture browser console logs and errors\n\n### Configuration\n- Runs headless by default (configurable)\n- 30-second timeout per action\n- Chromium browser engine\n\n### Use Cases\n- Visual regression testing\n- Web scraping and data extraction\n- End-to-end flow verification\n- Accessibility audit automation",
  },
];

// ─── Category Helpers ───
export function getCategories(items: LibraryItem[]): string[] {
  return ["All", ...Array.from(new Set(items.map((i) => i.category)))];
}

export function filterItems<T extends LibraryItem>(
  items: T[],
  query: string,
  category: string
): T[] {
  return items.filter((item) => {
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    const matchesCategory = category === "All" || item.category === category;
    return matchesQuery && matchesCategory;
  });
}
