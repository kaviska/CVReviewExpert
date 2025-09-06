import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Révision de CV - Téléchargez votre CV | Expert en Révision de CV',
  description: 'Téléchargez votre CV et obtenez des commentaires professionnels avec notre service de révision alimenté par l\'IA. Obtenez une analyse détaillée et des suggestions pour améliorer votre CV.',
};

export default function CVReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
