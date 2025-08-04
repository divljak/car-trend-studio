import { FiltersPanel } from "@/components/dashboard/FiltersPanel";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { MarketInsights } from "@/components/dashboard/MarketInsights";
import { QuadrantChart } from "@/components/dashboard/QuadrantChart";
import { TrendingSection } from "@/components/dashboard/TrendingSection";
import { FastestSellingTable } from "@/components/dashboard/FastestSellingTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <FiltersPanel />

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Car Flipper Dashboard</h1>
              <p className="text-muted-foreground">Analyze market trends and identify profitable opportunities</p>
            </div>

            {/* Top Opportunities */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Top Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <OpportunityCard
                  type="hot-flip"
                  title="Hot Flip: Skoda Octavia"
                  subtitle="High demand this period. Sells 23 days faster than average."
                  badge="🔥 Hot"
                />
                <OpportunityCard
                  type="market-analysis"
                  title="Market Analysis"
                  subtitle="No major overpricing detected in current filters."
                />
                <OpportunityCard
                  type="rising-demand"
                  title="Rising Demand: Monitoring"
                  subtitle="Analyzing trends for emerging opportunities."
                />
              </div>
            </div>

            {/* Market Insights */}
            <MarketInsights />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <QuadrantChart />
              </div>
              <TrendingSection />
            </div>

            {/* Fastest Selling Table */}
            <FastestSellingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;