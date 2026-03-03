"use client";

import { motion } from "framer-motion";
import { GraduationCap, Search, Plus, Users, BookOpen } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock Data for "Filières"
const filieresData = [
    { id: 1, name: "Génie Informatique & Réseaux", code: "GIR", level: "Cycle d'Ingénieur", students: 340, activeCourses: 24 },
    { id: 2, name: "Ingénierie de l'Intelligence Artificielle", code: "IIA", level: "Cycle d'Ingénieur", students: 215, activeCourses: 18 },
    { id: 3, name: "Ingénierie Financière et Audit", code: "IFA", level: "Cycle d'Ingénieur", students: 180, activeCourses: 15 },
    { id: 4, name: "Classe Préparatoire Intégrée", code: "CP", level: "Classes Préparatoires", students: 450, activeCourses: 12 },
];

export default function Filieres() {
    const [search, setSearch] = useState("");

    const filtered = filieresData.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary" /> Gestion des Filières
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">Supervisez les programmes académiques</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher une filière..."
                                className="pl-9 bg-secondary border-border h-9 text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                            <Plus className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Nouvelle Filière</span>
                        </Button>
                    </div>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((filiere, i) => (
                        <motion.div
                            key={filiere.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold text-lg">{filiere.code}</span>
                                </div>
                                <Badge variant="outline" className="bg-secondary text-xs">
                                    {filiere.level}
                                </Badge>
                            </div>

                            <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
                                {filiere.name}
                            </h3>

                            <div className="mt-auto pt-6 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Users className="h-4 w-4" /> Étudiants Inscrits
                                    </div>
                                    <span className="font-medium text-foreground">{filiere.students}</span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <BookOpen className="h-4 w-4" /> Matières Actives
                                    </div>
                                    <span className="font-medium text-foreground">{filiere.activeCourses}</span>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full mt-6 border-border hover:bg-secondary">
                                Gérer le Curriculum
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
