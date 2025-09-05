import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "increase" | "decrease" | "neutral"
  icon: LucideIcon
  variant?: "default" | "success" | "warning" | "danger" | "critical"
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral",
  icon: Icon, 
  variant = "default" 
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-gradient-success border-success/20 shadow-success"
      case "warning":
        return "bg-gradient-warning border-warning/20 shadow-warning"
      case "danger":
        return "bg-gradient-danger border-destructive/20 shadow-danger"
      case "critical":
        return "bg-gradient-critical border-critical/20 shadow-critical animate-pulse"
      default:
        return "bg-card border-border"
    }
  }

  const getChangeColor = () => {
    switch (changeType) {
      case "increase":
        return "text-critical"
      case "decrease":
        return "text-success"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card className={`transition-all duration-300 hover:scale-105 ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-foreground/80">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${variant === "default" ? "text-muted-foreground" : "text-foreground/80"}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        {change && (
          <Badge variant="outline" className={`text-xs ${getChangeColor()}`}>
            {change}
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}