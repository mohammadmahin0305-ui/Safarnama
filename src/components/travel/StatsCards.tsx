import { Map, Route, BookOpenText, Users } from "lucide-react";

interface StatCard {
  icon: React.ElementType;
  label: string;
  value: string | number;
  bgColor: string;
  iconColor: string;
}

const stats: StatCard[] = [
  {
    icon: Map,
    label: "Trips Taken",
    value: 4,
    bgColor: "bg-primary-light",
    iconColor: "text-primary"
  },
  {
    icon: Route,
    label: "Distance",
    value: "1,200 km",
    bgColor: "bg-secondary-light",
    iconColor: "text-secondary"
  },
  {
    icon: BookOpenText,
    label: "Journals",
    value: 2,
    bgColor: "bg-accent-indigo-light",
    iconColor: "text-accent-indigo"
  },
  {
    icon: Users,
    label: "Friends",
    value: 8,
    bgColor: "bg-accent-rose-light",
    iconColor: "text-accent-rose"
  }
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        
        return (
          <div 
            key={index}
            className="bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
          >
            <div className={`${stat.bgColor} p-3 rounded-full`}>
              <IconComponent className={`${stat.iconColor} h-5 w-5`} />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
              <p className="font-bold text-lg text-foreground">
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;