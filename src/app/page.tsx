"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, BarChart3, Shield, Calendar, Users, Zap, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/academic-hero.png";
import landingDashboard from "@/assets/academic-dashboard.png";
import landingAi from "@/assets/academic-lab.png";
import landingSchedule from "@/assets/academic-schedule.png";
import customLogo from "@/assets/smart-knowledge-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const features = [
  { icon: Brain, title: "Analyses de l'IA", desc: "Des modèles d'apprentissage profond analysent la charge de travail, les performances et les facteurs de risque." },
  { icon: BarChart3, title: "Planification Intelligente", desc: "Distribution optimisée des cours maximisant l'efficacité des professeurs et des étudiants." },
  { icon: Shield, title: "Prédiction des Risques", desc: "Détection précoce des épuisements, de la baisse de performance et des goulots d'étranglement." },
  { icon: Calendar, title: "Emploi du temps IA", desc: "Génération automatique d'emploi du temps éliminant les conflits et optimisant l'allocation des salles." },
  { icon: Users, title: "Gestion du Corps Professoral", desc: "Profils complets des professeurs avec CV, publications et suivi des performances." },
  { icon: Zap, title: "Laboratoire de Simulation", desc: "Testez des scénarios hypothétiques avant d'apporter des changements à votre département." },
];

const stats = [
  { value: "98%", label: "Optimisation de l'Emploi du temps" },
  { value: "40%", label: "Réduction des Conflits" },
  { value: "8+", label: "Modèles IA Actifs" },
  { value: "24/7", label: "Surveillance en Temps Réel" },
];

const howItWorks = [
  { step: "01", title: "Connectez vos Données", desc: "Importez les profils, les cours et les emplois du temps dans la plateforme." },
  { step: "02", title: "L'IA Analyse", desc: "Nos modèles détectent les déséquilibres, les conflits et les opportunités d'optimisation." },
  { step: "03", title: "Obtenez des Insights", desc: "Recevez des recommandations, des alertes de risque et des plannings optimisés." },
  { step: "04", title: "Implémentez", desc: "Appliquez les changements et suivez les améliorations avec nos tableaux de bord." },
];

const testimonials = [
  { name: "Prof. Marie Laurent", role: "Doyenne, Informatique", quote: "Smart Knowledge a réduit nos conflits horaires de 40% dès le premier semestre.", rating: 5 },
  { name: "Dr. Ahmed Benkhedda", role: "Chef de Département de Recherche IA", quote: "La prédiction du burn-out nous a permis de sauver deux de nos meilleurs chercheurs.", rating: 5 },
  { name: "Prof. Tanaka Hiroshi", role: "Vice-Président, Affaires Académiques", quote: "Enfin un outil qui comprend la complexité de la gestion universitaire.", rating: 5 },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center overflow-hidden bg-white">
            <img src={customLogo.src} alt="Smart Knowledge Logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block h-6 w-px bg-border"></div>
          <span className="font-semibold text-foreground tracking-tight hidden sm:block">Smart Knowledge</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">Comment ça marche</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Témoignages</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex border-border text-foreground hover:bg-secondary">
              Accéder au tableau de bord
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 lg:pt-32 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary mb-6 font-medium">
            <Sparkles className="h-3 w-3" />
            Empowering Modern Universities with AI
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">L'Excellence Académique</span>
            <br />
            <span className="text-primary">& Gestion Intelligente</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            L'optimisation académique intelligente propulsée par l'IA. Prévoyez les risques, optimisez les
            emplois du temps et dotez votre corps professoral d'insights basés sur les données.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 gap-2 shadow-lg shadow-primary/20">
                Accéder au Tableau de bord
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary rounded-xl px-8">
                En savoir plus
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="rounded-2xl overflow-hidden border border-border glow-md">
            <img src={heroBg.src} alt="AI-powered department visualization" className="w-full h-auto" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Tout ce dont vous avez besoin</h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">Outils complets pour la gestion moderne des départements universitaires.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase sections with images */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24 space-y-24">
        {/* Dashboard */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-4">
              <BarChart3 className="h-3 w-3 text-primary" /> Tableau de Bord Temps Réel
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Visualisation Intelligente des Données</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Surveillez la charge de travail, les tendances de performance et l'état du département en un coup d'œil.
              Nos tableaux de bord se mettent à jour en temps réel.
            </p>
            <ul className="space-y-2">
              {["Suivi de la charge de travail", "Analyse des performances", "KPIs Départementaux"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border glow-sm">
            <img src={landingDashboard.src} alt="Smart dashboard analytics" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-border glow-sm">
            <img src={landingAi.src} alt="AI brain neural network" className="w-full h-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-4">
              <Brain className="h-3 w-3 text-primary" /> Moteur IA
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Intelligence Prédictive</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nos modèles d'IA analysent les schémas pour prédire les risques de burn-out
              et suggérer des optimisations de ressources avant que les problèmes ne surviennent.
            </p>
            <ul className="space-y-2">
              {["Détection des risques d'épuisement", "Optimisation des ressources", "Alerte de conflits horaires"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-4">
              <Calendar className="h-3 w-3 text-primary" /> Planification Intelligente
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Emploi du temps Intelligent</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Génération d'horaires par l'IA qui résout automatiquement les conflits et
              équilibre la charge de travail entre le département.
            </p>
            <ul className="space-y-2">
              {["Résolution de conflits", "Optimisation des salles", "Correspondance des compétences"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border glow-sm">
            <img src={landingSchedule.src} alt="Smart schedule management" className="w-full h-auto" />
          </div>
        </motion.div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Comment ça marche</h2>
          <p className="text-muted-foreground mt-2">Quatre étapes simples pour transformer la gestion de votre département.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((s, i) => (
            <motion.div key={s.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 relative card-hover">
              <span className="text-4xl font-bold gradient-text opacity-30 absolute top-4 right-4 font-mono">{s.step}</span>
              <h4 className="font-semibold text-foreground mb-2 mt-4">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Ce que disent les Enseignants</h2>
          <p className="text-muted-foreground mt-2">Approuvé par notre équipe pédagogique.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-32 text-center">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="bg-card border border-border rounded-2xl p-10 glow-md">
          <h2 className="text-2xl font-bold text-foreground mb-3">Prêt à transformer votre département ?</h2>
          <p className="text-muted-foreground mb-6">Commencez dès aujourd'hui avec nos outils de gestion IA.</p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 gap-2 glow-sm">
              Commencer <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Département EMSI Intelligent</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Smart Knowledge. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
