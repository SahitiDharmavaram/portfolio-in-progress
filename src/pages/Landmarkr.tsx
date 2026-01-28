import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './CaseStudy.css';
import './Landmarkr.css';

const Landmarkr: React.FC = () => {
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
      <div className="case-study-page landmarkr-page">
      <Link to="/" className="back-to-home">
        back
      </Link>

      {/* Case Study Header */}
      <header className="case-study-header">
        <h1 className="case-study-title" style={{ color: '#FFD686' }}>Landmarkr: AR-Powered Memory Assistance</h1>

        {/* Skills/Roles Section */}
        <div className="case-study-roles">
          <span className="role-tag">Augmented Reality</span>
          <span className="role-tag">UX Research</span>
          <span className="role-tag">UI Design</span>
          <span className="role-tag">Unity</span>
        </div>

        {/* Timeline Section */}
        <div className="case-study-timeline-section">
          <h3 className="timeline-label">Timeline</h3>
          <p className="timeline-value">May 2025 - July 2025</p>
        </div>

        {/* Tagline */}
        <p className="case-study-tagline">
          Turn places you pass by into moments you can return to.
        </p>

        {/* Hero Image */}
        <div className="case-study-hero-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr-cover-pic.png"} alt="Landmarkr" />
        </div>
      </header>

      {/* Section 1: Opening Concept */}
      <section className="content-section opening-section">
        <h2 className="section-heading-fancy">What If Places Could Remember for You?</h2>

        <p className="body-copy">
          I created Landmarkr for people who want their{' '}
          <span className="highlight-text">memories to live beyond photographs and scrolling timelines</span>.
          It is designed for those who experience a moment while walking past a place that once meant something,
          and who wish to revisit or share that feeling with others.
        </p>

        <p className="fancy-subtext">
          The idea emerged from reflecting on how Alzheimer's disease can blur the connection between memories
          and the places where they happened. One way to preserve those memories might be anchoring them
          in the physical world itself.
        </p>

        <p className="reflective-text">
          A thought came to me:{' '}
          <span className="highlight-text-subtle">what if memory is not just the rich experiences of our lives</span>,
          but any moment we want to{' '}
          <span className="highlight-text-subtle">leave behind as a voice tied to a place</span>,
          and return to exactly as it happened?
        </p>
      </section>

      {/* Section 2: Project Planning */}
      <section className="content-section">
        <h2 className="section-heading">Project Planning</h2>
        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/project%20planning.png"} alt="Project Planning" />
        </div>
      </section>

      {/* Section 3: Research Process */}
      <section className="content-section">
        <h2 className="section-heading">Research Process</h2>
        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/research%20process.png"} alt="Research Process" />
        </div>
      </section>

      {/* Section 4: Current Apps */}
      <section className="content-section">
        <h2 className="section-heading">Current Apps in the Market</h2>
        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/competitor%20analysis.png"} alt="Competitor Analysis" />
        </div>
      </section>

      {/* Section 5: Limitations & Competitor Insights */}
      <section className="content-section insights-section">
        <h2 className="section-heading">Limitations and Competitor Insights</h2>

        <p className="section-intro">
          After analyzing existing solutions, several patterns emerged that revealed where the market falls short
          in addressing the emotional and spatial dimensions of memory preservation.
        </p>

        <div className="insight-blocks">
          <div className="insight-block">
            <div className="insight-icon">⊞</div>
            <h3 className="insight-title">Fragmented Feature Sets</h3>
            <p className="insight-description">
              Very few applications successfully combine voice journaling, spatial memory awareness,
              location-based triggers, and augmented reality for memory recall. Most tools address
              only one or two of these dimensions, leaving users to piece together their own solutions.
            </p>
          </div>

          <div className="insight-block">
            <div className="insight-icon">↦</div>
            <h3 className="insight-title">Timeline-Centric Design</h3>
            <p className="insight-description">
              The majority of competitors focus on chronological, timeline-based experiences
              or audio-only memory capture. This approach treats memories as linear events
              rather than spatial experiences tied to meaningful places.
            </p>
          </div>

          <div className="insight-block">
            <div className="insight-icon">⟲</div>
            <h3 className="insight-title">Limited Social Integration</h3>
            <p className="insight-description">
              Social sharing of memories at specific physical locations through augmented reality
              is rarely supported. The opportunity for collaborative memory-making remains largely unexplored.
            </p>
          </div>

          <div className="insight-block">
            <div className="insight-icon">♡</div>
            <h3 className="insight-title">Missing Emotional Context</h3>
            <p className="insight-description">
              Editing or contextualizing memories with location-based emotional metadata is uncommon.
              Users cannot easily express how a place made them feel at a particular moment in time.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Mobile Experience Gaps */}
      <section className="content-section gaps-section">
        <h2 className="section-heading">Mobile Experience Gaps</h2>

        <p className="section-intro">
          The mobile landscape reveals significant opportunities where current solutions fail to meet
          the deeper needs of users seeking meaningful ways to preserve and revisit their memories.
        </p>

        <div className="gap-cards">
          <div className="gap-card">
            <div className="gap-icon">✦</div>
            <div className="gap-content">
              <h3 className="gap-title">Augmented Reality and Memory Remain Disconnected</h3>
              <p className="gap-description">
                Some applications use augmented reality for object recognition (such as Wall-E and Nevermind)
                or heritage storytelling (such as Moving Memory), but none successfully combine AR, voice recording,
                personal memory, and geolocation into a unified experience. This represents the core opportunity
                that Landmarkr addresses.
              </p>
            </div>
          </div>

          <div className="gap-card">
            <div className="gap-icon">◈</div>
            <div className="gap-content">
              <h3 className="gap-title">Voice Journaling Lacks Spatial Awareness</h3>
              <p className="gap-description">
                Applications like Callify and Record My Life have pioneered voice journaling during movement,
                but they rarely tie recordings to physical locations. The voice exists in isolation,
                disconnected from the places that gave it meaning.
              </p>
            </div>
          </div>

          <div className="gap-card">
            <div className="gap-icon">◇</div>
            <div className="gap-content">
              <h3 className="gap-title">Single-Dimension Experiences Dominate</h3>
              <p className="gap-description">
                Most experiences focus on one dimension: either timeline, voice, or augmented reality.
                Very few enable location-based emotional recall, where returning to a place triggers
                not just a memory, but the feeling of that moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Key Market Insights */}
      <section className="content-section market-section">
        <h2 className="section-heading">Key Market Insights</h2>

        <p className="section-intro">
          These findings point toward a clear direction: the intersection of voice, space, and emotion
          represents an untapped frontier in how we preserve and share what matters most.
        </p>

        <div className="market-insights">
          <div className="market-insight">
            <div className="insight-number">01</div>
            <div className="insight-content">
              <h4>An Untapped Intersection</h4>
              <p>
                Combining voice journaling, spatial memory, and augmented reality into a single experience
                remains largely unexplored. This convergence represents significant potential for innovation
                in personal memory preservation.
              </p>
            </div>
          </div>

          <div className="market-insight">
            <div className="insight-number">02</div>
            <div className="insight-content">
              <h4>The Missing On-Site Experience</h4>
              <p>
                Reliving memories at their original locations through augmented reality combined with audio
                is absent from current tools. Users cannot return to a place and experience their own voice
                speaking from that moment in time.
              </p>
            </div>
          </div>

          <div className="market-insight">
            <div className="insight-number">03</div>
            <div className="insight-content">
              <h4>A Modern Memory Palace</h4>
              <p>
                Place-based storytelling anchored in emotion feels like a contemporary interpretation
                of the ancient memory palace technique. Instead of imagining locations, users can use
                real places as vessels for their most meaningful moments.
              </p>
            </div>
          </div>

          <div className="market-insight">
            <div className="insight-number">04</div>
            <div className="insight-content">
              <h4>Social Memory Sharing</h4>
              <p>
                Sharing pinned locations and voice notes enables collaborative memory-making, shared nostalgia,
                and deeper social connection. This capability is rare in current applications, yet represents
                a profound way for people to build shared histories with the places they love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: The Scenario I Had in Mind */}
      <section className="content-section">
        <h2 className="section-heading">The Scenario I Had in Mind</h2>
        <div className="storyboard-image">
          <div className="case-study-image">
            <img src={process.env.PUBLIC_URL + "/landmarkr/storyboard.png"} alt="Storyboard" />
          </div>
        </div>
      </section>

      {/* Section 9: User Journey */}
      <section className="content-section">
        <h2 className="section-heading">User Journey</h2>
        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/user%20journey%20map.png"} alt="User Journey Map" />
        </div>
      </section>

      {/* Section 9: Empathy Map */}
      <section className="content-section">
        <h2 className="section-heading">Empathy Map</h2>
        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/empathy%20map.png"} alt="Empathy Map" />
        </div>
      </section>

      {/* Section 10: Design System */}
      <section className="content-section design-system-section">
        <h2 className="section-heading">Design System</h2>

        <div className="design-system-narrative">
          <p>
            Yellow was chosen for its luminous warmth, evoking nostalgia like golden hour light. It reinforces the emotional tone of Landmarkr: memories here are radiant and alive, glowing with the warmth of the moments they capture.
          </p>
        </div>

        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/design%20system.png"} alt="Design System" />
        </div>
      </section>

      {/* Section 11: Testimonials */}
      <section className="content-section">
        <h2 className="section-heading">What Users Said</h2>
        <div className="case-study-image">
          <img src={process.env.PUBLIC_URL + "/landmarkr/testimonials.png"} alt="User Testimonials" />
        </div>
      </section>

      {/* Section 12: What I Learned */}
      <section className="content-section learnings-section">
        <h2 className="section-heading">What I Learned</h2>

        <div className="learnings-grid">
          <div className="learning-card">
            <div className="learning-number">
              <span>1</span>
            </div>
            <div className="learning-content">
              <h3 className="learning-title">Location-Based AR Prototypes Present Unique Testing Challenges</h3>
              <p className="learning-description">
                Testing a prototype that relies on GPS positioning and physical movement proved nearly impossible
                to simulate accurately. Walking in circles outside, dealing with GPS drift, and attempting to
                recreate real-world conditions in a controlled environment revealed the gap between designing
                for location and actually validating those designs.
              </p>
            </div>
          </div>

          <div className="learning-card">
            <div className="learning-number">
              <span>2</span>
            </div>
            <div className="learning-content">
              <h3 className="learning-title">Voice Memories Feel Personal but Require Private Contexts</h3>
              <p className="learning-description">
                Users showed hesitation when asked to listen to voice memories without earphones.
                Privacy significantly changes how people engage with audio content in public spaces.
                Additionally, older adults rarely explored the interface by tapping randomly, preferring
                clear guidance over discovery-based interaction.
              </p>
            </div>
          </div>

          <div className="learning-card">
            <div className="learning-number">
              <span>3</span>
            </div>
            <div className="learning-content">
              <h3 className="learning-title">Clarity Wins Over Complexity Every Time</h3>
              <p className="learning-description">
                The initial AI-powered features were over-designed with multiple paths and options.
                Most users wanted one clear action at any given moment. Many did not realize that
                multiple paths existed, which taught me that simplicity and focus are far more valuable
                than feature density.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer variant="yellow" />
      </div>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={scrollToTop}
        style={{ bottom: `${bottomOffset}px` }}
      >
        <span
          className="back-to-top-arrow"
          style={{
            background: 'linear-gradient(135deg, rgba(212, 168, 74, 0.2) 0%, rgba(212, 168, 74, 0.1) 100%)',
            color: '#D4A84A'
          }}
        >↑</span>
        <span className="back-to-top-text">back to the top</span>
      </button>
    </>
  );
};

export default Landmarkr;
