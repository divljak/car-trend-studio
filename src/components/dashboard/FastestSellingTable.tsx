import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
export const FastestSellingTable = () => {
  const fastestSelling = [{
    makeModel: "Skoda Octavia",
    year: "2020",
    avgDaysOnMarket: "6.8",
    avgPrice: "21,902",
    demandLevel: "HIGH"
  }];
  return <Card>
      <CardHeader>
        <CardTitle>Fastest Selling Models</CardTitle>
        
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>MAKE/MODEL</TableHead>
              <TableHead>YEAR</TableHead>
              <TableHead>AVG DAYS ON MARKET</TableHead>
              <TableHead>AVG PRICE (KM)</TableHead>
              <TableHead>DEMAND LEVEL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fastestSelling.map((item, index) => <TableRow key={index} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-medium">{item.makeModel}</TableCell>
                <TableCell>{item.year}</TableCell>
                <TableCell>{item.avgDaysOnMarket}</TableCell>
                <TableCell>{item.avgPrice}</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-success text-success-foreground">
                    {item.demandLevel}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </CardContent>
    </Card>;
};