import { stats } from "@/data";

export default function Stats({ className }: { className: string }) {
  return (
    <dl
      className={`grid gap-y-8 text-center md:grid-cols-3 md:gap-x-2.5 xl:grid-cols-1 xl:gap-y-16 xl:text-left ${className}`}
    >
      {stats.map(({ value, label }) => (
        <div key={label} className="flex flex-col-reverse">
          <dt className="text-caption text-muted uppercase">{label}</dt>
          <dd className="text-heading font-bold tracking-normal xl:tracking-heading">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
