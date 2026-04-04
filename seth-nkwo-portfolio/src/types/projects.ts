// Interface for project
export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
    featured: boolean;
    category: string;
    year: string;
    role: string;
    challenges?: string[];
    outcomes?: string[];
}