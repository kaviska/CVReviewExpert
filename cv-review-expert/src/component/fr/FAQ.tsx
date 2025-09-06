'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Mes données CV et personnelles sont-elles sécurisées ?",
      answer: "Absolument. Votre CV, curriculum vitae et informations personnelles sont chiffrés en transit et au repos. Nous ne vendons ni ne partageons jamais de données, et vous pouvez supprimer vos téléchargements à tout moment. Nous suivons le RGPD et les meilleures pratiques de sécurité de l'industrie."
    },
    {
      question: "Puis-je utiliser ce vérificateur CV IA pour tout type d'emploi ?",
      answer: "Oui. Notre IA analyse les CV et curriculum vitae dans tous les secteurs et niveaux d'emploi—du débutant au cadre dirigeant. Elle s'adapte à chaque description de poste et fournit des retours personnalisés et compatibles ATS."
    },
    {
      question: "Quels formats de fichiers sont supportés ?",
      answer: "PDF, DOC et DOCX. Pour de meilleurs résultats, téléchargez en PDF pour préserver le formatage. Notre IA extrait le texte automatiquement tout en maintenant la mise en page et l'intégrité des mots-clés."
    },
    {
      question: "Quelle est la précision de l'analyse IA ?",
      answer: "Notre IA est entraînée sur de larges ensembles de données de CV et d'offres d'emploi. Elle signale les mots-clés manquants, les problèmes de formatage et les lacunes de compétences avec une grande précision pour que vous puissiez améliorer votre CV et augmenter vos entretiens."
    },
    {
      question: "Offrez-vous des remboursements ?",
      answer: "Oui. Tous les forfaits payants incluent une garantie de remboursement de 30 jours. Si vous n'êtes pas satisfait, contactez le support pour un remboursement complet. Les utilisateurs gratuits peuvent passer à un forfait supérieur ou inférieur à tout moment."
    },
    {
      question: "Combien de temps prend l'analyse de CV ?",
      answer: "La plupart des analyses de CV et curriculum vitae se terminent en moins de 60 secondes. Les consultations individuelles (quand disponibles) livrent des insights détaillés en 24-48 heures."
    },
    {
      question: "Puis-je analyser plusieurs versions de mon CV ou curriculum ?",
      answer: "Oui. Les forfaits Pro et Premium incluent des analyses illimitées pour que vous puissiez tester des versions, suivre les améliorations et adapter pour chaque emploi."
    },
    {
      question: "Fournissez-vous des retours spécifiques au secteur ?",
      answer: "Oui. Notre IA reconnaît de nombreux secteurs et fournit des retours basés sur les mots-clés, compétences et préférences de formatage spécifiques au secteur pour que votre CV soit prêt ATS et convivial pour les recruteurs."
    },
    {
      question: "Qu'est-ce qu'un CV et en quoi diffère-t-il d'un curriculum vitae ?",
      answer: "Un CV (curriculum vitae) est un historique académique et de carrière détaillé, souvent plus long qu'une page. Un curriculum vitae est un résumé concis et spécifique au rôle (généralement 1-2 pages). Utilisez un curriculum vitae pour la plupart des emplois ; utilisez un CV pour l'académie ou certains rôles internationaux."
    },
    {
      question: "Pourquoi un curriculum vitae est-il important ?",
      answer: "Votre curriculum vitae est votre première impression. Un CV clair, optimisé pour les mots-clés et compatible ATS vous aide à passer les sélections, montrer l'impact et gagner des entretiens—plus rapidement."
    },
    {
      question: "Ce service est-il gratuit ?",
      answer: "Oui, c'est gratuit pour commencer—aucun frais caché. Téléchargez votre CV et obtenez des retours professionnels alimentés par IA avec une analyse détaillée et des suggestions pour améliorer votre curriculum vitae."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fréquemment Posées</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez des réponses sur notre outil d'analyse CV et curriculum vitae alimenté par IA, l'optimisation ATS, et comment obtenir plus d'appels d'entretien.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Vous avez encore des questions ?</h3>
          <p className="text-gray-600 mb-6">Notre équipe de support aide avec les requêtes CV, curriculum vitae, ATS et analyse IA. Attendez-vous à une réponse dans les 24 heures.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/fr/contact"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
              Contacter le Support
              </span>
            </a>
            <a
              href="https://wa.me/44782099178"
              target="_blank"
              rel="noopener noreferrer"
              className="relative border-3 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
              Planifier un Appel
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}