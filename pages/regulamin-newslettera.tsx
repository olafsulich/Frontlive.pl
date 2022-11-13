import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { getAllPosts } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function RegulaminNewslettera({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout posts={posts}>
        <Navigation />

        <main id="main" className="mainWrapper">
          <div className="regulations">
            <h1>Regulamin Newslettera</h1>
            <ol>
              <li>
                <h2>Postanowienia ogólne</h2>
                <ol>
                  <li>
                    <p>
                      Niniejszy Regulamin (zwany dalej „<b>Regulaminem</b>”) określa zasady
                      korzystania z usługi Newsletter dostępnej na stronie internetowej{' '}
                      <a href="frontlive.pl">
                        <span>
                          <span>
                            <a href="frontlive.pl">frontlive.pl</a>
                          </span>
                        </span>
                      </a>{' '}
                      przez użytkowników indywidualnych (zwanych dalej „<b>Użytkownikami</b>”).
                    </p>
                  </li>
                  <li>
                    <p>
                      Usługa Newsletter udostępniania jest przez Olafa Sulicha (zwanego dalej „
                      <b>Usługodawcą</b>
                      ”). Adres do korespondencji: ul. Konopnickiej 19/8, 87-100 Toruń; adres
                      e-mail:{' '}
                      <span>
                        <span>
                          <a href="mailto:blog@frontlive.pl">blog@frontlive.pl</a>
                        </span>
                      </span>
                      .
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h2>Zasady korzystania z usługi Newsletter</h2>
                <ol>
                  <li>
                    <p>
                      W ramach usługi Newsletter, za pośrednictwem poczty elektronicznej, na podany
                      przez Użytkownika adres e-mail, wysyłana jest przez Usługodawcę informacja
                      (zwana dalej „<b>Newsletterem</b>”). Usługa świadczona jest nieodpłatnie,
                      przez czas nieoznaczony.
                    </p>
                  </li>
                  <li>
                    <p>
                      Newsletter zawiera w szczególności informacje o nowych wpisach na blogu
                      Frontlive, nowościach ze świata programowania, oraz inne informacje dotyczące
                      Usługodawcy oraz oferowanych przez niego produktów lub usług.
                    </p>
                  </li>
                  <li> Newsletter wysyłany jest średnio kilkanaście razy w roku. </li>
                  <li>
                    <p>Każdy Newsletter zawiera:</p>
                    <ol>
                      <li> informację o Usługodawcy jako nadawcy Newslettera, </li>
                      <li> wypełnione pole „Temat” określające treść Newslettera, </li>
                      <li>
                        <p>
                          informację o sposobie rezygnacji z Newslettera lub zmianie adresu e-mail
                          Użytkownika, na który wysyłany jest Newsletter.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Korzystanie z usługi Newsletter jest uzależnione od posiadania przez
                      Użytkownika:
                    </p>
                    <ol>
                      <li> komputera lub innego urządzenia z dostępem do internetu, </li>
                      <li> aktywnego konta poczty elektronicznej. </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Zamówienie Newslettera następuje poprzez dokonanie przez Użytkownika
                      następujących czynności rejestracyjnych na stronie internetowej{' '}
                      <a href="frontlive.pl">
                        <span>
                          <span>
                            <a href="frontlive.pl">frontlive.pl</a>
                          </span>
                        </span>
                      </a>
                      :
                    </p>
                    <ol>
                      <li> podanie adresu e-mail Użytkownika w formularzu, </li>
                      <li>
                        <p>
                          wyrażenie zgody na otrzymywanie na podany w formularzu adres e-mail
                          informacji handlowych w rozumieniu ustawy z dnia 18 lipca 2002 r. o
                          świadczeniu usług drogą elektroniczną,
                        </p>
                      </li>
                      <li>
                        {' '}
                        potwierdzenie zapoznania się z Regulaminem i Polityką prywatności oraz
                        zaakceptowanie ich treści,{' '}
                      </li>
                      <li>kliknięcie przycisku „Subskrybuj”.</li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Kliknięcie przycisku „Subskrybuj” powoduje dodanie adresu e-mail Użytkownika
                      do listy mailingowej Usługodawcy. Adres adres e-mail Użytkownika będzie
                      wykorzystywany w celu wysyłania Użytkownikowi Newsletterów.
                    </p>
                  </li>
                  <li>
                    <p>
                      Wykonanie wszystkich czynności wymienionych w pkt 6 jest dobrowolne i
                      niezbędne do świadczenia usługi Newsletter.
                    </p>
                  </li>
                  <li>
                    <p>
                      Użytkownik może w każdej chwili, bez podania przyczyny i bez ponoszenia
                      kosztów, zmienić wskazany uprzednio adres e-mail, na który wysyłany jest
                      Newsletter, lub zrezygnować z usługi postępując zgodnie z informacją
                      umieszczoną w stopce każdego Newslettera.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h2>Reklamacje</h2>
                <ol>
                  <li>
                    <p>
                      Reklamacje dotyczące usługi Newsletter można składać za pośrednictwem poczty
                      elektronicznej na adres:
                      <span>
                        <span>
                          <a href="mailto:blog@frontlive.pl">blog@frontlive.pl</a>
                        </span>
                      </span>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      Wskazane jest, aby zgłoszenie reklamacji zawierało w szczególności: opis
                      sprawy, której dotyczy reklamacja, adres e-mail podany podczas rejestracji na
                      Newsletter oraz adres e-mail, na który ma zostać wysłana odpowiedź na
                      reklamację, jeśli Użytkownik życzy sobie otrzymać odpowiedź na reklamację na
                      adres inny niż adres podany podczas rejestracji dotyczącej usługi Newsletter.
                      Rozpatrzenie reklamacji oraz udzielenie odpowiedzi o sposobie jej rozpatrzenia
                      nastąpi niezwłocznie, nie później niż w terminie 14 dni od daty złożenia
                      reklamacji. O sposobie rozpatrzenia reklamacji Użytkownik zostanie
                      poinformowany zgodnie z danymi wskazanymi w zgłoszeniu reklamacji.
                    </p>
                  </li>
                  <li>
                    <p>
                      W przypadku wystąpienia ewentualnych braków w złożonej reklamacji, Usługodawca
                      zwróci się do Użytkownika o ich uzupełnienie.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h2>Postanowienia końcowe</h2>
                <ol>
                  <li>
                    <p>
                      Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O treści zmian
                      Regulaminu Usługodawca poinformuje Użytkowników przez umieszczenie na stronie
                      internetowej
                      <a href="frontlive.pl/regulamin-newslettera">
                        <span>
                          <span>
                            <a href="frontlive.pl/regulamin-newslettera">
                              frontlive.pl/regulamin-newslettera
                            </a>
                          </span>
                        </span>
                      </a>{' '}
                      wiadomości o zmianie Regulaminu, zawierającej zestawienie zmian Regulaminu i
                      utrzymanie tej informacji przez okres co najmniej 14 kolejnych dni
                      kalendarzowych. O zmianie Regulaminu Użytkownik zostanie dodatkowo
                      powiadomiony przez przesłanie za pośrednictwem Newslettera na adres e-mail
                      podany podczas rejestracji, informacji zawierającej zestawienie zmian
                      Regulaminu. Poinformowanie o zmianie Regulaminu nastąpi nie później niż na 14
                      dni kalendarzowych przed wprowadzeniem zmienionego Regulaminu.
                    </p>
                  </li>
                  <li>
                    <p>
                      Zmiany Regulaminu wchodzą w życie w terminie podanym wraz z informacją o jego
                      zmianie, nie wcześniej jednak niż po upływie 14 dni kalendarzowych od momentu
                      poinformowania o zmianach Regulaminu, z tym zastrzeżeniem, że zmieniony
                      Regulamin będzie wiązać Użytkownika, o ile w terminie 14 dni od dnia
                      otrzymania informacji o jego zmianie nie oświadczy on o rezygnacji z usługi
                      Newsletter w przypadku braku akceptacji nowej treści Regulaminu.
                    </p>
                  </li>
                  <li>
                    <p>
                      Regulamin dostępny jest nieodpłatnie pod adresem
                      <a href="frontlive.pl/regulamin-newslettera">
                        <span>
                          <span>
                            <a href="frontlive.pl/regulamin-newslettera">
                              frontlive.pl/regulamin-newslettera
                            </a>
                          </span>
                        </span>
                      </a>{' '}
                      w formie, która umożliwia pozyskanie, odtwarzanie i utrwalanie treści
                      Regulaminu za pomocą systemu teleinformatycznego, którym posługuje się
                      Użytkownik. Pod tym samym adresem dostępne są wszystkie archiwalne wersje
                      Regulaminu wraz z informacją o ramach czasowych ich obowiązywania.
                    </p>
                  </li>
                  <li>
                    <p>
                      Usługodawca zaleca zapoznanie się z Polityką prywatności dostępną pod adresem:
                      <a href="frontlive.pl/polityka-prywatnosci">
                        <span>
                          <span>
                            <a href="frontlive.pl/polityka-prywatnosci">
                              frontlive.pl/polityka-prywatnosci
                            </a>
                          </span>
                        </span>
                      </a>
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </main>
      </Layout>
    </>
  );
}
