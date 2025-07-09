import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria ●●●●",
    message: "Não acreditava, mas funcionou mesmo! Em 3 dias já senti as mudanças... 🙏✨",
    time: "2 horas atrás"
  },
  {
    id: 2,
    name: "João ●●●●●",
    message: "Incrível! O ritual trouxe uma paz que eu não sentia há anos. Recomendo!",
    time: "4 horas atrás"
  },
  {
    id: 3,
    name: "Ana ●●●",
    message: "Estava cética, mas os resultados foram surpreendentes. Muito grata! 💫",
    time: "6 horas atrás"
  },
  {
    id: 4,
    name: "Carlos ●●●●●●",
    message: "Finalmente encontrei algo que realmente funciona. Vale cada centavo!",
    time: "8 horas atrás"
  },
  {
    id: 5,
    name: "Fernanda ●●●●",
    message: "Minha vida mudou completamente depois do ritual. Obrigada! 🌟",
    time: "12 horas atrás"
  }
];

const FakeTestimonials = () => {
  console.log('[OdusLanding] Rendering fake testimonials');

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-playfair font-bold text-center text-primary mb-6">
        Pessoas que já transformaram suas vidas:
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card-mystical hover:glow-effect transition-all duration-300">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">{testimonial.name}</span>
                  <span className="text-xs text-muted-foreground">{testimonial.time}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          + 847 pessoas já receberam seu diagnóstico personalizado esta semana
        </p>
      </div>
    </div>
  );
};

export default FakeTestimonials;