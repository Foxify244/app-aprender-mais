"use client";

import { useState } from "react";
import { Sparkles, Trophy, Target, Users, TrendingUp, Star, Zap, Crown, ChevronRight, Play, Award, Flame, Coins, BookOpen, Brain, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Screen = "home" | "quiz" | "dashboard" | "minigames" | "reports" | "settings" | "pricing";

export default function AprenderMais() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium1" | "premium2">("free");

  // Tela Inicial - Landing Page
  if (currentScreen === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white overflow-hidden">
        {/* Header Premium */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FFD93D] to-[#FF6B9D] bg-clip-text text-transparent drop-shadow-lg">
                Aprender+
              </h1>
            </div>
            <Button 
              onClick={() => setCurrentScreen("pricing")}
              className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FFD93D]/30 text-sm sm:text-base px-4 sm:px-6"
            >
              <Crown className="w-4 h-4 mr-2" />
              Premium
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center space-y-6 sm:space-y-8">
              {/* Mascote Dinossauro */}
              <div className="relative inline-block">
                <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#FFD93D] via-[#FF6B9D] to-[#C06FF9] rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-[#FFD93D]/50">
                  <div className="w-28 h-28 sm:w-44 sm:h-44 bg-white rounded-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 sm:w-24 sm:h-24 text-[#FF6B9D]" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#FFD93D] rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight drop-shadow-lg">
                  Aprenda Brincando
                  <br />
                  <span className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B9D] to-[#C06FF9] bg-clip-text text-transparent">
                    Como Nunca Antes
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4 drop-shadow">
                  Transforme o aprendizado em uma aventura épica. Missões diárias, recompensas incríveis e progresso garantido.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  onClick={() => setCurrentScreen("quiz")}
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-white font-bold text-lg px-8 sm:px-12 py-6 sm:py-8 hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FFD93D]/40 w-full sm:w-auto"
                >
                  <Play className="w-6 h-6 mr-2" />
                  Começar Agora
                </Button>
                <Button 
                  onClick={() => setCurrentScreen("dashboard")}
                  size="lg"
                  className="bg-white/20 backdrop-blur text-white hover:bg-white/30 font-bold text-lg px-8 sm:px-12 py-6 sm:py-8 hover:scale-105 transition-all duration-300 border-2 border-white/30 w-full sm:w-auto"
                >
                  Ver Demo
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Trophy, title: "Gamificação Total", desc: "Badges, streaks e recompensas", color: "#FFD93D" },
                { icon: Brain, title: "Aprendizado Adaptativo", desc: "Conteúdo personalizado", color: "#4E9FFF" },
                { icon: Flame, title: "Sequências Diárias", desc: "Mantenha o ritmo vivo", color: "#FF6B9D" },
                { icon: Users, title: "Comunidade Ativa", desc: "Aprenda com amigos", color: "#6BCF7F" }
              ].map((feature, i) => (
                <Card key={i} className="bg-white/20 backdrop-blur border-white/30 p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className={`w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/10 backdrop-blur">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: "50K+", label: "Alunos Ativos" },
                { value: "1M+", label: "Lições Completas" },
                { value: "98%", label: "Satisfação" },
                { value: "24/7", label: "Suporte" }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="text-3xl sm:text-5xl font-bold text-[#FFD93D] drop-shadow-lg">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-white/20 backdrop-blur border-white/30 p-8 sm:p-12 text-center space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold drop-shadow">Pronto para Decolar?</h3>
              <p className="text-lg sm:text-xl text-white/90">
                Junte-se a milhares de crianças que já transformaram o aprendizado em diversão
              </p>
              <Button 
                onClick={() => setCurrentScreen("quiz")}
                size="lg"
                className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-white font-bold text-lg px-12 py-8 hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FFD93D]/40"
              >
                <Rocket className="w-6 h-6 mr-2" />
                Iniciar Jornada Gratuita
              </Button>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  // Quiz Inicial
  if (currentScreen === "quiz") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white p-4 sm:p-6 flex items-center justify-center">
        <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 md:p-12 max-w-2xl w-full space-y-6 sm:space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow">Vamos Conhecer Você!</h2>
            <p className="text-base sm:text-lg text-white/90">Personalize sua jornada de aprendizado</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Qual é o seu nome?</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 sm:py-4 bg-white/30 backdrop-blur border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD93D] transition-all text-base sm:text-lg placeholder:text-white/60"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Quantos anos você tem?</label>
              <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                placeholder="Sua idade"
                className="w-full px-4 py-3 sm:py-4 bg-white/30 backdrop-blur border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD93D] transition-all text-base sm:text-lg placeholder:text-white/60"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">O que você quer aprender?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Matemática", "Português", "Ciências", "Inglês"].map((subject) => (
                  <Button
                    key={subject}
                    className="bg-white/30 backdrop-blur hover:bg-white/40 border-2 border-white/40 hover:border-[#FFD93D] transition-all py-5 sm:py-6 text-sm sm:text-base font-bold"
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Button 
            onClick={() => setCurrentScreen("dashboard")}
            size="lg"
            className="w-full bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-white font-bold text-base sm:text-lg py-6 sm:py-8 hover:scale-105 transition-all duration-300"
            disabled={!userName || !userAge}
          >
            Começar Aventura
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          <button 
            onClick={() => setCurrentScreen("home")}
            className="w-full text-center text-sm text-white/80 hover:text-white transition-colors"
          >
            Voltar
          </button>
        </Card>
      </div>
    );
  }

  // Dashboard Principal
  if (currentScreen === "dashboard") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white">
        {/* Header Dashboard */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold">Olá, {userName || "Explorador"}!</h2>
                  <p className="text-xs sm:text-sm text-white/80">Nível 5 • 2.450 XP</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-2 rounded-lg">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD93D]" />
                  <span className="text-sm sm:text-base font-bold">7</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-2 rounded-lg">
                  <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD93D]" />
                  <span className="text-sm sm:text-base font-bold">1.250</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
          {/* Missão Diária */}
          <Card className="bg-white/20 backdrop-blur border-white/30 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#FFD93D]" />
                  <h3 className="text-lg sm:text-xl font-bold">Missão Diária</h3>
                  <Badge className="bg-[#FFD93D] text-white text-xs font-bold">ATIVA</Badge>
                </div>
                <p className="text-sm sm:text-base text-white/90">Complete 3 lições de Matemática hoje</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span>Progresso: 2/3</span>
                    <span className="text-[#FFD93D] font-bold">67%</span>
                  </div>
                  <Progress value={67} className="h-2 bg-white/20" />
                </div>
              </div>
              <Button 
                onClick={() => setCurrentScreen("minigames")}
                className="bg-[#FFD93D] text-white hover:bg-[#FFA500] font-bold w-full sm:w-auto shadow-lg"
              >
                Continuar
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Trilhas de Aprendizado */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold drop-shadow">Suas Trilhas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: "Matemática Básica", progress: 75, lessons: 12, color: "#FFD93D", icon: Target },
                { title: "Português Divertido", progress: 45, lessons: 8, color: "#4E9FFF", icon: BookOpen },
                { title: "Ciências Naturais", progress: 30, lessons: 5, color: "#C06FF9", icon: Brain },
                { title: "Inglês para Iniciantes", progress: 60, lessons: 10, color: "#6BCF7F", icon: Sparkles }
              ].map((trail, i) => (
                <Card key={i} className="bg-white/20 backdrop-blur border-white/30 p-4 sm:p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <trail.icon className="w-6 h-6" style={{ color: trail.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">{trail.title}</h4>
                        <p className="text-xs sm:text-sm text-white/80">{trail.lessons} lições</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span>Progresso</span>
                      <span className="font-bold" style={{ color: trail.color }}>{trail.progress}%</span>
                    </div>
                    <Progress value={trail.progress} className="h-2 bg-white/20" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Conquistas Recentes */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold drop-shadow">Conquistas Recentes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { icon: Trophy, name: "Primeira Vitória", color: "#FFD93D" },
                { icon: Flame, name: "Sequência 7 Dias", color: "#FF6B9D" },
                { icon: Star, name: "100 Estrelas", color: "#4E9FFF" },
                { icon: Award, name: "Mestre da Matemática", color: "#6BCF7F" },
                { icon: Shield, name: "Defensor do Saber", color: "#C06FF9" },
                { icon: Crown, name: "Rei do Quiz", color: "#FFD93D" }
              ].map((badge, i) => (
                <Card key={i} className="bg-white/20 backdrop-blur border-white/30 p-3 sm:p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer text-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-2`}>
                    <badge.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: badge.color }} />
                  </div>
                  <p className="text-xs font-medium">{badge.name}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 p-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-5 gap-2">
                {[
                  { icon: Target, label: "Início", screen: "dashboard" as Screen },
                  { icon: Play, label: "Jogar", screen: "minigames" as Screen },
                  { icon: TrendingUp, label: "Relatórios", screen: "reports" as Screen },
                  { icon: Crown, label: "Premium", screen: "pricing" as Screen },
                  { icon: Users, label: "Perfil", screen: "settings" as Screen }
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentScreen(item.screen)}
                    className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${
                      currentScreen === item.screen 
                        ? "bg-[#FFD93D]/30 text-[#FFD93D]" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Minigames
  if (currentScreen === "minigames") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white pb-24">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentScreen("dashboard")} className="text-white/80 hover:text-white">
              ← Voltar
            </button>
            <h2 className="text-lg sm:text-xl font-bold">Minigames</h2>
            <div className="w-16" />
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
          <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 text-center space-y-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-full flex items-center justify-center mx-auto animate-pulse shadow-2xl">
              <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold drop-shadow">Quiz de Matemática</h3>
            <p className="text-base sm:text-lg text-white/90">Responda 10 perguntas e ganhe 100 moedas!</p>
            <Button size="lg" className="bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-white font-bold text-base sm:text-lg px-8 py-6 shadow-lg">
              Começar Agora
            </Button>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Caça Palavras", desc: "Encontre as palavras escondidas", color: "#FFD93D", icon: BookOpen },
              { title: "Memória Mágica", desc: "Teste sua memória visual", color: "#4E9FFF", icon: Brain },
              { title: "Corrida Matemática", desc: "Resolva e corra contra o tempo", color: "#FF6B9D", icon: Zap },
              { title: "Quebra-Cabeça", desc: "Monte a imagem completa", color: "#6BCF7F", icon: Target },
              { title: "Ditado Divertido", desc: "Escreva as palavras corretamente", color: "#C06FF9", icon: Sparkles },
              { title: "Desafio Científico", desc: "Experimentos virtuais", color: "#FFD93D", icon: Rocket }
            ].map((game, i) => (
              <Card key={i} className="bg-white/20 backdrop-blur border-white/30 p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className={`w-16 h-16 rounded-2xl bg-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <game.icon className="w-8 h-8" style={{ color: game.color }} />
                </div>
                <h4 className="text-lg font-bold mb-2">{game.title}</h4>
                <p className="text-sm text-white/80 mb-4">{game.desc}</p>
                <Button className="w-full bg-white/30 hover:bg-white/40 border-2 border-white/40 font-bold">
                  Jogar
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Relatórios para Pais
  if (currentScreen === "reports") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white pb-24">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentScreen("dashboard")} className="text-white/80 hover:text-white">
              ← Voltar
            </button>
            <h2 className="text-lg sm:text-xl font-bold">Relatórios</h2>
            <div className="w-16" />
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/20 backdrop-blur p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#FFD93D] data-[state=active]:text-white">
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-[#FFD93D] data-[state=active]:text-white">
                Desempenho
              </TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-[#FFD93D] data-[state=active]:text-white">
                Atividade
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Tempo Total", value: "24h 30m", icon: Target, color: "#FFD93D" },
                  { label: "Lições Completas", value: "47", icon: Trophy, color: "#4E9FFF" },
                  { label: "Sequência Atual", value: "7 dias", icon: Flame, color: "#FF6B9D" },
                  { label: "Moedas Ganhas", value: "1.250", icon: Coins, color: "#6BCF7F" }
                ].map((stat, i) => (
                  <Card key={i} className="bg-white/20 backdrop-blur border-white/30 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </Card>
                ))}
              </div>

              <Card className="bg-white/20 backdrop-blur border-white/30 p-6">
                <h3 className="text-xl font-bold mb-4">Progresso por Matéria</h3>
                <div className="space-y-4">
                  {[
                    { subject: "Matemática", progress: 75, color: "#FFD93D" },
                    { subject: "Português", progress: 60, color: "#4E9FFF" },
                    { subject: "Ciências", progress: 45, color: "#FF6B9D" },
                    { subject: "Inglês", progress: 30, color: "#6BCF7F" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{item.subject}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2 bg-white/20" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6 mt-6">
              <Card className="bg-white/20 backdrop-blur border-white/30 p-6">
                <h3 className="text-xl font-bold mb-4">Desempenho Semanal</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[40, 65, 55, 80, 70, 90, 85].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-[#FFD93D] to-[#FF6B9D] rounded-t-lg transition-all duration-500 hover:opacity-80"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-white/80">
                        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-white/20 backdrop-blur border-white/30 p-6">
                <h3 className="text-xl font-bold mb-4">Pontos Fortes</h3>
                <div className="space-y-3">
                  {[
                    { skill: "Resolução de Problemas", level: "Excelente", color: "#FFD93D" },
                    { skill: "Leitura e Interpretação", level: "Muito Bom", color: "#4E9FFF" },
                    { skill: "Raciocínio Lógico", level: "Bom", color: "#FF6B9D" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
                      <span className="text-sm">{item.skill}</span>
                      <Badge style={{ backgroundColor: item.color, color: "white" }} className="font-bold">
                        {item.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6 mt-6">
              <Card className="bg-white/20 backdrop-blur border-white/30 p-6">
                <h3 className="text-xl font-bold mb-4">Atividades Recentes</h3>
                <div className="space-y-4">
                  {[
                    { activity: "Completou Quiz de Matemática", time: "Há 2 horas", icon: Trophy, color: "#FFD93D" },
                    { activity: "Ganhou badge 'Sequência 7 Dias'", time: "Há 5 horas", icon: Award, color: "#FF6B9D" },
                    { activity: "Terminou trilha de Português", time: "Ontem", icon: Star, color: "#4E9FFF" },
                    { activity: "Jogou Memória Mágica", time: "Ontem", icon: Play, color: "#6BCF7F" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                      <div className={`w-12 h-12 rounded-full bg-white/30 flex items-center justify-center`}>
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.activity}</p>
                        <p className="text-sm text-white/80">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  // Tela de Pricing
  if (currentScreen === "pricing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white pb-24">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentScreen("home")} className="text-white/80 hover:text-white">
              ← Voltar
            </button>
            <h2 className="text-lg sm:text-xl font-bold">Planos Premium</h2>
            <div className="w-16" />
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
              Escolha Seu Plano
              <br />
              <span className="text-[#FFD93D]">
                E Turbine o Aprendizado
              </span>
            </h2>
            <p className="text-lg text-white/90">
              Desbloqueie todo o potencial do Aprender+ com recursos exclusivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Plano Gratuito */}
            <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 space-y-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Gratuito</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">R$ 0</span>
                  <span className="text-white/80">/mês</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Acesso limitado às trilhas",
                  "3 minigames básicos",
                  "Anúncios ocasionais",
                  "Relatórios básicos",
                  "Progressão lenta"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-white/60">•</span>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-white/30 hover:bg-white/40 border-2 border-white/40 font-bold"
                onClick={() => setCurrentScreen("dashboard")}
              >
                Começar Grátis
              </Button>
            </Card>

            {/* Plano Premium 1 */}
            <Card className="bg-white/30 backdrop-blur border-white/40 p-6 sm:p-8 space-y-6 hover:scale-105 transition-all duration-300 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD93D] text-white font-bold">
                POPULAR
              </Badge>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#FFD93D]">R$ 29,99</span>
                  <span className="text-white/80">/mês</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Acesso completo às trilhas",
                  "Todos os minigames",
                  "Sem anúncios",
                  "Relatórios detalhados",
                  "Progressão 2x mais rápida",
                  "Suporte prioritário"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#FFD93D]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-gradient-to-r from-[#FFD93D] to-[#FFA500] text-white font-bold hover:scale-105 shadow-lg"
                onClick={() => {
                  setSelectedPlan("premium1");
                  setCurrentScreen("dashboard");
                }}
              >
                Assinar Premium
              </Button>
            </Card>

            {/* Plano Premium MAX */}
            <Card className="bg-white/30 backdrop-blur border-white/40 p-6 sm:p-8 space-y-6 hover:scale-105 transition-all duration-300 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C06FF9] to-[#FF6B9D] text-white font-bold">
                PREMIUM MAX
              </Badge>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Premium MAX</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#C06FF9]">R$ 59,99</span>
                  <span className="text-white/80">/mês</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Tudo do Premium +",
                  "Acesso antecipado a novos conteúdos",
                  "Personalização avançada do mascote",
                  "Suporte via chat 24/7",
                  "Sessões ao vivo com educadores",
                  "Certificados digitais",
                  "Área VIP na comunidade"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Crown className="w-4 h-4 text-[#C06FF9] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-gradient-to-r from-[#C06FF9] to-[#FF6B9D] text-white font-bold hover:scale-105 shadow-lg"
                onClick={() => {
                  setSelectedPlan("premium2");
                  setCurrentScreen("dashboard");
                }}
              >
                Assinar Premium MAX
              </Button>
            </Card>
          </div>

          {/* Garantia */}
          <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 max-w-3xl mx-auto text-center space-y-4">
            <Shield className="w-16 h-16 text-[#FFD93D] mx-auto" />
            <h3 className="text-2xl font-bold">Garantia de 7 Dias</h3>
            <p className="text-white/90">
              Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas. Experimente sem riscos!
            </p>
          </Card>
        </div>
      </div>
    );
  }

  // Configurações
  if (currentScreen === "settings") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF6B9D] via-[#C06FF9] to-[#4E9FFF] text-white pb-24">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentScreen("dashboard")} className="text-white/80 hover:text-white">
              ← Voltar
            </button>
            <h2 className="text-lg sm:text-xl font-bold">Configurações</h2>
            <div className="w-16" />
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 max-w-2xl">
          {/* Perfil */}
          <Card className="bg-white/20 backdrop-blur border-white/30 p-6 space-y-4">
            <h3 className="text-xl font-bold">Perfil</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold">{userName || "Explorador"}</h4>
                <p className="text-sm text-white/80">Nível 5 • 2.450 XP</p>
                <Badge className="mt-2 bg-[#FFD93D] text-white font-bold">
                  {selectedPlan === "premium2" ? "Premium MAX" : selectedPlan === "premium1" ? "Premium" : "Gratuito"}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Personalização do Mascote */}
          <Card className="bg-white/20 backdrop-blur border-white/30 p-6 space-y-4">
            <h3 className="text-xl font-bold">Personalizar Mascote</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Amarelo", gradient: "from-[#FFD93D] to-[#FFA500]" },
                { name: "Rosa", gradient: "from-[#FF6B9D] to-[#FF1493]" },
                { name: "Roxo", gradient: "from-[#C06FF9] to-[#8000FF]" },
                { name: "Azul", gradient: "from-[#4E9FFF] to-[#0080FF]" },
                { name: "Verde", gradient: "from-[#6BCF7F] to-[#00FF00]" },
                { name: "Laranja", gradient: "from-[#FF6347] to-[#FF4500]" }
              ].map((color, i) => (
                <button
                  key={i}
                  className="aspect-square rounded-xl bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-[#FFD93D] transition-all flex items-center justify-center"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color.gradient} shadow-lg`} />
                </button>
              ))}
            </div>
          </Card>

          {/* Assinatura */}
          <Card className="bg-white/20 backdrop-blur border-white/30 p-6 space-y-4">
            <h3 className="text-xl font-bold">Assinatura</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Plano Atual</span>
                <span className="font-bold">
                  {selectedPlan === "premium2" ? "Premium MAX" : selectedPlan === "premium1" ? "Premium" : "Gratuito"}
                </span>
              </div>
              {selectedPlan !== "free" && (
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Próxima Cobrança</span>
                  <span className="font-bold">15/02/2024</span>
                </div>
              )}
              <Button 
                onClick={() => setCurrentScreen("pricing")}
                className="w-full bg-white/30 hover:bg-white/40 border-2 border-white/40 font-bold"
              >
                {selectedPlan === "free" ? "Fazer Upgrade" : "Gerenciar Plano"}
              </Button>
            </div>
          </Card>

          {/* Notificações */}
          <Card className="bg-white/20 backdrop-blur border-white/30 p-6 space-y-4">
            <h3 className="text-xl font-bold">Notificações</h3>
            <div className="space-y-3">
              {[
                "Lembrete de missões diárias",
                "Conquistas desbloqueadas",
                "Novos conteúdos disponíveis",
                "Mensagens da comunidade"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
                  <span className="text-sm">{item}</span>
                  <div className="w-12 h-6 bg-[#FFD93D] rounded-full relative cursor-pointer shadow-lg">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Logout */}
          <Button 
            onClick={() => setCurrentScreen("home")}
            className="w-full bg-red-500/30 hover:bg-red-500/40 text-white border-2 border-red-500/40 font-bold"
          >
            Sair da Conta
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
