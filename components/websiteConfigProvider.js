import React, { createContext, useContext, useState, useEffect } from 'react';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import { websiteConfigQuery } from '../lib/queries';

const WebsiteConfigContext = createContext();

export const useWebsiteConfig = () => {
  return useContext(WebsiteConfigContext);
};

export const WebsiteConfigProvider = ({ children }) => {
  const [websiteConfig, setWebsiteConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const config = await getClient().fetch(websiteConfigQuery);
      setWebsiteConfig(overlayDrafts(config));
    };
    fetchData();
  }, []);

  return (
    <WebsiteConfigContext.Provider value={websiteConfig}>
      {children}
    </WebsiteConfigContext.Provider>
  );
};

