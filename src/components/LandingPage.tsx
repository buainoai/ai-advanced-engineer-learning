'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Code, Layout } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function LandingPage() {
    const t = useTranslations('HomePage');

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Navbar Placeholder */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tight">Generic<span className="text-primary">App</span></div>
                    <div className="flex gap-4">
                        {/* Locale switcher or other nav items could go here */}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto relative z-10 max-w-5xl text-center">
                    <div className="flex justify-center mb-6">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium rounded-full cursor-default border-primary/10 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                            {t('hero.badge')}
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        {t('hero.title')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">{t('hero.highlight')}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('hero.desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="rounded-full px-8 h-12 text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
                            {t('hero.start')} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-lg shadow-sm hover:bg-secondary/80 hover:text-foreground transition-all">
                            {t('hero.stickerBook')}
                        </Button>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 bg-gradient-to-tr from-blue-500 to-purple-500 blur-[100px] rounded-full z-0 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 bg-cyan-500 blur-[80px] rounded-full z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 bg-pink-500 blur-[80px] rounded-full z-0 pointer-events-none" />
            </section>

            {/* Features Section */}
            <section className="py-24 bg-muted/40">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border shadow-sm bg-card/80 backdrop-blur hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <CardHeader>
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 shadow-inner">
                                    <Zap className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl">{t('features.accurate')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">{t('features.accurateDesc')}</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border shadow-sm bg-card/80 backdrop-blur hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <CardHeader>
                                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-4 text-green-600 dark:text-green-400 shadow-inner">
                                    <Code className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl">{t('features.free')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">{t('features.freeDesc')}</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border shadow-sm bg-card/80 backdrop-blur hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <CardHeader>
                                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 shadow-inner">
                                    <Layout className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl">{t('features.characters')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">{t('features.charactersDesc')}</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something amazing?</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Get started with this template and launch your next project in minutes.
                        </p>
                        <Button size="lg" variant="secondary" className="rounded-full font-bold text-lg px-10 h-14 shadow-xl hover:shadow-2xl transition-all">
                            {t('hero.start')}
                        </Button>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t mt-auto text-center bg-background">
                <div className="container mx-auto px-6 text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Generic App. Made with ❤️.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/" className="hover:text-foreground transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
