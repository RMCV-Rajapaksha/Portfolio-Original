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
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
            date={item.date}
            iconStyle={{ background: 'rgb(21, 24, 31)', color: '#fff' }}
            icon={item.iconsSrc}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <img src={item.img}></img>
            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  </section>
);

export default ExperienceSection;
