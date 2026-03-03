"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Plus, Minus, TrendingUp, Play, RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { professors } from "@/data/mockData";

interface SimResult {
  metric: string;
  before: number;
  after: number;
  change: number;
  status: "positive" | "negative" | "neutral";
}

export default function SimulationLab() {
  const [newCourse, setNewCourse] = useState("");
  const [removeProfessor, setRemoveProfessor] = useState("");
  const [workloadIncrease, setWorkloadIncrease] = useState([0]);
  const [results, setResults] = useState<SimResult[] | null>(null);
  const [running, setRunning] = useState(false);

  const runSimulation = () => {
    setRunning(true);
    setResults(null);
    setTimeout(() => {
      const hasNewCourse = newCourse.trim().length > 0;
      const hasRemovedProf = removeProfessor.length > 0;
      const increase = workloadIncrease[0];

      const simResults: SimResult[] = [
        { metric: "Charge Moy. (h/semaine)", before: 23, after: 23 + increase + (hasNewCourse ? 3 : 0) + (hasRemovedProf ? 4 : 0), change: 0, status: "neutral" },
        { metric: "Performance Globale", before: 87, after: Math.max(60, 87 - increase * 1.5 - (hasRemovedProf ? 5 : 0)), change: 0, status: "neutral" },
        { metric: "Risque de Burn-out (%)", before: 18, after: Math.min(80, 18 + increase * 2 + (hasRemovedProf ? 12 : 0) + (hasNewCourse ? 5 : 0)), change: 0, status: "neutral" },
        { metric: "Satisfaction Étudiants", before: 4.2, after: Math.max(2.5, 4.2 - increase * 0.1 - (hasRemovedProf ? 0.3 : 0)), change: 0, status: "neutral" },
      ];

      simResults.forEach((r) => {
        r.change = Math.round(((r.after - r.before) / r.before) * 100);
        r.after = Math.round(r.after * 10) / 10;
        if (r.metric.includes("Burn-out")) {
          r.status = r.change > 10 ? "negative" : r.change < 0 ? "positive" : "neutral";
        } else {
          r.status = r.change > 0 && !r.metric.includes("Charge") ? "positive" : r.change < -5 ? "negative" : "neutral";
          if (r.metric.includes("Charge")) r.status = r.change > 15 ? "negative" : "neutral";
        }
      });

      setResults(simResults);
      setRunning(false);
    }, 1500);
  };

  const reset = () => {
    setNewCourse("");
    setRemoveProfessor("");
    setWorkloadIncrease([0]);
    setResults(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Laboratoire de Simulation</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Testez des scénarios hypothétiques en toute sécurité</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Controls */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6 space-y-6">
            <h3 className="text-sm font-semibold text-foreground">Paramètres du Scénario</h3>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground flex items-center gap-2">
                <Plus className="h-3 w-3" /> Ajouter un Cours
              </Label>
              <Input
                placeholder="ex. Robotique Avancée"
                className="bg-secondary border-border"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground flex items-center gap-2">
                <Minus className="h-3 w-3" /> Retirer un Professeur
              </Label>
              <Select value={removeProfessor} onValueChange={setRemoveProfessor}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Sélectionner un professeur..." />
                </SelectTrigger>
                <SelectContent>
                  {professors.map((p) => (
                    <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-xs text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-3 w-3" /> Augmentation de Charge : +{workloadIncrease[0]}h/semaine
              </Label>
              <Slider value={workloadIncrease} onValueChange={setWorkloadIncrease} max={15} step={1} className="py-2" />
            </div>

            <div className="flex gap-3">
              <Button onClick={runSimulation} disabled={running} className="flex-1 bg-primary text-primary-foreground gap-2 rounded-xl">
                <Play className="h-4 w-4" /> {running ? "Simulation en cours..." : "Lancer la Simulation"}
              </Button>
              <Button variant="outline" onClick={reset} className="gap-2 rounded-xl border-border">
                <RotateCcw className="h-4 w-4" /> Réinitialiser
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Résultats de la Simulation</h3>

            {!results && !running && (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                <FlaskConical className="h-10 w-10 mb-3 opacity-30" />
                <p className="text-sm">Configurez les paramètres et lancez une simulation</p>
              </div>
            )}

            {running && (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="h-10 w-10 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-sm text-muted-foreground">Simulation IA en cours...</p>
              </div>
            )}

            <AnimatePresence>
              {results && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  {results.map((r, i) => (
                    <motion.div
                      key={r.metric}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl"
                    >
                      <div>
                        <p className="text-sm text-foreground">{r.metric}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-muted-foreground font-mono">{r.before}</span>
                          <span className="text-xs text-muted-foreground">→</span>
                          <span className="text-xs text-foreground font-mono font-medium">{r.after}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-medium ${r.status === "positive" ? "text-success" : r.status === "negative" ? "text-destructive" : "text-muted-foreground"}`}>
                          {r.change > 0 ? "+" : ""}{r.change}%
                        </span>
                        {r.status === "negative" ? (
                          <AlertTriangle className="h-4 w-4 text-destructive" />
                        ) : r.status === "positive" ? (
                          <CheckCircle2 className="h-4 w-4 text-success" />
                        ) : null}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
