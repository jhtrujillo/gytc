import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingPqrButton = () => {
  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col items-center gap-2">
      <Button
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-110 flex items-center justify-center p-0"
        onClick={() => window.location.href = '/pqrs'}
        title="Radicar PQRS"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">PQRS</span>
      </Button>
      <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded shadow border font-medium">
        PQRS
      </span>
    </div>
  );
};

export default FloatingPqrButton;
