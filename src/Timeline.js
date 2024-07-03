import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceSection = ({ experience }) => (
  <section className='flex items-center justify-center w-full pl-10 pr-10'>
    
    <VerticalTimeline>
      {
        experience && experience.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="rounded-lg vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', color: '#fff', textAlign: 'left' }} // Ensure content is left-aligned
            contentArrowStyle={{ borderRight: '7px solid  transparent' }} // Changed borderRight color to transparent
            date={item.date}
            iconStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
            icon={item.iconsSrc}
          >
            <h3 className="text-3xl font-bold vertical-timeline-element-title" style={{ textAlign: 'left' }}>{item.title}</h3>
            <p className="vertical-timeline-element-subtitle" style={{ textAlign: 'left', fontSize: '0.675rem' /* 14px */ }}>{item.location}</p>
            <p></p>
            <img src={item.img} alt={item.title} style={{ display: 'block', marginLeft: '0' }}></img>
            <p style={{ textAlign: 'left', fontSize: '0.675rem' /* 14px */ }}>{item.description}</p>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  </section>
);

export default ExperienceSection;