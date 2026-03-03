"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Zap, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { aiInsights } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const typeConfig = {
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", border: "border-warning/20", label: "Avertissement" },
  prediction: { icon: TrendingUp, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20", label: "Prédiction" },
  optimization: { icon: Zap, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20", label: "Optimisation" },
};

export default function AIInsights() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Module IA</h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Analyses et prédictions intelligentes</p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-4">
          {(["warning", "prediction", "optimization"] as const).map((type) => {
            const cfg = typeConfig[type];
            const count = aiInsights.filter((i) => i.type === type).length;
            return (
              <motion.div key={type} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`${cfg.bg} border ${cfg.border} rounded-2xl p-4 text-center`}>
                <cfg.icon className={`h-5 w-5 ${cfg.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${cfg.color}`}>{count}</div>
                <div className="text-xs text-muted-foreground mt-1">{cfg.label}s</div>
              </motion.div>
            );
          })}
        </div>

        {/* Insights List */}
        <div className="space-y-3">
          {aiInsights.map((insight, i) => {
            const cfg = typeConfig[insight.type];
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded-xl ${cfg.bg} flex items-center justify-center flex-shrink-0`}>
                    <cfg.icon className={`h-5 w-5 ${cfg.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-foreground">{insight.title}</h3>
                      <Badge variant="outline" className={`text-xs ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                        {cfg.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-muted-foreground font-mono">Confiance : {insight.confidence}%</span>
                      <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
