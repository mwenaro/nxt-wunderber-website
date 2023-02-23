"use client"

import { PageWrapper } from '@/components/modules';
import { GA_TRACKING_ID } from '@/constants';
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

const RealTimeTrafficComponent: React.FC = () => {
  const [currentUsers, setCurrentUsers] = useState<number>(0);
  const [pageViews, setPageViews] = useState<number>(0);
  const [topPages, setTopPages] = useState<Array<{ title: string; pageviews: number }>>([]);

  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.pageview('/real-time-traffic');

  console.log({GA_TRACKING_ID})
  }, []);

  return (
    <PageWrapper>
    <div>
      <h2>Real-Time Traffic</h2>
      <p>Current Users: {currentUsers}</p>
      <p>Page Views: {pageViews}</p>
      <h3>Top Pages:</h3>
      <ul>
        {topPages.map((page, index) => (
          <li key={index}>
            {page.title} - {page.pageviews}
          </li>
        ))}
      </ul>
    </div>
    </PageWrapper>
  );
};

export default RealTimeTrafficComponent;
