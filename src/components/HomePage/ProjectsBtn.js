import Link from "next/link";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto">
      <Link href="/work">
        <button className="button hover:bg-accent hover:border-transparent px-8 py-2 text-2xl">
          My Projects
        </button>
      </Link>
    </div>
  );
};
export default ProjectsBtn;
