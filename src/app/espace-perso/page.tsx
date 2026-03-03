"use client";

import { motion } from "framer-motion";
import { UserCircle, Mail, MapPin, Phone, GraduationCap, Briefcase, Award, Clock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Using the same Dr. Chen data as in mockData for the personal portal demo
const personalData = {
    name: "Dr. Sarah Chen",
    role: "Professeur Titulaire",
    department: "Informatique",
    specialty: "Machine Learning & AI",
    email: "s.chen@uni.edu",
    phone: "+1 (555) 234-5678",
    office: "Bâtiment A, Salle 305",
    avatar: "SC",
    bio: "Chercheuse principale en apprentissage automatique (Machine Learning) avec plus de 50 articles publiés. Spécialisée dans la recherche d'architecture neuronale (NAS) et l'apprentissage fédéré.",
    education: [
        { degree: "Doctorat en Informatique", institution: "Stanford University", year: "2015" },
        { degree: "Master en IA", institution: "MIT", year: "2011" },
    ],
    status: "Permanent", // 'Permanent' ou 'Vacataire'
    hetd: 42,
    maxHetd: 48,
};

export default function EspacePersonnel() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <UserCircle className="h-6 w-6 text-primary" /> Mon Espace
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">Gérez votre profil académique et vos disponibilités</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Identity Card */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-1 space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6 text-center">
                            <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-secondary">
                                <AvatarFallback className="bg-primary/10 text-primary text-2xl">{personalData.avatar}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-xl font-bold text-foreground">{personalData.name}</h2>
                            <p className="text-sm text-muted-foreground mb-4">{personalData.role}</p>

                            <div className="flex justify-center gap-2 mb-6">
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                    {personalData.status}
                                </Badge>
                                <Badge variant="outline" className="bg-secondary text-muted-foreground">
                                    {personalData.department}
                                </Badge>
                            </div>

                            <div className="space-y-3 text-left">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Mail className="h-4 w-4 shrink-0" />
                                    <span className="truncate">{personalData.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span>{personalData.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4 shrink-0" />
                                    <span>{personalData.office}</span>
                                </div>
                            </div>

                            <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                                Modifier le profil
                            </Button>
                        </div>

                        {/* Workload Snapshot */}
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-primary" /> État de la charge (HETD)
                                </h3>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Volume Actuel</span>
                                    <span className="font-semibold">{personalData.hetd}h</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Plafond</span>
                                    <span className="text-muted-foreground">{personalData.maxHetd}h</span>
                                </div>
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mt-2">
                                    <div
                                        className={`h-full rounded-full ${personalData.hetd > personalData.maxHetd ? 'bg-destructive' : 'bg-primary'}`}
                                        style={{ width: `${Math.min((personalData.hetd / personalData.maxHetd) * 100, 100)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Details & CV */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-foreground mb-4">Biographie</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {personalData.bio}
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                                    <GraduationCap className="h-5 w-5 text-primary" /> Parcours Académique
                                </h3>
                                <Button variant="outline" size="sm" className="h-8">Ajouter</Button>
                            </div>

                            <div className="space-y-6">
                                {personalData.education.map((edu, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                                                <Award className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-foreground">{edu.degree}</h4>
                                            <p className="text-sm text-primary">{edu.institution}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions / Availabilities */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors cursor-pointer group">
                                <Clock className="h-6 w-6 text-primary mb-3" />
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Mes Disponibilités</h4>
                                <p className="text-xs text-muted-foreground mt-1">Définissez vos créneaux horaires préférés pour le planning.</p>
                            </div>
                            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors cursor-pointer group">
                                <Briefcase className="h-6 w-6 text-accent mb-3" />
                                <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">Mes Projets / Encadrements</h4>
                                <p className="text-xs text-muted-foreground mt-1">Gérez vos PFE et vos groupes de recherche.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </DashboardLayout>
    );
}
