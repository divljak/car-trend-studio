import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface OpportunityCardProps {
  type: "hot-flip" | "market-analysis" | "rising-demand";
  title: string;
  subtitle: string;
  badge?: string;
}

export const OpportunityCard = ({ type, title, subtitle, badge }: OpportunityCardProps) => {
  const getCardStyles = () => {
    switch (type) {
      case "hot-flip":
        return {
          cardClass: "border-success/20 bg-success/5",
          iconClass: "text-success",
          badgeClass: "bg-success text-success-foreground",
          Icon: TrendingUp
        };
      case "market-analysis":
        return {
          cardClass: "border-warning/20 bg-warning/5",
          iconClass: "text-warning",
          badgeClass: "bg-warning text-warning-foreground",
          Icon: AlertTriangle
        };
      case "rising-demand":
        return {
          cardClass: "border-info/20 bg-info/5",
          iconClass: "text-info",
          badgeClass: "bg-info text-info-foreground",
          Icon: Activity
        };
    }
  };

  const { cardClass, iconClass, badgeClass, Icon } = getCardStyles();

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-lg", cardClass)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Icon className={cn("h-5 w-5", iconClass)} />
          {badge && (
            <Badge className={cn("text-xs", badgeClass)}>
              {badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
};