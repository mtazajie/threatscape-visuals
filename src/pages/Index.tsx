import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { MetricCard } from "@/components/MetricCard"
import { AlertsTable } from "@/components/AlertsTable"
import { NetworkActivity } from "@/components/NetworkActivity"
import { PerformanceMetrics } from "@/components/PerformanceMetrics"
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  CheckCircle,
  TrendingUp,
  Globe,
  Users,
  Zap
} from "lucide-react"
import heroImage from "@/assets/hero-security.jpg"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          
          <main className="flex-1 overflow-auto p-6 space-y-6">
            {/* Hero Section */}
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img 
                src={heroImage} 
                alt="Cybersecurity Dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
                <div className="p-8">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Security Operations Center
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Real-time threat detection and network monitoring
                  </p>
                </div>
              </div>
            </div>

            {/* Overview Metrics */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Security Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Total Alerts (24h)"
                  value="1,247"
                  change="+12% from yesterday"
                  changeType="increase"
                  icon={AlertTriangle}
                  variant="warning"
                />
                <MetricCard
                  title="Critical Threats"
                  value="23"
                  change="+5 new alerts"
                  changeType="increase"
                  icon={Shield}
                  variant="critical"
                />
                <MetricCard
                  title="Blocked Attacks"
                  value="892"
                  change="+18% success rate"
                  changeType="decrease"
                  icon={CheckCircle}
                  variant="success"
                />
                <MetricCard
                  title="Active Connections"
                  value="15,432"
                  change="Normal traffic"
                  changeType="neutral"
                  icon={Globe}
                />
              </div>
            </section>

            {/* Attack Types & Sources */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Threat Intelligence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Brute Force Attempts"
                  value="456"
                  icon={Users}
                  variant="danger"
                />
                <MetricCard
                  title="SQL Injections"
                  value="89"
                  icon={Zap}
                  variant="warning"
                />
                <MetricCard
                  title="Port Scans"
                  value="234"
                  icon={Eye}
                />
                <MetricCard
                  title="DDoS Attempts"
                  value="12"
                  icon={TrendingUp}
                  variant="critical"
                />
              </div>
            </section>

            {/* Real-time Alerts */}
            <section>
              <AlertsTable />
            </section>

            {/* Network Activity */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Network Activity</h2>
              <NetworkActivity />
            </section>

            {/* Performance Metrics */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">IDS Performance</h2>
              <PerformanceMetrics />
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
