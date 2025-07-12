import { useEffect, useRef } from 'react';
import { ArrowDown, Star, CheckCircle, Clock, Shield, Zap, RotateCcw } from 'lucide-react';
import VSLEmbed from '../components/mystical/VSLEmbed';
import CountdownTimer from '../components/mystical/CountdownTimer';
import FakeTestimonials from '../components/mystical/FakeTestimonials';
import FAQ from '../components/mystical/FAQ';
import { BuziosIcon, MysticalSmokeIcon, RitualSymbolIcon, CandleIcon, MoonPhasesIcon, CrystalIcon } from '../components/mystical/MysticalIcons';
import heroBackground from '../assets/hero-mystical-bg.jpg';

const OdusVIP = () => {
  const offerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('[OdusLanding] Page loaded');
    
    // Add scroll event listener for analytics
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        console.log('[OdusLanding] User scrolled past 50%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    console.log('[OdusLanding] Scroll to offer clicked');
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFAQ = () => {
    console.log('[OdusLanding] Scroll to FAQ clicked');
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckoutClick = () => {
    console.log('[OdusLanding] Checkout button clicked');
    window.open('https://go.pepperpay.com.br/vykly', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 23, 0.8), rgba(15, 15, 23, 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 opacity-10">
            <MysticalSmokeIcon className="w-32 h-32 text-primary animate-pulse" />
          </div>
          <div className="absolute top-3/4 right-1/4 opacity-10">
            <RitualSymbolIcon className="w-24 h-24 text-primary" />
          </div>
          <div className="absolute top-1/2 left-1/6 opacity-10">
            <CandleIcon className="w-16 h-16 text-primary" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Header Icons */}
          <div className="flex justify-center space-x-6 mb-8 fade-in">
            <BuziosIcon className="w-8 h-8 text-primary" />
            <MoonPhasesIcon className="w-8 h-8 text-primary" />
            <CrystalIcon className="w-8 h-8 text-primary" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gradient-gold mb-6 fade-in leading-tight">
            Assista agora e desbloqueie o
            <span className="block text-primary">Ritual Proibido</span>
            que vai transformar seus caminhos
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in font-light">
            Descubra os segredos milenares que podem mudar sua vida para sempre
          </p>

          {/* VSL Container */}
          <div className="max-w-3xl mx-auto mb-8 fade-in">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-mystical">
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/mo4cbfio4e.js" async type="module"></script>
              <style dangerouslySetInnerHTML={{
                __html: `wistia-player[media-id='mo4cbfio4e']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/mo4cbfio4e/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top:177.78%; 
                }`
              }} />
              <wistia-player media-id="mo4cbfio4e" aspect="0.5625"></wistia-player>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToOffer}
            className="btn-mystical text-xl px-12 py-4 inline-flex items-center space-x-3 fade-in"
          >
            <span>Quero Meu Diagnóstico Agora</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-muted-foreground fade-in">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Garantia 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section ref={offerRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="card-mystical max-w-4xl mx-auto p-8 md:p-12">
            {/* Urgency Timer */}
            <div className="mb-8 flex justify-center">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">ATENÇÃO: Oferta por tempo limitado</p>
                <CountdownTimer 
                  initialMinutes={30} 
                  onExpire={() => console.log('[OdusLanding] Timer expired')} 
                />
                <p className="text-xs text-muted-foreground mt-2 pulse-glow p-2 rounded">
                  Apenas 11 diagnósticos disponíveis hoje
                </p>
              </div>
            </div>

            {/* Main Offer */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-4">
                Descubra o Ritual Proibido
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Diagnóstico 100% personalizado para desbloquear prosperidade, amor e proteção espiritual
              </p>
              
              {/* Price */}
              <div className="mb-8">
                <div className="text-sm text-muted-foreground line-through mb-2">
                  De R$ 197,00 por:
                </div>
                <div className="text-5xl font-playfair font-bold text-primary mb-2">
                  R$ 29,90
                </div>
                <div className="text-sm text-muted-foreground">
                  Menos de R$ 1,00 por dia durante um mês
                </div>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Diagnóstico personalizado completo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>Ritual específico para sua situação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Proteção espiritual incluída</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Acesso imediato por email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Suporte 24/7 durante 7 dias</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="w-5 h-5 text-primary" />
                    <span>Garantia total de reembolso</span>
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <button
                onClick={handleCheckoutClick}
                className="btn-mystical text-2xl px-16 py-6 w-full md:w-auto mb-6"
              >
                🔮 GARANTIR MEU DIAGNÓSTICO AGORA
              </button>

              <p className="text-sm text-muted-foreground">
                Pagamento 100% seguro • Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Veja Alguns Depoimentos
            </h2>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-mystical">
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/wann4rdobd.js" async type="module"></script>
                <style dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='wann4rdobd']:not(:defined) { 
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wann4rdobd/swatch'); 
                    display: block; 
                    filter: blur(5px); 
                    padding-top:176.67%; 
                  }`
                }} />
                <wistia-player media-id="wann4rdobd" aspect="0.5660377358490566"></wistia-player>
              </div>
            </div>
          </div>
          <FakeTestimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
            Última Chance de Transformar Sua Vida
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Não deixe essa oportunidade única passar. Milhares já transformaram suas vidas.
          </p>
          
          <button
            onClick={handleCheckoutClick}
            className="btn-mystical text-xl px-12 py-4 mb-6"
          >
            QUERO MINHA TRANSFORMAÇÃO AGORA
          </button>

          <div className="text-center">
            <button
              onClick={scrollToFAQ}
              className="btn-mystical-outline text-sm px-6 py-2"
            >
              Ainda tem dúvidas? Ver Perguntas Frequentes
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mystical-black py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <BuziosIcon className="w-6 h-6 text-primary opacity-50" />
            <MoonPhasesIcon className="w-6 h-6 text-primary opacity-50" />
            <CrystalIcon className="w-6 h-6 text-primary opacity-50" />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Ritual Odus VIP - Transformando vidas através da sabedoria ancestral
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Este produto não substitui orientação médica ou psicológica profissional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OdusVIP;