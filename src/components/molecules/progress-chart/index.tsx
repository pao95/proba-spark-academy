import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "./types";
import { progressChartStyles } from "./styles";
import { Card, Text } from "@/components/atoms";

export const ProgressChart = () => {
  const data: ChartData[] = [
    { week: "Week 1", progress: 10, exercises: 5 },
    { week: "Week 2", progress: 25, exercises: 12 },
    { week: "Week 3", progress: 35, exercises: 18 },
    { week: "Week 4", progress: 50, exercises: 25 },
    { week: "Week 5", progress: 60, exercises: 32 },
    { week: "Week 6", progress: 75, exercises: 40 },
  ];

  return (
    <Card className={progressChartStyles.base}>
      <Text variant="h3" className={progressChartStyles.title}>
        Learning Progress
      </Text>
      <div className={progressChartStyles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="exercises"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={progressChartStyles.legendContainer}>
        <div className={progressChartStyles.legendItem}>
          <div className={progressChartStyles.legendDot.progress}></div>
          <Text size="sm" className={progressChartStyles.legendText}>
            Progress %
          </Text>
        </div>
        <div className={progressChartStyles.legendItem}>
          <div className={progressChartStyles.legendDot.exercises}></div>
          <Text size="sm" className={progressChartStyles.legendText}>
            Exercises Completed
          </Text>
        </div>
      </div>
    </Card>
  );
};
