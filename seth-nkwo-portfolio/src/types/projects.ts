import { Dispatch, SetStateAction } from "react";

// Interface for project
export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    github: string;
    live?: string;
    video?: string;
    featured: boolean;
    category: string;
    year: string;
    role: string;
    challenges?: string[];
    outcomes?: string[];
}

// Interface for Project Detail Modal props
export interface ProjectDetailModalProps {
    project: Project | null;
    onClose: () => void;
}

// Interface for project section props
export interface ProjectSectionProps {
    selectedProject: Project | null;
    setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}