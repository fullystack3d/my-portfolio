import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Projects.css';
import ImageModal from '../ImageModal/ImageModal';

// Your specified image formats
import teamLogo from '../../assets/team-logo.png';
import cellDrawing from '../../assets/Cell-Drawing.png';
import cellCad from '../../assets/cell-cad.png';
import cellSide from '../../assets/cell-side.jpg';
import cellRear from '../../assets/cell-rear.jpg';
import cellFeedersInside from '../../assets/cell-feeders-inside.jpg';
import cellFeedersOutside from '../../assets/cell-feeders-outside.jpg';
import cellDial from '../../assets/cell-dial.jpg';
import cellPackaging from '../../assets/cell-packaging.jpg';
import cellOutfeed from '../../assets/cell-outfeed.jpg';
import cellCars from '../../assets/cell-cars.jpg';
import teamImage from '../../assets/team.jpg';
import meetingImage from '../../assets/meeting.png';
import nestDrawing from '../../assets/Nest-Drawing.png';
import machiningImage from '../../assets/machining.png';
import acDrawing from '../../assets/208-Drawing.png';
import dcDrawing from '../../assets/DC-Drawing.png';

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const ImageThumbnail = ({ src, alt, isClickable = true }) => (
    <div
      className={`thumbnail-container ${isClickable ? 'clickable' : ''}`}
      onClick={isClickable ? () => openModal(src) : null}
    >
      <img src={src} alt={alt} className="thumbnail" />
      {isClickable && <div className="thumbnail-overlay">Click to enlarge</div>}
    </div>
  );

  return (
    <>
      <ImageModal src={modalImage} alt="Enlarged View" onClose={closeModal} />
      <section id="projects" className="projects-container">
        <div className="projects-content">
          <h1 className="main-header">Projects</h1>
          <p className="intro-text">
            Throughout my college tenure, I completed various large-scale projects, including the{' '}
            <Link to="capstone" smooth={true} offset={-70} duration={500} className="inline-link">final year capstone project</Link>, a{' '}
            <Link to="ats" smooth={true} offset={-70} duration={500} className="inline-link">cell integration at ATS</Link>, and an{' '}
            <Link to="ridgetech" smooth={true} offset={-70} duration={500} className="inline-link">Ignition MES deployment with Ridgetech Automation</Link>.
          </p>

          <div id="capstone" className="project-section">
            <h2 className="sub-header">Final Year Capstone Project</h2>
            <div className="single-image-wrapper">
              <ImageThumbnail src={teamLogo} alt="Capstone Team Logo" isClickable={false} />
            </div>
            <p>My final year capstone project involved designing, building, and integrating an automated work cell. With four months to design and three months to build and integrate, my team and I developed an automated toy car assembly system.</p>
            <p>The cars were comprised of three modular, 3D-printed components: a frame, axles with wheels, and a body, all designed with a slight interference fit for press-assembly. The system offered four car body variants, which users could select through an embedded web app on the HMI. The order data was then seamlessly pushed into the control system to begin production.</p>
            <div className="gallery">
              <ImageThumbnail src={cellDrawing} alt="Cell Drawing" />
              <ImageThumbnail src={cellCad} alt="Cell CAD Model" />
              <ImageThumbnail src={cellSide} alt="Cell Side View" />
              <ImageThumbnail src={cellRear} alt="Cell Rear View" />
            </div>
            <p>An external X-Y-Z gantry system managed inventory, replenishing the cell's internal platforms. When a platform's sensor detected an empty tray, the gantry would retrieve a new, filled tray from the inventory station.</p>
            <div className="gallery">
              <ImageThumbnail src={cellFeedersInside} alt="Internal Cell Feeders" />
              <ImageThumbnail src={cellFeedersOutside} alt="External Cell Feeders" />
            </div>
            <p>Once a sufficient number of orders were queued, the system initiated the assembly sequence. Frames were picked and placed onto a dial table, which then rotated to subsequent stations. At the third nest, wheels were singulated and placed. A robot, guided by the order data, selected the correct body style and placed it onto the assembled frame and wheels. The complete assembly then rotated to a pressing station where a pneumatic cylinder pressed the components together. Finally, the finished car was transferred by a SCARA robot to the packaging area.</p>
            <div className="single-image-wrapper">
              <ImageThumbnail src={cellDial} alt="Cell Dial Table" />
            </div>
            <p>At the packaging station, handshaking protocols between the PLC and robot ensured a bag was available before the car was dropped. The bagged car was then pushed to a sealing station, where another robot placed a header card on the bag, which was then stapled shut. The sealed product was then moved to a dropbox for safe user retrieval.</p>
            <div className="gallery">
              <ImageThumbnail src={cellPackaging} alt="Cell Packaging Area" />
              <ImageThumbnail src={cellOutfeed} alt="Cell Outfeed" />
              <ImageThumbnail src={cellCars} alt="Finished Toy Cars" />
            </div>

            <h3>My Roles and Responsibilities</h3>
            <div className="single-image-wrapper">
              <ImageThumbnail src={teamImage} alt="Our Capstone Team" isClickable={false} />
            </div>
            <h4><strong>Team Leader</strong></h4>
            <p>I was selected to lead a team of 15 peers. This role taught me invaluable lessons in teamwork, communication, and leadership. Beyond ensuring we met project milestones, I focused on keeping the team strong, organized, and motivated. I quickly learned that individuals have unique working habits and respond differently to feedback. This experience illuminated my strengths and weaknesses as a leader, and I am committed to progressing these skills.</p>
            <div className="single-image-wrapper">
              <ImageThumbnail src={meetingImage} alt="Team Meeting" isClickable={false} />
            </div>
            <h4><strong>Technical Roles</strong></h4>
            <p>During the design phase, I served as the project lead and was also responsible for the assembly stations. Through rigorous testing, redesigns, and component specification, I focused on delivering a system that was robust, modular, and simple. Specifically, I designed much of the tooling for our Pick and Place systems, the dial table, and the electrical system, including calculating and defining device specifications.</p>
            <div className="single-image-wrapper">
              <ImageThumbnail src={nestDrawing} alt="Nest Drawing" />
            </div>
            <p>During the three-month build phase, my roles expanded to machining custom parts, commissioning IO devices in our PLCs, wiring our 120V and 24V systems, and designing and deploying our Ignition HMI. I also architected our network's IP scheme and developed the foundational PLC code from scratch, which included configuration logic and station sequencing. Clocking nearly 700 hours during this phase, the experience was both taxing and immensely rewarding.</p>
            <div className="gallery">
              <div className="single-image-wrapper">
                <ImageThumbnail src={machiningImage} alt="Machining Parts" isClickable={false} />
              </div>
              <ImageThumbnail src={acDrawing} alt="AC Electrical Drawing" />
              <ImageThumbnail src={dcDrawing} alt="DC Electrical Drawing" />
            </div>
          </div>

          <div id="ats" className="project-section">
            <h2 className="sub-header">Cell Integration at ATS (Co-op)</h2>
            <p>During my four-month co-op at ATS, I had the valuable opportunity to participate in the integration phase of a large-scale machine that utilized unique and advanced tooling.</p>
            <h4><strong>Roles and Responsibilities:</strong></h4>
            <p>Initially, my duties involved validating and updating IO lists within the PLC. As I progressed, my responsibilities grew to include HMI updates. Near the end of my term, I assumed full ownership of a cell integration while the lead integrator was away on service work. I was responsible for sequencing the cell, primarily testing auxiliary devices and tooling. By the end of my placement, I had successfully brought the cell online and completed its validation.</p>
          </div>

          <div id="ridgetech" className="project-section">
            <h2 className="sub-header">Ignition MES Deployment at Ridgetech Automation (Co-op)</h2>
            <p>At Ridgetech, I was part of the integrated software team developing a Manufacturing Execution System (MES) platform. This system enabled the client to track machine states, monitor OEE and performance, and oversee production metrics.</p>
            <h4><strong>Roles and Responsibilities:</strong></h4>
            <p>A key role during development was creating a simulation program for our virtual PLC. As we did not have remote access to the client's servers, we built a replica system mirroring their tag architecture. This allowed us to develop the Ignition software to parse tag data as it would post-deployment. I also integrated new logic for the customer's Omron PLC to communicate with the Ignition server, which included building custom data types and Add-On Instructions (AOIs). Additionally, I was fortunate to be on-site for deployment, where I commissioned the updated logic on their live PLCs, troubleshooted network issues, and tested the Ignition interface.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;