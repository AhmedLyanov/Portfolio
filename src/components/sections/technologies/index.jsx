import { technologies } from '@/constants';

export default function Technologies() {
  return (
    <section className="text-center mb-24">
      <span className="uppercase font-bold tracking-[0.25em] text-[#C5C5C5] text-2xl">
        Experiance with
      </span>
      <div className="technologies-container mt-12 flex gap-16 justify-center flex-wrap">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-item transition-transform duration-300">
            <img src={tech.icon} alt={tech.name} title={tech.name} className="w-16 h-16" />
          </div>
        ))}
      </div>
    </section>
  );
}