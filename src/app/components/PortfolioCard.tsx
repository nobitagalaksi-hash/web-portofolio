import { Achievement } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarIcon } from "lucide-react";

interface PortfolioCardProps {
  achievement: Achievement;
}

export function PortfolioCard({ achievement }: PortfolioCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "long",
    }).format(date);
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 h-full flex flex-col relative group border-2 hover:border-primary/50">
      {/* Gradient glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {achievement.image && (
        <div className="w-full h-48 overflow-hidden bg-muted relative">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
        </div>
      )}
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {achievement.category}
          </Badge>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <CalendarIcon className="size-3.5" />
            <span className="text-xs">{formatDate(achievement.date)}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2">{achievement.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 relative z-10">
        <p className="text-muted-foreground line-clamp-3">{achievement.description}</p>
      </CardContent>
    </Card>
  );
}
