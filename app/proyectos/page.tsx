import { getAllProjects } from "@/lib/projects";
import ProyectosClient from "@/components/ProyectosClient";

export default function ProyectosPage() {
  const allProjects = getAllProjects();
  return <ProyectosClient projects={allProjects} />;
}
