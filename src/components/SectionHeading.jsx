const SectionHeading = ({ eyebrow, children, description, align = 'left', theme = 'light' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]';
  const subColor = theme === 'dark' ? 'text-white/60' : 'text-[#6B6B6B]';

  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} gap-4`}>
      {eyebrow && (
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E2661F] font-medium">
          <span className="w-4 h-px bg-[#E2661F]" /> {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-serif ${textColor} leading-tight`}>
        {children}
      </h2>
      {description && <p className={`max-w-md text-sm md:text-base ${subColor}`}>{description}</p>}
    </div>
  );
};

export default SectionHeading;