import { z } from "zod";

// Priority enum for core features
export const priorityEnum = z.enum(["critical", "high", "medium", "low"]);

export type Priority = z.infer<typeof priorityEnum>;

// PRD Schema - Product Requirement Document
export const PRDSchema = z.object({
  // Product Overview
  overview: z.object({
    name: z.string().min(1, "Product name is required"),
    tagline: z.string().min(1, "Tagline is required"),
    problemStatement: z
      .string()
      .min(10, "Problem statement must be at least 10 characters"),
    coreObjective: z
      .string()
      .min(10, "Core objective must be at least 10 characters"),
    targetAudience: z
      .string()
      .min(1, "Target audience is required"),
  }),

  // Tech Stack
  techstack: z.object({
    frontend: z.array(z.string()).default([]),
    backend: z.array(z.string()).default([]),
    database: z.array(z.string()).default([]),
    ai: z.array(z.string()).default([]),
    infrastructure: z.array(z.string()).default([]),
  }),

  // Core Features
  coreFeatures: z.array(
    z.object({
      id: z.string().min(1),
      name: z.string().min(1, "Feature name is required"),
      description: z
        .string()
        .min(1, "Description is required"),
      priority: priorityEnum,
      status: z.enum(["planned", "in-progress", "completed"]).default("planned"),
    })
  ),

  // Rules & Guidelines
  rules: z.array(
    z.object({
      id: z.string().min(1),
      category: z
        .string()
        .min(1, "Category is required"),
      content: z
        .string()
        .min(1, "Rule content is required"),
    })
  ),

  // Metadata - optional since JSON parse won't produce Date objects
  createdAt: z.coerce.date().optional().default(() => new Date()),
  updatedAt: z.coerce.date().optional().default(() => new Date()),
  version: z.string().default("1.0.0"),
});

// Infer TypeScript type from schema
export type PRD = z.infer<typeof PRDSchema>;