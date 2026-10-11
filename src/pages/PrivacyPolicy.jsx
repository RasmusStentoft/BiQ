import LegalLayout from './LegalLayout.jsx'

const sections = [
  { h: '1. Dataansvarlig', p: 'BiQ er dataansvarlig for behandlingen af de personoplysninger, vi modtager om dig. Du kan altid kontakte os på hej@biq.dk.' },
  { h: '2. Hvilke oplysninger vi indsamler', p: 'Når du booker en demo, indsamler vi navn, arbejdsmail, telefonnummer, virksomhed og din besked. Uploader du en kundeliste, behandler vi den udelukkende til brug for demoen.' },
  { h: '3. Formål og retsgrundlag', p: 'Vi bruger oplysningerne til at besvare din henvendelse og levere vores tjenester. Behandlingen sker på baggrund af vores legitime interesse og, hvor relevant, en aftale med dig.' },
  { h: '4. Data i platformen', p: 'Data om virksomheder og ejendomme i BiQ stammer fra offentlige registre som CVR, BBR, Tinglysningen og Matriklen og behandles i overensstemmelse med GDPR og registrenes vilkår.' },
  { h: '5. Opbevaring og sletning', p: 'Vi opbevarer kun oplysningerne, så længe det er nødvendigt. Uploadede filer slettes efter demoen. Alle data hostes på servere i EU.' },
  { h: '6. Dine rettigheder', p: 'Du har ret til indsigt, berigtigelse, sletning, begrænsning og dataportabilitet samt ret til at gøre indsigelse. Du kan klage til Datatilsynet.' },
]

export default function PrivacyPolicy() {
  return <LegalLayout eyebrow="Juridisk" title="Privatlivspolitik" updated="Oktober 2026" sections={sections} />
}
