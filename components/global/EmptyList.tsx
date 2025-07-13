import { cn } from "@/lib/utils"

const EmptyList = ({
  heading = "No Items Found,",
  className
}: {
  heading?: string
  className?: string
}) => {
  return <h2 className={cn("text-xl", className)}>EmptyList</h2>
}
export default EmptyList
