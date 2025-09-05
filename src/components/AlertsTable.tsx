import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Shield, X } from "lucide-react"

interface Alert {
  id: string
  time: string
  sourceIp: string
  destIp: string
  port: string
  protocol: string
  attackType: string
  severity: "Low" | "Medium" | "High" | "Critical"
  action: "Blocked" | "Allowed" | "Monitored"
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    time: "14:32:15",
    sourceIp: "192.168.1.100",
    destIp: "10.0.0.5",
    port: "22",
    protocol: "TCP",
    attackType: "Brute Force SSH",
    severity: "High",
    action: "Blocked"
  },
  {
    id: "2",
    time: "14:31:42",
    sourceIp: "203.0.113.45",
    destIp: "10.0.0.10",
    port: "80",
    protocol: "HTTP",
    attackType: "SQL Injection",
    severity: "Critical",
    action: "Blocked"
  },
  {
    id: "3",
    time: "14:30:18",
    sourceIp: "198.51.100.23",
    destIp: "10.0.0.15",
    port: "443",
    protocol: "HTTPS",
    attackType: "XSS Attempt",
    severity: "Medium",
    action: "Monitored"
  },
  {
    id: "4",
    time: "14:29:55",
    sourceIp: "172.16.0.88",
    destIp: "10.0.0.20",
    port: "3389",
    protocol: "RDP",
    attackType: "Port Scan",
    severity: "Low",
    action: "Allowed"
  }
]

export function AlertsTable() {
  const getSeverityBadge = (severity: Alert["severity"]) => {
    switch (severity) {
      case "Critical":
        return <Badge className="bg-critical text-critical-foreground">Critical</Badge>
      case "High":
        return <Badge className="bg-destructive text-destructive-foreground">High</Badge>
      case "Medium":
        return <Badge className="bg-warning text-warning-foreground">Medium</Badge>
      case "Low":
        return <Badge className="bg-success text-success-foreground">Low</Badge>
    }
  }

  const getActionBadge = (action: Alert["action"]) => {
    switch (action) {
      case "Blocked":
        return <Badge variant="outline" className="text-destructive border-destructive/50"><Shield className="h-3 w-3 mr-1" />Blocked</Badge>
      case "Allowed":
        return <Badge variant="outline" className="text-success border-success/50"><Eye className="h-3 w-3 mr-1" />Allowed</Badge>
      case "Monitored":
        return <Badge variant="outline" className="text-warning border-warning/50"><Eye className="h-3 w-3 mr-1" />Monitored</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Real-time Security Alerts</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            Live Feed
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead>Time</TableHead>
                <TableHead>Source IP</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Port/Protocol</TableHead>
                <TableHead>Attack Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="w-[100px]">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAlerts.map((alert) => (
                <TableRow key={alert.id} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-mono text-sm">{alert.time}</TableCell>
                  <TableCell className="font-mono text-sm text-primary">{alert.sourceIp}</TableCell>
                  <TableCell className="font-mono text-sm">{alert.destIp}</TableCell>
                  <TableCell className="font-mono text-sm">{alert.port}/{alert.protocol}</TableCell>
                  <TableCell className="font-medium">{alert.attackType}</TableCell>
                  <TableCell>{getSeverityBadge(alert.severity)}</TableCell>
                  <TableCell>{getActionBadge(alert.action)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}