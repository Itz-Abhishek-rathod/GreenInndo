import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { WhySolar } from './components/WhySolar.tsx';
import { Solutions } from './components/Solutions.tsx';
import { OurProjects, ProjectItem } from './components/OurProjects.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { TermsModal } from './components/TermsModal.tsx';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const handleOpenTerms = () => {
    setIsTermsModalOpen(true);
  };

  const handleCloseTerms = () => {
    setIsTermsModalOpen(false);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation Bar with exact line-wise sequential alignment */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections aligned strictly line-wise with navigation */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onLearnMore={() => {
            setActiveSection('about');
            document.querySelector('#why-solar')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About / Why Solar Section */}
        <WhySolar
          onExploreProjects={() => {
            setActiveSection('projects');
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Services / Solutions Section (Cleanly positioned right after About) */}
        <Solutions
          onSelectSolution={(_solutionTitle) => {
            handleOpenQuote();
          }}
        />

        {/* 4. Projects / Our Projects Section */}
        <OurProjects onSelectProject={handleSelectProject} />

        {/* 5. Blog & Solar Insights Section */}
        <BlogSection />

        {/* 6. Contact Details Section */}
        <ContactSection onOpenTerms={handleOpenTerms} />
      </main>

      {/* Footer with Dedicated Services & Blog Columns */}
      <Footer
        onOpenTerms={handleOpenTerms}
        onOpenQuote={handleOpenQuote}
      />

      {/* Interactive Solar Proposal & Calculator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
      />

      {/* Interactive Project Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onRequestQuote={handleOpenQuote}
      />

      {/* Comprehensive Terms & Conditions (T&C) Modal */}
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={handleCloseTerms}
      />
    </div>
  );
}
