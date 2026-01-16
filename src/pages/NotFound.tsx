
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tunnels-black flex flex-col items-center justify-center px-4">
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noindex={true}
      />
      <div className="max-w-md text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-tunnels-red mb-6">404</h1>
        <p className="text-2xl md:text-3xl font-medium text-white mb-4">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild size="lg" className="bg-tunnels-red hover:bg-tunnels-red/80 text-white">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
