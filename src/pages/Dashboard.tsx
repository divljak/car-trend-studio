import { FiltersPanel } from "@/components/dashboard/FiltersPanel";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { MarketInsights } from "@/components/dashboard/MarketInsights";
import { QuadrantChart } from "@/components/dashboard/QuadrantChart";
import { TrendingSection } from "@/components/dashboard/TrendingSection";
import { FastestSellingTable } from "@/components/dashboard/FastestSellingTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Search, Bell, User, BarChart3, TrendingUp, Filter, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Modern Sidebar */}
      <aside className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 space-y-4">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <Car className="w-5 h-5 text-accent-foreground" />
        </div>
        <nav className="flex flex-col space-y-3">
          <Button variant="ghost" size="icon" className="w-10 h-10 text-sidebar-foreground hover:bg-sidebar-accent">
            <BarChart3 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-sidebar-foreground hover:bg-sidebar-accent">
            <TrendingUp className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-sidebar-foreground hover:bg-sidebar-accent">
            <Filter className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-sidebar-foreground hover:bg-sidebar-accent">
            <Settings className="w-5 h-5" />
          </Button>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Modern Header */}
        <header className="h-16 border-b bg-card px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Your Sales Analysis</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search your today analysis" 
                className="pl-10 w-80 bg-muted/50 border-0"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <User className="w-4 h-4 text-accent-foreground" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex gap-6">
              {/* Left Sidebar - Filters */}
              <FiltersPanel />

              {/* Main Content */}
              <div className="flex-1 space-y-6">

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
      </div>
    </div>
  );
};

export default Dashboard;