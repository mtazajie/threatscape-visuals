import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Gauge, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Activity,
  Cpu,
  HardDrive,
  Network
} from "lucide-react"

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* System Health */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Gauge className="h-4 w-4" />
            System Health
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success mb-2">98.5%</div>
          <Progress value={98.5} className="h-2 mb-3" />
          <Badge className="bg-success/10 text-success border-success/20">
            <CheckCircle className="h-3 w-3 mr-1" />
            Excellent
          </Badge>
        </CardContent>
      </Card>

      {/* Detection Rate */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Detection Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary mb-2">99.2%</div>
          <Progress value={99.2} className="h-2 mb-3" />
          <Badge className="bg-primary/10 text-primary border-primary/20">
            High Accuracy
          </Badge>
        </CardContent>
      </Card>

      {/* False Positives */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            False Positives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-warning mb-2">2.1%</div>
          <Progress value={2.1} className="h-2 mb-3" />
          <Badge className="bg-warning/10 text-warning border-warning/20">
            Low Rate
          </Badge>
        </CardContent>
      </Card>

      {/* Packets Inspected */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Packets/Hour
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground mb-2">2.4M</div>
          <div className="text-xs text-muted-foreground mb-3">Average throughput</div>
          <Badge variant="outline" className="bg-muted/30">
            Normal Load
          </Badge>
        </CardContent>
      </Card>

      {/* Resource Usage */}
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>System Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CPU Usage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Cpu className="h-4 w-4 text-primary" />
                  CPU Usage
                </div>
                <span className="text-sm font-mono">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>

            {/* Memory Usage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <HardDrive className="h-4 w-4 text-accent" />
                  Memory Usage
                </div>
                <span className="text-sm font-mono">62%</span>
              </div>
              <Progress value={62} className="h-2" />
            </div>

            {/* Network I/O */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Network className="h-4 w-4 text-success" />
                  Network I/O
                </div>
                <span className="text-sm font-mono">28%</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}