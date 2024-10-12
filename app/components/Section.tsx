interface SectionProps {
  id?: string;
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  isDark?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  classname,
  marginBottom,
  marginTop,
  isDark,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "pb-32 md:pb-36 xl:pb-48" : "";
  const isMarginTop = marginTop ? "pt-20" : "";
  const darkMode = isDark ? "bg-primary text-primary-foreground" : "";

  return (
    <section
      id={id}
      className={`${darkMode} ${isMarginBottom} ${isMarginTop} h-[600px]`}
    >
      <div className={`${classname} mx-auto px-6 md:max-w-2xl md:px-0 lg:max-w-3xl xl:max-w-5xl`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
