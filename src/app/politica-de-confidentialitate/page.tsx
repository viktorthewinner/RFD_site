export default function PoliticaDeConfidentialitatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Politică de Confidențialitate</h1>
      <div className="prose lg:prose-xl max-w-none dark:prose-invert">
        <p>Această pagină va conține politica de confidențialitate a portalului Sector 1 Digital Hub.</p>
        <p>Ne angajăm să protejăm confidențialitatea datelor dumneavoastră personale. Această politică explică modul în care colectăm, utilizăm și protejăm informațiile personale.</p>

        <h2>1. Ce Date Colectăm</h2>
        <p>Putem colecta următoarele tipuri de informații:</p>
        <ul>
          <li>Informații de identificare personală (nume, adresă de email, număr de telefon etc.) pe care le furnizați voluntar la înregistrare sau prin formulare.</li>
          <li>Informații despre utilizarea portalului (adresa IP, tipul browserului, paginile vizitate, timpul petrecut pe site etc.) colectate prin cookies și tehnologii similare.</li>
        </ul>

        <h2>2. Cum Utilizăm Datele Colectate</h2>
        <p>Datele colectate sunt utilizate pentru:</p>
        <ul>
          <li>A furniza și îmbunătăți serviciile portalului.</li>
          <li>A personaliza experiența dumneavoastră pe portal.</li>
          <li>A comunica cu dumneavoastră (răspunsuri la solicitări, notificări importante etc.).</li>
          <li>A analiza utilizarea portalului pentru a optimiza funcționalitatea și conținutul.</li>
        </ul>

        <h2>3. Partajarea Datelor</h2>
        <p>Nu vom vinde, închiria sau partaja datele dumneavoastră personale cu terțe părți în scopuri de marketing fără consimțământul dumneavoastră explicit. Putem partaja informații cu furnizorii de servicii care ne ajută să operăm portalul, sub obligații stricte de confidențialitate.</p>
        
        <h2>4. Securitatea Datelor</h2>
        <p>Implementăm măsuri de securitate tehnice și organizaționale adecvate pentru a proteja datele dumneavoastră personale împotriva accesului neautorizat, modificării, divulgării sau distrugerii.</p>

        <h2>5. Drepturile Dumneavoastră</h2>
        <p>Aveți dreptul de a accesa, rectifica sau șterge datele dumneavoastră personale. De asemenea, aveți dreptul de a vă opune prelucrării datelor și de a solicita restricționarea acesteia. Pentru exercitarea acestor drepturi, vă rugăm să ne contactați.</p>

        <h2>6. Politica de Cookies</h2>
        <p>Pentru informații detaliate despre utilizarea cookies, vă rugăm să consultați <a href="/politica-cookies">Politica de Cookies</a>.</p>

        <p>Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
      </div>
    </div>
  );
}
