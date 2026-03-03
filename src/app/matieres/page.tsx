"use client";

import { motion } from "framer-motion";
import { BookMarked, Search, Plus, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock Data for "Matières"
const matieresData = [
    { id: 1, name: "Algorithmique Avancée", code: "CS201", credits: 6, hetd: 45, cm: 15, td: 15, tp: 15 },
    { id: 2, name: "Intelligence Artificielle", code: "CS305", credits: 5, hetd: 40, cm: 20, td: 10, tp: 10 },
    { id: 3, name: "Base de Données Relationnelles", code: "CS210", credits: 4, hetd: 35, cm: 10, td: 10, tp: 15 },
    { id: 4, name: "Réseaux Informatiques", code: "IT202", credits: 5, hetd: 42, cm: 18, td: 12, tp: 12 },
    { id: 5, name: "Développement Web", code: "CS105", credits: 4, hetd: 30, cm: 10, td: 5, tp: 15 },
];

export default function Matieres() {
    const [search, setSearch] = useState("");

    const filtered = matieresData.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                            <BookMarked className="h-6 w-6 text-primary" /> Catalogue des Matières
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">Gérez le dictionnaire des modules (CM, TD, TP, ECTS)</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher une matière..."
                                className="pl-9 bg-secondary border-border h-9 text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                            <Plus className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Ajouter</span>
                        </Button>
                    </div>
                </div>

                {/* Catalog Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-secondary/30 text-xs uppercase font-medium text-muted-foreground border-b border-border">
                                <tr>
                                    <th className="px-5 py-3">Code</th>
                                    <th className="px-5 py-3">Intitulé de la matière</th>
                                    <th className="px-5 py-3 text-center">Crédits (ECTS)</th>
                                    <th className="px-5 py-3 text-center">HETD</th>
                                    <th className="px-5 py-3 hidden md:table-cell text-center">CM</th>
                                    <th className="px-5 py-3 hidden md:table-cell text-center">TD</th>
                                    <th className="px-5 py-3 hidden md:table-cell text-center">TP</th>
                                    <th className="px-5 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((matiere, i) => (
                                    <motion.tr
                                        key={matiere.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                                    >
                                        <td className="px-5 py-4 font-mono text-muted-foreground">
                                            {matiere.code}
                                        </td>
                                        <td className="px-5 py-4 font-medium text-foreground">
                                            {matiere.name}
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                                                {matiere.credits} ECTS
                                            </Badge>
                                        </td>
                                        <td className="px-5 py-4 text-center font-mono">
                                            {matiere.hetd}h
                                        </td>
                                        <td className="px-5 py-4 text-center text-muted-foreground hidden md:table-cell">{matiere.cm}h</td>
                                        <td className="px-5 py-4 text-center text-muted-foreground hidden md:table-cell">{matiere.td}h</td>
                                        <td className="px-5 py-4 text-center text-muted-foreground hidden md:table-cell">{matiere.tp}h</td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                    <Edit2 className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={8} className="px-5 py-8 text-center text-muted-foreground">
                                            Aucune matière trouvée.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
