import React, { useMemo, useState } from "react";

const categories = [
  { name: "Wszystkie", description: "Najciekawsze fakty z każdej kategorii w jednym miejscu." },
  {
    name: "Ciało człowieka",
    description: "Biologia bez wstydu: ciało, zmysły, trawienie, rekordy organizmu i rzeczy, o których zwykle się nie mówi.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Zdrowie",
    description: "Psychika, stres, ciało, objawy, używki i zdrowie opisane prosto, bez straszenia i bez lekarskiego żargonu.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kryminalne",
    description: "Więzienia, przestępstwa, graniczne sytuacje, śmierć, śledztwa i tematy, które ciekawią ludzi, ale wymagają ostrożności.",
    image: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rekordy i absurdy",
    description: "Największe, najmniejsze, najdziwniejsze i najbardziej niewiarygodne przypadki z życia oraz historii.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Zwierzęta i natura",
    description: "Zwierzęta, rośliny, pogoda, kosmos i dziwne zjawiska natury, które pokazują, że świat jest bardziej pokręcony, niż wygląda.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Historia",
    description: "Dawne zwyczaje, dziwne prawa, miasta, wojny, codzienne życie ludzi i fakty z przeszłości.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tabu",
    description: "Intymność, ciało, kupa, smród, toaleta i pytania, które ciekawią ludzi, ale mało kto chce je zadać na głos.",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1200&auto=format&fit=crop",
  },
];

const facts = [
  {
    title: "Ile razy dziennie człowiek pierdzi?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
    intro: "Oddawanie gazów to normalna część pracy układu pokarmowego. Wpływa na to dieta, stres, tempo jedzenia i bakterie żyjące w jelitach.",
    bullets: ["to naturalna reakcja organizmu", "wpływa na to dieta", "znaczenie ma stres", "ból to sygnał ostrzegawczy"],
    paragraphs: [
      "Każdy człowiek oddaje gazy, nawet jeśli nie lubi o tym mówić. To normalny efekt trawienia i pracy bakterii jelitowych.",
      "Więcej gazów może pojawić się po fasoli, kapuście, cebuli, nabiale, napojach gazowanych albo szybkim jedzeniu.",
      "Znaczenie ma też stres, bo układ nerwowy i jelita są ze sobą mocno połączone.",
      "Samo pierdzenie nie jest problemem. Niepokoić powinien raczej silny ból, krew, nagła zmiana rytmu wypróżnień albo długotrwałe wzdęcia.",
      "W skrócie: to trochę krępujące, ale całkowicie ludzkie. Biologia nie zawsze jest elegancka.",
    ],
    source: "Wpis popularnonaukowy. Przy objawach bólowych lub nagłej zmianie pracy jelit warto skonsultować się z lekarzem.",
  },
  {
    title: "Dlaczego mamy gęsią skórkę?",
    category: "Ciało człowieka",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    intro: "Gęsia skórka to stary mechanizm obronny organizmu. U naszych przodków pomagała zatrzymać ciepło i wyglądać groźniej.",
    bullets: ["reakcja na zimno", "reakcja na emocje", "pozostałość po ewolucji", "napinają się małe mięśnie skóry"],
    paragraphs: [
      "Gdy robi się zimno albo przeżywamy silne emocje, małe mięśnie przy mieszkach włosowych kurczą się i unoszą włosy na skórze.",
      "U zwierząt z gęstą sierścią taki mechanizm pomaga zatrzymać więcej ciepła przy ciele.",
      "Może też sprawić, że zwierzę wygląda na większe i groźniejsze, co przydaje się w sytuacji zagrożenia.",
      "U człowieka efekt jest już dużo mniej praktyczny, bo mamy znacznie mniej owłosienia niż nasi dawni przodkowie.",
      "Dlatego gęsia skórka jest świetnym przykładem tego, że ciało nadal nosi ślady bardzo starej historii ewolucyjnej.",
    ],
    source: "Wpis popularnonaukowy na podstawie wiedzy z fizjologii człowieka.",
  },
  {
    title: "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
    intro: "Burczenie w brzuchu nie zawsze oznacza głód. Często to po prostu ruch gazów i płynów w jelitach.",
    bullets: ["jelita pracują cały dzień", "gazy wzmacniają dźwięk", "głód nie jest jedyną przyczyną", "stres może nasilać objawy"],
    paragraphs: [
      "Układ pokarmowy nie przestaje pracować tylko dlatego, że nie jesz. Jelita cały czas wykonują ruchy, które przesuwają treść pokarmową i gazy.",
      "Gdy w przewodzie pokarmowym jest więcej powietrza albo płynów, odgłosy mogą być głośniejsze.",
      "Burczenie często pojawia się przy głodzie, ale może wystąpić także po jedzeniu, po napojach gazowanych albo w stresie.",
      "Zwykle nie oznacza nic groźnego. Problemem staje się dopiero wtedy, gdy dochodzi ból, biegunka, wymioty, gorączka albo nagła utrata masy ciała.",
      "To kolejny przykład, że ciało robi swoje, nawet jeśli akurat wolelibyśmy, żeby było ciszej.",
    ],
    source: "Wpis popularnonaukowy. Przy silnych lub długotrwałych objawach potrzebna jest konsultacja medyczna.",
  },
  {
    title: "Jak wygląda życie w szpitalu psychiatrycznym?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
    intro: "Szpital psychiatryczny nie wygląda jak horror z filmu. W większości przypadków to miejsce leczenia, obserwacji, rozmów z lekarzem i stopniowego wracania do stabilności.",
    bullets: ["stały plan dnia", "rozmowy z personelem", "zajęcia terapeutyczne", "cisza nocna"],
    paragraphs: [
      "Dzień na oddziale psychiatrycznym zwykle jest uporządkowany. Są posiłki, obchody lekarskie, rozmowy z personelem i czas na odpoczynek.",
      "Pacjenci mogą mieć terapię indywidualną, zajęcia grupowe, konsultacje lekarskie albo obserwację działania leków.",
      "Na oddziale obowiązują też zasady bezpieczeństwa. Niektóre rzeczy mogą być ograniczone, szczególnie jeśli ktoś jest w kryzysie i może zrobić krzywdę sobie albo innym.",
      "To nie jest miejsce stworzone po to, żeby kogoś karać. Celem jest uspokojenie sytuacji, diagnoza i dobranie leczenia.",
      "Największy mit? Że każdy pobyt w takim szpitalu wygląda dramatycznie. Bardzo często to po prostu trudny, ale potrzebny etap leczenia.",
    ],
    source: "Wpis informacyjny. W kryzysie psychicznym trzeba kontaktować się z lekarzem, numerem alarmowym albo najbliższą izbą przyjęć.",
  },
  {
    title: "Dlaczego stres potrafi boleć fizycznie?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop",
    intro: "Stres nie siedzi tylko w głowie. Może napinać mięśnie, przyspieszać serce, psuć sen i powodować realny ból w ciele.",
    bullets: ["napięcie mięśni", "ból brzucha", "problemy ze snem", "szybsze bicie serca"],
    paragraphs: [
      "Gdy organizm czuje zagrożenie, uruchamia tryb alarmowy. Serce bije szybciej, oddech się zmienia, a mięśnie przygotowują się do działania.",
      "Jeśli stres trwa długo, ciało nie ma kiedy wrócić do normalnego poziomu napięcia.",
      "Dlatego mogą pojawić się bóle głowy, karku, pleców, brzucha albo uczucie ucisku w klatce piersiowej.",
      "Stres może też zaburzać sen i apetyt, a wtedy organizm jeszcze gorzej się regeneruje.",
      "Nie każdy ból jest od stresu, ale przewlekłe napięcie naprawdę potrafi dawać fizyczne objawy.",
    ],
    source: "Wpis edukacyjny. Silny ból, duszność lub objawy nagłe wymagają pilnej konsultacji medycznej.",
  },
  {
    title: "Po jakim czasie niszczą się płuca od palenia?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    intro: "Płuca reagują na dym papierosowy bardzo szybko. Kaszel, gorsza kondycja i zadyszka mogą pojawić się dużo wcześniej, niż wiele osób zakłada.",
    bullets: ["gorsza wydolność", "większe ryzyko POChP", "kaszel i zadyszka", "ryzyko raka"],
    paragraphs: [
      "Dym papierosowy drażni drogi oddechowe praktycznie od pierwszych kontaktów z płucami.",
      "Na początku człowiek może zauważyć tylko gorszą kondycję, kaszel rano albo szybszą zadyszkę przy schodach.",
      "Z czasem rośnie ryzyko przewlekłych chorób płuc, problemów z sercem i nowotworów.",
      "Najważniejsze jest to, że organizm zaczyna się regenerować po rzuceniu palenia. Nie wszystko cofa się od razu, ale poprawa może zacząć się stosunkowo szybko.",
      "Im wcześniej ktoś przestanie palić, tym większa szansa, że płuca i cały organizm odzyskają część sprawności.",
    ],
    source: "Wpis edukacyjny. Nie zastępuje porady lekarskiej ani programu rzucania palenia.",
  },
  {
    title: "Ile kosztuje utrzymanie więźnia w Polsce?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1200&auto=format&fit=crop",
    intro: "Utrzymanie jednej osoby osadzonej to duży koszt dla państwa. Pieniądze idą nie tylko na jedzenie, ale też na ochronę, budynki, media, transport i opiekę medyczną.",
    bullets: ["ochrona i administracja", "wyżywienie i media", "opieka medyczna", "utrzymanie zakładów"],
    paragraphs: [
      "Więzienie kojarzy się głównie z celą i kratami, ale za każdą osadzoną osobą stoi cały system, który trzeba codziennie utrzymać.",
      "Największe koszty to nie samo jedzenie. Dużo droższa jest ochrona, praca funkcjonariuszy, monitoring, transport, energia, ogrzewanie i utrzymanie budynków.",
      "Do tego dochodzi opieka medyczna, leki, dokumentacja, procedury bezpieczeństwa oraz administracja zakładu karnego.",
      "Dlatego miesięczny koszt utrzymania więźnia może być dla wielu osób zaskakująco wysoki. To nie jest tylko talerz zupy i prycza w celi.",
      "Najciekawsze pytanie brzmi: czy więźniowie powinni pracować częściej i częściowo pokrywać koszty swojego utrzymania?",
    ],
    source: "Wpis publicystyczny. Dokładne kwoty warto aktualizować według najnowszych danych instytucji publicznych.",
  },
  {
    title: "Czy umierający człowiek nadal słyszy?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop",
    intro: "Słuch bywa jednym z ostatnich zmysłów, które gasną. Dlatego spokojny głos bliskiej osoby może mieć znaczenie nawet wtedy, gdy chory już nie odpowiada.",
    bullets: ["słuch może działać długo", "spokój ma znaczenie", "obecność bliskich pomaga"],
    paragraphs: [
      "W ostatnich chwilach życia ciało stopniowo traci siły, ale nie wszystkie zmysły gasną w tym samym momencie.",
      "Wiele obserwacji wskazuje, że słuch może działać bardzo długo, nawet wtedy, gdy osoba nie mówi i nie reaguje w widoczny sposób.",
      "Dlatego przy łóżku osoby umierającej warto mówić spokojnie, delikatnie i bez paniki.",
      "Nie chodzi o wielkie przemówienia. Czasem wystarczy powiedzieć: jestem obok, kocham cię, możesz odpocząć.",
      "To jeden z tych faktów, które są mroczne, ale jednocześnie bardzo ludzkie.",
    ],
    source: "Wpis edukacyjny. Temat wymaga delikatności i nie zastępuje rozmowy z personelem medycznym.",
  },
  {
    title: "Na czym polega proces balsamacji?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=1200&auto=format&fit=crop",
    intro: "Balsamacja to zabezpieczenie ciała po śmierci. Jej celem jest spowolnienie rozkładu i przygotowanie zmarłego do pożegnania przez rodzinę.",
    bullets: ["dezynfekcja", "wprowadzenie płynów", "zabezpieczenie tkanek", "poprawa wyglądu ciała"],
    paragraphs: [
      "Balsamacja brzmi jak coś z filmu, ale w praktyce jest to specjalistyczna procedura wykonywana po śmierci.",
      "Najpierw ciało jest oczyszczane i dezynfekowane. Potem stosuje się płyny, które mają spowolnić naturalny rozkład tkanek.",
      "Celem nie jest stworzenie sztucznego efektu, tylko zachowanie ciała w możliwie spokojnym i godnym wyglądzie na czas pożegnania.",
      "Balsamacja może być szczególnie ważna, gdy pogrzeb odbywa się później albo ciało ma być transportowane na większą odległość.",
      "To temat mroczny, ale pokazuje, jak dużo pracy stoi za ostatnim pożegnaniem człowieka.",
    ],
    source: "Wpis informacyjny. Szczegóły procedury zależą od kraju, zakładu i przepisów sanitarnych.",
  },
  {
    title: "Najwyższy człowiek w historii",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    intro: "Najwyższe osoby w historii miały ponad 270 cm wzrostu. Tak ekstremalny wzrost robi wrażenie, ale zwykle wiązał się z poważnymi problemami zdrowotnymi.",
    bullets: ["ponad 270 cm wzrostu", "problemy z chodzeniem", "wpływ chorób hormonalnych"],
    paragraphs: [
      "Najwyższy człowiek w historii był tak wysoki, że zwykłe drzwi, łóżka, ubrania i buty stawały się dla niego codziennym problemem.",
      "Tak skrajny wzrost najczęściej nie jest zwykłą cechą urody, ale skutkiem zaburzeń hormonalnych, które wpływają na całe ciało.",
      "Im większy wzrost, tym większe obciążenie dla stawów, kręgosłupa, serca i układu krążenia.",
      "Dlatego za rekordem, który brzmi imponująco, często kryła się choroba, ból i trudności z normalnym funkcjonowaniem.",
      "To przykład rekordu, który na pierwszy rzut oka wydaje się supermocą, ale w praktyce mógł być ogromnym ciężarem.",
    ],
    source: "Wpis popularnonaukowy. Rekordy warto weryfikować w uznanych bazach rekordów.",
  },
  {
    title: "Ile ważył najgrubszy człowiek w historii?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    intro: "Skrajna otyłość potrafi całkowicie unieruchomić człowieka. Przy masie liczonej w setkach kilogramów zwykłe czynności stają się ogromnym wyzwaniem.",
    bullets: ["setki kilogramów masy ciała", "ograniczenie ruchu", "ryzyko niewydolności narządów"],
    paragraphs: [
      "Najcięższe osoby w historii ważyły tyle, że samodzielne wstanie z łóżka mogło być niemożliwe.",
      "Przy takiej masie ciało jest pod ciągłym przeciążeniem. Cierpią stawy, serce, płuca, skóra i układ krążenia.",
      "Problemem staje się nie tylko chodzenie, ale też mycie, ubieranie, transport do lekarza czy zwykłe oddychanie podczas snu.",
      "Takie przypadki często są opisywane jako rekordy, ale w rzeczywistości to dramat zdrowotny i psychiczny.",
      "Dlatego ten temat warto pokazywać nie jako żart, tylko jako ostrzeżenie przed tym, jak daleko może zajść choroba.",
    ],
    source: "Wpis edukacyjny. Skrajna otyłość to poważny problem zdrowotny, nie powód do wyśmiewania.",
  },
  {
    title: "Ile ma wzrostu najniższa osoba na świecie?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    intro: "Najniższe osoby świata mierzyły mniej niż 60 cm. To niesamowity rekord, ale zwykle wynikał z bardzo rzadkich chorób genetycznych lub rozwojowych.",
    bullets: ["mniej niż 60 cm", "rzadkie schorzenia", "rekordy wymagają weryfikacji"],
    paragraphs: [
      "Najniższe osoby na świecie były tak małe, że przedmioty codziennego użytku miały dla nich zupełnie inną skalę.",
      "Krzesło, schody, blat kuchenny czy zwykłe łóżko mogły być czymś, co wymagało pomocy albo specjalnego dostosowania.",
      "Tak niski wzrost najczęściej wiąże się z rzadkimi chorobami, które wpływają na rozwój kości i całego organizmu.",
      "Dlatego ten rekord robi ogromne wrażenie, ale warto mówić o nim z szacunkiem, a nie jak o sensacji z cyrku.",
      "Za każdą taką ciekawostką stoi prawdziwy człowiek i jego codzienne życie.",
    ],
    source: "Wpis popularnonaukowy. Przy rekordach osób żyjących szczególnie ważny jest szacunek i aktualność danych.",
  },
  {
    title: "Dlaczego w średniowieczu miasta tak śmierdziały?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    intro: "Dawne miasta były gęste, brudne i hałaśliwe. Brak kanalizacji, zwierzęta na ulicach i odpady wyrzucane byle gdzie tworzyły zapach, którego dziś trudno sobie wyobrazić.",
    bullets: ["brak nowoczesnej kanalizacji", "zwierzęta w mieście", "odpady na ulicach", "duże zagęszczenie ludzi"],
    paragraphs: [
      "Średniowieczne miasto nie przypominało czystej starówki z folderu turystycznego. Było pełne ludzi, zwierząt, błota, dymu i odpadów.",
      "W wielu miejscach ścieki i resztki trafiały na ulice albo do rynsztoków, a potem spływały dalej z deszczem.",
      "Do tego dochodziły warsztaty rzemieślnicze, garbarnie, piece, stajnie i targi, na których sprzedawano żywe zwierzęta oraz jedzenie.",
      "Zapach był częścią codzienności, bo standardy higieny i infrastruktura były zupełnie inne niż dzisiaj.",
      "To dobry przykład, że historia to nie tylko królowie i bitwy, ale też bardzo zwykłe, często nieprzyjemne życie codzienne.",
    ],
    source: "Wpis historyczny. Opis uogólnia warunki, które różniły się zależnie od miasta i epoki.",
  },
  {
    title: "Dlaczego ludzie bali się zaćmień Słońca?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    intro: "Dziś wiemy, że zaćmienie da się przewidzieć. Dawniej nagłe zniknięcie Słońca mogło wyglądać jak znak końca świata.",
    bullets: ["brak wiedzy astronomicznej", "lęk przed ciemnością", "religijne interpretacje", "rzadkie i widowiskowe zjawisko"],
    paragraphs: [
      "Zaćmienie Słońca potrafi zrobić ogromne wrażenie nawet dzisiaj, gdy wiemy dokładnie, co się dzieje.",
      "Dawniej, gdy wiedza astronomiczna nie była powszechna, nagłe pociemnienie nieba mogło być odbierane jako ostrzeżenie albo kara.",
      "Ludzie łączyli takie zjawiska z bogami, wojną, śmiercią władcy albo nadchodzącą katastrofą.",
      "W rzeczywistości zaćmienie jest efektem ustawienia Słońca, Księżyca i Ziemi w jednej linii.",
      "To pokazuje, jak bardzo nauka zmienia sposób, w jaki człowiek reaguje na strach.",
    ],
    source: "Wpis historyczno-naukowy. Przy obserwacji zaćmienia należy chronić wzrok specjalnymi filtrami.",
  },
  {
    title: "Najdziwniejsze prawa świata — dlaczego w ogóle powstają?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    intro: "Niektóre prawa brzmią absurdalnie, ale często powstały z konkretnego powodu: przez lokalny problem, dawny zwyczaj albo wydarzenie, o którym dziś nikt już nie pamięta.",
    bullets: ["lokalne problemy", "stare przepisy", "dziwne zwyczaje", "prawo nie zawsze nadąża za czasem"],
    paragraphs: [
      "W internecie często krążą listy najdziwniejszych praw świata, ale część z nich jest przesadzona albo wyrwana z kontekstu.",
      "Czasem przepis, który dziś brzmi śmiesznie, kiedyś rozwiązywał bardzo konkretny lokalny problem.",
      "Bywa też tak, że stare prawo formalnie nadal istnieje, choć w praktyce nikt go już nie stosuje.",
      "Dlatego dziwne przepisy są ciekawym oknem na historię danego miejsca, jego lęki, obyczaje i dawne konflikty.",
      "Najlepsze ciekawostki prawne to nie tylko: czego nie wolno, ale przede wszystkim: dlaczego ktoś kiedyś uznał, że trzeba to zapisać.",
    ],
    source: "Wpis publicystyczny. Konkretne przepisy zawsze warto sprawdzać w aktualnym prawie danego kraju.",
  },
  {
    title: "Czy ośmiornice naprawdę są tak inteligentne?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1200&auto=format&fit=crop",
    intro: "Ośmiornice potrafią rozwiązywać problemy, otwierać pojemniki, zmieniać kolor i uciekać z akwariów. Jak na zwierzę bez kręgosłupa, robią niesamowite rzeczy.",
    bullets: ["rozwiązują problemy", "zmieniają kolor", "mają świetny kamuflaż", "potrafią uciekać"],
    paragraphs: [
      "Ośmiornice od lat fascynują naukowców, bo zachowują się zupełnie inaczej niż większość zwierząt bezkręgowych.",
      "Potrafią eksplorować otoczenie, zapamiętywać proste zadania i wykorzystywać swoje ramiona w bardzo precyzyjny sposób.",
      "Ich ciało jest miękkie, więc mogą wciskać się w ciasne szczeliny, a do tego błyskawicznie zmieniają kolor i fakturę skóry.",
      "Najbardziej zaskakujące jest to, że ich inteligencja rozwinęła się zupełnie inną drogą niż inteligencja ssaków.",
      "Dlatego ośmiornica wygląda czasem jak zwierzę z innej planety, choć żyje tuż obok nas, w ziemskich oceanach.",
    ],
    source: "Wpis popularnonaukowy na podstawie wiedzy z biologii i badań zachowania głowonogów.",
  },
  {
    title: "Dlaczego niebo jest niebieskie?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    intro: "Niebo jest niebieskie, bo atmosfera rozprasza krótsze fale światła słonecznego mocniej niż fale dłuższe. Efekt jest prosty, ale wygląda magicznie.",
    bullets: ["światło składa się z kolorów", "atmosfera je rozprasza", "niebieskie fale są krótsze", "zachód Słońca działa inaczej"],
    paragraphs: [
      "Światło słoneczne wydaje się białe, ale w rzeczywistości składa się z wielu kolorów.",
      "Gdy przechodzi przez atmosferę, cząsteczki powietrza rozpraszają część światła w różnych kierunkach.",
      "Krótsze fale, które odpowiadają za kolor niebieski, rozpraszają się mocniej, dlatego patrząc w niebo widzimy właśnie ten kolor.",
      "Przy zachodzie Słońca światło musi przejść przez grubszą warstwę atmosfery, więc więcej niebieskiego zostaje rozproszone po drodze.",
      "Wtedy do naszych oczu częściej docierają barwy czerwone, pomarańczowe i różowe.",
    ],
    source: "Wpis popularnonaukowy na podstawie podstaw optyki i fizyki atmosfery.",
  },
  {
    title: "Czy rośliny mogą się ze sobą komunikować?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    intro: "Rośliny nie mówią, ale potrafią wysyłać sygnały chemiczne. Mogą ostrzegać otoczenie przed szkodnikami albo reagować na zagrożenie.",
    bullets: ["sygnały chemiczne", "reakcja na szkodniki", "współpraca z grzybami", "brak mowy, ale są informacje"],
    paragraphs: [
      "Rośliny nie mają ust, mózgu ani języka, ale to nie znaczy, że są bierne.",
      "Gdy zostaną zaatakowane przez owady, mogą wytwarzać związki chemiczne, które wpływają na inne rośliny albo przyciągają naturalnych wrogów szkodnika.",
      "W glebie ważną rolę odgrywają też grzyby, które tworzą sieci połączeń z korzeniami wielu roślin.",
      "Nie jest to rozmowa w ludzkim sensie, ale wymiana sygnałów i reakcji na środowisko.",
      "Las okazuje się więc dużo bardziej aktywnym systemem, niż wygląda na pierwszy rzut oka.",
    ],
    source: "Wpis popularnonaukowy na podstawie badań nad ekologią roślin i sygnałami chemicznymi.",
  },
  {
    title: "Czemu kukurydza wychodzi w kupie prawie cała?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop",
    intro: "Kukurydza często wygląda, jakby przeszła przez człowieka nietknięta. W rzeczywistości najczęściej zostaje głównie jej twarda, zewnętrzna osłonka.",
    bullets: ["twarda skórka z celulozy", "środek jest trawiony", "wygląda bardziej dramatycznie niż jest", "to zwykle normalne"],
    takeaways: ["Organizm zwykle trawi wnętrze ziaren, ale nie radzi sobie dobrze z ich twardą osłonką.", "Im mniej dokładnie gryziesz kukurydzę, tym większa szansa, że zobaczysz ją później w toalecie.", "To zazwyczaj normalne i nie oznacza, że całe jedzenie przeszło przez ciało bez trawienia."],
    paragraphs: [
      "Kukurydza ma twardą zewnętrzną warstwę z celulozy, której człowiek nie trawi tak łatwo jak białek, tłuszczów czy skrobi.",
      "Dlatego po wypróżnieniu ziarno może wyglądać prawie tak samo jak przed jedzeniem.",
      "To jednak trochę złudzenie. Wnętrze ziarna często zostaje częściowo strawione, a widoczna zostaje głównie żółta osłonka.",
      "Znaczenie ma też gryzienie. Jeśli połykasz ziarna prawie w całości, układ pokarmowy ma mniej dostępu do środka.",
      "W większości przypadków to nic groźnego. Po prostu kukurydza jest jednym z tych pokarmów, które bardzo łatwo zauważyć po drugiej stronie trawienia."
    ],
    source: "Wpis popularnonaukowy o trawieniu. Przy przewlekłych problemach jelitowych warto skonsultować się z lekarzem."
  },
  {
    title: "Czemu muchy siadają na kupie?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1509831944602-7431d4e18afd?q=80&w=1200&auto=format&fit=crop",
    intro: "Dla much odchody nie są obrzydliwe. To źródło zapachu, wilgoci, składników odżywczych i miejsce, w którym część gatunków może składać jaja.",
    bullets: ["silny zapach je przyciąga", "szukają pożywienia", "mogą przenosić bakterie", "część składa tam jaja"],
    takeaways: ["Muchy kierują się zapachem rozkładającej się materii, który dla nich jest sygnałem jedzenia.", "Siadając na odchodach, mogą przenosić drobnoustroje na inne powierzchnie.", "To zachowanie jest obrzydliwe dla ludzi, ale w naturze pomaga rozkładać odpady organiczne."],
    paragraphs: [
      "Muchy są przyciągane przez intensywne zapachy, szczególnie te związane z rozkładem materii organicznej.",
      "Kupa może być dla nich miejscem żerowania, źródłem wilgoci i sygnałem, że w okolicy są składniki odżywcze.",
      "Niektóre gatunki wykorzystują takie miejsca także do składania jaj, bo larwy mają później dostęp do pożywienia.",
      "Problem dla człowieka polega na tym, że mucha może usiąść najpierw na odchodach, a potem na jedzeniu albo blacie w kuchni.",
      "Dlatego muchy są ważne w przyrodzie, ale w domu i przy żywności lepiej ich unikać."
    ],
    source: "Wpis popularnonaukowy o zachowaniu owadów i higienie."
  },
  {
    title: "Ile dostaje więzień za pracę?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    intro: "Więzień może pracować odpłatnie albo nieodpłatnie. Przy pracy płatnej wynagrodzenie zależy od rodzaju pracy, wymiaru godzin i aktualnych przepisów.",
    bullets: ["nie każda praca jest płatna", "stawka zależy od etatu", "część pieniędzy może być potrącana", "przepisy trzeba aktualizować"],
    takeaways: ["Nie każdy osadzony pracuje i nie każda praca w więzieniu oznacza normalną wypłatę do ręki.", "Przy pracy odpłatnej znaczenie ma wymiar czasu pracy i aktualne minimalne wynagrodzenie.", "Część środków może iść na potrącenia, zobowiązania albo fundusze przewidziane przepisami."],
    paragraphs: [
      "Praca więźniów może mieć różne formy. Czasem jest odpłatna, a czasem wykonywana w ramach obowiązków porządkowych albo programów resocjalizacyjnych.",
      "Gdy praca jest płatna, wysokość wynagrodzenia zależy od przepisów, wymiaru pracy i konkretnego zatrudnienia.",
      "W praktyce osadzony nie zawsze dostaje całą kwotę swobodnie do ręki, bo mogą istnieć potrącenia i ograniczenia wynikające z prawa.",
      "Dlatego pytanie: ile dostaje więzień, nie ma jednej odpowiedzi dla każdego przypadku.",
      "Najbezpieczniej opisywać to jako system pracy i rozliczeń, a konkretne kwoty aktualizować według najnowszych danych Służby Więziennej."
    ],
    source: "Wpis informacyjny. Konkretne kwoty zależą od aktualnych przepisów i formy zatrudnienia osadzonego."
  },
  {
    title: "Ile centymetrów miał największy penis?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    intro: "W tym temacie internet jest pełen rekordów, ale mało który jest dobrze potwierdzony. Dlatego lepiej mówić o znanych deklaracjach niż o pewnym rekordzie medycznym.",
    bullets: ["dużo mitów w internecie", "trudno o wiarygodny pomiar", "rekordy bywają kontrowersyjne", "rozmiar nie zawsze jest zaletą"],
    takeaways: ["Nie ma jednego powszechnie uznanego, medycznie idealnie potwierdzonego rekordu.", "Wiele liczb krążących w sieci pochodzi z wywiadów, a nie z rzetelnych badań.", "Skrajny rozmiar może powodować realne problemy zdrowotne i seksualne."],
    paragraphs: [
      "To pytanie przyciąga ogromną ciekawość, ale jednocześnie jest pełne mitów i przesady.",
      "W internecie można znaleźć bardzo wysokie wartości, lecz często pochodzą one z deklaracji, programów telewizyjnych albo sensacyjnych artykułów.",
      "Rzetelny rekord wymagałby jasnego pomiaru, opisanej metody i niezależnego potwierdzenia.",
      "Warto też pamiętać, że skrajnie duży rozmiar nie musi być powodem do dumy. Może wiązać się z bólem, trudnościami w seksie i problemami zdrowotnymi.",
      "Dlatego najlepsza odpowiedź brzmi: rekordy są podawane, ale trzeba traktować je ostrożnie."
    ],
    source: "Wpis popularnonaukowy. Temat rekordów anatomicznych wymaga ostrożności i wiarygodnych źródeł."
  },
  {
    title: "Jaki człowiek żył najdłużej?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    intro: "Najdłużej żyjącym człowiekiem z jednoznacznie potwierdzoną metryką była Francuzka Jeanne Calment. Żyła 122 lata i 164 dni.",
    bullets: ["122 lata i 164 dni", "rekord potwierdzony dokumentami", "najstarszym mężczyzną był Jiroemon Kimura", "długowieczność wymaga weryfikacji"],
    takeaways: ["Jeanne Calment jest uznawana za najdłużej żyjącą osobę z potwierdzonym wiekiem.", "Najstarszym zweryfikowanym mężczyzną był Jiroemon Kimura z Japonii.", "W rekordach długowieczności najważniejsze są dokumenty, a nie rodzinne legendy."],
    paragraphs: [
      "Jeanne Calment urodziła się w 1875 roku we Francji i zmarła w 1997 roku.",
      "Jej wiek został potwierdzony dokumentami, dlatego jest uznawana za najdłużej żyjącego człowieka w historii.",
      "W przypadku mężczyzn rekord należy do Jiroemona Kimury z Japonii, który żył 116 lat i 54 dni.",
      "Wokół bardzo starych osób często pojawiają się sensacyjne historie, ale wiele z nich nie przechodzi dokładnej weryfikacji.",
      "Dlatego w długowieczności liczy się nie tylko imponująca liczba lat, ale też dowody potwierdzające datę urodzenia i śmierci."
    ],
    source: "Wpis oparty na zweryfikowanych rekordach długowieczności."
  },
  {
    title: "Jaki jest rekord promili w Polsce?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop",
    intro: "Najczęściej przywoływany polski rekord to 14,8 promila alkoholu we krwi. To poziom skrajnie niebezpieczny i potencjalnie śmiertelny.",
    bullets: ["14,8 promila", "wynik badano kilkukrotnie", "skrajne zatrucie alkoholem", "nie jest to powód do dumy"],
    takeaways: ["14,8 promila to wartość ekstremalna, która u większości ludzi oznaczałaby śmiertelne zagrożenie.", "Takie przypadki są opisywane jako rekordy, ale w rzeczywistości mówią o zatruciu i tragedii.", "Przy podejrzeniu zatrucia alkoholem liczy się szybka pomoc medyczna."],
    paragraphs: [
      "W polskich ciekawostkach często pojawia się historia mężczyzny, u którego badanie miało wykazać 14,8 promila alkoholu we krwi.",
      "To wynik tak wysoki, że brzmi niemal nierealnie, dlatego w opisach podkreśla się, że badanie było powtarzane.",
      "Trzeba jednak jasno powiedzieć: to nie jest zabawny rekord, tylko przykład skrajnego zatrucia alkoholem.",
      "Tak wysoki poziom alkoholu może prowadzić do śpiączki, zatrzymania oddechu, uszkodzeń narządów i śmierci.",
      "Dlatego temat jest mroczny, ale warto go pokazywać jako ostrzeżenie, nie jako wyzwanie."
    ],
    source: "Wpis ostrzegawczy. Alkohol w takich ilościach stanowi bezpośrednie zagrożenie życia."
  },
  {
    title: "Dlaczego psy wąchają sobie tyłki?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    intro: "Dla psów zapach jest jak dowód osobisty. Wąchanie okolicy ogona pomaga im rozpoznać płeć, nastrój, stan zdrowia i znajomość drugiego psa.",
    bullets: ["zapach niesie informacje", "psy mają bardzo czuły węch", "to forma powitania", "dla ludzi wygląda dziwnie"],
    takeaways: ["Psy poznają świat głównie nosem, a nie wzrokiem tak jak ludzie.", "Okolice odbytu i gruczołów zapachowych niosą dla psa dużo informacji.", "To zachowanie jest normalne, nawet jeśli dla człowieka wygląda niezręcznie."],
    paragraphs: [
      "Pies ma znacznie czulszy węch niż człowiek, dlatego zapachy są dla niego podstawowym źródłem informacji.",
      "W okolicy odbytu znajdują się gruczoły zapachowe, których woń może zdradzać wiele rzeczy o drugim psie.",
      "Dzięki temu psy mogą rozpoznać, czy się znają, jaki jest stan emocjonalny drugiego zwierzęcia i czy jest ono zdrowe.",
      "Dla ludzi wygląda to komicznie albo niegrzecznie, ale dla psów jest to naturalna część komunikacji.",
      "Można powiedzieć, że pies zamiast podać łapę, najpierw sprawdza zapachowy profil znajomego."
    ],
    source: "Wpis popularnonaukowy o zachowaniu psów i komunikacji zapachowej."
  },
  {
    title: "Czy kura może biegać bez głowy?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1200&auto=format&fit=crop",
    intro: "Po odcięciu głowy ciało kury może jeszcze przez chwilę wykonywać ruchy. Wynika to z odruchów nerwowych, a nie z tego, że zwierzę normalnie żyje.",
    bullets: ["odruchy nerwowe", "ruch może trwać chwilę", "nie oznacza normalnego życia", "znany jest przypadek kury Mike"],
    takeaways: ["Krótkie ruchy po utracie głowy wynikają z odruchów, a nie ze świadomego działania.", "Wyjątkowe przypadki dłuższego przeżycia są ekstremalnie rzadkie i zależą od uszkodzeń mózgu oraz pnia mózgu.", "To jeden z tych faktów, które brzmią absurdalnie, ale mają biologiczne wyjaśnienie."],
    paragraphs: [
      "Ciało zwierzęcia może wykonywać odruchowe ruchy nawet wtedy, gdy mózg nie kontroluje już normalnie zachowania.",
      "U kury po gwałtownym uszkodzeniu układu nerwowego mogą pojawić się krótkie, chaotyczne ruchy nóg i skrzydeł.",
      "Najbardziej znany jest przypadek kury Mike, która według opisów przeżyła znacznie dłużej niż zwykle, bo część struktur potrzebnych do podstawowych funkcji nie została całkowicie zniszczona.",
      "Nie jest to jednak normalne życie bez głowy, tylko skrajny i bardzo nietypowy przypadek biologiczny.",
      "W większości sytuacji takie ruchy trwają krótko i są odruchem, nie świadomym bieganiem."
    ],
    source: "Wpis popularnonaukowy o odruchach nerwowych."
  },
  {
    title: "Co dzieje się z ciałem, w które trafia pocisk?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
    intro: "Pocisk nie robi wyłącznie małego tunelu. Uszkodzenia zależą od energii, miejsca trafienia, toru lotu i tkanek, przez które przechodzi.",
    bullets: ["liczy się energia pocisku", "tkanki reagują różnie", "narządy kruche są bardziej narażone", "krwotok bywa największym zagrożeniem"],
    takeaways: ["Najgroźniejsze są krwotoki, uszkodzenia narządów i zaburzenia oddychania lub krążenia.", "Elastyczne tkanki mogą znieść uraz inaczej niż kruche narządy, takie jak wątroba.", "To temat medyczny i ratunkowy, nie instrukcja ani sensacja."],
    paragraphs: [
      "Gdy pocisk trafia w ciało, przekazuje tkankom część swojej energii i tworzy kanał rany.",
      "Wokół tego kanału może dojść do gwałtownego przemieszczenia tkanek, co zwiększa obszar uszkodzenia.",
      "Skutek zależy od rodzaju pocisku, prędkości, miejsca trafienia i tego, czy uszkodzone są naczynia krwionośne albo narządy wewnętrzne.",
      "Niektóre tkanki są bardziej elastyczne, a inne pękają łatwiej, dlatego dwie pozornie podobne rany mogą mieć zupełnie inne skutki.",
      "W praktyce najważniejsze jest szybkie zatamowanie krwotoku i wezwanie pomocy, bo przy takich obrażeniach czas ma ogromne znaczenie."
    ],
    source: "Wpis edukacyjny o mechanizmie urazu. Nie jest instrukcją medyczną ani opisem działań bojowych."
  },
  {
    title: "Kto wynalazł pierwszy sedes?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    intro: "Za jednego z twórców spłukiwanej toalety uważa się Johna Haringtona, który opisał swój projekt w 1596 roku. Nowoczesny sedes rozwijał się jednak przez kolejne stulecia.",
    bullets: ["John Harington", "rok 1596", "spłukiwana toaleta", "późniejsze ulepszenia zmieniły wszystko"],
    takeaways: ["John Harington zaprojektował wczesną wersję toalety ze spłuczką.", "Wynalazek nie stał się od razu standardem w każdym domu.", "Nowoczesna toaleta to efekt wielu ulepszeń, kanalizacji i zmian higienicznych."],
    paragraphs: [
      "Toalety istniały w różnych formach od starożytności, ale sedes ze spłukiwaniem w nowoczesnym sensie kojarzy się z Johnem Haringtonem.",
      "W 1596 roku opisał on projekt urządzenia, które wykorzystywało wodę do spłukiwania nieczystości.",
      "Jego wynalazek był ciekawy, ale przez długi czas nie stał się powszechnym elementem domów.",
      "Prawdziwa rewolucja przyszła później, gdy rozwinięto kanalizację, syfony ograniczające smród i masową produkcję łazienek.",
      "Dlatego pytanie o pierwszy sedes ma prostą odpowiedź tylko częściowo: sam pomysł był wczesny, ale komfortowa toaleta to efekt długiej historii."
    ],
    source: "Wpis historyczny o rozwoju toalety i higieny miejskiej."
  },
  {
    title: "Dlaczego granice Afryki są takie proste?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
    intro: "Wiele granic w Afryce wyznaczono w czasach kolonialnych na mapach, często bez uwzględniania lokalnych ludów, języków i dawnych podziałów.",
    bullets: ["kolonialne podziały", "linie rysowane na mapach", "mało uwagi dla lokalnych społeczności", "skutki trwają do dziś"],
    takeaways: ["Proste granice często wynikają z decyzji mocarstw kolonialnych, a nie naturalnego rozwoju państw.", "Linie na mapie potrafiły rozdzielać jedne społeczności albo łączyć grupy, które wcześniej żyły osobno.", "Dziedzictwo kolonializmu nadal wpływa na politykę i konflikty w wielu regionach."],
    paragraphs: [
      "Patrząc na mapę Afryki, łatwo zauważyć wiele długich, prostych granic.",
      "Nie są one przypadkiem. W dużej mierze wynikają z okresu kolonialnego, gdy europejskie mocarstwa dzieliły kontynent między siebie.",
      "Granice często wyznaczano na mapach, korzystając z południków, równoleżników, rzek albo umownych linii.",
      "Problem polegał na tym, że takie podziały nie zawsze pasowały do rzeczywistego życia lokalnych społeczności.",
      "Dlatego wiele afrykańskich granic wygląda prosto, ale historia za nimi jest bardzo skomplikowana."
    ],
    source: "Wpis historyczny o kolonializmie i kształtowaniu granic państw."
  },
  {
    title: "Co się dzieje z kupą spuszczoną w toalecie?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop",
    intro: "Po spuszczeniu wody ścieki trafiają rurami do kanalizacji, a potem zwykle do oczyszczalni. Tam są filtrowane, napowietrzane i oczyszczane biologicznie.",
    bullets: ["najpierw kanalizacja", "potem oczyszczalnia", "osady są oddzielane", "woda wraca do środowiska po oczyszczeniu"],
    takeaways: ["To, co znika z muszli, nie znika magicznie — trafia do rozbudowanego systemu rur i oczyszczalni.", "Oczyszczalnia usuwa zanieczyszczenia mechanicznie, biologicznie i chemicznie.", "Dlatego do toalety nie powinno się wrzucać śmieci, leków, tłuszczu ani chusteczek."],
    paragraphs: [
      "Po naciśnięciu spłuczki woda zabiera nieczystości do rur kanalizacyjnych.",
      "Z domowych rur ścieki trafiają do większej sieci kanalizacyjnej, która prowadzi je w stronę oczyszczalni.",
      "W oczyszczalni najpierw oddziela się większe zanieczyszczenia, a potem usuwa substancje organiczne z pomocą procesów biologicznych.",
      "Powstają też osady, które wymagają osobnego zagospodarowania.",
      "Dopiero po oczyszczeniu woda może wrócić do środowiska, dlatego kanalizacja to jeden z najważniejszych wynalazków cywilizacji."
    ],
    source: "Wpis popularnonaukowy o kanalizacji i oczyszczaniu ścieków."
  },
  {
    title: "Czy przy uderzeniu samolotu człowiek czuje, że umiera?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    intro: "W katastrofach o ogromnej prędkości wszystko może trwać ułamki sekund. Człowiek może nie mieć czasu na świadome zrozumienie samego momentu śmierci.",
    bullets: ["wszystko zależy od scenariusza", "czas reakcji jest ograniczony", "uderzenie bywa natychmiastowe", "temat wymaga delikatności"],
    takeaways: ["Nie da się odpowiedzieć dla każdej katastrofy tak samo, bo znaczenie ma prędkość, kąt uderzenia i obrażenia.", "Przy skrajnie gwałtownym uderzeniu świadomość może zgasnąć szybciej, niż mózg zdąży zrozumieć sytuację.", "To pytanie jest mroczne, ale często wynika ze strachu przed cierpieniem."],
    paragraphs: [
      "To jedno z najtrudniejszych pytań, bo dotyczy ostatnich sekund życia i bardzo różnych scenariuszy katastrof.",
      "Jeśli uderzenie następuje z ogromną prędkością, utrata świadomości albo śmierć mogą nastąpić praktycznie natychmiast.",
      "Mózg potrzebuje czasu, żeby przetworzyć bodźce, ból i strach, a w skrajnych zdarzeniach tego czasu może po prostu nie być.",
      "Inaczej wygląda sytuacja przy awaryjnym lądowaniu, a inaczej przy katastrofie o bardzo dużej energii.",
      "Najuczciwsza odpowiedź brzmi: czasem człowiek może czuć strach wcześniej, ale sam moment uderzenia może być zbyt szybki, by świadomie go przeżyć."
    ],
    source: "Wpis informacyjny. Nie opisuje konkretnej katastrofy i nie zastępuje wiedzy specjalistów od medycyny sądowej."
  },
  {
    title: "Co czuje człowiek po nokaucie?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
    intro: "Nokaut to nie filmowe zaśnięcie, tylko uraz mózgu. Po nim mogą pojawić się dezorientacja, luka w pamięci, ból głowy, mdłości i senność.",
    bullets: ["utrata świadomości", "dezorientacja", "ból głowy", "możliwy wstrząs mózgu"],
    takeaways: ["Nokaut oznacza, że mózg został gwałtownie zaburzony przez uraz.", "Po nokaucie nie powinno się od razu wracać do walki, treningu ani ryzykownych aktywności.", "Objawy takie jak wymioty, narastający ból głowy lub splątanie wymagają pilnej pomocy medycznej."],
    paragraphs: [
      "Po nokaucie człowiek może przez chwilę nie wiedzieć, gdzie jest i co się stało.",
      "Często pojawia się luka w pamięci, ból głowy, zawroty, mdłości albo duża senność.",
      "To nie jest zwykłe omdlenie ani efektowna scena sportowa. Nokaut oznacza uraz mózgu, który trzeba traktować poważnie.",
      "Szczególnie niebezpieczne są kolejne uderzenia w krótkim czasie, gdy mózg nie zdążył się zregenerować.",
      "Dlatego po utracie świadomości po uderzeniu najlepszą decyzją jest przerwanie aktywności i ocena medyczna."
    ],
    source: "Wpis edukacyjny. Po urazie głowy z utratą świadomości trzeba skonsultować się z lekarzem."
  },
  {
    title: "Jak wygląda zawał serca?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1200&auto=format&fit=crop",
    intro: "Zawał serca nie zawsze wygląda jak filmowy chwyt za klatkę piersiową. Może dawać ucisk, duszność, poty, nudności, ból żuchwy, pleców albo ramienia.",
    bullets: ["ucisk w klatce", "duszność", "zimne poty", "ból może promieniować"],
    takeaways: ["Zawał może wyglądać inaczej u różnych osób, szczególnie u kobiet, osób starszych i chorych na cukrzycę.", "Niepokojący ucisk w klatce, duszność i zimne poty to powód do natychmiastowego wezwania pomocy.", "Przy podejrzeniu zawału nie czeka się, aż samo przejdzie."],
    paragraphs: [
      "Najbardziej znany objaw zawału to silny ucisk lub ból w klatce piersiowej, ale nie zawsze wygląda to tak samo.",
      "Ból może promieniować do lewego ramienia, szyi, żuchwy, pleców albo nadbrzusza.",
      "Mogą pojawić się duszność, zimne poty, osłabienie, nudności, lęk i poczucie, że dzieje się coś bardzo złego.",
      "U niektórych osób objawy są mniej typowe, przez co zawał bywa mylony z niestrawnością albo zmęczeniem.",
      "Jeśli istnieje podejrzenie zawału, trzeba natychmiast dzwonić po pomoc. Tu liczą się minuty."
    ],
    source: "Wpis edukacyjny. Przy podejrzeniu zawału należy natychmiast zadzwonić pod numer alarmowy."
  },
  {
    title: "Co się stało z danymi z Naszej Klasy?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    intro: "Serwis NK.pl został zamknięty w 2021 roku. Użytkownicy mieli czas na pobranie danych, a po zamknięciu serwisu dostęp do profili zniknął.",
    bullets: ["serwis zamknięto w 2021 roku", "nie można już normalnie korzystać z kont", "część danych można było pobrać wcześniej", "adres strony pozostał informacyjny"],
    takeaways: ["Nasza Klasa nie działa już jako dawny portal społecznościowy.", "Przed zamknięciem użytkownicy byli informowani o końcu działania serwisu i możliwości zabezpieczenia danych.", "To dobry przykład, że dane z internetu nie zawsze są dostępne na zawsze."],
    paragraphs: [
      "Nasza Klasa była jednym z najważniejszych polskich portali społecznościowych przed epoką Facebooka.",
      "W 2021 roku ogłoszono zakończenie działalności serwisu NK.pl, a kilka tygodni później portal został zamknięty.",
      "Użytkownicy nie mogli już normalnie logować się do dawnych profili i korzystać z funkcji serwisu.",
      "Przed końcem działania można było interesować się pobraniem własnych danych albo rozliczeniem płatnych usług, jeśli ktoś z nich korzystał.",
      "Historia Naszej Klasy pokazuje, że nawet ogromny portal może kiedyś zniknąć, a cyfrowe wspomnienia warto archiwizować samemu."
    ],
    source: "Wpis historyczny o zamknięciu serwisu NK.pl w 2021 roku."
  },
  {
    title: "Ile osób zabiłaby bomba atomowa w Polsce?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=1200&auto=format&fit=crop",
    intro: "Nie ma jednej liczby. Skutki zależą od mocy bomby, miejsca wybuchu, wysokości detonacji, pogody, gęstości zaludnienia i reakcji służb.",
    bullets: ["nie ma jednej odpowiedzi", "liczy się moc ładunku", "ważna jest gęstość miasta", "skutki byłyby katastrofalne"],
    takeaways: ["Ta sama broń może dać zupełnie różne skutki w zależności od miejsca i warunków detonacji.", "Największe zagrożenia to fala uderzeniowa, temperatura, promieniowanie i późniejsze skutki skażenia.", "Takie pytanie najlepiej traktować jako ostrzeżenie przed skalą katastrofy, a nie sensacyjny ranking."],
    paragraphs: [
      "Pytanie o bombę atomową brzmi prosto, ale odpowiedź zależy od wielu zmiennych.",
      "Inne skutki miałby wybuch nad centrum dużego miasta, inne nad terenem mniej zaludnionym, a jeszcze inne przy innej wysokości detonacji.",
      "Znaczenie ma też pora dnia, pogoda, rodzaj zabudowy i to, jak szybko ludzie otrzymaliby pomoc.",
      "Dlatego podawanie jednej liczby bez scenariusza byłoby mylące.",
      "Pewne jest jedno: użycie broni jądrowej w mieście oznaczałoby masową tragedię humanitarną i długotrwałe skutki."
    ],
    source: "Wpis edukacyjny o skutkach broni jądrowej. Nie zawiera instrukcji ani scenariusza użycia."
  },
  {
    title: "Jak ludzie widzieli przed wynalezieniem żarówki?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    intro: "Przed żarówką ludzie korzystali ze światła dziennego, ognia, świec, lamp oliwnych, lamp naftowych i gazowych. Noc była dużo ciemniejsza niż dziś.",
    bullets: ["świece i ogień", "lampy oliwne i naftowe", "światło gazowe", "życie mocniej zależało od dnia"],
    takeaways: ["Przed elektrycznością noc naprawdę ograniczała życie codzienne.", "Światło było droższe, słabsze, bardziej niebezpieczne i mniej wygodne niż dziś.", "Żarówka zmieniła nie tylko domy, ale też pracę, miasta i rytm dnia."],
    paragraphs: [
      "Przez większość historii człowiek żył w rytmie słońca znacznie bardziej niż dzisiaj.",
      "Po zmroku używano ognia, pochodni, świec, lamp oliwnych, a później lamp naftowych i gazowych.",
      "Takie światło było słabsze, migotało, kopciło, kosztowało i mogło powodować pożary.",
      "Dlatego wiele czynności wykonywano za dnia, a noc była czasem odpoczynku albo pracy tylko tam, gdzie opłacało się utrzymywać oświetlenie.",
      "Elektryczna żarówka nie tylko rozjaśniła pokoje, ale też przedłużyła dzień pracy i zmieniła wygląd miast."
    ],
    source: "Wpis historyczny o rozwoju oświetlenia."
  },
  {
    title: "Jak działa Wi‑Fi?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    intro: "Wi‑Fi przesyła dane falami radiowymi między routerem a urządzeniem. To trochę jak niewidzialna rozmowa między telefonem, laptopem i internetem.",
    bullets: ["fale radiowe", "router wysyła i odbiera dane", "urządzenia muszą być w zasięgu", "przeszkody osłabiają sygnał"],
    takeaways: ["Wi‑Fi nie jest internetem samo w sobie — to sposób połączenia urządzenia z routerem.", "Router zamienia dane z sieci na sygnał radiowy i odbiera odpowiedzi z urządzeń.", "Ściany, odległość i inne urządzenia mogą pogarszać jakość połączenia."],
    paragraphs: [
      "Internet dociera do domu zwykle kablem, światłowodem albo przez sieć operatora, a router rozdziela go dalej.",
      "Wi‑Fi pozwala urządzeniom łączyć się z routerem bez kabla, używając fal radiowych.",
      "Telefon albo laptop wysyła zapytanie do routera, router przekazuje je do internetu, a potem odsyła odpowiedź z powrotem.",
      "Im dalej jesteś od routera i im więcej ścian po drodze, tym słabszy może być sygnał.",
      "Dlatego czasem szybki internet działa wolno nie przez operatora, ale przez słaby zasięg Wi‑Fi w domu."
    ],
    source: "Wpis popularnonaukowy o podstawach działania sieci bezprzewodowych."
  },
  {
    title: "Jak wygląda zrzucanie paliwa z samolotu?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    intro: "Zrzut paliwa wykonuje się tylko w wybranych sytuacjach awaryjnych, gdy samolot musi szybko zmniejszyć masę przed lądowaniem.",
    bullets: ["nie każdy samolot może to robić", "chodzi o masę do lądowania", "procedura jest kontrolowana", "paliwo rozprasza się w powietrzu"],
    takeaways: ["Zrzut paliwa nie jest normalną częścią każdego lotu, tylko procedurą awaryjną.", "Celem jest zejście poniżej bezpiecznej masy lądowania.", "Piloci robią to według procedur, zwykle na odpowiedniej wysokości i w wyznaczonym rejonie."],
    paragraphs: [
      "Samolot startuje czasem z dużą ilością paliwa, przez co jest za ciężki, by od razu bezpiecznie wylądować.",
      "Jeśli krótko po starcie pojawi się poważny problem, załoga może potrzebować szybko wrócić na lotnisko.",
      "Niektóre duże samoloty mają system zrzutu paliwa, który pozwala zmniejszyć masę maszyny przed lądowaniem.",
      "Paliwo jest wypuszczane przez specjalne instalacje i rozprasza się w powietrzu, a procedura odbywa się według zasad bezpieczeństwa.",
      "Nie każdy samolot ma taki system. Czasem zamiast zrzutu paliwa maszyna krąży, żeby je spalić."
    ],
    source: "Wpis popularnonaukowy o lotnictwie. Szczegóły zależą od typu samolotu i procedur linii."
  }
];

const popularTitles = [
  "Czemu kukurydza wychodzi w kupie prawie cała?",
  "Czemu muchy siadają na kupie?",
  "Ile kosztuje utrzymanie więźnia w Polsce?",
  "Czy umierający człowiek nadal słyszy?",
  "Jak działa Wi‑Fi?",
];

const popularFacts = popularTitles.map((title) => facts.find((fact) => fact.title === title)).filter(Boolean);
const curiosityCount = facts.length;

const infoContent = {
  Regulamin: {
    title: "Regulamin",
    body: "Treści na stronie mają charakter ciekawostkowy, rozrywkowy i informacyjny. Nie są poradą medyczną, prawną, psychologiczną ani specjalistyczną. Przy tematach dotyczących zdrowia, prawa, bezpieczeństwa, śmierci, używek lub sytuacji kryzysowych zawsze warto sprawdzić aktualne źródła i skonsultować się z odpowiednim specjalistą. Korzystając ze strony, akceptujesz, że materiały służą do szybkiego poznawania ciekawostek, a nie do podejmowania ważnych decyzji życiowych."
  },
  Prywatność: {
    title: "Prywatność",
    body: "Strona może korzystać z podstawowych plików cookies i statystyk odwiedzin, żeby sprawdzać, które ciekawostki są najchętniej czytane i jak poprawiać działanie portalu. Nie sprzedajemy danych użytkowników. Jeśli w przyszłości pojawi się formularz kontaktowy, newsletter albo konto użytkownika, dane będą wykorzystywane tylko do obsługi tych funkcji i kontaktu z użytkownikiem."
  }
};

function normalizeText(value) {
  const map = {
    ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
    Ą: "a", Ć: "c", Ę: "e", Ł: "l", Ń: "n", Ó: "o", Ś: "s", Ź: "z", Ż: "z",
  };

  return String(value || "")
    .split("")
    .map((char) => map[char] || char)
    .join("")
    .toLowerCase()
    .replaceAll("‑", "-")
    .replaceAll("—", " ")
    .replaceAll("?", " ")
    .replaceAll(",", " ")
    .replaceAll(".", " ")
    .replaceAll(":", " ")
    .replaceAll(";", " ")
    .replaceAll("/", " ")
    .replaceAll("  ", " ")
    .trim();
}

function filterFacts(items, activeCategory, searchQuery) {
  const normalizedQuery = normalizeText(searchQuery);

  return items.filter((fact) => {
    const categoryMatch = activeCategory === "Wszystkie" || fact.category === activeCategory;
    const searchText = [
      fact.title,
      getEdgyTitle(fact),
      fact.category,
      fact.intro,
      getEdgyIntro(fact),
      ...(fact.bullets || []),
      ...(fact.takeaways || []),
      ...(fact.paragraphs || []),
      ...getExtraParagraphs(fact),
    ].join(" ");
    const haystack = normalizeText(searchText);
    const queryMatch = normalizedQuery.length === 0 || haystack.includes(normalizedQuery);
    return categoryMatch && queryMatch;
  });
}

function sortFacts(items, sortMode, randomSeed) {
  if (sortMode === "Najnowsze") {
    return [...items].reverse();
  }

  if (sortMode === "Popularne") {
    const popularOrder = new Map(popularTitles.map((title, index) => [title, index]));
    return [...items].sort((a, b) => {
      const aRank = popularOrder.has(a.title) ? popularOrder.get(a.title) : 999;
      const bRank = popularOrder.has(b.title) ? popularOrder.get(b.title) : 999;
      return aRank - bRank;
    });
  }

  if (sortMode === "Losowe") {
    return [...items].sort((a, b) => {
      const aValue = Math.sin((facts.indexOf(a) + 1) * randomSeed) % 1;
      const bValue = Math.sin((facts.indexOf(b) + 1) * randomSeed) % 1;
      return aValue - bValue;
    });
  }

  return items;
}

function runSelfTests() {
  const realCategories = categories.filter((category) => category.name !== "Wszystkie").map((category) => category.name);
  return [
    { name: "każda kategoria ma wpis", pass: realCategories.every((category) => facts.some((fact) => fact.category === category)) },
    { name: "każdy wpis ma rozwinięcie", pass: facts.every((fact) => Array.isArray(fact.paragraphs) && fact.paragraphs.length >= 5) },
    { name: "wyszukiwarka działa", pass: filterFacts(facts, "Wszystkie", "ośmiornice").length === 1 },
    { name: "filtr kategorii działa", pass: filterFacts(facts, "Kryminalne", "").every((fact) => fact.category === "Kryminalne") },
    { name: "popularne wpisy istnieją", pass: popularFacts.length === popularTitles.length },
    { name: "dział Wszystkie pokazuje wszystko", pass: filterFacts(facts, "Wszystkie", "").length === facts.length },
  ];
}

runSelfTests();

function Icon({ name, className = "", size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const icons = {
    search: <svg {...common}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
    menu: <svg {...common}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>,
    facebook: <svg {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    instagram: <svg {...common}><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>,
    message: <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>,
    arrowRight: <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    flame: <svg {...common}><path d="M8.5 14.5A4.5 4.5 0 0 0 12 22a4.5 4.5 0 0 0 3.5-7.5c-.7-.8-1.2-1.7-1.2-2.8 0-1.6.8-3.1 1.7-4.2-2.9.6-5.2 2.7-6.1 5.4-.4-1-.5-2.2-.2-3.3A7.5 7.5 0 0 0 8.5 14.5Z" /></svg>,
    plusCircle: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>,
  };

  return icons[name] || null;
}

function getEdgyTitle(fact) {
  const titles = {
    "Ile razy dziennie człowiek pierdzi?": "Ile razy dziennie człowiek pierdzi — i kiedy to już nie jest normalne?",
    "Dlaczego mamy gęsią skórkę?": "Dlaczego ciało robi gęsią skórkę, nawet gdy nic ci nie grozi?",
    "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?": "Czemu brzuch burczy jak potwór, nawet gdy wcale nie jesteś głodny?",
    "Jak wygląda życie w szpitalu psychiatrycznym?": "Jak naprawdę wygląda życie w psychiatryku, bez filmowych bredni?",
    "Dlaczego stres potrafi boleć fizycznie?": "Dlaczego stres potrafi rozwalić ciało, chociaż zaczyna się w głowie?",
    "Po jakim czasie niszczą się płuca od palenia?": "Po jakim czasie papierosy zaczynają robić z płuc śmietnik?",
    "Ile kosztuje utrzymanie więźnia w Polsce?": "Ile naprawdę kosztuje więzień — i czemu płacimy za to wszyscy?",
    "Czy umierający człowiek nadal słyszy?": "Czy umierający nadal cię słyszy, nawet gdy już nie odpowiada?",
    "Na czym polega proces balsamacji?": "Co robią z ciałem po śmierci, zanim zobaczy je rodzina?",
    "Najwyższy człowiek w historii": "Najwyższy człowiek w historii: rekord czy przekleństwo?",
    "Ile ważył najgrubszy człowiek w historii?": "Ile ważył najcięższy człowiek świata i jak wygląda życie w takiej pułapce?",
    "Ile ma wzrostu najniższa osoba na świecie?": "Jak niski był najniższy człowiek świata i z czym musiał żyć?",
    "Dlaczego w średniowieczu miasta tak śmierdziały?": "Dlaczego średniowieczne miasta śmierdziały tak, że dziś byś nie wytrzymał?",
    "Dlaczego ludzie bali się zaćmień Słońca?": "Dlaczego zaćmienie Słońca kiedyś wyglądało jak koniec świata?",
    "Najdziwniejsze prawa świata — dlaczego w ogóle powstają?": "Najgłupsze prawa świata — kto w ogóle wpadł na takie pomysły?",
    "Czy ośmiornice naprawdę są tak inteligentne?": "Czy ośmiornice są za mądre jak na stworzenia bez kręgosłupa?",
    "Dlaczego niebo jest niebieskie?": "Dlaczego niebo jest niebieskie, skoro kosmos jest czarny?",
    "Czy rośliny mogą się ze sobą komunikować?": "Czy rośliny gadają za twoimi plecami — tylko bez głosu?",
    "Czemu kukurydza wychodzi w kupie prawie cała?": "Czemu kukurydza wychodzi w kupie prawie cała? Obrzydliwe, ale ciekawe",
    "Czemu muchy siadają na kupie?": "Czemu muchy lecą do kupy, jakby to był darmowy bufet?",
    "Ile dostaje więzień za pracę?": "Ile więzień dostaje za pracę i czemu to wkurza ludzi?",
    "Ile centymetrów miał największy penis?": "Największy penis świata: rekord, mit czy problem medyczny?",
    "Jaki człowiek żył najdłużej?": "Kto żył najdłużej i dlaczego większość historii o 140-latkach to ściema?",
    "Jaki jest rekord promili w Polsce?": "Rekord promili w Polsce: wynik tak chory, że trudno w niego uwierzyć",
    "Dlaczego psy wąchają sobie tyłki?": "Dlaczego psy wąchają sobie tyłki i traktują to jak rozmowę?",
    "Czy kura może biegać bez głowy?": "Czy kura naprawdę może biegać bez głowy? Brzmi jak horror, ale biologia jest dziwna",
    "Co dzieje się z ciałem, w które trafia pocisk?": "Co pocisk robi z ciałem? To dużo gorsze niż dziura po kuli",
    "Kto wynalazł pierwszy sedes?": "Kto wymyślił sedes i uratował ludziom nosy?",
    "Dlaczego granice Afryki są takie proste?": "Dlaczego granice Afryki wyglądają, jakby ktoś rysował je linijką?",
    "Co się dzieje z kupą spuszczoną w toalecie?": "Co dzieje się z kupą po spuszczeniu wody? Nie znika magicznie",
    "Czy przy uderzeniu samolotu człowiek czuje, że umiera?": "Czy przy uderzeniu samolotu człowiek zdąży poczuć śmierć?",
    "Co czuje człowiek po nokaucie?": "Co czuje człowiek po nokaucie i czemu to nie jest zwykłe zaśnięcie?",
    "Jak wygląda zawał serca?": "Jak wygląda zawał serca, gdy nie wygląda jak scena z filmu?",
    "Co się stało z danymi z Naszej Klasy?": "Co się stało z twoimi zdjęciami i danymi z Naszej Klasy?",
    "Ile osób zabiłaby bomba atomowa w Polsce?": "Ile osób zabiłaby bomba atomowa w Polsce? Odpowiedź nie jest prosta",
    "Jak ludzie widzieli przed wynalezieniem żarówki?": "Jak ludzie żyli po ciemku, zanim ktoś dał im żarówkę?",
    "Jak działa Wi‑Fi?": "Jak działa Wi‑Fi, czyli niewidzialna sieć, bez której ludzie wariują?",
    "Jak wygląda zrzucanie paliwa z samolotu?": "Czy samolot naprawdę może zrzucić paliwo ludziom na głowy?"
  };

  return titles[fact.title] || fact.title;
}

function getEdgyIntro(fact) {
  const intros = {
    "Ile razy dziennie człowiek pierdzi?": "Każdy to robi, prawie nikt nie chce o tym gadać. A jednak gazy potrafią powiedzieć sporo o jelitach, diecie i tym, czy ciało działa normalnie.",
    "Dlaczego mamy gęsią skórkę?": "Czasem wystarczy chłód, strach albo mocna scena w filmie i skóra nagle zachowuje się jak u przestraszonego zwierzęcia. To stary mechanizm, który został nam po przodkach.",
    "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?": "Brzuch potrafi wydać dźwięk w najgorszym możliwym momencie. I nie, to nie zawsze znaczy, że jesteś głodny.",
    "Jak wygląda życie w szpitalu psychiatrycznym?": "Wiele osób wyobraża sobie psychiatryk jak horror. Prawda jest mniej filmowa, ale nadal potrafi być ciężka, dziwna i bardzo ludzka.",
    "Dlaczego stres potrafi boleć fizycznie?": "Stres nie kończy się na myślach. Potrafi wejść w kark, brzuch, klatkę piersiową i sen tak mocno, że ciało zaczyna zachowywać się jak po awarii.",
    "Po jakim czasie niszczą się płuca od palenia?": "Papieros nie czeka latami, żeby zacząć robić szkody. Drogi oddechowe reagują szybko, nawet jeśli człowiek długo udaje, że wszystko jest pod kontrolą.",
    "Ile kosztuje utrzymanie więźnia w Polsce?": "Cela, jedzenie i kraty to tylko mały kawałek rachunku. Za więźniem stoi cały kosztowny system, który ktoś musi opłacić.",
    "Czy umierający człowiek nadal słyszy?": "To jedno z tych pytań, które ludzie wpisują po cichu. Bo każdy chce wiedzieć, czy ostatnie słowa naprawdę mogą jeszcze dotrzeć.",
    "Na czym polega proces balsamacji?": "Po śmierci ciało nie czeka grzecznie na pogrzeb. Balsamacja to sposób, żeby spowolnić to, co natura zaczyna robić od razu.",
    "Najwyższy człowiek w historii": "Brzmi jak supermoc, ale ekstremalny wzrost częściej oznaczał ból, chorobę i życie, w którym nic nie pasowało do ciała.",
    "Ile ważył najgrubszy człowiek w historii?": "To nie jest tylko liczba na wadze. Przy skrajnej otyłości ciało może stać się więzieniem, z którego trudno się wydostać.",
    "Ile ma wzrostu najniższa osoba na świecie?": "Ten rekord brzmi niewinnie, dopóki nie pomyślisz, że cały świat — schody, łóżka, krzesła i drzwi — był zaprojektowany dla kogoś innego.",
    "Dlaczego w średniowieczu miasta tak śmierdziały?": "Zapomnij o romantycznych uliczkach z filmów. Dawne miasta były ciasne, brudne, zadymione i pachniały tak, że dzisiejszy nos mógłby się poddać.",
    "Dlaczego ludzie bali się zaćmień Słońca?": "Wyobraź sobie, że w środku dnia nagle gaśnie Słońce, a nikt nie potrafi ci wyjaśnić dlaczego. Nic dziwnego, że ludzie widzieli w tym znak katastrofy.",
    "Najdziwniejsze prawa świata — dlaczego w ogóle powstają?": "Niektóre przepisy brzmią tak głupio, że aż trudno uwierzyć, że ktoś musiał je kiedyś zapisać. Ale za absurdem często stoi bardzo konkretna historia.",
    "Czy ośmiornice naprawdę są tak inteligentne?": "Ośmiornica wygląda jak kosmita, zachowuje się jak sprytny uciekinier i potrafi rzeczy, których nie spodziewasz się po miękkim stworzeniu bez kręgosłupa.",
    "Dlaczego niebo jest niebieskie?": "Niby proste pytanie, ale odpowiedź pokazuje, że kolor nieba to efekt wielkiej sztuczki światła i atmosfery.",
    "Czy rośliny mogą się ze sobą komunikować?": "Rośliny nie mają ust, a mimo to potrafią wysyłać sygnały. Las jest dużo mniej cichy, niż wygląda.",
    "Czemu kukurydza wychodzi w kupie prawie cała?": "To pytanie jest obrzydliwe, ale każdy, kto jadł kukurydzę, przynajmniej raz się nad tym zastanowił. I odpowiedź jest bardziej logiczna, niż wygląda w toalecie.",
    "Czemu muchy siadają na kupie?": "Dla nas to obrzydliwe. Dla muchy to zapach jedzenia, wilgoci i miejsca, gdzie można załatwić sprawy życiowe.",
    "Ile dostaje więzień za pracę?": "Jednych to ciekawi, innych wkurza. Praca więźniów to temat, w którym mieszają się pieniądze, kara, resocjalizacja i poczucie sprawiedliwości.",
    "Ile centymetrów miał największy penis?": "Internet kocha ten temat, ale właśnie dlatego jest tu pełno mitów, przechwałek i liczb, które brzmią lepiej niż są udowodnione.",
    "Jaki człowiek żył najdłużej?": "Historii o ludziach żyjących 140 lat jest mnóstwo. Problem w tym, że większość rozpada się przy pierwszym kontakcie z dokumentami.",
    "Jaki jest rekord promili w Polsce?": "To brzmi jak pijacka legenda, ale rekordowe promile to nie powód do śmiechu. To stan, w którym organizm walczy o przetrwanie.",
    "Dlaczego psy wąchają sobie tyłki?": "Dla człowieka to niezręczne. Dla psa to normalne sprawdzenie, z kim ma do czynienia. Taki psi dowód osobisty, tylko zapachowy.",
    "Czy kura może biegać bez głowy?": "Brzmi jak wiejska legenda albo scena z horroru, ale ciało po ciężkim urazie potrafi jeszcze przez chwilę działać na odruchach.",
    "Co dzieje się z ciałem, w które trafia pocisk?": "To nie jest tylko czysta dziura jak w filmie. Pocisk potrafi zrobić w ciele chaos, którego z zewnątrz często nie widać.",
    "Kto wynalazł pierwszy sedes?": "Sedes może nie brzmi jak wielki wynalazek, dopóki nie wyobrazisz sobie miasta bez kanalizacji, smrodu i miejsca, gdzie człowiek może normalnie załatwić sprawę.",
    "Dlaczego granice Afryki są takie proste?": "Te linie nie wyglądają naturalnie, bo często naturalne nie były. Wiele z nich narysowano pod interesy ludzi daleko od Afryki.",
    "Co się dzieje z kupą spuszczoną w toalecie?": "Naciskasz spłuczkę i problem znika. Tylko że nie znika — po prostu trafia do ukrytego systemu, bez którego miasta utonęłyby w brudzie.",
    "Czy przy uderzeniu samolotu człowiek czuje, że umiera?": "To mroczne pytanie, ale bardzo ludzkie. Nie chodzi o sensację, tylko o strach przed ostatnią sekundą.",
    "Co czuje człowiek po nokaucie?": "Nokaut wygląda efektownie tylko z kanapy. Dla mózgu to gwałtowne przeciążenie, po którym człowiek może nie wiedzieć, co się dzieje.",
    "Jak wygląda zawał serca?": "Zawał nie zawsze robi teatralną scenę. Czasem wchodzi po cichu, udaje niestrawność albo zmęczenie i właśnie dlatego jest tak zdradliwy.",
    "Co się stało z danymi z Naszej Klasy?": "Kiedyś pół Polski wrzucało tam zdjęcia, klasy i wspomnienia. Potem portal zgasł, a wielu ludzi dopiero wtedy zrozumiało, że internet też ma datę ważności.",
    "Ile osób zabiłaby bomba atomowa w Polsce?": "To pytanie brzmi jak czarna ciekawość, ale odpowiedź zależy od tylu czynników, że jedna liczba byłaby oszustwem.",
    "Jak ludzie widzieli przed wynalezieniem żarówki?": "Dziś noc rozjaśniasz jednym kliknięciem. Kiedyś ciemność naprawdę rządziła życiem ludzi i decydowała, kiedy kończy się dzień.",
    "Jak działa Wi‑Fi?": "Działa, dopóki nie przestanie — i wtedy pół domu wpada w panikę. A tak naprawdę to zwykła radiowa rozmowa między urządzeniem a routerem.",
    "Jak wygląda zrzucanie paliwa z samolotu?": "Brzmi jak koszmar z nieba, ale w lotnictwie zrzut paliwa to kontrolowana procedura awaryjna, a nie przypadkowe lanie ludziom na głowy."
  };

  return intros[fact.title] || fact.intro;
}

function highlightLastWords(title) {
  const words = title.split(" ");
  if (words.length <= 2) return <span className="text-yellow-400">{title}</span>;
  return (
    <>
      {words.slice(0, -2).join(" ")} <span className="text-yellow-400">{words.slice(-2).join(" ")}</span>
    </>
  );
}

function CategoryCard({ category, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.name)}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-yellow-400/60"
    >
      <div className="relative h-40 overflow-hidden">
        <img src={category.image} alt="" className="h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black uppercase text-white group-hover:text-yellow-300">{category.name}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{category.description}</p>
      </div>
    </button>
  );
}

function FactCard({ fact, onReadMore }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-yellow-400/60">
      <button
        type="button"
        onClick={() => onReadMore(fact)}
        className="relative block h-52 w-full overflow-hidden text-left"
      >
        <img
          src={fact.image}
          alt=""
          className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-yellow-400/30 bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-300">
          {fact.category}
        </div>
      </button>

      <div className="space-y-5 p-5">
        <button type="button" onClick={() => onReadMore(fact)} className="block text-left">
          <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-white transition group-hover:text-yellow-300">
            {highlightLastWords(getEdgyTitle(fact))}
          </h2>
        </button>

        <p className="text-sm leading-6 text-zinc-300">{getEdgyIntro(fact)}</p>

        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={() => onReadMore(fact)}
            className="rounded-xl border border-yellow-400/30 px-4 py-2 text-xs font-black uppercase tracking-wider text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
          >
            Czytaj więcej
          </button>
        </div>
      </div>
    </article>
  );
}

function PopularSidebar() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside className="space-y-5 xl:sticky xl:top-28 xl:self-start">
      <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">Dodaj ciekawostkę</p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">Masz własny temat, zdjęcie albo krótki tekst? Wyślij propozycję do portalu.</p>

        {submitted ? (
          <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-200">
            Dzięki! Twoja ciekawostka została wysłana.
          </div>
        ) : (
          <form
            className="mt-4 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <input className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-yellow-400" placeholder="Tytuł ciekawostki" />
            <select className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400" defaultValue="">
              <option value="" disabled>Wybierz dział</option>
              {categories.filter((category) => category.name !== "Wszystkie").map((category) => (
                <option key={category.name}>{category.name}</option>
              ))}
            </select>
            <textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-yellow-400" placeholder="Napisz krótki tekst albo pytanie..." />
            <label className="block rounded-xl border border-dashed border-yellow-400/30 bg-black/40 px-4 py-4 text-sm font-bold text-zinc-300">
              <span className="text-yellow-300">Dodaj zdjęcie</span> lub ilustrację
              <input type="file" className="mt-3 block w-full text-xs text-zinc-500" />
            </label>
            <button type="submit" className="w-full rounded-xl bg-yellow-400 px-4 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-yellow-300">Wyślij</button>
          </form>
        )}
      </div>
    </aside>
  );
}

function getExtraParagraphs(fact) {
  const extras = {
    "Ile razy dziennie człowiek pierdzi?": [
      "Najczęściej człowiek oddaje gazy od kilku do kilkunastu razy dziennie, choć dokładna liczba może się zmieniać z dnia na dzień. Dużo zależy od tego, co jesz, jak szybko jesz i czy połykasz przy tym dużo powietrza.",
      "Więcej gazów po konkretnych produktach nie musi oznaczać choroby. Fasola, cebula, kapusta, nabiał, słodziki i napoje gazowane potrafią mocno zwiększyć produkcję gazów w jelitach.",
      "Problem zaczyna się wtedy, gdy gazy idą razem z bólem, silnymi wzdęciami, krwią, chudnięciem albo nagłą zmianą rytmu wypróżnień. Wtedy to już nie jest tylko śmieszna ciekawostka, ale sygnał, że warto sprawdzić jelita."
    ],
    "Dlaczego mamy gęsią skórkę?": [
      "Dawniej, gdy ciało człowieka było bardziej owłosione, uniesione włosy mogły zatrzymywać przy skórze więcej ciepłego powietrza. Dziś ten mechanizm został, ale jego praktyczne znaczenie jest dużo mniejsze.",
      "Gęsia skórka pojawia się też przy emocjach: strachu, wzruszeniu, muzyce, wspomnieniach albo silnym napięciu. To pokazuje, że reakcje skóry są mocno połączone z układem nerwowym.",
      "Najciekawsze jest to, że ciało potrafi uruchomić starą reakcję obronną nawet wtedy, gdy nie ma żadnego realnego zagrożenia. Wystarczy dźwięk, scena w filmie albo nagła zmiana temperatury."
    ],
    "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?": [
      "Burczenie powstaje wtedy, gdy jelita przesuwają płyny, powietrze i treść pokarmową. Gdy w środku jest mniej jedzenia, dźwięk może być po prostu lepiej słyszalny.",
      "To dlatego brzuch potrafi burczeć rano, po kawie, po stresie albo nawet chwilę po posiłku. Układ pokarmowy nie jest cichy, tylko zwykle nie zwracamy na niego uwagi.",
      "Jeśli burczeniu towarzyszy ból, biegunka, gorączka albo długie problemy z trawieniem, wtedy warto poszukać przyczyny. Sam dźwięk najczęściej jest jednak normalną pracą jelit."
    ],
    "Jak wygląda życie w szpitalu psychiatrycznym?": [
      "Wiele osób wyobraża sobie taki szpital przez pryzmat filmów, a to często bardzo przekłamany obraz. W praktyce oddział ma swoje zasady, plan dnia, personel i konkretne procedury bezpieczeństwa.",
      "Pacjent może mieć rozmowy z lekarzem, psychologiem, zajęcia terapeutyczne, czas wolny i obserwację działania leków. Pobyt bywa trudny, ale jego celem jest ustabilizowanie sytuacji, nie straszenie człowieka.",
      "Najważniejsze jest to, że pobyt w szpitalu psychiatrycznym nie powinien być traktowany jak wstyd. Dla wielu osób to moment, w którym wreszcie dostają pomoc, której wcześniej brakowało."
    ],
    "Dlaczego stres potrafi boleć fizycznie?": [
      "Stres uruchamia reakcję alarmową organizmu. Mięśnie się napinają, serce przyspiesza, oddech robi się płytszy, a ciało przygotowuje się tak, jakby miało walczyć albo uciekać.",
      "Jeśli taki stan trwa krótko, organizm zwykle szybko wraca do równowagi. Problem zaczyna się wtedy, gdy stres trwa tygodniami albo miesiącami i ciało cały czas funkcjonuje w trybie napięcia.",
      "Dlatego przewlekły stres może dawać bóle karku, pleców, brzucha, głowy, problemy ze snem i uczucie zmęczenia. To nie znaczy, że wszystko jest tylko w głowie — ciało naprawdę reaguje."
    ],
    "Po jakim czasie niszczą się płuca od palenia?": [
      "Dym papierosowy zaczyna drażnić drogi oddechowe praktycznie od razu. Organizm próbuje się bronić, pojawia się kaszel, więcej śluzu i gorsza tolerancja wysiłku.",
      "Przy długim paleniu rośnie ryzyko przewlekłej obturacyjnej choroby płuc, chorób serca i nowotworów. To nie dzieje się jednego dnia, ale każdy rok palenia zwiększa obciążenie organizmu.",
      "Dobra wiadomość jest taka, że po rzuceniu palenia organizm zaczyna się regenerować. Nie zawsze da się cofnąć wszystko, ale poprawa oddychania, krążenia i wydolności może być bardzo realna."
    ],
    "Ile kosztuje utrzymanie więźnia w Polsce?": [
      "Koszt więzienia jest wysoki, bo państwo musi utrzymać nie tylko samą osobę osadzoną, ale cały system wokół niej. W grę wchodzi ochrona, budynki, administracja, transport, monitoring, jedzenie, ogrzewanie i opieka zdrowotna.",
      "Dlatego proste porównanie typu „ile kosztuje obiad więźnia” nie pokazuje całego obrazu. Największe pieniądze pochłaniają ludzie, infrastruktura i bezpieczeństwo.",
      "Temat budzi emocje, bo wiele osób pyta, czy więźniowie powinni częściej pracować i częściowo pokrywać koszty swojego utrzymania. To już nie tylko ciekawostka, ale też dyskusja o karze, resocjalizacji i pieniądzach publicznych."
    ],
    "Czy umierający człowiek nadal słyszy?": [
      "W ostatnich chwilach życia reakcje ciała mogą być bardzo ograniczone, ale to nie oznacza, że wszystkie zmysły gasną jednocześnie. Słuch bywa jednym z tych, które mogą działać bardzo długo.",
      "Dlatego bliscy często słyszą od personelu, żeby mówić spokojnie, nawet jeśli chory nie odpowiada. Taki głos może nie zmienić medycznego przebiegu umierania, ale może mieć ogromne znaczenie emocjonalne.",
      "To ważne, bo wiele osób boi się, że nie zdążyło czegoś powiedzieć. Czasem najprostsze słowa wypowiedziane spokojnie przy łóżku są ważniejsze niż długie pożegnanie."
    ],
    "Na czym polega proces balsamacji?": [
      "Balsamacja jest częścią przygotowania ciała po śmierci. Nie chodzi o sensację, tylko o spowolnienie naturalnych procesów i umożliwienie rodzinie spokojnego pożegnania.",
      "Procedura może obejmować oczyszczenie ciała, zabezpieczenie tkanek i użycie specjalnych płynów. Zakres zależy od sytuacji, kraju, przepisów i tego, kiedy ma odbyć się pogrzeb.",
      "W praktyce balsamacja jest szczególnie ważna przy transporcie zwłok, opóźnionym pogrzebie albo pożegnaniu przy otwartej trumnie. To temat mroczny, ale bardzo realny i związany z godnością zmarłego."
    ],
    "Najwyższy człowiek w historii": [
      "Najwyższe osoby w historii nie były po prostu „bardzo wysokie”. Ich wzrost często wynikał z zaburzeń hormonalnych, które wpływały na kości, stawy, serce i całe ciało.",
      "Codzienne życie przy takim wzroście mogło być ogromnym wyzwaniem. Zwykłe łóżko, ubrania, drzwi, samochód czy schody nagle przestają pasować do człowieka.",
      "Dlatego rekord wzrostu wygląda imponująco tylko na pierwszy rzut oka. Za taką liczbą często stoi ból, ograniczenia, choroba i życie pod ciągłą ciekawością innych ludzi."
    ],
    "Ile ważył najgrubszy człowiek w historii?": [
      "Skrajna otyłość nie polega tylko na dużej wadze. Przy masie liczonej w setkach kilogramów ciało zaczyna tracić możliwość normalnego funkcjonowania.",
      "Największe problemy dotyczą oddychania, serca, krążenia, skóry, stawów i codziennej higieny. Czasem człowiek nie jest w stanie sam wstać, przejść kilku kroków albo pojechać zwykłą karetką.",
      "Dlatego takie rekordy nie powinny być traktowane jak śmieszna sensacja. To raczej dramat zdrowotny, często połączony z psychiką, samotnością i wieloletnim cierpieniem."
    ],
    "Ile ma wzrostu najniższa osoba na świecie?": [
      "Najniższe osoby świata żyły w rzeczywistości, w której każdy przedmiot był za duży: krzesło, blat, schody, drzwi, łazienka czy łóżko. To, co dla większości jest zwykłe, dla nich mogło wymagać dostosowania.",
      "Tak niski wzrost zwykle wiąże się z rzadkimi chorobami genetycznymi albo zaburzeniami rozwoju kości. To nie jest tylko ciekawostka o centymetrach, ale historia konkretnego człowieka.",
      "Dlatego przy takich rekordach ważny jest język. Można mówić o niezwykłości, ale bez robienia z ludzi atrakcji albo żartu."
    ],
    "Dlaczego w średniowieczu miasta tak śmierdziały?": [
      "Średniowieczne miasta były pełne ludzi, zwierząt, warsztatów, dymu i odpadów. Wąskie ulice, brak nowoczesnej kanalizacji i słaba higiena sprawiały, że zapach był częścią codzienności.",
      "Na ulicach mogły znajdować się resztki jedzenia, odchody zwierząt, błoto, ścieki i odpady z rzemiosła. Do tego dochodził dym z palenisk i zapach garbarni czy rzeźni.",
      "Dzisiaj często patrzymy na średniowiecze przez zamki i rycerzy, ale zwykłe życie w mieście mogło być ciasne, brudne i bardzo intensywne dla nosa."
    ],
    "Dlaczego ludzie bali się zaćmień Słońca?": [
      "Zaćmienie Słońca jest jednym z tych zjawisk, które nawet dziś potrafią zrobić ogromne wrażenie. Dawniej, bez powszechnej wiedzy astronomicznej, mogło wyglądać jak coś nadnaturalnego.",
      "Nagłe pociemnienie nieba, spadek temperatury i dziwne zachowanie zwierząt mogły budzić strach. Ludzie tłumaczyli to gniewem bogów, znakiem wojny albo zapowiedzią śmierci władcy.",
      "Dopiero rozwój astronomii sprawił, że zaćmienia zaczęto przewidywać i rozumieć jako efekt ustawienia Słońca, Księżyca i Ziemi. Strach zamienił się w ciekawość."
    ],
    "Najdziwniejsze prawa świata — dlaczego w ogóle powstają?": [
      "Dziwne prawa często brzmią jak żart, ale wiele z nich miało kiedyś konkretny kontekst. Mogły dotyczyć lokalnego problemu, dawnego konfliktu, bezpieczeństwa albo obyczajów, które dziś wydają się absurdalne.",
      "Czasem przepis jest po prostu stary i nikt go nie usunął, bo nie przeszkadza w praktyce. Innym razem internet powtarza uproszczoną wersję prawa, która po sprawdzeniu okazuje się mniej sensacyjna.",
      "Najciekawsze w takich przepisach nie jest samo „nie wolno”, tylko pytanie: co musiało się wydarzyć, że ktoś uznał, że trzeba to zapisać w prawie?"
    ],
    "Czy ośmiornice naprawdę są tak inteligentne?": [
      "Ośmiornice fascynują naukowców, bo ich inteligencja nie przypomina ludzkiej ani psiej. To zwierzę bez kręgosłupa, ale potrafi rozwiązywać problemy, uczyć się i bardzo sprytnie korzystać z otoczenia.",
      "Ich ramiona są niezwykle sprawne, a układ nerwowy rozproszony w ciele. Dzięki temu ośmiornica potrafi zachowywać się w sposób, który wygląda prawie jak planowanie.",
      "Najbardziej niesamowite jest to, że ośmiornice rozwinęły złożone zachowania zupełnie inną drogą ewolucyjną niż ssaki. Dlatego sprawiają wrażenie zwierząt z innej planety."
    ],
    "Dlaczego niebo jest niebieskie?": [
      "Światło słoneczne zawiera wiele kolorów, choć dla oka wygląda zwykle jak białe. Gdy wpada w atmosferę, zderza się z cząsteczkami powietrza i rozprasza w różne strony.",
      "Kolor niebieski rozprasza się mocniej niż wiele innych barw, dlatego z naszej perspektywy całe niebo wydaje się niebieskie. To nie jest kolor samego kosmosu, tylko efekt atmosfery.",
      "Przy zachodzie Słońca światło przechodzi przez grubszą warstwę powietrza. Niebieski rozprasza się po drodze, a do oczu docierają częściej czerwienie, pomarańcze i róże."
    ],
    "Czy rośliny mogą się ze sobą komunikować?": [
      "Rośliny nie rozmawiają tak jak ludzie, ale potrafią wysyłać i odbierać sygnały. Mogą reagować na światło, dotyk, uszkodzenia, szkodniki i substancje chemiczne wydzielane przez inne organizmy.",
      "Gdy roślina zostanie zaatakowana przez owady, może wydzielać związki chemiczne, które wpływają na sąsiednie rośliny albo przyciągają naturalnych wrogów szkodnika.",
      "To nie jest bajka o gadającym lesie, tylko bardziej subtelny system informacji. Natura ma wiele sposobów komunikacji, które nie wymagają głosu."
    ],
    "Czemu kukurydza wychodzi w kupie prawie cała?": [
      "Kukurydza jest świetnym przykładem jedzenia, które wygląda w toalecie bardziej sensacyjnie, niż wynikałoby to z rzeczywistości. Widzisz żółtą osłonkę, ale to nie znaczy, że cały pokarm został nietknięty.",
      "Wnętrze ziarna zawiera składniki, które organizm może częściowo wykorzystać. Problemem jest twarda celulozowa skórka, której człowiek nie rozkłada tak skutecznie.",
      "Dlatego dokładne gryzienie robi dużą różnicę. Im bardziej rozgnieciesz ziarna, tym łatwiej enzymy trawienne dostaną się do środka."
    ],
    "Czemu muchy siadają na kupie?": [
      "Dla człowieka kupa jest czymś obrzydliwym, ale dla muchy może być sygnałem: tu jest wilgoć, zapach i coś, co można wykorzystać jako pożywienie albo miejsce dla larw.",
      "Muchy mają zupełnie inne kryteria atrakcyjności niż ludzie. To, co dla nas jest brudem, dla nich może być częścią naturalnego obiegu materii.",
      "Właśnie dlatego muchy są problemem sanitarnym. Mogą przenieść drobnoustroje z odchodów na jedzenie, blat, skórę albo inne powierzchnie."
    ],
    "Ile dostaje więzień za pracę?": [
      "Praca w więzieniu nie zawsze wygląda tak samo. Osadzony może wykonywać proste prace porządkowe, pracować dla zakładu karnego albo być zatrudniony przy zewnętrznych zleceniach.",
      "Wynagrodzenie zależy od tego, czy praca jest odpłatna, ile godzin trwa i jakie przepisy obowiązują w danym czasie. Część pieniędzy może nie trafiać bezpośrednio do osadzonego, tylko podlegać potrąceniom.",
      "Dlatego najlepiej nie podawać jednej stałej kwoty dla wszystkich więźniów. To temat, w którym konkretne liczby trzeba regularnie aktualizować."
    ],
    "Ile centymetrów miał największy penis?": [
      "W internecie przy tym temacie często padają bardzo konkretne liczby, ale ich jakość bywa słaba. Jedne pochodzą z wywiadów, inne z programów rozrywkowych, a jeszcze inne z powielanych plotek.",
      "Problem polega na tym, że rekord anatomiczny wymagałby rzetelnego pomiaru i jasnej metody. Bez tego trudno odróżnić fakt od autopromocji albo miejskiej legendy.",
      "Dlatego bezpieczniej pisać, że znane są skrajne deklaracje, ale nie ma jednego idealnie potwierdzonego rekordu, który można podać bez zastrzeżeń."
    ],
    "Jaki człowiek żył najdłużej?": [
      "Przy rekordach długowieczności najważniejsza jest dokumentacja. W wielu rodzinach krążą historie o osobach, które miały żyć 130 albo 140 lat, ale bez dokumentów nie da się tego potwierdzić.",
      "Jeanne Calment jest wyjątkowa właśnie dlatego, że jej wiek został zweryfikowany. Jej przypadek stał się punktem odniesienia dla wszystkich późniejszych rekordów.",
      "Długowieczność zależy od wielu czynników: genów, stylu życia, opieki medycznej, szczęścia i warunków, w jakich człowiek żyje przez dekady."
    ],
    "Jaki jest rekord promili w Polsce?": [
      "Przy tak wysokich wartościach alkoholu we krwi organizm znajduje się w stanie skrajnego zatrucia. To nie jest już zwykłe upicie, tylko sytuacja bezpośrednio zagrażająca życiu.",
      "Wysokie promile mogą prowadzić do utraty przytomności, zaburzeń oddychania, wychłodzenia, zachłyśnięcia, śpiączki i śmierci. Dlatego takie historie powinny działać jak ostrzeżenie.",
      "Rekord brzmi sensacyjnie, ale jego tło zwykle jest tragiczne. Za liczbą stoją wypadki, choroba alkoholowa albo sytuacje, które mogły skończyć się śmiercią."
    ],
    "Dlaczego psy wąchają sobie tyłki?": [
      "Pies nie poznaje świata tak jak człowiek. My najpierw patrzymy, a pies najpierw wącha. Zapach potrafi przekazać mu ogrom informacji o innym zwierzęciu.",
      "Okolice odbytu i gruczołów zapachowych zawierają indywidualną mieszankę zapachów. Dla psa to coś w rodzaju krótkiego profilu: kto to jest, w jakim jest stanie i czy już się znają.",
      "Dla ludzi wygląda to niezręcznie, ale w psim świecie jest naturalne. To jeden z powodów, dla których nie warto oceniać zachowań zwierząt wyłącznie ludzkimi kategoriami."
    ],
    "Czy kura może biegać bez głowy?": [
      "Po utracie głowy ciało zwierzęcia może jeszcze wykonywać krótkie ruchy, bo część odruchów nie wymaga świadomej decyzji. Układ nerwowy nie wyłącza się jak lampka jednym kliknięciem.",
      "Słynny przypadek kury Mike jest tak znany, bo był skrajnie nietypowy. Nie oznacza on, że kury normalnie mogą funkcjonować bez głowy.",
      "To pytanie jest dziwne, ale dobrze pokazuje różnicę między odruchem, ruchem ciała i świadomym zachowaniem."
    ],
    "Co dzieje się z ciałem, w które trafia pocisk?": [
      "Skala obrażeń zależy od energii pocisku, miejsca trafienia i tego, przez jakie tkanki przechodzi. Inaczej reaguje mięsień, inaczej kość, a inaczej narząd pełen krwi.",
      "Największym zagrożeniem nie zawsze jest sam otwór po pocisku, ale krwotok, uszkodzenie narządów, wstrząs i utrata funkcji życiowych.",
      "Dlatego medycznie rana postrzałowa to sytuacja ratunkowa, a nie filmowy efekt. Liczy się czas, zatamowanie krwawienia i szybka pomoc."
    ],
    "Kto wynalazł pierwszy sedes?": [
      "John Harington zaprojektował wczesną toaletę ze spłuczką, ale jego pomysł nie oznaczał od razu rewolucji w każdym domu. Wynalazki często potrzebują infrastruktury, żeby naprawdę zmienić świat.",
      "Dopiero rozwój kanalizacji, lepszych rur, syfonów i miejskich systemów sanitarnych sprawił, że toaleta stała się wygodna i powszechna.",
      "Dlatego historia sedesu to nie tylko historia jednego wynalazcy, ale też historia higieny, miast i walki z chorobami."
    ],
    "Dlaczego granice Afryki są takie proste?": [
      "Proste granice często zdradzają, że ktoś rysował je na mapie bardziej niż wyznaczał w terenie na podstawie życia lokalnych społeczności. W Afryce było to mocno związane z kolonializmem.",
      "Europejskie mocarstwa dzieliły obszary według własnych interesów, często ignorując języki, ludy, dawne królestwa, szlaki handlowe i relacje między społecznościami.",
      "Skutki takich decyzji nie zniknęły po odzyskaniu niepodległości. Granice państw potrafią wpływać na politykę, konflikty i tożsamość jeszcze przez wiele pokoleń."
    ],
    "Co się dzieje z kupą spuszczoną w toalecie?": [
      "Po spuszczeniu wody nieczystości trafiają do systemu, którego na co dzień nie widzimy: rur, przepompowni, kolektorów i oczyszczalni. To ogromna infrastruktura ukryta pod miastem.",
      "Oczyszczalnia nie działa jak magiczny filtr. To kilka etapów: oddzielanie większych zanieczyszczeń, oczyszczanie biologiczne, osady, napowietrzanie i kontrola jakości.",
      "Dlatego toaleta nie jest koszem na śmieci. Chusteczki, tłuszcz, leki i odpady mogą niszczyć kanalizację albo utrudniać oczyszczanie ścieków."
    ],
    "Czy przy uderzeniu samolotu człowiek czuje, że umiera?": [
      "To pytanie brzmi brutalnie, ale często kryje się za nim zwykły ludzki strach: czy w ostatniej chwili jest ból i świadomość tego, co się dzieje.",
      "W katastrofach o bardzo dużej prędkości sam moment uderzenia może być tak szybki, że mózg nie ma czasu świadomie go przetworzyć. Inaczej jest jednak w sytuacjach, gdy zagrożenie trwa dłużej przed samym uderzeniem.",
      "Nie da się uczciwie odpowiedzieć jednym zdaniem dla każdej katastrofy. Można tylko powiedzieć, że przy skrajnie gwałtownym uderzeniu świadomość może zgasnąć niemal natychmiast."
    ],
    "Co czuje człowiek po nokaucie?": [
      "Nokaut wygląda na zewnątrz jak krótkie wyłączenie, ale dla mózgu to uraz. Po odzyskaniu świadomości człowiek może być zdezorientowany, senny, zagubiony i nie pamiętać samego momentu uderzenia.",
      "Często pojawia się ból głowy, nudności, światłowstręt, zawroty albo uczucie, że wszystko dzieje się jak przez mgłę. To typowe sygnały, że mózg potrzebuje odpoczynku i oceny.",
      "Najgroźniejsze jest lekceważenie objawów i szybki powrót do walki albo treningu. Kolejne uderzenie w krótkim czasie może być znacznie bardziej niebezpieczne."
    ],
    "Jak wygląda zawał serca?": [
      "Zawał nie zawsze wygląda jak scena z filmu, w której ktoś dramatycznie łapie się za klatkę piersiową. Czasem objawy są mniej oczywiste: osłabienie, duszność, zimny pot, nudności albo ból w nietypowym miejscu.",
      "Ból lub ucisk może promieniować do ramienia, szyi, żuchwy, pleców albo nadbrzusza. U części osób, szczególnie starszych, kobiet i diabetyków, objawy mogą być bardziej podstępne.",
      "Najważniejsze jest to, żeby nie czekać. Przy podejrzeniu zawału lepiej wezwać pomoc i pomylić się, niż stracić czas, który może decydować o życiu."
    ],
    "Co się stało z danymi z Naszej Klasy?": [
      "Nasza Klasa była dla wielu osób pierwszym dużym kontaktem z mediami społecznościowymi. Zdjęcia klasowe, komentarze i dawne znajomości tworzyły cyfrowe archiwum wspomnień.",
      "Po zamknięciu serwisu dostęp do dawnych profili przestał działać tak jak wcześniej. To przypomina, że platformy internetowe nie są wieczne, nawet jeśli przez kilka lat wydają się częścią codzienności.",
      "Warto z tego wyciągnąć prostą lekcję: zdjęcia, wiadomości i ważne dane najlepiej przechowywać także poza portalami, które mogą kiedyś zniknąć albo zmienić zasady."
    ],
    "Ile osób zabiłaby bomba atomowa w Polsce?": [
      "Skutki wybuchu jądrowego zależą od wielu czynników, dlatego jedna liczba bez kontekstu byłaby fałszywie precyzyjna. Ważna jest moc ładunku, wysokość wybuchu, pogoda, gęstość zabudowy i liczba ludzi w danym miejscu.",
      "Najbardziej bezpośrednie zagrożenia to fala uderzeniowa, ekstremalna temperatura, pożary, promieniowanie i zawalenia budynków. Później dochodzą problemy z leczeniem rannych, ewakuacją, skażeniem i infrastrukturą.",
      "Dlatego takie pytanie warto traktować nie jak kalkulator sensacji, ale jak przypomnienie, że broń jądrowa oznacza katastrofę humanitarną na ogromną skalę."
    ],
    "Jak ludzie widzieli przed wynalezieniem żarówki?": [
      "Przed elektrycznością noc była dużo ciemniejsza, niż wyobrażamy sobie dzisiaj. Człowiek nie mógł po prostu kliknąć włącznika i przedłużyć sobie dnia o kilka godzin.",
      "Świece, lampy oliwne, naftowe i gazowe dawały światło, ale były drogie, słabsze, mniej bezpieczne i często brudziły powietrze. Oświetlenie było czymś, co się oszczędzało.",
      "Żarówka zmieniła rytm życia: pracę, naukę, miasta, sklepy, fabryki i domy. To jeden z wynalazków, który po cichu przeorganizował codzienność."
    ],
    "Jak działa Wi‑Fi?": [
      "Wi‑Fi nie jest samym internetem, tylko sposobem, w jaki urządzenie łączy się z routerem bez kabla. Internet może dochodzić do domu światłowodem, kablem albo przez operatora, a Wi‑Fi rozprowadza go lokalnie.",
      "Router wysyła i odbiera dane falami radiowymi. Telefon, laptop albo telewizor prowadzą z nim niewidzialną wymianę informacji: zapytanie, odpowiedź, kolejne pakiety danych.",
      "Dlatego problemy z Wi‑Fi nie zawsze oznaczają słaby internet. Czasem winne są ściany, odległość, zakłócenia, złe ustawienie routera albo zbyt wiele urządzeń naraz."
    ],
    "Jak wygląda zrzucanie paliwa z samolotu?": [
      "Zrzut paliwa nie jest czymś, co piloci robią rutynowo dla wygody. To procedura stosowana w określonych sytuacjach, najczęściej gdy samolot musi szybciej wrócić do lądowania, a jest za ciężki.",
      "Duże samoloty mają maksymalną masę do lądowania. Jeśli maszyna dopiero wystartowała z dużą ilością paliwa, może przekraczać ten limit i potrzebować zmniejszyć masę.",
      "Procedura odbywa się według zasad bezpieczeństwa, zwykle na odpowiedniej wysokości i w miejscu, gdzie ryzyko dla ludzi na ziemi jest ograniczane. Czasem zamiast zrzutu samolot po prostu krąży, żeby spalić paliwo."
    ]
  };

  return extras[fact.title] || [];
}

function getTakeaways(fact) {
  const takeawaysByTitle = {
    "Ile razy dziennie człowiek pierdzi?": ["To normalna część trawienia, a nie powód do paniki.", "Dieta, stres i tempo jedzenia mogą mocno zmieniać ilość gazów.", "Ból, krew albo nagła zmiana pracy jelit to powód do konsultacji."],
    "Dlaczego mamy gęsią skórkę?": ["To pozostałość po mechanizmie, który dawniej pomagał zatrzymać ciepło.", "Może pojawiać się nie tylko z zimna, ale też przy silnych emocjach.", "Ciało nadal nosi ślady ewolucji, nawet jeśli dziś nie są już bardzo praktyczne."],
    "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?": ["Burczenie nie zawsze oznacza głód — jelita pracują cały dzień.", "Dźwięki nasilają się, gdy w jelitach jest więcej gazów albo płynów.", "Niepokojące są dopiero objawy takie jak silny ból, gorączka lub biegunka."],
    "Jak wygląda życie w szpitalu psychiatrycznym?": ["To przede wszystkim miejsce leczenia i obserwacji, a nie filmowy horror.", "Dzień zwykle ma plan: posiłki, rozmowy, konsultacje i odpoczynek.", "Zasady bezpieczeństwa są po to, żeby chronić pacjentów i personel."],
    "Dlaczego stres potrafi boleć fizycznie?": ["Stres uruchamia ciało tak, jakby musiało reagować na zagrożenie.", "Przewlekłe napięcie może dawać ból głowy, pleców, brzucha albo klatki piersiowej.", "Nagłe lub silne objawy zawsze warto potraktować poważnie."],
    "Po jakim czasie niszczą się płuca od palenia?": ["Dym papierosowy drażni drogi oddechowe praktycznie od początku.", "Kaszel, zadyszka i gorsza kondycja mogą pojawić się szybciej, niż wiele osób zakłada.", "Rzucenie palenia ma sens na każdym etapie, bo organizm zaczyna się regenerować."],
    "Ile kosztuje utrzymanie więźnia w Polsce?": ["Koszt więzienia to nie tylko jedzenie i cela.", "Najwięcej pochłania ochrona, personel, budynki, media i procedury.", "Dlatego temat często wraca w dyskusjach o pracy więźniów i kosztach państwa."],
    "Czy umierający człowiek nadal słyszy?": ["Słuch może działać bardzo długo, nawet gdy chory już nie odpowiada.", "Spokojny głos bliskiej osoby może mieć znaczenie w ostatnich chwilach.", "To temat mroczny, ale bardzo ludzki i wymagający delikatności."],
    "Na czym polega proces balsamacji?": ["Balsamacja służy spowolnieniu rozkładu ciała po śmierci.", "Procedura pomaga przygotować zmarłego do pożegnania przez rodzinę.", "Najczęściej ma znaczenie, gdy pogrzeb jest później albo ciało jest transportowane."],
    "Najwyższy człowiek w historii": ["Ekstremalny wzrost zwykle wiązał się z poważnym problemem zdrowotnym.", "Codzienne rzeczy, jak ubrania, drzwi czy łóżko, stawały się ogromnym wyzwaniem.", "Nie każdy rekord jest powodem do zazdrości — czasem to ciężar."],
    "Ile ważył najgrubszy człowiek w historii?": ["Skrajna otyłość może całkowicie odebrać samodzielność.", "Największym problemem są przeciążone serce, płuca, stawy i skóra.", "To temat bardziej o chorobie i cierpieniu niż o sensacyjnym rekordzie."],
    "Ile ma wzrostu najniższa osoba na świecie?": ["Tak niski wzrost zwykle wynika z rzadkich chorób rozwojowych.", "Codzienne otoczenie może wymagać specjalnego dostosowania.", "O takich rekordach warto pisać z ciekawością, ale też z szacunkiem."],
    "Dlaczego w średniowieczu miasta tak śmierdziały?": ["Dawne miasta były pełne ludzi, zwierząt, dymu i odpadów.", "Brak nowoczesnej kanalizacji mocno wpływał na zapach i higienę.", "Historia codzienności bywa ciekawsza niż daty bitew i nazwiska królów."],
    "Dlaczego ludzie bali się zaćmień Słońca?": ["Nagłe zniknięcie Słońca mogło wyglądać jak znak katastrofy.", "Bez wiedzy astronomicznej ludzie tłumaczyli zaćmienia religią, strachem albo przesądami.", "Dziś wiemy, że to przewidywalne zjawisko, ale nadal robi ogromne wrażenie."],
    "Najdziwniejsze prawa świata — dlaczego w ogóle powstają?": ["Absurdalne przepisy często miały kiedyś bardzo konkretny powód.", "Część dziwnych praw to stare regulacje, których praktycznie nikt już nie używa.", "Najciekawsze jest nie tylko samo prawo, ale historia, która za nim stoi."],
    "Czy ośmiornice naprawdę są tak inteligentne?": ["Ośmiornice rozwiązują problemy i potrafią uczyć się prostych zadań.", "Ich inteligencja rozwinęła się zupełnie inaczej niż u ssaków.", "To jedne z najbardziej niezwykłych zwierząt w oceanach."],
    "Dlaczego niebo jest niebieskie?": ["Kolor nieba wynika z rozpraszania światła w atmosferze.", "Niebieskie fale światła rozpraszają się mocniej niż dłuższe fale.", "Zachody Słońca mają inne kolory, bo światło przechodzi wtedy dłuższą drogę."],
    "Czy rośliny mogą się ze sobą komunikować?": ["Rośliny nie mówią, ale reagują i wysyłają sygnały chemiczne.", "Mogą ostrzegać otoczenie przed szkodnikami albo przyciągać ich naturalnych wrogów.", "Las jest dużo bardziej aktywnym systemem, niż wygląda na pierwszy rzut oka."],
  };

  return fact.takeaways || takeawaysByTitle[fact.title] || fact.bullets;
}

function InfoModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-lg rounded-3xl border border-yellow-400/20 bg-zinc-950 p-6 shadow-2xl shadow-black/60" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">Informacje</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-white">{item.title}</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl border border-white/10 px-3 py-2 text-xs font-black uppercase text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400">
            Zamknij
          </button>
        </div>
        <p className="mt-5 text-base leading-7 text-zinc-300">{item.body}</p>
      </div>
    </div>
  );
}

function getSeriesForFact(fact) {
  const seriesMap = [
    {
      name: "Toaleta i ciało",
      match: ["Ile razy dziennie człowiek pierdzi?", "Czemu kukurydza wychodzi w kupie prawie cała?", "Co się dzieje z kupą spuszczoną w toalecie?", "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?", "Kto wynalazł pierwszy sedes?"],
    },
    {
      name: "Ostatnie chwile",
      match: ["Czy umierający człowiek nadal słyszy?", "Na czym polega proces balsamacji?", "Czy przy uderzeniu samolotu człowiek czuje, że umiera?", "Jak wygląda zawał serca?"],
    },
    {
      name: "Rekordy, które nie zawsze są powodem do zazdrości",
      match: ["Najwyższy człowiek w historii", "Ile ważył najgrubszy człowiek w historii?", "Ile ma wzrostu najniższa osoba na świecie?", "Jaki człowiek żył najdłużej?", "Jaki jest rekord promili w Polsce?"],
    },
    {
      name: "Dziwne zwierzęta i natura",
      match: ["Czy ośmiornice naprawdę są tak inteligentne?", "Dlaczego psy wąchają sobie tyłki?", "Czy kura może biegać bez głowy?", "Czy rośliny mogą się ze sobą komunikować?", "Dlaczego niebo jest niebieskie?"],
    },
  ];

  const series = seriesMap.find((item) => item.match.includes(fact.title));
  if (!series) {
    return {
      name: `Więcej z działu: ${fact.category}`,
      facts: facts.filter((item) => item.category === fact.category && item.title !== fact.title).slice(0, 3),
    };
  }

  return {
    name: series.name,
    facts: series.match
      .filter((title) => title !== fact.title)
      .map((title) => facts.find((item) => item.title === title))
      .filter(Boolean)
      .slice(0, 3),
  };
}

function ReactionButton({ label, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-[11px] font-black uppercase tracking-wide transition ${active ? "border-yellow-400 bg-yellow-400 text-black" : "border-white/10 bg-black/40 text-zinc-400 hover:border-yellow-400 hover:text-yellow-400"}`}
    >
      {label}
    </button>
  );
}

function FactDetails({ fact, onClose, onSelectFact, onNextFact, onRandomFact, readCount }) {
  if (!fact) return null;

  const [reaction, setReaction] = useState(null);
  const similar = facts
    .filter((item) => item.category === fact.category && item.title !== fact.title)
    .slice(0, 3);
  const allParagraphs = [...fact.paragraphs, ...getExtraParagraphs(fact)];
  const series = getSeriesForFact(fact);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-10">
      <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-950 shadow-2xl shadow-black/40">
        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_.35fr] lg:p-10">
          <article className="space-y-6 text-lg leading-8 text-zinc-200">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-base font-black uppercase leading-7 tracking-[0.14em] text-yellow-400 md:text-lg">
                {getEdgyTitle(fact)}
              </p>
              <p className="mt-3 text-lg font-bold leading-7 text-white md:text-xl">
                {getEdgyIntro(fact)}
              </p>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img src={fact.image} alt="" className="h-72 w-full object-cover" />
            </figure>

            {allParagraphs.map((sentence, index) => (
              <p key={`${fact.title}-${index}`}>{sentence}</p>
            ))}

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">Reakcja</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Obrzydliwe",
                  "Chcę więcej takich",
                ].map((label) => (
                  <ReactionButton
                    key={label}
                    label={label}
                    active={reaction === label}
                    onClick={() => setReaction(label)}
                  />
                ))}
              </div>
              {reaction && <p className="mt-2 text-xs text-zinc-500">Dzięki — zapamiętane.</p>}
            </div>

            <div className="rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-black p-5">
              <button
                type="button"
                onClick={onNextFact}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-yellow-300"
              >
                Daj następne <Icon name="arrowRight" size={20} />
              </button>
              <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-zinc-500">
                Przeczytane w tej sesji: {readCount}
              </p>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">Podobne fakty</p>
              <div className="mt-4 space-y-3 text-sm font-bold text-zinc-300">
                {similar.length > 0 ? (
                  similar.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => onSelectFact(item)}
                      className="block text-left transition hover:text-yellow-400"
                    >
                      {getEdgyTitle(item)}
                    </button>
                  ))
                ) : (
                  <p className="text-zinc-500">W tej kategorii pojawi się więcej wpisów.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function LepiejNiePytaj() {
  const [active, setActive] = useState("Wszystkie");
  const [query, setQuery] = useState("");
  const [selectedFact, setSelectedFact] = useState(null);
  const [readCount, setReadCount] = useState(0);
  const [sortMode, setSortMode] = useState("Losowe");
  const [randomSeed, setRandomSeed] = useState(() => Date.now());
  const [infoModal, setInfoModal] = useState(null);

  const visibleFacts = useMemo(() => {
    const filtered = filterFacts(facts, active, query);
    return sortFacts(filtered, sortMode, randomSeed);
  }, [active, query, sortMode, randomSeed]);

  const realCategories = categories.filter((category) => category.name !== "Wszystkie");

  const openFact = (fact) => {
    setSelectedFact(fact);
    setReadCount((count) => count + 1);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const goToFacts = () => {
    setSelectedFact(null);
    setTimeout(() => document.getElementById("fakty")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const handleCategorySelect = (categoryName) => {
    setActive(categoryName);
    goToFacts();
  };

  const handleNextFact = () => {
    if (!selectedFact) return;
    const currentIndex = facts.findIndex((fact) => fact.title === selectedFact.title);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % facts.length : 0;
    openFact(facts[nextIndex]);
  };

  const handleRandomFact = () => {
    const otherFacts = facts.filter((fact) => fact.title !== selectedFact?.title);
    const randomFact = otherFacts[Math.floor(Math.random() * otherFacts.length)] || facts[0];
    openFact(randomFact);
  };

  return (
    <main className="min-h-screen bg-[#090d0f] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(113,113,122,0.12),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setSelectedFact(null);
                setActive("Wszystkie");
              }}
              className="shrink-0 text-left"
            >
              <div className="text-2xl font-black uppercase tracking-tight">
                Lepiej <span className="text-yellow-400">nie</span> pytaj
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Pytania, których nie zadajesz na głos</p>
            </button>

            <div className="hidden items-center gap-4 lg:flex">
              <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-yellow-300">
                Przeczytane dzisiaj: {readCount}
              </div>
              <Icon name="facebook" size={22} />
              <Icon name="instagram" size={22} />
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-yellow-300">
                {readCount} przeczytane
              </div>
              <Icon name="menu" />
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => handleCategorySelect(cat.name)}
                className={`whitespace-nowrap rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wide transition ${active === cat.name ? "bg-yellow-400 text-black" : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-yellow-300"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {selectedFact ? (
        <FactDetails
          fact={selectedFact}
          onClose={() => setSelectedFact(null)}
          onSelectFact={openFact}
          onNextFact={handleNextFact}
          onRandomFact={handleRandomFact}
          readCount={readCount}
        />
      ) : (
        <section id="fakty" className="mx-auto max-w-7xl px-5 pb-12">
          <div className="mb-6 grid gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Szukaj faktu, np. więzienie, balsamacja, rekord..."
                className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["Najnowsze", "Popularne", "Losowe"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setSortMode(mode);
                    if (mode === "Losowe") setRandomSeed(Date.now());
                  }}
                  className={`rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider transition ${sortMode === mode ? "bg-yellow-400 text-black" : "border border-white/10 bg-white/5 text-zinc-300 hover:border-yellow-400/40 hover:text-yellow-300"}`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div>
            {visibleFacts.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-10 text-center">
                  <h2 className="text-2xl font-black uppercase text-white">Brak wyników</h2>
                  <p className="mt-2 text-zinc-400">Spróbuj innej kategorii albo krótszego słowa w wyszukiwarce.</p>
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
                  {visibleFacts.map((fact) => (
                    <FactCard key={fact.title} fact={fact} onReadMore={openFact} />
                  ))}
                </div>
              )}
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-black uppercase">
              Lepiej <span className="text-yellow-400">nie</span> pytaj
            </div>
            <p className="mt-3 text-sm text-zinc-400">Pytania, których nie zadajesz na głos. Codziennie nowe, zaskakujące treści.</p>
          </div>

          <div>
            <h4 className="mb-3 font-black uppercase">Nawigacja</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <button
                type="button"
                onClick={() => {
                  setSelectedFact(null);
                  setActive("Wszystkie");
                  setQuery("");
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
                }}
                className="block text-left transition hover:text-yellow-400"
              >
                Start
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedFact(null);
                  setTimeout(() => document.getElementById("fakty")?.scrollIntoView({ behavior: "smooth" }), 50);
                }}
                className="block text-left transition hover:text-yellow-400"
              >
                Ciekawostki
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-black uppercase">Kategorie</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              {realCategories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategorySelect(category.name)}
                  className="block text-left transition hover:text-yellow-400"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-black uppercase">Informacje</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              {Object.keys(infoContent).map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setInfoModal(infoContent[label])}
                  className="block text-left transition hover:text-yellow-400"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-5 text-xs text-zinc-500">
          © 2026 Lepiej Nie Pytaj. Wszelkie prawa zastrzeżone. Kontakt: kontakt@lepiejniepytaj.pl
        </div>
      </footer>

      <InfoModal item={infoModal} onClose={() => setInfoModal(null)} />
    </main>
  );
}
