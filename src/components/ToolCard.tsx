import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  iconBgColor: string;
  link: string;
}

const ToolCard = ({ icon: Icon, title, subtitle, description, buttonText, iconBgColor, link }: ToolCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg border border-border bg-card">
      <div className="flex items-start gap-4 mb-4">
        <div className={`h-12 w-12 rounded-lg ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">{title}</h3>
          <p className="text-sm text-primary font-medium">{subtitle}</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link to={link}>
        <Button className="w-full" size="lg">
          {buttonText}
        </Button>
      </Link>
    </Card>
  );
};

export default ToolCard;