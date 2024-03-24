import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border p-4 rounded-lg">
      <div>
        <Link href={`${project?.href}`} target="_blank">
          <h2 className="text-2xl font-bold mb-1">{project?.title}</h2>
        </Link>
        <p className="text-slate-600">{project?.description}</p>
        <Link href={`${project?.href}`} target="_blank">
          <span className="text-sm block mt-2 text-blue-600 font-bold mb-1">
            View &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
