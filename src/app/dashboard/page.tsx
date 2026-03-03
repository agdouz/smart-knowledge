"use client";

import { Users, BookOpen, Activity, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { workloadData, performanceData, departmentDistribution, professorWorkloadChart } from "@/data/mockData";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 text-xs shadow-lg">
      <p className="text-muted-foreground">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-foreground font-medium">{p.name}: {p.value}</p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Aperçu du Département</h1>
          <p className="text-sm text-muted-foreground mt-1">Intelligence départementale en temps réel</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Professeurs" value={8} icon={Users} trend={{ value: 12, positive: true }} delay={0} />
          <StatCard title="Cours Actifs" value={21} icon={BookOpen} trend={{ value: 8, positive: true }} delay={0.1} />
          <StatCard title="Charge Moy." value="23h" subtitle="par semaine" icon={Activity} delay={0.2} />
          <StatCard title="Alertes IA" value={3} subtitle="action requise" icon={AlertTriangle} trend={{ value: 15, positive: false }} delay={0.3} />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Workload Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Charge de travail (HETD)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={professorWorkloadChart}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="hours" fill="hsl(192, 95%, 55%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="capacity" fill="hsl(222, 30%, 20%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Performance Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Tendances de Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} domain={[70, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="score" stroke="hsl(252, 80%, 65%)" strokeWidth={2} dot={{ fill: "hsl(252, 80%, 65%)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Dept Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Distribution par Département</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={departmentDistribution} dataKey="value" cx="50%" cy="50%" outerRadius={70} innerRadius={40} strokeWidth={0}>
                  {departmentDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {departmentDistribution.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <div className="h-2 w-2 rounded-full" style={{ background: d.fill }} />
                  <span className="text-muted-foreground truncate">{d.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-card border border-border rounded-2xl p-5 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Activité Hebdomadaire</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={workloadData}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="hours" fill="hsl(192, 95%, 55%)" radius={[6, 6, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
