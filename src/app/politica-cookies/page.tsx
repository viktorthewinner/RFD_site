export default function PoliticaCookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Politică de Cookies</h1>
      <div className="prose lg:prose-xl max-w-none dark:prose-invert">
        <p>Această pagină explică modul în care portalul Sector 1 Digital Hub utilizează cookies și tehnologii similare.</p>

        <h2>1. Ce Sunt Cookies?</h2>
        <p>Cookies sunt fișiere text mici stocate pe computerul sau dispozitivul dumneavoastră mobil atunci când vizitați un site web. Acestea sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, precum și pentru a furniza informații proprietarilor site-ului.</p>

        <h2>2. Cum Utilizăm Cookies</h2>
        <p>Utilizăm cookies pentru diverse scopuri, inclusiv:</p>
        <ul>
          <li><strong>Cookies Esențiale:</strong> Acestea sunt necesare pentru funcționarea de bază a portalului, cum ar fi menținerea sesiunii de autentificare.</li>
          <li><strong>Cookies de Performanță și Analiză:</strong> Ne ajută să înțelegem cum interacționează vizitatorii cu portalul, colectând informații anonime. Folosim aceste date pentru a îmbunătăți portalul. (ex: Google Analytics).</li>
          <li><strong>Cookies de Funcționalitate:</strong> Permit portalului să își amintească alegerile pe care le faceți (cum ar fi limba preferată) și să ofere funcționalități îmbunătățite și mai personalizate.</li>
          <li><strong>Cookies de Publicitate (dacă este cazul):</strong> Pot fi utilizate pentru a vă oferi reclame mai relevante pentru interesele dumneavoastră. Momentan, nu utilizăm intensiv acest tip de cookies.</li>
        </ul>

        <h2>3. Tipurile de Cookies Utilizate</h2>
        <p>Putem utiliza atât cookies de sesiune (care expiră la închiderea browserului), cât și cookies persistente (care rămân pe dispozitivul dumneavoastră pentru o perioadă determinată sau până când le ștergeți).</p>

        <h2>4. Gestionarea Cookies</h2>
        <p>Majoritatea browserelor web vă permit să controlați cookies prin setările browserului. Puteți bloca sau șterge cookies, dar rețineți că acest lucru poate afecta funcționalitatea portalului.</p>
        <p>Pentru mai multe informații despre gestionarea cookies, consultați secțiunea de ajutor a browserului dumneavoastră sau vizitați site-uri precum <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>.</p>
        
        <h2>5. Modificări ale Politicii de Cookies</h2>
        <p>Putem actualiza această Politică de Cookies din când în când. Orice modificare va fi postată pe această pagină.</p>

        <p>Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
      </div>
    </div>
  );
}
