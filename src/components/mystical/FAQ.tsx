import { useState } from 'react';
import { ChevronDown, Shield, Clock, Heart, RefreshCw } from 'lucide-react';

const faqData = [
  {
    question: "Este ritual é seguro? Não vai me prejudicar?",
    answer: "Completamente seguro! Nosso ritual é baseado em tradições milenares de proteção e prosperidade. Milhares de pessoas já experienciaram transformações positivas sem qualquer efeito negativo.",
    icon: Shield
  },
  {
    question: "Como recebo meu diagnóstico personalizado?",
    answer: "Após o pagamento, você recebe instantaneamente por email seu diagnóstico completo com orientações específicas para sua situação atual. Todo o processo é 100% digital e imediato.",
    icon: Clock
  },
  {
    question: "Isso realmente funciona ou é só placebo?",
    answer: "Os resultados são reais e comprovados por centenas de relatos. Nosso método combina sabedoria ancestral com técnicas modernas de manifestação. Você sentirá as mudanças já nos primeiros dias.",
    icon: Heart
  },
  {
    question: "E se não funcionar comigo? Posso pedir reembolso?",
    answer: "Sim! Oferecemos garantia total de 7 dias. Se por qualquer motivo não ficar satisfeito(a), devolvemos 100% do seu investimento sem questionamentos.",
    icon: RefreshCw
  },
  {
    question: "Por que o preço está tão baixo?",
    answer: "Esta é uma promoção especial e limitada. Queremos que mais pessoas tenham acesso a essa transformação. Depois de hoje, o valor volta ao normal de R$ 197,00.",
    icon: Clock
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    console.log('[OdusLanding] FAQ question toggled:', index);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-playfair font-bold text-center text-primary mb-8">
        Perguntas Frequentes
      </h2>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((faq, index) => {
          const Icon = faq.icon;
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className="card-mystical hover:glow-effect transition-all duration-300 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="font-playfair font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
              
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-border fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;