type AtelierFrameProps = {
  variant?:
    | "portrait"
    | "tea"
    | "loft"
    | "circle"
    | "wood"
    | "ritual"
    | "autumn"
    | "venue";
  className?: string;
  label?: string;
};

const gradients: Record<string, string> = {
  portrait:
    "radial-gradient(120% 120% at 30% 20%, #EFEAE0 0%, #C9C2B4 45%, #6E7B62 100%)",
  tea: "radial-gradient(100% 100% at 70% 30%, #F6F3EC 0%, #BFA98F 55%, #45503C 100%)",
  loft: "linear-gradient(155deg, #EFEAE0 0%, #C9C2B4 50%, #58554C 100%)",
  circle:
    "radial-gradient(90% 90% at 50% 40%, #F6F3EC 0%, #C9C2B4 60%, #45503C 100%)",
  wood: "linear-gradient(160deg, #BFA98F 0%, #58554C 60%, #2B2A25 100%)",
  ritual:
    "radial-gradient(110% 110% at 40% 60%, #EFEAE0 0%, #6E7B62 55%, #2B2A25 100%)",
  autumn:
    "linear-gradient(160deg, #C9C2B4 0%, #BFA98F 45%, #45503C 100%)",
  venue: "linear-gradient(160deg, #F6F3EC 0%, #EFEAE0 50%, #C9C2B4 100%)",
};

/**
 * Placeholder for real photography. Replace by swapping this component
 * for a <Image src="/images/..." /> once final assets are ready — see
 * README "Replacing placeholder imagery" for the exact list of shots needed.
 */
export default function AtelierFrame({
  variant = "portrait",
  className = "",
  label,
}: AtelierFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradients[variant] }}
      role="img"
      aria-label={label ?? "Atmospheric photograph placeholder"}
    >
      <div className="noise-overlay" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,42,37,0) 60%, rgba(43,42,37,0.12) 100%)",
        }}
      />
    </div>
  );
}
