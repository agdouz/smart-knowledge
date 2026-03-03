"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { professors } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Professors() {
  const [search, setSearch] = useState("");
  const filtered = professors.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const riskColor = (level: string) => {
    if (level === "Faible" || level === "Low") return "bg-success/10 text-success border-success/20";
    if (level === "Moyen" || level === "Medium") return "bg-warning/10 text-warning border-warning/20";
    return "bg-destructive/10 text-destructive border-destructive/20"; // Élevé / High
  };

  const translateRisk = (level: string) => {
    if (level === "Low") return "Faible";
    if (level === "Medium") return "Moyen";
    if (level === "High") return "Élevé";
    return level;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Professeurs</h1>
            <p className="text-sm text-muted-foreground mt-1">{professors.length} membres du corps professoral</p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher des professeurs..."
              className="pl-9 bg-secondary border-border h-9 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Nom</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 hidden md:table-cell">Spécialité</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Heures/Semaine</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 hidden lg:table-cell">Performance</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Risque</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((prof, i) => (
                  <motion.tr
                    key={prof.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="px-5 py-4">
                      <Link href={`/professors/${prof.id}`} className="flex items-center gap-3 group">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">{prof.avatar}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{prof.name}</span>
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground hidden md:table-cell">{prof.specialty}</td>
                    <td className="px-5 py-4 text-sm text-foreground font-mono hidden sm:table-cell">{prof.weeklyHours}h</td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${prof.performanceScore}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">{prof.performanceScore}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant="outline" className={`text-xs ${riskColor(prof.riskLevel)}`}>
                        {translateRisk(prof.riskLevel)}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
