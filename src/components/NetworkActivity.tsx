import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts"

const protocolData = [
  { name: "TCP", value: 45, color: "#3b82f6" },
  { name: "UDP", value: 25, color: "#10b981" },
  { name: "ICMP", value: 15, color: "#f59e0b" },
  { name: "HTTP/HTTPS", value: 10, color: "#ef4444" },
  { name: "Other", value: 5, color: "#8b5cf6" }
]

const topTalkersData = [
  { ip: "192.168.1.100", packets: 15420, label: "Web Server" },
  { ip: "10.0.0.25", packets: 12300, label: "Database" },
  { ip: "172.16.0.50", packets: 8900, label: "File Server" },
  { ip: "203.0.113.15", packets: 7650, label: "External" },
  { ip: "10.0.0.100", packets: 5200, label: "Workstation" }
]

const alertTimelineData = [
  { time: "10:00", alerts: 12 },
  { time: "11:00", alerts: 19 },
  { time: "12:00", alerts: 25 },
  { time: "13:00", alerts: 31 },
  { time: "14:00", alerts: 45 },
  { time: "15:00", alerts: 28 }
]

export function NetworkActivity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Protocol Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Traffic by Protocol
            <Badge variant="outline" className="bg-primary/10 text-primary">Live</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={protocolData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {protocolData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Talkers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Network Talkers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topTalkersData.map((talker, index) => (
              <div key={talker.ip} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div>
                  <div className="font-mono text-sm text-primary font-medium">{talker.ip}</div>
                  <div className="text-xs text-muted-foreground">{talker.label}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{talker.packets.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">packets/hr</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alerts Timeline */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Alert Timeline (Last 6 Hours)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={alertTimelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="alerts" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}