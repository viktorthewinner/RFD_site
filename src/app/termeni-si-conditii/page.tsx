export default function TermeniSiConditiiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Termeni și Condiții</h1>
      <div className="prose lg:prose-xl max-w-none dark:prose-invert">
        <p>Această pagină va conține termenii și condițiile de utilizare a portalului Sector 1 Digital Hub.</p>
        <p>Informațiile detaliate vor fi adăugate ulterior.</p>
        
        <h2>1. Acceptarea Termenilor</h2>
        <p>Prin accesarea și utilizarea acestui portal, confirmați că ați citit, înțeles și sunteți de acord cu prezenții Termeni și Condiții.</p>

        <h2>2. Modificarea Termenilor</h2>
        <p>Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Orice modificare va intra în vigoare imediat după publicarea pe portal. Este responsabilitatea dumneavoastră să revizuiți periodic acești termeni.</p>

        <h2>3. Utilizarea Portalului</h2>
        <p>Sunteți de acord să utilizați portalul numai în scopuri legale și într-un mod care nu încalcă drepturile altor utilizatori și nu restricționează sau inhibă utilizarea și enjoyment-ul portalului de către alți utilizatori.</p>

        <h2>4. Conținutul Utilizatorului</h2>
        <p>Dacă portalul permite încărcarea de conținut (de exemplu, sesizări, comentarii), sunteți singurul responsabil pentru conținutul pe care îl postați. Nu postați conținut ilegal, defăimător, abuziv sau obscen.</p>

        <h2>5. Proprietate Intelectuală</h2>
        <p>Toate materialele de pe acest portal, inclusiv textele, grafica, logo-urile, și software-ul, sunt proprietatea Primăriei Sectorului 1 sau a licențiatorilor săi și sunt protejate de legile drepturilor de autor.</p>
        
        <h2>6. Limitarea Răspunderii</h2>
        <p>Portalul este furnizat "ca atare", fără nicio garanție. Nu ne asumăm răspunderea pentru nicio daună directă sau indirectă rezultată din utilizarea acestui portal.</p>
        
        <h2>7. Legislația Aplicabilă</h2>
        <p>Acești Termeni și Condiții sunt guvernați de legislația din România.</p>

        <p>Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
      </div>
    </div>
  );
}
