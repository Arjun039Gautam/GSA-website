import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// TODO: Replace with your actual Google Analytics Measurement ID
const MEASUREMENT_ID = "G-EPSL242C98";

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 once when the component mounts
        ReactGA.initialize(MEASUREMENT_ID);
    }, []);

    useEffect(() => {
        // Send pageview on route change
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return null;
};

export default GoogleAnalytics;
