import Image from "next/image";

type AtelierFrameProps = {
  className?: string;
  label?: string;
};

export default function AtelierFrame({
  className = "",
  label,
}: AtelierFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label ?? "Portrait of Marion Schmaeh"}
    >
      <Image
        src="/images/second.jpg"
        alt={label ?? "Portrait of Marion Schmaeh"}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,42,37,0) 60%, rgba(43,42,37,0.08) 100%)",
        }}
      />
    </div>
  );
}