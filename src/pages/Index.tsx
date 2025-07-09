import { useEffect } from 'react';
import OdusVIP from './OdusVIP';

const Index = () => {
  useEffect(() => {
    // Update document meta for SEO
    document.title = 'Ritual Odus VIP - Desbloqueie Prosperidade, Amor e Proteção Espiritual';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Descubra o Ritual Proibido que pode transformar sua vida. Diagnóstico personalizado por apenas R$ 29,90. Acesso imediato, garantia de 7 dias. Prosperidade, amor e proteção espiritual.'
      );
    }

    // Update OG meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Ritual Odus VIP - Transforme Sua Vida Agora');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Desbloqueie prosperidade, amor e proteção espiritual com nosso ritual personalizado. Oferta limitada por R$ 29,90.'
      );
    }
  }, []);

  return <OdusVIP />;
};

export default Index;
