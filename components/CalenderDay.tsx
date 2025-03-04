import { Badge } from "lucide-react"

interface CalendarDayProps {
    day: number
    striped?: boolean
    highlight?: boolean
    event?: string
    nextMonth?: boolean
  }
  
  export function CalendarDay({ day, striped, highlight, event, nextMonth }: CalendarDayProps) {
    const baseClasses = "aspect-square rounded-lg p-2 text-center"
  
    let classes = `${baseClasses} bg-gray-50`
  
    if (striped) {
      classes = `${baseClasses} bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb_4px,#f3f4f6_4px,#f3f4f6_8px)]`
    }
  
    if (highlight) {
      classes = `${baseClasses} bg-slate-600 text-white`
    }
  
    if (nextMonth) {
      classes = `${baseClasses} bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb_4px,#f3f4f6_4px,#f3f4f6_8px)]`
    }
  
    return (
      <div className={classes}>
        <div className={`text-sm ${nextMonth ? "text-gray-400" : ""}`}>{day}</div>
        {event && (
          <div className="mt-1 text-xs">
            <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200 rounded-full">
              {event}
            </Badge>
          </div>
        )}
      </div>
    )
  }