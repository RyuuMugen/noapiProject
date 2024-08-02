"use client";
import {
  useState,
  createContext,
  useEffect,
  useContext,
  ReactNode,
} from "react";

export const BREAK_POINT = {
  LARGE_DESKTOP: 1700,
  DESKTOP: 1440,
  LAPTOP: 1366,
  TABLET: 1280,
  SMALL_TABLET: 1024,
  MOBILE: 768,
};

interface AppContextProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface ContextProps {
  children: ReactNode;
}

const defaultContextValue: AppContextProps = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export function useAppContext(): AppContextProps {
  const contextValue = useContext(AppContext);
  if (contextValue === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return contextValue;
}

const Device: React.FC<ContextProps> = ({ children }) => {
  let windowWidth = BREAK_POINT.DESKTOP;
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const checkWindowWidth = () => {
    if (windowWidth > BREAK_POINT.TABLET) {
      setIsDesktop(true);
      setIsTablet(false);
      setIsMobile(false);
    } else if (windowWidth >= BREAK_POINT.MOBILE) {
      setIsDesktop(false);
      setIsTablet(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(true);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      windowWidth = window.innerWidth;
      checkWindowWidth();
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Device;
