/**
 * src/types/index.ts
 * Centralized TypeScript type definitions for the VICO application.
 * All scattered interfaces and types across components should be imported from here.
 */

import type { ReactNode, ComponentType } from "react";
import type enDict from "../../messages/en.json";

// ─────────────────────────────────────────────
// PRD Generator — Workflow
// ─────────────────────────────────────────────

/** Top-level workflow status for the PRD generator page */
export type PRDWorkflowStatus = "idle" | "generating" | "completed";

/** Tabs rendered in the PRDPreview artifact panel */
export type ArtifactTab =
  | "Overview.md"
  | "Tech_Stack.md"
  | "Architecture.md"
  | "AI_Rules.md";

// ─────────────────────────────────────────────
// PRD Preview Component
// ─────────────────────────────────────────────

/** Icon component shape used in TABS array */
export type TabIconComponent = ComponentType<{
  size?: number;
  className?: string;
}>;

export interface PRDPreviewProps {
  status?: PRDWorkflowStatus;
}

/** Internal tab configuration for PRDPreview */
export interface TabConfig {
  key: ArtifactTab;
  icon: TabIconComponent;
}

// ─────────────────────────────────────────────
// Chat Component
// ─────────────────────────────────────────────

/** Normalized message shape for display in the chat panel */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

export interface ChatPanelProps {
  /** Called when the user clicks "Finalize PRD Blueprint" */
  onGenerate?: () => void;
  /** Propagates AI streaming status up to the page */
  onStatusChange?: (status: PRDWorkflowStatus) => void;
}

// ─────────────────────────────────────────────
// Zustand Store
// ─────────────────────────────────────────────

import type { PRD } from "@/lib/schemas/prd-schema";

export interface PRDStore {
  prd: PRD | null;
  setPRD: (prd: PRD) => void;
}

// ─────────────────────────────────────────────
// Layout Components
// ─────────────────────────────────────────────

export interface HeaderProps {
  className?: string;
}

export interface TechLayoutProps {
  children: ReactNode;
  activeSection?: string;
  toc?: { id: string; label: string }[];
}

export interface VibeOrbsProps {
  className?: string;
}

// ─────────────────────────────────────────────
// Library Ecosystem — Data Interfaces
// ─────────────────────────────────────────────

export interface LibraryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  tags: string[];
  popularity: number; // 0–100
  author: string;
  updatedAt: string;
}

export interface AgentItem extends LibraryItem {
  overview: string;
  implementation: string; // markdown-ish content
}

export interface SkillItem extends LibraryItem {
  overview: string;
  implementation: string;
}

export interface PromptItem extends LibraryItem {
  promptString: string;
  format: string;
  usage: string;
  purpose: string;
}

export interface MCPItem extends LibraryItem {
  overview?: string;
  configJson?: Record<string, unknown>;
  implementation?: string;
  documentation?: string;
}

// ─────────────────────────────────────────────
// Library Components — Props
// ─────────────────────────────────────────────

export interface LibraryGridProps<T extends LibraryItem> {
  items: T[];
  /** Base URL path, e.g. "/agents" */
  basePath: string;
  title: string;
  subtitle: string;
  icon: "bot" | "bolt" | "book" | "puzzle";
}

export interface LibraryCardProps {
  item: LibraryItem;
  basePath: string;
}

export interface ItemDetailLayoutProps {
  item: LibraryItem;
  backPath: string;
  backLabel: string;
  children: ReactNode;
}

export interface DetailSectionProps {
  title: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}

export interface ActionButtonsProps {
  content: string;
  filename: string;
}

export interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export interface MarkdownContentProps {
  content: string;
}

// ─────────────────────────────────────────────
// i18n / Language
// ─────────────────────────────────────────────

export type Language = "EN" | "ID";
export type TranslationKey = keyof typeof enDict;

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

// ─────────────────────────────────────────────
// Download Button
// ─────────────────────────────────────────────

export interface DownloadButtonProps {
  /** Optional PRD to download; falls back to Zustand store if omitted */
  prd?: PRD | null;
}
