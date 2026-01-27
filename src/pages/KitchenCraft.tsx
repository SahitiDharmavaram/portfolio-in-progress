import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CaseStudy.css';
import './KitchenCraft.css';

const KitchenCraft: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [bottomOffset, setBottomOffset] = useState(40);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          const newBottom = window.innerHeight - footerRect.top + 20;
          setBottomOffset(Math.max(newBottom, 40));
        } else {
          setBottomOffset(40);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="case-study-page kc-page">
        <Link to="/" className="back-to-home">
          Back to home
        </Link>

        {/* Case Study Header */}
        <header className="case-study-header kc-header">
          <h1 className="case-study-title" style={{ color: '#50AD66' }}>
            KitchenCraft: A Community-Driven Cooking App
          </h1>

          <div className="case-study-roles">
            <span className="role-tag">UX Research</span>
            <span className="role-tag">UI Design</span>
            <span className="role-tag">Voice UI</span>
            <span className="role-tag">AI Integration</span>
          </div>

          <div className="case-study-timeline-section">
            <h3 className="timeline-label">Timeline</h3>
            <p className="timeline-value">Dec 2023 - July 2024</p>
          </div>

          <p className="case-study-tagline">
            Cook, save and explore hands-free with an AI voice assistant and a vibrant community.
          </p>

          {/* Hero Image - Below heading like Landmarkr */}
          <div className="case-study-hero-image">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/1.png"} alt="KitchenCraft" />
          </div>
        </header>

        {/* 1. Introductory Problem Statement */}
        <section className="kc-section">
          <p className="kc-intro-text">
            This makes cooking feel like a chore rather than a fun activity. Digitizing the cooking space can add excitement and engagement to everyday meals, and the current top-rated apps on the market are shown below.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/2.png"} alt="Current top-rated cooking apps" />
          </div>
        </section>

        {/* 2. Bridging the Gap */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Bridging the Gap</h2>

          <p className="kc-body-text">
            Recipe apps often miss key features such as customization and inventory-tracking tools. These limitations prevent users from fully engaging with cooking as a flexible, enjoyable experience.
          </p>

          <p className="kc-body-text">
            There is a growing inclination toward social interaction and community engagement within recipe applications. A broader trend in consumer preferences favors collaborative and shared experiences, where users seek platforms that allow recipe discovery, content creation, and meaningful connections with like-minded individuals or highly relatable creators. This shift is reflected in user-driven analytics and social usage patterns.
          </p>
        </section>

        {/* 3. Research Quote */}
        <section className="kc-section kc-quote-section">
          <blockquote className="kc-research-quote">
            <p>
              A study of 2,000 adults aged 17 and older found that cooking inspiration is increasingly driven by digital platforms, with <strong>23% getting their cooking ideas from Facebook and 21% from Instagram</strong>. More than one in ten users rely on TikTok to plan meals, while others turn to YouTube (24%) and Twitter (10%) for cooking inspiration.
            </p>
            <footer>
              <cite>Lucy Brimble</cite>
              <span>Independent - Asia Edition</span>
            </footer>
          </blockquote>
        </section>

        {/* 4. Visual Insight Continuation */}
        <section className="kc-section">
          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/5.png"} alt="Digital cooking inspiration insights" />
          </div>
        </section>

        {/* 5. How Might We */}
        <section className="hmw-section kc-hmw">
          <div className="hmw-label">How Might We</div>
          <p className="hmw-question">
            How might we create a cooking app that enhances the user experience through digitized recipe management, professional content, and personalized cooking assistance?
          </p>
        </section>

        {/* 6. Guiding Principles */}
        <section className="kc-section kc-principles-section">
          <h2 className="kc-section-heading">Guiding Principles</h2>

          <div className="kc-principles-grid">
            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>Learning Material Availability</h4>
                <p>Encouraging continuous learning</p>
              </div>
            </div>

            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>Saving, Uploading, and Editing Content</h4>
                <p>Allowing flexibility</p>
              </div>
            </div>

            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>Network Opportunities</h4>
                <p>Connecting users on the platform</p>
              </div>
            </div>

            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>AI Assistance</h4>
                <p>Ingredient substitution suggestions</p>
              </div>
            </div>

            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>Inclusivity</h4>
                <p>Vegan and allergy-friendly options</p>
              </div>
            </div>

            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>Accessibility</h4>
                <p>Text-to-speech functionality</p>
              </div>
            </div>

            <div className="kc-principle">
              <div className="kc-principle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="kc-principle-content">
                <h4>Cultural Enrichment</h4>
                <p>Providing cultural context for recipes</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Research Phase */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Research Phase</h2>

          <p className="kc-body-text">
            I used the Design Thinking process, which ensured the creation of user-centered and effective solutions by enabling continuous user involvement and iterative refinement based on feedback.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/7.png"} alt="Design Thinking Process" />
          </div>
        </section>

        {/* 8. Competitor Analysis & Secondary Research */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Competitor Analysis and Secondary Research</h2>

          <p className="kc-body-text">
            Initially, I planned to conduct primary research but struggled to find an audience that was sufficiently enthusiastic to participate. As a result, I shifted to secondary research, analyzing positive, neutral, and negative reviews across multiple platforms. These reviews surfaced recurring suggestions and complaints, helping me better understand user expectations and frustrations. Below are the reviews that stood out and the insights derived from them.
          </p>

          <div className="kc-images-vertical">
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/8.png"} alt="User Review 1" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/9.png"} alt="User Review 2" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/10.png"} alt="User Review 3" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/11.png"} alt="User Review 4" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/12.png"} alt="User Review 5" />
            </div>
          </div>
        </section>

        {/* 9. Affinity Mapping */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Affinity Mapping</h2>

          <div className="kc-affinity-board">
            <div className="affinity-column affinity-yellow">
              <h4 className="affinity-header">Personalization and User Preferences</h4>
              <div className="postit-container">
                <div className="postit postit-yellow">Edit and personalize content</div>
                <div className="postit postit-yellow">Search by ingredient</div>
                <div className="postit postit-yellow">Choose different units of measurement</div>
                <div className="postit postit-yellow">Filter by region</div>
                <div className="postit postit-yellow">Create, remove, and engage with posts</div>
                <div className="postit postit-yellow">Select different diet plans</div>
              </div>
            </div>

            <div className="affinity-column affinity-red">
              <h4 className="affinity-header">Inspiration and Exploration</h4>
              <div className="postit-container">
                <div className="postit postit-red">Browse recipes like Instagram</div>
                <div className="postit postit-red">Access diverse cultural cuisines</div>
                <div className="postit postit-red">Discover cooking inspiration</div>
                <div className="postit postit-red">See what professional chefs and peers are creating</div>
              </div>
            </div>

            <div className="affinity-column affinity-blue">
              <h4 className="affinity-header">Accessibility and Convenience</h4>
              <div className="postit-container">
                <div className="postit postit-blue">Avoid wasting leftovers</div>
                <div className="postit postit-blue">Use leftover vegetables efficiently</div>
                <div className="postit postit-blue">Reduce reliance on foreign content</div>
                <div className="postit postit-blue">Avoid paid subscriptions</div>
                <div className="postit postit-blue">Hands-free usage via speech-to-text</div>
                <div className="postit postit-blue">Easy access to ingredient and nutrition data</div>
              </div>
            </div>

            <div className="affinity-column affinity-green">
              <h4 className="affinity-header">Organization and Sharing</h4>
              <div className="postit-container">
                <div className="postit postit-green">Save recipes for later</div>
                <div className="postit postit-green">Share recipes without requiring the app</div>
                <div className="postit postit-green">Organize recipes for quick access</div>
                <div className="postit postit-green">Reduce food waste</div>
              </div>
            </div>
          </div>

          <p className="kc-body-text" style={{ marginTop: '40px' }}>
            Using the affinity mapping above, I identified recurring patterns and synthesized an extensive list of 12 research insights. These insights, color-coded for clarity, highlight core user needs and simplify the identification of overarching themes.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/13.png"} alt="Research Insights" />
          </div>
        </section>

        {/* 10. Personas */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Personas</h2>

          <p className="kc-body-text">
            To better understand the target audience, I created fictional personas that allowed me to step into users' shoes and evaluate their goals, thoughts, and concerns. These personas were differentiated based on cooking expertise to capture a broad range of skill levels.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/14.png"} alt="User Personas" />
          </div>
        </section>

        {/* 11. User Journeys & User Stories */}
        <section className="kc-section">
          <p className="kc-body-text">
            Based on these personas, I created user journey maps to illustrate how beginners and professional chefs would experience the platform and to identify key pain points.
          </p>

          <div className="kc-images-vertical">
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/Journey map- mark.png"} alt="Journey Map: Mark" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/Journey map- priya.png"} alt="Journey Map: Priya" />
            </div>
          </div>

          <p className="kc-body-text" style={{ marginTop: '40px' }}>
            Along with Priya and Mark, I explored additional personas based on different professions. Across five occupations, I documented a total of eight user stories.
          </p>

          <h3 className="kc-subsection-heading">KitchenCraft Skaters (Identifying the Audience - Pun Intended)</h3>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/17.png"} alt="KitchenCraft Skaters" />
          </div>
        </section>

        {/* 12. Design Phase */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Design Phase</h2>

          <p className="kc-body-text">
            After synthesizing research insights, I transitioned into the design phase to bring these ideas to life.
          </p>

          <div className="kc-images-vertical">
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/18.png"} alt="Design Phase 1" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/19.png"} alt="Design Phase 2" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/20.png"} alt="Design Phase 3" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/21.png"} alt="Design Phase 4" />
            </div>
          </div>

          <h3 className="kc-subsection-heading">Low-Fidelity and High-Fidelity Sketches</h3>

          <div className="kc-images-vertical">
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/22.png"} alt="Low-Fidelity Wireframe" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/23.png"} alt="High-Fidelity Wireframe" />
            </div>
          </div>

          <p className="kc-body-text" style={{ marginTop: '40px' }}>
            I developed over 20 wireframes exploring layouts that integrated social features, filters, and recipe customization tools.
          </p>

          <p className="kc-body-text" style={{ marginTop: '40px' }}>
            After brainstorming with my mentor on balancing functionality without overcomplicating the experience, I designed six core pages. These were informed by studying Indian multinational restaurants and platforms known for intuitive engagement.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/wireframe-flow.png"} alt="Flowchart" />
          </div>
        </section>

        {/* 14. Visual Design Rationale */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Green and Poppins - But Why?</h2>

          <p className="kc-body-text">
            I chose the Poppins typeface for its approachable, community-focused feel. Its clean, rounded design conveys warmth and inclusivity while maintaining readability across sizes.
          </p>

          <p className="kc-body-text">
            Green was selected as the primary color for its association with freshness, health, and vitality. It reinforces the app's focus on wellness and an energetic cooking community.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/25.png"} alt="Visual Design System" />
          </div>
        </section>

        {/* 15. Prototype */}
        <section className="prototype-section">
          <h2 className="section-heading">Try the Prototype</h2>
          <p className="prototype-description">Experience the KitchenCraft cooking app and explore the community-driven features.</p>
          <div className="prototype-container">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8rTQ9KxtXpErWL8aSJBk5q%2FMy_work%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D1200-763%26page-id%3D224%253A2%26scaling%3Dscale-down%26starting-point-node-id%3D1200%253A763"
              allowFullScreen
              title="KitchenCraft Prototype"
            />
          </div>
          <a
            href="https://www.figma.com/proto/8rTQ9KxtXpErWL8aSJBk5q/My_work?content-scaling=fixed&kind=proto&node-id=1200-763&page-id=224%3A2&scaling=scale-down&starting-point-node-id=1200%3A763"
            className="prototype-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Full Prototype
          </a>
        </section>

        {/* 16. Usability Testing */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Usability Testing - Validating the Solution</h2>

          <p className="kc-body-text">
            I conducted 25 usability sessions with a diverse group of participants, including UX designers from leading companies, college students, family members, and professionals from non-design fields.
          </p>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/26.png"} alt="Usability Testing Overview" />
          </div>

          <div className="kc-insights-list">
            <div className="kc-insight-item">
              <div className="insight-stat">71%</div>
              <div className="insight-content">
                <p className="insight-finding">wanted easier navigation on the inspiration page</p>
                <p className="insight-action">Combined inspiration and personalization views</p>
              </div>
            </div>

            <div className="kc-insight-item">
              <div className="insight-stat">58%</div>
              <div className="insight-content">
                <p className="insight-finding">felt the note-taking experience was weaker than tools they already used</p>
                <p className="insight-action">Improved interaction design</p>
              </div>
            </div>

            <div className="kc-insight-item">
              <div className="insight-stat">84%</div>
              <div className="insight-content">
                <p className="insight-finding">identified themselves between beginner and advanced</p>
                <p className="insight-action">Introduced a skill-level spectrum</p>
              </div>
            </div>
          </div>

          <div className="kc-images-vertical">
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/28.png"} alt="Testing Insight 1" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/29.png"} alt="Testing Insight 2" />
            </div>
            <div className="kc-image-block">
              <img src={process.env.PUBLIC_URL + "/kitchencraft/30.png"} alt="Testing Insight 3" />
            </div>
          </div>
        </section>

        {/* 17. Iterations */}
        <section className="kc-section">
          <h2 className="kc-section-heading">Main Screen Iterations</h2>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/Frame 52.png"} alt="Main Screen Iterations" />
          </div>
        </section>

        {/* 18. Closing Section */}
        <section className="kc-section kc-closing-section">
          <h2 className="kc-section-heading">End-to-End: From Cookbook Lovers to Explorers</h2>

          <div className="kc-image-block">
            <img src={process.env.PUBLIC_URL + "/kitchencraft/31.png"} alt="Final Overview" />
          </div>
        </section>

      </div>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer variant="green" />
      </div>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        style={{ bottom: `${bottomOffset}px` }}
        onClick={scrollToTop}
      >
        <span className="back-to-top-arrow" style={{ background: 'linear-gradient(135deg, rgba(80, 173, 102, 0.2) 0%, rgba(80, 173, 102, 0.1) 100%)', color: '#50AD66' }}>↑</span>
        <span className="back-to-top-text">Back to the top</span>
      </button>
    </>
  );
};

export default KitchenCraft;
