import ProcessCard from "../components/ProcessCard";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

const Process = () => {
  return (
    <Section marginBottom marginTop isDark>
      <SectionHeader
        tag="Process"
        description="Notre méthode éprouvée pour transformer votre site web"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProcessCard
          number={1}
          title="Analyse"
          description="Nous analysons votre site web pour comprendre vos besoins et vos objectifs."
        />
        <ProcessCard
          number={2}
          title="Conception"
          description="Nous créons un plan de travail pour votre site web."
        />
        <ProcessCard
          number={3}
          title="Mise en œuvre"
          description="Nous mettons en œuvre votre site web."
        />
      </div>
    </Section>
  );
};

export default Process;
