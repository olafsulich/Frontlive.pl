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
            <h1>Polityka Prywatności</h1>
            <ol>
              <li>
                <h2>Postanowienia ogólne</h2>
                <ol>
                  <li>
                    <p>
                      Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych w
                      serwisie Frontlive.pl dostępnym pod adresem{' '}
                      <a href="frontlive.pl">
                        <span>
                          <span>
                            <a href="frontlive.pl">frontlive.pl</a>
                          </span>
                        </span>
                      </a>{' '}
                      (zwanym dalej „<b>Serwisem</b>”), a w tym w związku z:
                    </p>
                    <ol>
                      <li>usługą Newslettera,</li>
                      <li>serwerem na Discordzie administrowanym przez Administratora.</li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Administratorem Serwisu, a jednocześnie Administratorem danych osobowych osób
                      korzystających z Serwisu (zwanych dalej „<b>Użytkownikami</b>”), jest Olaf
                      Sulich (zwany dalej „<b>Administratorem</b>”). Adres do korespondencji: ul.
                      ul. Konopnickiej 19/8, 87-100 Toruń; adres e-mail:
                      <span>
                        <span>
                          <a href="mailto:blog@frontlive.pl">blog@frontlive.pl</a>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Polityka prywatności stanowi wykonanie obowiązków spoczywających na
                      Administratorze w związku z Rozporządzeniem Parlamentu Europejskiego i Rady
                      (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                      związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                      takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
                      ochronie danych), znanym powszechnie i w niniejszym dokumencie jako „
                      <b>RODO</b>”.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h2>Sposoby i cele przetwarzania danych osobowych</h2>
                <ol>
                  <li>
                    <p>
                      Korzystanie z Serwisu wiąże się z przetwarzaniem danych osobowych Użytkowników
                      w następujących celach:
                    </p>
                    <ol>
                      <li>
                        <p>
                          Wysyłanie Newslettera – na podstawie art. 6 ust. 1 RODO, czyli zgody
                          Użytkownika udzielonej tuż przed zapisaniem się na Newsletter, oraz w celu
                          realizacji marketingu bezpośredniego kierowanego do Użytkowników, na
                          podstawie art. 6 ust. 1 lit. f RODO, czyli prawnie uzasadnionego interesu
                          Administratora.
                        </p>
                      </li>

                      <li>
                        <p>
                          Realizacja reklamacji, odstąpienia od umowy – składając reklamację lub
                          oświadczenie o odstąpieniu od umowy Użytkownik przekazuje dane osobowe
                          zawarte w treści reklamacji lub oświadczeniu o odstąpieniu od umowy, które
                          obejmują imię i nazwisko, adres zamieszkania, adres e-mail, numer rachunku
                          bankowego. Podanie tych danych jest dobrowolne, ale niezbędne, by złożyć
                          reklamację lub odstąpić od umowy. Dane przekazane w związku ze złożeniem
                          reklamacji lub odstąpieniem od umowy wykorzystywane są w celu realizacji
                          procedury reklamacyjnej lub procedury odstąpienia od umowy (art. 6 ust. 1
                          lit. c RODO), a następnie w celach archiwalnych, co stanowi prawnie
                          uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO). Dane będą
                          przetwarzane przez czas niezbędny do realizacji procedury reklamacyjnej
                          lub procedury odstąpienia. Reklamacje oraz oświadczenia o odstąpieniu od
                          umowy mogą być ponadto archiwizowane w celu możliwości wykazania w
                          przyszłości przebiegu procesu reklamacyjnego lub odstąpienia od umowy. W
                          przypadku danych przekazanych w procesie złożenia reklamacji lub
                          odstąpienia od umowy, niektóre z praw nie będą przysługiwać Użytkownikowi
                          zawsze i w każdych warunkach.
                        </p>
                      </li>
                      <li>
                        <p>
                          Kontakt z Administratorem za pośrednictwem poczty elektronicznej – w tym
                          celu Użytkownik przekazuje swój adres e-mail oraz inne dane zawarte w
                          treści wiadomości. Podanie adresu e-mail jest dobrowolne, ale niezbędne,
                          by nawiązać kontakt z Administratorem za pośrednictwem poczty
                          elektronicznej. Dane osobowe są w tym przypadku przetwarzane w celu
                          kontaktu z Użytkownikiem, a podstawą przetwarzania jest zgoda Użytkownika
                          wynikająca z zainicjowania kontaktu (art. 6 ust. 1 lit. a RODO). Dane będą
                          przetwarzane także po zakończeniu kontaktu z Administratorem. Podstawą
                          prawną takiego przetwarzania jest usprawiedliwiony cel w postaci
                          archiwizacji korespondencji na potrzeby wykazania jej przebiegu w
                          przyszłości (art. 6 ust. 1 lit. f RODO).
                        </p>
                      </li>

                      <li>
                        <p>
                          Wykorzystywanie plików Cookies w Serwisie – podstawą jest zgoda
                          Użytkownika (art. 6 ust. 1 lit. a RODO).
                        </p>
                      </li>
                      <li>
                        <p>
                          Zarządzanie Serwisem i innymi stronami/grupami na zewnętrznych platformach
                          np. Discord – jest to uprawnienie Administratora realizowane na podstawie
                          jego prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).
                        </p>
                      </li>
                      <li>
                        <p>
                          Przetwarzanie w celach archiwalnych i dowodowych, na potrzeby
                          zabezpieczenia informacji, które mogą służyć wykazywaniu faktów – jest to
                          prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO).
                        </p>
                      </li>
                      <li>
                        <p>
                          Potwierdzenie wykonania obowiązków Administratora oraz dochodzenie
                          roszczeń lub obrona przed roszczeniami, które mogą być kierowane przeciwko
                          Administratorowi, a także w celu zapobiegania lub wykrywania oszustw – na
                          podstawie prawnie uzasadnionego interesu Administratora, jakim jest
                          ochrona praw, potwierdzenie wykonania obowiązków i uzyskanie z tego tytułu
                          należnego wynagrodzenia od Użytkowników (art. 6 ust. 1 lit. f RODO).
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Dane osobowe nie są przetwarzane w celu zautomatyzowanego podejmowania decyzji
                      bez wyraźnej zgody Użytkowników.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h2>Udostępnianie danych osobowych</h2>
                <ol>
                  <li>
                    <p>
                      Dane osobowe mogą być przekazywane następującym podmiotom, z których usług
                      korzysta Administrator w celu prowadzenia Serwisu i świadczenia usług za jego
                      pośrednictwem:
                    </p>
                    <ol>
                      <li>
                        <p>Podmioty obsługujące wysyłkę wiadomości e-mail:</p>
                        <ol>
                          <li>
                            <p>
                              mailchimp (The Rocket Science Group, LLC, 675 Ponce de Leon Ave NE,
                              Suite 5000, Atlanta, GA 30308, USA)
                            </p>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <p>Dostawcy usług hostingowych:</p>
                        <ol>
                          <li>
                            <p>Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789</p>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <p>Podmioty monitorujące ruch internetowy:</p>
                        <ol>
                          <li>
                            {' '}
                            Google LLC. (1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA){' '}
                          </li>
                        </ol>
                      </li>
                      <li>
                        <p>Podmioty dostarczające wtyczki społecznościowe:</p>
                        <ol>
                          <li>
                            {' '}
                            Google LLC. (1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA){' '}
                          </li>
                        </ol>
                      </li>
                      <li>
                        <p>
                          Cel i zakres gromadzenia danych oraz ich dalszego przetwarzania i
                          wykorzystania przez usługodawców, o których mowa w ust. 1, jak również
                          możliwość kontaktu oraz prawa Użytkownika w tym zakresie i możliwość
                          dokonania ustawień zapewniających ochronę prywatności, zostały opisane w
                          politykach prywatności poszczególnych usługodawców.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h2>Okres przechowywania danych osobowych</h2>
                    <ol>
                      <li>
                        <p>
                          Dane osobowe niezbędne do realizacji roszczeń reklamacyjnych,
                          potwierdzenia wykonania obowiązków Administratora oraz dochodzenia
                          roszczeń lub obrony przed roszczeniami, które mogą być kierowane przeciwko
                          Administratorowi, a także w celach archiwalnych i dowodowych – będą
                          przechowywane przez okres niezbędny do celu, w jakim zostały zebrane,
                          jednak nie dłużej niż 10 lat od dnia zebrania tych danych.
                        </p>
                      </li>
                      <li>
                        <p>
                          Pozostałe dane osobowe będą przechowywane przez okres niezbędny do celu, w
                          jakim zostały zebrane, jednak nie dłużej niż 5 lat od dnia zebrania tych
                          danych.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h2>Prawa Użytkownika w związku z przetwarzaniem danych osobowych</h2>
                    <ol>
                      <li>
                        <p>
                          Zgodnie z RODO, Użytkownik ma następujące prawa w związku z przetwarzaniem
                          jego danych osobowych:
                        </p>
                        <ol>
                          <li>
                            {' '}
                            Prawo do informacji, w jaki sposób dane osobowe są przetwarzane;{' '}
                          </li>
                          <li>Prawo do dostępu i sprostowania danych osobowych;</li>
                          <li>
                            <p>
                              Prawo do usunięcia danych osobowych; Administrator może odmówić
                              usunięcia danych, co do których ma podstawę do ich dalszego
                              przetwarzania (np. realizacja obowiązku prawnego lub dochodzenia
                              roszczeń lub obrony przed roszczeniami, które mogą być kierowane
                              przeciwko Administratorowi);
                            </p>
                          </li>
                          <li> Prawo do żądania ograniczenia przetwarzania danych osobowych; </li>
                          <li>
                            <p>
                              Prawo do zgłoszenia sprzeciwu co do przetwarzania danych osobowych,
                              jeżeli podstawą przetwarzania jest uzasadniony interes Administratora
                              lub wykonywanie zadań w interesie publicznym;
                            </p>
                          </li>
                          <li>
                            Prawo do cofnięcia zgody, jeżeli dane osobowe były przetwarzane na
                            podstawie zgody użytkownika;
                          </li>
                          <li>Prawo do przeniesienia danych osobowych.</li>
                        </ol>
                      </li>
                      <li>
                        <p>
                          Wszystkie powyższe prawa można zrealizować kontaktując się z
                          Administratorem drogą elektroniczną pod adresem:{' '}
                          <span>
                            <span>
                              <a href="mailto:blog@frontlive.pl">blog@frontlive.pl</a>
                            </span>
                          </span>
                          . Zgłoszone żądania będą realizowane bez zbędnej zwłoki, nie później niż w
                          terminie 30 dni od dnia otrzymania żądania. W tym terminie Administrator
                          udzieli odpowiedzi lub poinformuje o ewentualnym wydłużeniu terminu i
                          wyjaśni przyczyny. Jeżeli Administrator poweźmie wątpliwości co do tego,
                          czy określone żądanie zostało zgłoszone przez osobę uprawnioną, może on
                          zadać kilka dodatkowych pytań w celu weryfikacji tożsamości zgłaszającego.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h2>Pliki Cookies</h2>
                    <ol>
                      <li>
                        <h3>Ogólne informacje o Cookies</h3>
                        <ol>
                          <li>
                            <p>
                              Serwis, podobnie jak niemal wszystkie inne strony internetowe,
                              wykorzystuje pliki Cookies, by zapewnić Użytkownikom możliwie
                              najlepsze doświadczenia.
                            </p>
                          </li>
                          <li>
                            <p>
                              Podczas pierwszej wizyty Użytkownika w Serwisie wyświetlana jest
                              informacja na temat stosowania plików cookies. Brak zmiany ustawień
                              przeglądarki jest równoznaczny z wyrażeniem zgody na ich użycie.
                            </p>
                          </li>
                          <li>
                            <p>
                              Cookies to dane informatyczne, a w szczególności niewielkie informacje
                              tekstowe, zapisywane i przechowywane na urządzeniach (np. komputerze,
                              tablecie, smartfonie), za pośrednictwem których Użytkownik korzysta ze
                              stron internetowych Serwisu.
                            </p>
                          </li>
                          <li>
                            <p>
                              Stosowane przez Administratora Cookies są bezpieczne dla urządzeń
                              Użytkowników. W szczególności tą drogą nie jest możliwe przedostanie
                              się do urządzeń Użytkowników wirusów lub innego niechcianego
                              oprogramowania lub oprogramowania złośliwego. Cookies pozwalają
                              zidentyfikować oprogramowanie wykorzystywane przez Użytkownika i
                              indywidualnie dostosować działanie Serwisu. Cookies zazwyczaj
                              zawierają nazwę domeny z której pochodzą, czas przechowywania ich na
                              urządzeniu oraz przypisaną wartość.
                            </p>
                          </li>
                          <li>
                            <p>Serwis wykorzystuje następujące rodzaje plików Cookies:</p>
                            <ol>
                              <li>
                                <p>
                                  Sesyjne – są przechowywane na urządzeniu Użytkownika i pozostają
                                  tam do momentu zakończenia sesji danej przeglądarki. Zapisane
                                  informacje są wówczas trwale usuwane z pamięci urządzenia.
                                  Mechanizm Cookies sesyjnych nie pozwala na pobieranie
                                  jakichkolwiek danych osobowych ani żadnych informacji poufnych z
                                  urządzenia Użytkownika;
                                </p>
                              </li>
                              <li>
                                <p>
                                  Trwałe – są przechowywane na urządzeniu Użytkownika i pozostają
                                  tam do momentu ich skasowania. Zakończenie sesji danej
                                  przeglądarki lub wyłączenie urządzenia nie powoduje ich usunięcia
                                  z urządzenia użytkownika. Mechanizm Cookies trwałych nie pozwala
                                  na pobieranie jakichkolwiek danych osobowych ani żadnych
                                  informacji poufnych z urządzenia użytkownika.
                                </p>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <p>
                              Użytkownik ma możliwość ograniczenia lub wyłączenia dostępu plików
                              Cookies do swojego urządzenia. W przypadku skorzystania z tej opcji,
                              korzystanie z Serwisu będzie możliwe, poza funkcjami, które ze swojej
                              natury wymagają plików Cookies.
                            </p>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h3>Cele, w jakich wykorzystywane są Cookies</h3>
                        <ol>
                          <li>
                            <p>Administrator wykorzystuje Cookies własne w następujących celach:</p>
                            <ol>
                              <li></li>
                              <li>
                                <p>
                                  Konfiguracja Serwisu niezbędna dla jego pełnej funkcjonalności, a
                                  w tym:
                                </p>
                                <ol>
                                  <li>
                                    <p>
                                      dostosowanie zawartości stron internetowych Serwisu do
                                      preferencji Użytkownika oraz optymalizacja korzystania ze
                                      stron internetowych Serwisu;
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      dostosowanie zawartości stron internetowych Serwisu do
                                      preferencji Użytkownika oraz optymalizacja korzystania ze
                                      stron internetowych Serwisu. W szczególności pliki te
                                      pozwalają rozpoznać podstawowe parametry urządzenia
                                      Użytkownika i odpowiednio wyświetlić stronę internetową,
                                      dostosowaną do jego indywidualnych potrzeb;
                                    </p>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <p>Analizy i badania oraz audyt oglądalności, a w tym:</p>
                                <ol>
                                  <li>
                                    <p>
                                      tworzenie anonimowych statystyk, które pomagają zrozumieć, w
                                      jaki sposób użytkownicy Serwisu korzystają ze stron
                                      internetowych Serwisu, co umożliwia ulepszanie ich struktury i
                                      zawartości.
                                    </p>
                                  </li>
                                </ol>
                              </li>
                              <li>Zapewnienie bezpieczeństwa i niezawodności Serwisu.</li>
                            </ol>
                          </li>
                          <li>
                            <p>
                              Administrator wykorzystuje Cookies zewnętrzne w następujących celach:
                            </p>
                            <ol>
                              <li>
                                <p>
                                  Prezentowanie treści multimedialnych na stronach internetowych
                                  Serwisu, które są pobierane z zewnętrznego serwisu internetowego,
                                  np. Discord;
                                </p>
                              </li>
                              <li>
                                <p>
                                  Zbieranie ogólnych i anonimowych danych statycznych za
                                  pośrednictwem narzędzi analitycznych, np. Google Analytics;
                                </p>
                              </li>

                              <li>
                                <p>
                                  Wykorzystanie funkcji interaktywnych w celu popularyzacji Serwisu
                                  za pomocą serwisów społecznościowych, m.in. takich jak Discord.
                                </p>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h3>
                          {' '}
                          Możliwość określenia warunków przechowywania lub uzyskiwania dostępu przez
                          Cookies:{' '}
                        </h3>
                        <ol>
                          <li>
                            <p>
                              Użytkownik może samodzielnie i w każdym czasie zmienić ustawienia
                              dotyczące plików Cookies, określając warunki ich przechowywania i
                              uzyskiwania dostępu przez pliki Cookies do urządzenia Użytkownika.
                              Zmiany ustawień, o których mowa w zdaniu poprzednim, Użytkownik może
                              dokonać za pomocą ustawień swojej przeglądarki internetowej.
                              Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby
                              blokować automatyczną obsługę plików Cookies w ustawieniach
                              przeglądarki internetowej, bądź informować o ich każdorazowym
                              zamieszczeniu Cookies na urządzeniu Użytkownika. Szczegółowe
                              informacje o możliwości i sposobach obsługi plików Cookies dostępne są
                              w ustawieniach oprogramowania (przeglądarki internetowej).
                            </p>
                          </li>
                          <li>
                            <p>
                              Użytkownik może w każdej chwili usunąć pliki Cookies korzystając z
                              dostępnych funkcji w przeglądarce internetowej, której używa.
                            </p>
                          </li>
                          <li>
                            {' '}
                            Ograniczenie stosowania plików Cookies, może wpłynąć na niektóre
                            funkcjonalności Serwisu.{' '}
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h3>Narzędzia społecznościowe</h3>
                        <ol>
                          <li>
                            <p>Serwis zawiera wtyczki do następujących serwisów:</p>
                            <ol>
                              <li>Discord,</li>
                              <li>Google Analytics.</li>
                            </ol>
                          </li>

                          <li>
                            <p>
                              Powyższe funkcjonalności są Administratorowi niezbędne do rozwoju i
                              promowania Serwisu, utrzymywania kontaktu z obecnymi i przyszłymi
                              Użytkownikami, a także zbierania informacji w celu projektowania i
                              oferowania coraz lepszych usług.
                            </p>
                          </li>
                          <li>
                            <p>
                              Serwisy, o których mowa w ust. 1, nie przekazują Administratorowi
                              informacji o gromadzonych danych i sposobie ich wykorzystania. W celu
                              uzyskania dodatkowych informacji dotyczących prywatności w serwisach
                              społecznościowych Administrator zaleca kontakt bezpośrednio z
                              serwisami i zapoznanie się z ich Politykami prywatności.
                            </p>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h3>Logi serwera</h3>
                        <ol>
                          <li>
                            <p>
                              Korzystanie z Serwisu wiąże się z przesyłaniem zapytań do serwera, na
                              którym przechowywane są strony Serwisu. Każde zapytanie skierowane do
                              serwera zapisywane jest w logach serwera. Logi obejmują m.in. adres IP
                              użytkownika, datę i czas serwera, informacje o przeglądarce
                              internetowej i systemie operacyjnym Użytkownika. Logi zapisywane i
                              przechowywane są na serwerze. Dane zapisane w logach serwera nie są
                              kojarzone z konkretnymi Użytkownikami i nie są wykorzystywane przez
                              Administratora w celu identyfikacji Użytkowników. Logi serwera
                              stanowią wyłącznie materiał pomocniczy służący do administrowania
                              Serwisem, a ich zawartość nie jest ujawniana nikomu poza osobami
                              upoważnionymi do administrowania serwerem.
                            </p>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h2>Bezpieczeństwo i organ ochrony danych osobowych</h2>
                    <ol>
                      <li>
                        <p>
                          Administrator gwarantuje poufność wszelkich przekazanych mu danych
                          osobowych. Administrator zapewnia podjęcie wszelkich środków
                          bezpieczeństwa i ochrony danych osobowych wymaganych przez przepisy prawa.
                          Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione
                          przed dostępem do nich przez osoby do tego nieupoważnione.
                        </p>
                      </li>
                      <li>
                        <p>
                          Jeśli uważasz, że Administrator przetwarza dane osobowe niezgodnie z
                          prawem, możesz wnieść skargę do właściwego organu, którym jest Prezes
                          Urzędu Ochrony Danych Osobowych.
                        </p>
                      </li>
                    </ol>
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
