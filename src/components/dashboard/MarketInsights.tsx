import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PriceBracketProps {
  title: string;
  hasData: boolean;
  data?: Array<{ model: string; days: number }>;
}

const PriceBracket = ({ title, hasData, data }: PriceBracketProps) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {!hasData ? (
        <div className="flex items-center justify-center h-24">
          <p className="text-xs text-muted-foreground">No sufficient data</p>
        </div>
      ) : (
        <div className="space-y-3">
          {data?.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-xs font-medium">{item.model}</span>
              <span className="text-xs text-muted-foreground">{item.days} days</span>
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export const MarketInsights = () => {
  const overTwentyKData = [
    { model: "Skoda Octavia", days: 7 },
    { model: "Toyota Yaris", days: 8 },
    { model: "BMW X1", days: 8 }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Market Insights by Price Bracket</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PriceBracket title="Under 10,000 KM" hasData={false} />
        <PriceBracket title="10,000 - 20,000 KM" hasData={false} />
        <PriceBracket title="Over 20,000 KM" hasData={true} data={overTwentyKData} />
      </div>
    </div>
  );
};