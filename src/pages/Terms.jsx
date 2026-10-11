import LegalLayout from './LegalLayout.jsx'

const sections = [
  { h: '1. Aftalen', p: 'Disse vilkår gælder for brugen af BiQ-platformen og tilhørende tjenester. Ved at oprette en konto accepterer du vilkårene.' },
  { h: '2. Abonnement og betaling', p: 'BiQ leveres som abonnement. Pris og indhold fremgår af din ordrebekræftelse. Abonnementet fornyes automatisk, medmindre det opsiges.' },
  { h: '3. Brug af data', p: 'Data fra BiQ må bruges til virksomhedens egne formål, herunder salg, analyse og kreditvurdering. Videresalg eller offentliggørelse af data i større omfang kræver skriftlig aftale.' },
  { h: '4. Markedsføring', p: 'Du er selv ansvarlig for at overholde markedsføringsloven, herunder reglerne om reklamebeskyttelse i CVR, når du kontakter virksomheder.' },
  { h: '5. Ansvar', p: 'BiQ henter data fra offentlige registre og gør alt for at sikre korrekthed, men kan ikke holdes ansvarlig for fejl i kildedata.' },
  { h: '6. Opsigelse', p: 'Abonnementet kan opsiges med den varsling, der fremgår af din aftale. Kontakt os på hej@biq.dk.' },
]

export default function Terms() {
  return <LegalLayout eyebrow="Juridisk" title="Vilkår og betingelser" updated="Oktober 2026" sections={sections} />
}
