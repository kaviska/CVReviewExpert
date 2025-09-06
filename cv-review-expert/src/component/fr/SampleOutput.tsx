export default function SampleOutput() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exemple <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vérificateur CV ATS</span> & Rapport d'Analyse CV
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prévisualisez le retour exact que vous recevrez : score de compatibilité ATS, correspondance de mots-clés, corrections de format, et étapes d'action—tout ce dont vous avez besoin pour passer la sélection et impressionner les recruteurs.
          </p>
        </div>

  {/* Demo Report */}
  <div id="sample-report" className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Rapport d'Analyse CV & Curriculum Vitae</h3>
                  <p className="text-blue-100">Jean Dupont - Ingénieur Logiciel</p>
                  <p className="text-blue-200 text-sm mt-1">Date d'Analyse : {new Date().toLocaleDateString('fr-FR')}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">87/100</div>
                  <div className="text-blue-100">Score Global</div>
                  <div className="flex items-center mt-2">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              {/* Comprehensive Score Breakdown */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">92</div>
                  <div className="text-xs text-gray-600">Compatibilité ATS</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85</div>
                  <div className="text-xs text-gray-600">Correspondance Mots-clés</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90</div>
                  <div className="text-xs text-gray-600">Qualité Format</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">81</div>
                  <div className="text-xs text-gray-600">Score Contenu</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">88</div>
                  <div className="text-xs text-gray-600">Vérification Grammaire</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600 mb-1">83</div>
                  <div className="text-xs text-gray-600">Personnalisation</div>
                </div>
              </div>

              {/* 1. Summary Analysis */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </span>
                  Analyse Résumé
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">✅ Points Forts Mis en Évidence</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Présentation solide des compétences techniques</li>
                      <li>• Utilisation efficace de verbes d'action</li>
                      <li>• Réalisations quantifiées incluses</li>
                      <li>• Format d'email professionnel</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">⚠️ Domaines d'Amélioration</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Mots-clés spécifiques au secteur manquants</li>
                      <li>• Manque de réalisations quantifiables dans certains rôles</li>
                      <li>• Résumé professionnel à améliorer</li>
                      <li>• Section contact pourrait être optimisée</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">📊 Répartition Score</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pertinence :</span>
                        <span className="font-semibold">85/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Clarté :</span>
                        <span className="font-semibold">90/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Format :</span>
                        <span className="font-semibold">88/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Skill & Keyword Match */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </span>
                  Analyse Compétences & Mots-clés
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-3">✅ Compétences Trouvées dans le CV</h5>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "Python", "Git", "Agile", "SQL", "AWS"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">8 compétences pertinentes détectées</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">❌ Mots-clés Importants Manquants</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Kubernetes", "Microservices", "CI/CD", "Machine Learning", "DevOps"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">6 compétences prioritaires à ajouter</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <h6 className="font-semibold text-gray-700 mb-2">💡 Suggestions d'Optimisation Mots-clés :</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ajouter "Cloud Computing" et "Conteneurisation" pour correspondre aux exigences du poste</li>
                    <li>• Inclure "Direction d'Équipe" et "Gestion de Projet" pour les postes seniors</li>
                    <li>• Mettre l'accent sur les compétences transversales "Résolution de Problèmes" et "Innovation"</li>
                  </ul>
                </div>
              </div>

              {/* 3. Experience & Achievements Feedback */}
              <div className="mb-8 p-6 bg-purple-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </span>
                  Analyse Expérience & Réalisations
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <h6 className="font-semibold text-green-600 mb-2">🌟 Expérience la Plus Impressionnante</h6>
                    <p className="text-sm text-gray-700">
                      "Dirigé le développement de plateforme e-commerce gérant 10 000+ transactions quotidiennes" - 
                      <span className="text-green-600 font-medium"> Excellente quantification et impact</span>
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                    <h6 className="font-semibold text-orange-600 mb-2">📈 Nécessite Quantification</h6>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-600">❌ Actuel : "Amélioré la performance de l'application"</p>
                        <p className="text-sm text-gray-700">✅ Mieux : "Amélioré la performance de l'application de 45%, réduisant les temps de chargement de 3,2s à 1,8s"</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                    <h6 className="font-semibold text-red-600 mb-2">⚠️ Déclarations Vagues à Réécrire</h6>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "Responsable de diverses tâches" → Spécifier les responsabilités exactes</li>
                      <li>• "Travaillé avec l'équipe" → "Collaboré avec une équipe transversale de 5 personnes"</li>
                      <li>• "Géré des projets" → "Managé 3 projets simultanés d'une valeur de 2M€+"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Formatting & Readability */}
              <div className="mb-8 p-6 bg-green-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </span>
                  Évaluation Format & Lisibilité
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h6 className="font-semibold text-green-600 mb-2">✅ Points Forts Format</h6>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• En-têtes de section cohérents</li>
                      <li>• Utilisation appropriée des puces</li>
                      <li>• Typographie propre</li>
                      <li>• Bon équilibre des espaces blancs</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-orange-600 mb-2">📝 Suggestions</h6>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Utiliser des formats de date cohérents</li>
                      <li>• Aligner le texte de manière cohérente</li>
                      <li>• Considérer l'utilisation du gras pour les noms d'entreprise</li>
                      <li>• Ajouter plus d'espacement entre les sections</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 mb-2">📏 Analyse Longueur</h6>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Longueur actuelle :</span>
                        <span className="font-semibold text-green-600">2 pages ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nombre de mots :</span>
                        <span className="font-semibold">485 mots</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recommandé :</span>
                        <span className="font-semibold">400-600 mots</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Grammar & Language Check */}
              <div className="mb-8 p-6 bg-yellow-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">5</span>
                  </span>
                  Révision Grammaire & Langue
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold text-red-600 mb-3">🔍 Problèmes Détectés</h6>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded border-l-4 border-red-400">
                        <p className="text-gray-600">Ligne 15 : "recue" → <span className="font-semibold text-green-600">"reçue"</span></p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-400">
                        <p className="text-gray-600">Ligne 23 : Virgule manquante après "Par ailleurs"</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                        <p className="text-gray-600">Considérer : "utiliser" au lieu de "utiliser" (langage plus simple)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 mb-3">💼 Suggestions Ton Professionnel</h6>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded">
                        <p className="text-gray-600">Remplacer "trucs" par "responsabilités"</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-gray-600">Utiliser voix active : "Géré l'équipe" vs "L'équipe a été gérée par moi"</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-gray-600">Ajouter mots puissants : "Dirigé", "Orchestré", "Optimisé"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. ATS Compatibility Score */}
              <div className="mb-8 p-6 bg-green-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">6</span>
                  </span>
                  Analyse Compatibilité ATS
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl font-bold text-green-600 mr-4">92/100</div>
                      <div>
                        <div className="text-lg font-semibold text-green-600">Excellent Score ATS</div>
                        <div className="text-sm text-gray-600">Forte chance de passer la sélection</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-700 mb-3">🎯 Conseils Optimisation ATS</h6>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>En-têtes de section standards utilisés</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Format simple et propre</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Pas de tableaux ou graphiques complexes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">!</span>
                        <span>Ajouter plus de mots-clés spécifiques au poste dans la section compétences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Personalization Assessment */}
              <div className="mb-8 p-6 bg-indigo-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">7</span>
                  </span>
                  Personnalisation & Correspondance Poste
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h6 className="font-semibold text-gray-700">Alignement Description de Poste</h6>
                      <p className="text-sm text-gray-600">Correspondance de votre CV avec le rôle ciblé</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">83%</div>
                      <div className="text-sm text-gray-500">Score Correspondance</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-green-600 mb-2">✅ Bien Adapté</h6>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Compétences techniques correspondent aux exigences du poste</li>
                        <li>• Niveau d'expérience approprié pour le rôle</li>
                        <li>• Contexte secteur bien aligné</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-orange-600 mb-2">💡 Conseils Personnalisation</h6>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Ajouter un résumé professionnel personnalisé</li>
                        <li>• Mettre en évidence les technologies spécifiques de l'entreprise</li>
                        <li>• Mentionner les certifications pertinentes de manière proéminente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Downloadable Report Preview */}
              <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">8</span>
                  </span>
                  Ressources Téléchargeables
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-green-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <h6 className="font-semibold text-gray-700">Rapport PDF Détaillé</h6>
                      <p className="text-sm text-gray-600 mt-1">Analyse complète avec toutes les recommandations</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-blue-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <h6 className="font-semibold text-gray-700">CV/Curriculum Optimisé</h6>
                      <p className="text-sm text-gray-600 mt-1">Version améliorée avec toutes les suggestions appliquées</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-purple-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-purple-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h6 className="font-semibold text-gray-700">Modèle Lettre de Motivation</h6>
                      <p className="text-sm text-gray-600 mt-1">Modèle adapté basé sur votre profil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Example Rewrite Suggestion */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  💡 Avant & Après : Exemples d'Amélioration CV/Curriculum
                </h4>
                <div className="space-y-6">
                  <div>
                    <h6 className="font-semibold text-gray-700 mb-3">Amélioration Résumé Professionnel</h6>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-red-600 mb-2">❌ Avant (Générique) :</div>
                        <div className="bg-red-50 p-4 rounded border-l-4 border-red-400 text-gray-700 text-sm">
                          "Développeur logiciel expérimenté cherchant de nouvelles opportunités dans la technologie."
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-600 mb-2">✅ Après (Ciblé) :</div>
                        <div className="bg-green-50 p-4 rounded border-l-4 border-green-400 text-gray-700 text-sm">
                          "Développeur full-stack avec 5+ ans d'expérience dans la création d'applications web évolutives. Expertise en React, Node.js, et architecture cloud. A dirigé des équipes ayant livré 15+ projets, améliorant l'engagement utilisateur de 40% en moyenne."
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-700 mb-3">Amélioration Expérience Professionnelle</h6>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-red-600 mb-2">❌ Avant (Vague) :</div>
                        <div className="bg-red-50 p-4 rounded border-l-4 border-red-400 text-gray-700 text-sm">
                          "Travaillé sur des applications web utilisant JavaScript et React"
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-600 mb-2">✅ Après (Quantifié) :</div>
                        <div className="bg-green-50 p-4 rounded border-l-4 border-green-400 text-gray-700 text-sm">
                          "Développé 5+ applications web responsives utilisant React.js et JavaScript moderne (ES6+), améliorant l'engagement utilisateur de 40% et réduisant les temps de chargement de 25%"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Items */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  🎯 Actions Prioritaires pour l'Optimisation CV/Curriculum
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold mb-3 text-blue-100">🔥 Haute Priorité (À Faire en Premier)</h6>
                    <ol className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        <span className="text-sm">Ajouter "cloud computing", "microservices", et "DevOps" pour correspondre aux exigences ATS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        <span className="text-sm">Réécrire le résumé professionnel avec des métriques et réalisations spécifiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        <span className="text-sm">Corriger les erreurs de grammaire : orthographe "reçue" et ajouter virgule manquante</span>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-3 text-blue-100">📈 Priorité Moyenne (Étapes Suivantes)</h6>
                    <ol className="space-y-2" start={4}>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                        <span className="text-sm">Quantifier 3 réalisations supplémentaires avec pourcentages ou chiffres spécifiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                        <span className="text-sm">Optimiser la cohérence du format dans toutes les sections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                        <span className="text-sm">Ajouter un objectif adapté pour le poste ciblé</span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-sm text-blue-100">
                    <strong>Impact Estimé :</strong> Implémenter ces changements pourrait améliorer le score de votre CV/curriculum de 15-20 points et augmenter significativement vos chances de passer la sélection ATS et d'obtenir des entretiens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-12">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Prêt à Transformer Votre CV ou Curriculum ?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Obtenez votre rapport d'analyse complet avec optimisation ATS, correspondance de mots-clés, et suggestions de format professionnel. Parfait pour les chercheurs d'emploi, les personnes en reconversion, et les professionnels cherchant à évoluer.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a
                href="/fr/cv-review"
                className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group"
                >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                  </svg>
                  Analyser Mon CV/Curriculum Maintenant
                </span>
                </a>
              
                <a
                  href="#sample-report"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-block"
                >
                  Voir Exemples de Rapports
                </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Révision CV/Curriculum Gratuite</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Optimisation ATS Incluse</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Résultats d'Analyse Instantanés</span>
              </div>
            </div>
            
            <p className="text-gray-500 mt-4 text-sm">
              Rejoignez 50 000+ professionnels qui ont amélioré leur succès de recherche d'emploi avec notre outil d'analyse CV et curriculum. 
              <br />
              <span className="font-medium">Compatible avec tous les formats de CV • Aucune inscription requise • Sécurisé et privé</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}