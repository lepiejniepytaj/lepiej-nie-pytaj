import React, { useMemo, useState } from "react";

const categories = [
  { name: "Wszystkie" },
  { name: "Ciało człowieka" },
  { name: "Zdrowie" },
  { name: "Kryminalne" },
  { name: "Rekordy i absurdy" },
  { name: "Zwierzęta i natura" },
  { name: "Historia" },
  { name: "Tabu" },
];

const facts = [
  {
    title: "Ile razy dziennie człowiek pierdzi?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
    intro: "Oddawanie gazów to normalna część pracy układu pokarmowego. Wpływa na to dieta, stres, tempo jedzenia i bakterie żyjące w jelitach.",
    paragraphs: [
      "Każdy człowiek oddaje gazy, nawet jeśli nie lubi o tym mówić. To normalny efekt trawienia i pracy bakterii jelitowych.",
      "Więcej gazów może pojawić się po fasoli, kapuście, cebuli, nabiale, napojach gazowanych albo szybkim jedzeniu.",
      "Znaczenie ma też stres, bo układ nerwowy i jelita są ze sobą mocno połączone.",
      "Samo pierdzenie nie jest problemem. Niepokoić powinien raczej silny ból, krew, nagła zmiana rytmu wypróżnień albo długotrwałe wzdęcia.",
      "W skrócie: to krępujące, ale całkowicie ludzkie. Biologia nie zawsze jest elegancka.",
      "Najczęściej człowiek oddaje gazy od kilku do kilkunastu razy dziennie, choć dokładna liczba może się zmieniać z dnia na dzień.",
      "Problem zaczyna się wtedy, gdy gazy idą razem z bólem, silnymi wzdęciami, krwią, chudnięciem albo nagłą zmianą rytmu wypróżnień."
    ],
  },
    {
    title: "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1200&auto=format&fit=crop",
    intro: "Brzuch potrafi wydać dźwięk w najgorszym możliwym momencie. I nie, to nie zawsze znaczy, że jesteś głodny.",
    paragraphs: [
      "Burczenie powstaje, gdy jelita przesuwają powietrze, płyny i treść pokarmową.",
      "Gdy w środku jest mniej jedzenia, dźwięk może być po prostu lepiej słyszalny.",
      "Może pojawić się rano, po kawie, po stresie albo nawet po posiłku.",
      "Samo burczenie zwykle jest normalną pracą układu pokarmowego.",
      "Jeśli dochodzi silny ból, biegunka albo długotrwałe problemy, warto szukać przyczyny."
    ],
  },
  {
    title: "Dlaczego stres potrafi boleć fizycznie?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop",
    intro: "Stres nie kończy się na myślach. Potrafi wejść w kark, brzuch, klatkę piersiową i sen tak mocno, że ciało zaczyna zachowywać się jak po awarii.",
    paragraphs: [
      "Stres uruchamia reakcję alarmową organizmu.",
      "Mięśnie się napinają, serce przyspiesza, oddech robi się płytszy.",
      "Krótki stres może minąć szybko, ale przewlekły potrafi dawać realne objawy fizyczne.",
      "Bóle brzucha, karku, głowy i problemy ze snem mogą mieć związek z napięciem.",
      "To nie znaczy, że objawy są wymyślone — ciało naprawdę reaguje."
    ],
  },
  {
    title: "Po jakim czasie niszczą się płuca od palenia?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format&fit=crop",
    intro: "Papieros nie czeka latami, żeby zacząć robić szkody. Drogi oddechowe reagują szybko, nawet jeśli człowiek długo udaje, że wszystko jest pod kontrolą.",
    paragraphs: [
      "Dym papierosowy drażni drogi oddechowe praktycznie od początku.",
      "Organizm zaczyna produkować więcej śluzu, może pojawić się kaszel i gorsza kondycja.",
      "Lata palenia zwiększają ryzyko chorób płuc, serca i nowotworów.",
      "Po rzuceniu palenia organizm zaczyna się regenerować.",
      "Nie zawsze da się cofnąć wszystko, ale poprawa oddychania może być realna."
    ],
  },
  {
    title: "Czy umierający człowiek nadal słyszy?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    intro: "To jedno z tych pytań, które ludzie wpisują po cichu. Bo każdy chce wiedzieć, czy ostatnie słowa naprawdę mogą jeszcze dotrzeć.",
    paragraphs: [
      "W ostatnich chwilach życia reakcje ciała mogą być bardzo ograniczone.",
      "Nie oznacza to jednak, że wszystkie zmysły gasną jednocześnie.",
      "Słuch bywa jednym ze zmysłów, które mogą działać bardzo długo.",
      "Dlatego bliscy często mówią do chorego spokojnym głosem nawet wtedy, gdy nie odpowiada.",
      "Proste słowa pożegnania mogą mieć ogromne znaczenie emocjonalne."
    ],
  },
  {
    title: "Na czym polega proces balsamacji?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    intro: "Po śmierci ciało nie czeka grzecznie na pogrzeb. Balsamacja to sposób, żeby spowolnić to, co natura zaczyna robić od razu.",
    paragraphs: [
      "Balsamacja to przygotowanie ciała po śmierci.",
      "Celem jest spowolnienie naturalnych procesów i umożliwienie godnego pożegnania.",
      "Może obejmować oczyszczenie, zabezpieczenie tkanek i użycie specjalnych płynów.",
      "Bywa ważna przy transporcie zwłok albo opóźnionym pogrzebie.",
      "To mroczny temat, ale związany z szacunkiem wobec zmarłego i rodziny."
    ],
  },
  {
    title: "Ile ważył najgrubszy człowiek w historii?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    intro: "To nie jest tylko liczba na wadze. Przy skrajnej otyłości ciało może stać się więzieniem, z którego trudno się wydostać.",
    paragraphs: [
      "Skrajna otyłość to nie tylko wygląd, ale ogromne obciążenie dla całego organizmu.",
      "Problemy dotyczą serca, oddychania, stawów, skóry i codziennej higieny.",
      "Czasem człowiek nie jest w stanie sam wstać albo przejść kilku kroków.",
      "Takie rekordy nie powinny być traktowane jak żart.",
      "Za liczbą często stoi cierpienie, samotność i choroba."
    ],
  },
  {
    title: "Ile ma wzrostu najniższa osoba na świecie?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    intro: "Ten rekord brzmi niewinnie, dopóki nie pomyślisz, że cały świat — schody, łóżka, krzesła i drzwi — był zaprojektowany dla kogoś innego.",
    paragraphs: [
      "Najniższe osoby świata żyją w otoczeniu, które zwykle nie jest do nich dostosowane.",
      "Krzesła, schody, blaty, łóżka i drzwi mogą być codziennym wyzwaniem.",
      "Tak niski wzrost zwykle wiąże się z rzadkimi zaburzeniami rozwoju.",
      "To nie jest tylko ciekawostka o centymetrach.",
      "Warto pisać o takich rekordach z ciekawością, ale też z szacunkiem."
    ],
  },
  {
    title: "Dlaczego ludzie bali się zaćmień Słońca?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    intro: "Wyobraź sobie, że w środku dnia nagle gaśnie Słońce, a nikt nie potrafi ci wyjaśnić dlaczego. Nic dziwnego, że ludzie widzieli w tym znak katastrofy.",
    paragraphs: [
      "Zaćmienie Słońca nawet dziś robi ogromne wrażenie.",
      "Dawniej, bez wiedzy astronomicznej, mogło wyglądać jak gniew bogów albo zapowiedź katastrofy.",
      "Nagłe pociemnienie nieba, chłód i dziwne zachowanie zwierząt budziły strach.",
      "Ludzie tłumaczyli to znakami, mitami i przepowiedniami.",
      "Dopiero astronomia pozwoliła przewidywać zaćmienia i rozumieć ich mechanizm."
    ],
  },
  {
    title: "Najdziwniejsze prawa świata — dlaczego w ogóle powstają?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    intro: "Niektóre przepisy brzmią tak głupio, że aż trudno uwierzyć, że ktoś musiał je kiedyś zapisać.",
    paragraphs: [
      "Dziwne prawa często mają konkretny kontekst historyczny.",
      "Mogły powstać przez lokalny problem, dawny zwyczaj albo jednorazowe wydarzenie.",
      "Czasem przepis jest stary i po prostu nikt go nie usunął.",
      "Internet często wyolbrzymia takie historie, więc warto je sprawdzać.",
      "Najciekawsze jest pytanie: co musiało się wydarzyć, że ktoś uznał, że trzeba to zapisać w prawie?"
    ],
  },
  {
    title: "Dlaczego niebo jest niebieskie?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    intro: "Niby proste pytanie, ale odpowiedź pokazuje, że kolor nieba to efekt wielkiej sztuczki światła i atmosfery.",
    paragraphs: [
      "Światło słoneczne wygląda na białe, ale składa się z wielu kolorów.",
      "Gdy wpada w atmosferę, rozprasza się na cząsteczkach powietrza.",
      "Kolor niebieski rozprasza się mocniej niż wiele innych barw.",
      "Dlatego patrząc w niebo, widzimy dominujący niebieski odcień.",
      "Przy zachodzie światło przechodzi przez grubszą warstwę atmosfery, więc widzimy czerwienie i pomarańcze."
    ],
  },
  {
    title: "Czy rośliny mogą się ze sobą komunikować?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    intro: "Rośliny nie mają ust, a mimo to potrafią wysyłać sygnały. Las jest dużo mniej cichy, niż wygląda.",
    paragraphs: [
      "Rośliny nie rozmawiają jak ludzie, ale reagują na sygnały chemiczne i środowiskowe.",
      "Mogą odpowiadać na światło, dotyk, uszkodzenia i atak szkodników.",
      "Niektóre wydzielają substancje, które wpływają na sąsiednie rośliny.",
      "Inne mogą przyciągać naturalnych wrogów owadów, które je atakują.",
      "To subtelna komunikacja bez głosu, ale realna."
    ],
  },
  {
    title: "Czemu muchy siadają na kupie?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?q=80&w=1200&auto=format&fit=crop",
    intro: "Dla nas to obrzydliwe. Dla muchy to zapach jedzenia, wilgoci i miejsca, gdzie można załatwić sprawy życiowe.",
    paragraphs: [
      "Muchy odbierają świat inaczej niż ludzie.",
      "Odchody mogą oznaczać dla nich źródło pożywienia i miejsce dla larw.",
      "Przyciąga je zapach, wilgoć i materia organiczna.",
      "Dlatego są ważnym elementem rozkładu, ale jednocześnie problemem sanitarnym.",
      "Mogą przenosić drobnoustroje z brudu na jedzenie i powierzchnie."
    ],
  },
  {
    title: "Ile dostaje więzień za pracę?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?q=80&w=1200&auto=format&fit=crop",
    intro: "Jednych to ciekawi, innych wkurza. Praca więźniów to temat, w którym mieszają się pieniądze, kara, resocjalizacja i poczucie sprawiedliwości.",
    paragraphs: [
      "Praca w więzieniu może wyglądać bardzo różnie.",
      "Osadzony może wykonywać prace porządkowe albo pracować przy zewnętrznych zleceniach.",
      "Wynagrodzenie zależy od rodzaju pracy, godzin i przepisów.",
      "Część pieniędzy może podlegać potrąceniom.",
      "Nie ma jednej kwoty, która pasuje do każdego przypadku."
    ],
  },
  {
    title: "Ile centymetrów miał największy penis?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1200&auto=format&fit=crop",
    intro: "Internet kocha ten temat, ale właśnie dlatego jest tu pełno mitów, przechwałek i liczb, które brzmią lepiej niż są udowodnione.",
    paragraphs: [
      "Przy takich rekordach bardzo łatwo o przesadę i niepotwierdzone historie.",
      "Część liczb pochodzi z wywiadów albo programów rozrywkowych.",
      "Rzetelny rekord wymagałby jasnej metody pomiaru i wiarygodnej dokumentacji.",
      "Dlatego nie każdą sensacyjną liczbę warto traktować jako fakt.",
      "To temat klikalny, ale trzeba go prowadzić ostrożnie i bez taniej ściemy."
    ],
  },
  {
    title: "Jaki człowiek żył najdłużej?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop",
    intro: "Historii o ludziach żyjących 140 lat jest mnóstwo. Problem w tym, że większość rozpada się przy pierwszym kontakcie z dokumentami.",
    paragraphs: [
      "Przy rekordach długowieczności najważniejsza jest dokumentacja.",
      "Wiele rodzinnych historii o ekstremalnym wieku nie ma potwierdzenia w aktach.",
      "Najbardziej znanym zweryfikowanym przypadkiem była Jeanne Calment.",
      "Długowieczność zależy od genów, stylu życia, opieki medycznej i szczęścia.",
      "Prawdziwe rekordy są rzadsze niż internetowe legendy."
    ],
  },
  {
    title: "Jaki jest rekord promili w Polsce?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    intro: "To brzmi jak pijacka legenda, ale rekordowe promile to nie powód do śmiechu. To stan, w którym organizm walczy o przetrwanie.",
    paragraphs: [
      "Bardzo wysokie stężenie alkoholu we krwi to skrajne zatrucie.",
      "Może prowadzić do utraty przytomności, zaburzeń oddychania, śpiączki i śmierci.",
      "Takie historie brzmią sensacyjnie, ale zwykle mają tragiczne tło.",
      "Za liczbą mogą stać wypadki, uzależnienie i realne zagrożenie życia.",
      "To bardziej ostrzeżenie niż powód do żartu."
    ],
  },
  {
    title: "Dlaczego psy wąchają sobie tyłki?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    intro: "Dla człowieka to niezręczne. Dla psa to normalne sprawdzenie, z kim ma do czynienia.",
    paragraphs: [
      "Psy poznają świat przede wszystkim nosem.",
      "Zapach okolic odbytu i gruczołów zapachowych niesie dużo informacji.",
      "Pies może wyczuć płeć, stan emocjonalny i to, czy zna drugiego psa.",
      "Dla ludzi wygląda to dziwnie, ale w psim świecie jest naturalne.",
      "To trochę jak zapachowy dowód osobisty."
    ],
  },
  {
    title: "Czy kura może biegać bez głowy?",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1200&auto=format&fit=crop",
    intro: "Brzmi jak wiejska legenda albo scena z horroru, ale ciało po ciężkim urazie potrafi jeszcze przez chwilę działać na odruchach.",
    paragraphs: [
      "Po utracie głowy ciało zwierzęcia może wykonywać krótkie odruchowe ruchy.",
      "Nie oznacza to świadomego funkcjonowania.",
      "Układ nerwowy nie wyłącza wszystkich reakcji w jednej sekundzie.",
      "Słynny przypadek kury Mike był skrajnie nietypowy.",
      "To pytanie pokazuje różnicę między odruchem a świadomym działaniem."
    ],
  },
  {
    title: "Co dzieje się z ciałem, w które trafia pocisk?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=1200&auto=format&fit=crop",
    intro: "To nie jest tylko czysta dziura jak w filmie. Pocisk potrafi zrobić w ciele chaos, którego z zewnątrz często nie widać.",
    paragraphs: [
      "Obrażenia zależą od energii pocisku, miejsca trafienia i rodzaju tkanek.",
      "Pocisk może uszkodzić tkanki bezpośrednio i wywołać falę energii.",
      "Największym zagrożeniem bywa krwotok, uszkodzenie narządów i wstrząs.",
      "Rana postrzałowa to sytuacja ratunkowa, nie filmowy efekt specjalny.",
      "Liczy się szybka pomoc i zatamowanie krwawienia."
    ],
  },
  {
    title: "Kto wynalazł pierwszy sedes?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    intro: "Sedes może nie brzmi jak wielki wynalazek, dopóki nie wyobrazisz sobie miasta bez kanalizacji, smrodu i normalnej toalety.",
    paragraphs: [
      "Wczesne projekty toalety ze spłuczką pojawiły się już setki lat temu.",
      "Sama idea nie wystarczyła — potrzebna była kanalizacja, rury i lepsza infrastruktura.",
      "Dopiero rozwój miast i higieny sprawił, że toaleta stała się powszechna.",
      "Sedes to jeden z wynalazków, który naprawdę zmienił codzienne życie.",
      "Historia toalety to również historia walki z brudem, chorobami i smrodem."
    ],
  },
  {
    title: "Dlaczego granice Afryki są takie proste?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1484318571209-661cf29a69f8?q=80&w=1200&auto=format&fit=crop",
    intro: "Te linie nie wyglądają naturalnie, bo często naturalne nie były. Wiele z nich narysowano pod interesy ludzi daleko od Afryki.",
    paragraphs: [
      "Proste granice często zdradzają, że ktoś rysował je na mapie bardziej niż w terenie.",
      "W Afryce wiele granic ma związek z kolonializmem.",
      "Europejskie mocarstwa dzieliły terytoria według własnych interesów.",
      "Często ignorowano języki, ludy, dawne królestwa i lokalne relacje.",
      "Skutki takich decyzji potrafią wpływać na politykę i konflikty przez pokolenia."
    ],
  },
  {
    title: "Co się dzieje z kupą spuszczoną w toalecie?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    intro: "Naciskasz spłuczkę i problem znika. Tylko że nie znika — po prostu trafia do ukrytego systemu, bez którego miasta utonęłyby w brudzie.",
    paragraphs: [
      "Po spuszczeniu wody nieczystości trafiają do rur i kanalizacji.",
      "Dalej płyną do przepompowni, kolektorów i oczyszczalni ścieków.",
      "Oczyszczalnia usuwa zanieczyszczenia etapami.",
      "To nie jest magiczny filtr, tylko ogromna infrastruktura.",
      "Dlatego toaleta nie jest koszem na śmieci."
    ],
  },
  {
    title: "Czy przy uderzeniu samolotu człowiek czuje, że umiera?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    intro: "To mroczne pytanie, ale bardzo ludzkie. Nie chodzi o sensację, tylko o strach przed ostatnią sekundą.",
    paragraphs: [
      "Nie da się uczciwie odpowiedzieć jednym zdaniem dla każdej katastrofy.",
      "Przy bardzo gwałtownym uderzeniu wszystko może wydarzyć się ekstremalnie szybko.",
      "Mózg może nie mieć czasu świadomie przetworzyć samego momentu.",
      "Inaczej jest, gdy zagrożenie trwa dłużej przed uderzeniem.",
      "To jeden z tych tematów, które bardziej pokazują ludzką potrzebę zrozumienia strachu niż ciekawość dla samej sensacji."
    ],
  },
  {
    title: "Co czuje człowiek po nokaucie?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
    intro: "Nokaut wygląda efektownie tylko z kanapy. Dla mózgu to gwałtowne przeciążenie, po którym człowiek może nie wiedzieć, co się dzieje.",
    paragraphs: [
      "Nokaut to uraz mózgu, a nie zwykłe zaśnięcie.",
      "Po odzyskaniu świadomości człowiek może być zdezorientowany i senny.",
      "Może nie pamiętać momentu uderzenia.",
      "Częste są ból głowy, nudności, światłowstręt i zawroty.",
      "Najgorsze jest lekceważenie objawów i szybki powrót do kolejnego uderzenia."
    ],
  },
  {
    title: "Jak wygląda zawał serca?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    intro: "Zawał nie zawsze robi teatralną scenę. Czasem wchodzi po cichu, udaje niestrawność albo zmęczenie i właśnie dlatego jest tak zdradliwy.",
    paragraphs: [
      "Zawał może dawać ucisk albo ból w klatce piersiowej.",
      "Ból może promieniować do ramienia, szyi, żuchwy, pleców albo brzucha.",
      "Czasem pojawia się duszność, zimny pot, nudności albo ogromne osłabienie.",
      "U części osób objawy są mniej typowe i łatwe do zlekceważenia.",
      "Przy podejrzeniu zawału nie warto czekać — liczy się szybka pomoc."
    ],
  },
  {
    title: "Co się stało z danymi z Naszej Klasy?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    intro: "Kiedyś pół Polski wrzucało tam zdjęcia, klasy i wspomnienia. Potem portal zgasł, a wielu ludzi zrozumiało, że internet też ma datę ważności.",
    paragraphs: [
      "Nasza Klasa była dla wielu osób pierwszym dużym portalem społecznościowym.",
      "Ludzie wrzucali zdjęcia, wspomnienia, komentarze i dawne znajomości.",
      "Po zamknięciu serwisu dostęp do dawnych profili przestał działać jak wcześniej.",
      "To pokazuje, że platformy internetowe nie są wieczne.",
      "Ważne zdjęcia i dane warto mieć też poza portalami."
    ],
  },
  {
    title: "Ile osób zabiłaby bomba atomowa w Polsce?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    intro: "To pytanie brzmi jak czarna ciekawość, ale odpowiedź zależy od tylu czynników, że jedna liczba byłaby oszustwem.",
    paragraphs: [
      "Skutki wybuchu jądrowego zależą od mocy ładunku, miejsca, pogody i gęstości zaludnienia.",
      "Znaczenie ma też wysokość wybuchu i rodzaj zabudowy.",
      "Bezpośrednie zagrożenia to fala uderzeniowa, temperatura, pożary i promieniowanie.",
      "Później dochodzi problem leczenia rannych, skażenia i zniszczenia infrastruktury.",
      "To nie kalkulator sensacji, tylko przykład katastrofy humanitarnej."
    ],
  },
  {
    title: "Jak ludzie widzieli przed wynalezieniem żarówki?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
    intro: "Dziś noc rozjaśniasz jednym kliknięciem. Kiedyś ciemność naprawdę rządziła życiem ludzi i decydowała, kiedy kończy się dzień.",
    paragraphs: [
      "Przed elektrycznością noc była dużo ciemniejsza niż dzisiaj.",
      "Świece, lampy oliwne, naftowe i gazowe dawały słabsze światło.",
      "Oświetlenie było drogie i trzeba było je oszczędzać.",
      "Ciemność wpływała na pracę, naukę, bezpieczeństwo i życie domowe.",
      "Żarówka zmieniła rytm dnia i sposób funkcjonowania miast."
    ],
  },
  {
    title: "Jak wygląda zrzucanie paliwa z samolotu?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    intro: "Brzmi jak koszmar z nieba, ale w lotnictwie zrzut paliwa to kontrolowana procedura awaryjna, a nie przypadkowe lanie ludziom na głowy.",
    paragraphs: [
      "Zrzut paliwa stosuje się tylko w określonych sytuacjach.",
      "Najczęściej chodzi o to, że samolot musi szybciej wrócić do lądowania i jest za ciężki.",
      "Duże samoloty mają maksymalną masę do bezpiecznego lądowania.",
      "Procedura odbywa się według zasad, zwykle na odpowiedniej wysokości i w wyznaczonym obszarze.",
      "Czasem zamiast zrzutu paliwa samolot po prostu krąży, żeby je spalić."
    ],
  },
  {
    title: "Dlaczego mamy gęsią skórkę?",
    category: "Ciało człowieka",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    intro: "Gęsia skórka to stary mechanizm obronny organizmu. U naszych przodków pomagała zatrzymać ciepło i wyglądać groźniej.",
    paragraphs: [
      "Gdy robi się zimno albo przeżywamy silne emocje, małe mięśnie przy mieszkach włosowych kurczą się i unoszą włosy na skórze.",
      "U zwierząt z gęstą sierścią taki mechanizm pomaga zatrzymać więcej ciepła przy ciele.",
      "Może też sprawić, że zwierzę wygląda na większe i groźniejsze, co przydaje się w sytuacji zagrożenia.",
      "U człowieka efekt jest już dużo mniej praktyczny, bo mamy znacznie mniej owłosienia niż nasi dawni przodkowie.",
      "Dlatego gęsia skórka jest świetnym przykładem tego, że ciało nadal nosi ślady bardzo starej historii ewolucyjnej.",
      "Pojawia się też przy emocjach: strachu, wzruszeniu, muzyce, wspomnieniach albo silnym napięciu.",
      "Ciało potrafi uruchomić starą reakcję obronną nawet wtedy, gdy nie ma żadnego realnego zagrożenia."
    ],
  },
  {
    title: "Jak wygląda życie w szpitalu psychiatrycznym?",
    category: "Zdrowie",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
    intro: "Szpital psychiatryczny nie wygląda jak horror z filmu. W większości przypadków to miejsce leczenia, obserwacji i wracania do stabilności.",
    paragraphs: [
      "Dzień na oddziale psychiatrycznym zwykle jest uporządkowany. Są posiłki, obchody lekarskie, rozmowy z personelem i czas na odpoczynek.",
      "Pacjenci mogą mieć terapię indywidualną, zajęcia grupowe, konsultacje lekarskie albo obserwację działania leków.",
      "Na oddziale obowiązują też zasady bezpieczeństwa, szczególnie jeśli ktoś jest w kryzysie.",
      "To nie jest miejsce stworzone po to, żeby kogoś karać. Celem jest uspokojenie sytuacji, diagnoza i dobranie leczenia.",
      "Największy mit? Że każdy pobyt w takim szpitalu wygląda dramatycznie.",
      "Prawda jest mniej filmowa, ale nadal potrafi być ciężka, dziwna i bardzo ludzka.",
      "Dla wielu osób to moment, w którym wreszcie dostają pomoc, której wcześniej brakowało."
    ],
  },
  {
    title: "Ile kosztuje utrzymanie więźnia w Polsce?",
    category: "Kryminalne",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1200&auto=format&fit=crop",
    intro: "Utrzymanie jednej osoby osadzonej to duży koszt dla państwa. Pieniądze idą nie tylko na jedzenie, ale też na ochronę, budynki i opiekę medyczną.",
    paragraphs: [
      "Więzienie kojarzy się głównie z celą i kratami, ale za każdą osadzoną osobą stoi cały system, który trzeba codziennie utrzymać.",
      "Największe koszty to nie samo jedzenie. Dużo droższa jest ochrona, praca funkcjonariuszy, monitoring, transport, energia i ogrzewanie.",
      "Do tego dochodzi opieka medyczna, leki, dokumentacja, procedury bezpieczeństwa oraz administracja zakładu karnego.",
      "Dlatego miesięczny koszt utrzymania więźnia może być dla wielu osób zaskakująco wysoki.",
      "Najciekawsze pytanie brzmi: czy więźniowie powinni pracować częściej i częściowo pokrywać koszty swojego utrzymania?",
      "Koszt więzienia jest wysoki, bo państwo musi utrzymać nie tylko samą osobę osadzoną, ale cały system wokół niej.",
      "Temat budzi emocje, bo miesza się tu kara, resocjalizacja i pieniądze publiczne."
    ],
  },
  {
    title: "Najwyższy człowiek w historii",
    category: "Rekordy i absurdy",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    intro: "Najwyższe osoby w historii miały ponad 270 cm wzrostu. Taki rekord robi wrażenie, ale zwykle wiązał się z poważnymi problemami zdrowotnymi.",
    paragraphs: [
      "Najwyższy człowiek w historii był tak wysoki, że zwykłe drzwi, łóżka, ubrania i buty stawały się dla niego codziennym problemem.",
      "Tak skrajny wzrost najczęściej nie jest zwykłą cechą urody, ale skutkiem zaburzeń hormonalnych.",
      "Im większy wzrost, tym większe obciążenie dla stawów, kręgosłupa, serca i układu krążenia.",
      "Za rekordem, który brzmi imponująco, często kryła się choroba, ból i trudności z normalnym funkcjonowaniem.",
      "To przykład rekordu, który na pierwszy rzut oka wydaje się supermocą, ale w praktyce mógł być ogromnym ciężarem.",
      "Codzienne życie przy takim wzroście mogło być ogromnym wyzwaniem.",
      "Za taką liczbą często stoi życie pod ciągłą ciekawością innych ludzi."
    ],
  },
  {
    title: "Czy ośmiornice naprawdę są tak inteligentne?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1200&auto=format&fit=crop",
    intro: "Ośmiornice potrafią rozwiązywać problemy, otwierać pojemniki, zmieniać kolor i uciekać z akwariów.",
    paragraphs: [
      "Ośmiornice od lat fascynują naukowców, bo zachowują się zupełnie inaczej niż większość zwierząt bezkręgowych.",
      "Potrafią eksplorować otoczenie, zapamiętywać proste zadania i wykorzystywać swoje ramiona w bardzo precyzyjny sposób.",
      "Ich ciało jest miękkie, więc mogą wciskać się w ciasne szczeliny, a do tego błyskawicznie zmieniają kolor i fakturę skóry.",
      "Najbardziej zaskakujące jest to, że ich inteligencja rozwinęła się zupełnie inną drogą niż inteligencja ssaków.",
      "Dlatego ośmiornica wygląda czasem jak zwierzę z innej planety, choć żyje tuż obok nas, w ziemskich oceanach.",
      "Ich ramiona są niezwykle sprawne, a układ nerwowy rozproszony w ciele.",
      "To stworzenia, które pokazują, że inteligencja w naturze nie musi wyglądać jak u człowieka."
    ],
  },
  {
    title: "Dlaczego w średniowieczu miasta tak śmierdziały?",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    intro: "Dawne miasta były gęste, brudne i hałaśliwe. Brak kanalizacji, zwierzęta na ulicach i odpady tworzyły zapach, którego dziś trudno sobie wyobrazić.",
    paragraphs: [
      "Średniowieczne miasto nie przypominało czystej starówki z folderu turystycznego. Było pełne ludzi, zwierząt, błota, dymu i odpadów.",
      "W wielu miejscach ścieki i resztki trafiały na ulice albo do rynsztoków, a potem spływały dalej z deszczem.",
      "Do tego dochodziły warsztaty rzemieślnicze, garbarnie, piece, stajnie i targi.",
      "Zapach był częścią codzienności, bo standardy higieny i infrastruktura były zupełnie inne niż dzisiaj.",
      "To dobry przykład, że historia to nie tylko królowie i bitwy, ale też zwykłe, często nieprzyjemne życie codzienne.",
      "Dzisiaj często patrzymy na średniowiecze przez zamki i rycerzy.",
      "Zwykłe życie w mieście mogło być ciasne, brudne i bardzo intensywne dla nosa."
    ],
  },
  {
    title: "Czemu kukurydza wychodzi w kupie prawie cała?",
    category: "Tabu",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop",
    intro: "Kukurydza często wygląda, jakby przeszła przez człowieka nietknięta. W rzeczywistości zostaje głównie jej twarda, zewnętrzna osłonka.",
    paragraphs: [
      "Kukurydza ma twardą zewnętrzną warstwę z celulozy, której człowiek nie trawi tak łatwo jak białek, tłuszczów czy skrobi.",
      "Dlatego po wypróżnieniu ziarno może wyglądać prawie tak samo jak przed jedzeniem.",
      "To jednak trochę złudzenie. Wnętrze ziarna często zostaje częściowo strawione, a widoczna zostaje głównie żółta osłonka.",
      "Znaczenie ma też gryzienie. Jeśli połykasz ziarna prawie w całości, układ pokarmowy ma mniej dostępu do środka.",
      "W większości przypadków to nic groźnego.",
      "Kukurydza jest świetnym przykładem jedzenia, które wygląda w toalecie bardziej sensacyjnie, niż wynikałoby to z rzeczywistości.",
      "Dokładne gryzienie robi dużą różnicę, bo enzymy łatwiej dostają się do środka ziarna."
    ],
  },
  {
    title: "Jak działa Wi-Fi?",
    category: "Zwierzęta i natura",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    intro: "Wi-Fi przesyła dane falami radiowymi między routerem a urządzeniem. To trochę jak niewidzialna rozmowa między telefonem, laptopem i internetem.",
    paragraphs: [
      "Internet dociera do domu zwykle kablem, światłowodem albo przez sieć operatora, a router rozdziela go dalej.",
      "Wi-Fi pozwala urządzeniom łączyć się z routerem bez kabla, używając fal radiowych.",
      "Telefon albo laptop wysyła zapytanie do routera, router przekazuje je do internetu, a potem odsyła odpowiedź z powrotem.",
      "Im dalej jesteś od routera i im więcej ścian po drodze, tym słabszy może być sygnał.",
      "Dlatego czasem szybki internet działa wolno nie przez operatora, ale przez słaby zasięg Wi-Fi w domu.",
      "Wi-Fi nie jest samym internetem, tylko sposobem, w jaki urządzenie łączy się z routerem bez kabla.",
      "Czasem winne są ściany, odległość, zakłócenia, złe ustawienie routera albo zbyt wiele urządzeń naraz."
    ],
  },
];

const popularTitles = [
  "Czemu kukurydza wychodzi w kupie prawie cała?",
  "Ile kosztuje utrzymanie więźnia w Polsce?",
  "Jak działa Wi-Fi?",
];

const infoContent = {
  Regulamin: {
    title: "Regulamin",
    body: "Treści na stronie mają charakter ciekawostkowy, rozrywkowy i informacyjny. Nie są poradą medyczną, prawną, psychologiczną ani specjalistyczną. Przy tematach dotyczących zdrowia, prawa, bezpieczeństwa, śmierci, używek lub sytuacji kryzysowych zawsze warto sprawdzić aktualne źródła i skonsultować się z odpowiednim specjalistą."
  },
  Prywatność: {
    title: "Prywatność",
    body: "Strona może korzystać z podstawowych plików cookies i statystyk odwiedzin, żeby sprawdzać, które ciekawostki są najchętniej czytane i jak poprawiać działanie portalu. Nie sprzedajemy danych użytkowników."
  }
};

function normalizeText(value) {
  const map = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" };
  return String(value || "").split("").map((char) => map[char] || char).join("").toLowerCase().replaceAll("-", "-");
}

function getEdgyTitle(fact) {
  const titles = {
    "Ile razy dziennie człowiek pierdzi?": "Ile razy dziennie człowiek pierdzi — i kiedy to już nie jest normalne?",
    "Dlaczego mamy gęsią skórkę?": "Dlaczego ciało robi gęsią skórkę, nawet gdy nic ci nie grozi?",
    "Jak wygląda życie w szpitalu psychiatrycznym?": "Jak naprawdę wygląda życie w psychiatryku, bez filmowych bredni?",
    "Ile kosztuje utrzymanie więźnia w Polsce?": "Ile naprawdę kosztuje więzień — i czemu płacimy za to wszyscy?",
    "Najwyższy człowiek w historii": "Najwyższy człowiek w historii: rekord czy przekleństwo?",
    "Czy ośmiornice naprawdę są tak inteligentne?": "Czy ośmiornice są za mądre jak na stworzenia bez kręgosłupa?",
    "Dlaczego w średniowieczu miasta tak śmierdziały?": "Dlaczego średniowieczne miasta śmierdziały tak, że dziś byś nie wytrzymał?",
    "Czemu kukurydza wychodzi w kupie prawie cała?": "Czemu kukurydza wychodzi w kupie prawie cała? Obrzydliwe, ale ciekawe",
    "Jak działa Wi-Fi?": "Jak działa Wi-Fi, czyli niewidzialna sieć, bez której ludzie wariują?",
  };
  return titles[fact.title] || fact.title;
}

function getEdgyIntro(fact) {
  const intros = {
    "Ile razy dziennie człowiek pierdzi?": "Każdy to robi, prawie nikt nie chce o tym gadać. A jednak gazy potrafią powiedzieć sporo o jelitach, diecie i tym, czy ciało działa normalnie.",
    "Jak wygląda życie w szpitalu psychiatrycznym?": "Wiele osób wyobraża sobie psychiatryk jak horror. Prawda jest mniej filmowa, ale nadal potrafi być ciężka, dziwna i bardzo ludzka.",
    "Ile kosztuje utrzymanie więźnia w Polsce?": "Cela, jedzenie i kraty to tylko mały kawałek rachunku. Za więźniem stoi cały kosztowny system, który ktoś musi opłacić.",
    "Czemu kukurydza wychodzi w kupie prawie cała?": "To pytanie jest obrzydliwe, ale każdy, kto jadł kukurydzę, przynajmniej raz się nad tym zastanowił.",
    "Jak działa Wi-Fi?": "Działa, dopóki nie przestanie — i wtedy pół domu wpada w panikę. A tak naprawdę to radiowa rozmowa między urządzeniem a routerem.",
  };
  return intros[fact.title] || fact.intro;
}

function filterFacts(items, activeCategory, searchQuery) {
  const q = normalizeText(searchQuery);
  return items.filter((fact) => {
    const categoryMatch = activeCategory === "Wszystkie" || fact.category === activeCategory;
    const text = normalizeText([fact.title, getEdgyTitle(fact), fact.category, fact.intro, getEdgyIntro(fact), ...fact.paragraphs].join(" "));
    return categoryMatch && (q.length === 0 || text.includes(q));
  });
}

function sortFacts(items, sortMode, randomSeed) {
  if (sortMode === "Najnowsze") return [...items].reverse();
  if (sortMode === "Popularne") {
    const order = new Map(popularTitles.map((title, index) => [title, index]));
    return [...items].sort((a, b) => (order.get(a.title) ?? 999) - (order.get(b.title) ?? 999));
  }
  if (sortMode === "Losowe") {
    return [...items].sort((a, b) => (Math.sin((facts.indexOf(a) + 1) * randomSeed) % 1) - (Math.sin((facts.indexOf(b) + 1) * randomSeed) % 1));
  }
  return items;
}

function Icon({ name, className = "", size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": true };
  const icons = {
    search: <svg {...common}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
    menu: <svg {...common}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>,
    facebook: <svg {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    instagram: <svg {...common}><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>,
    arrowRight: <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
  };
  return icons[name] || null;
}

function highlightLastWords(title) {
  const words = title.split(" ");
  if (words.length <= 2) return <span className="text-yellow-400">{title}</span>;
  return <>{words.slice(0, -2).join(" ")} <span className="text-yellow-400">{words.slice(-2).join(" ")}</span></>;
}

function FactCard({ fact, onReadMore }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-yellow-400/60">
      <button type="button" onClick={() => onReadMore(fact)} className="relative block h-52 w-full overflow-hidden text-left">
        <img src={fact.image} alt="" className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-yellow-400/30 bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-300">{fact.category}</div>
      </button>
      <div className="space-y-5 p-5">
        <button type="button" onClick={() => onReadMore(fact)} className="block text-left">
          <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-white transition group-hover:text-yellow-300">{highlightLastWords(getEdgyTitle(fact))}</h2>
        </button>
        <p className="text-sm leading-6 text-zinc-300">{getEdgyIntro(fact)}</p>
        <button type="button" onClick={() => onReadMore(fact)} className="rounded-xl border border-yellow-400/30 px-4 py-2 text-xs font-black uppercase tracking-wider text-yellow-300 transition hover:bg-yellow-400 hover:text-black">Czytaj więcej</button>
      </div>
    </article>
  );
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
          <button type="button" onClick={onClose} className="rounded-xl border border-white/10 px-3 py-2 text-xs font-black uppercase text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400">Zamknij</button>
        </div>
        <p className="mt-5 text-base leading-7 text-zinc-300">{item.body}</p>
      </div>
    </div>
  );
}

function ReactionButton({ label, onClick, active }) {
  return (
    <button type="button" onClick={onClick} className={`rounded-lg border px-3 py-2 text-[11px] font-black uppercase tracking-wide transition ${active ? "border-yellow-400 bg-yellow-400 text-black" : "border-white/10 bg-black/40 text-zinc-400 hover:border-yellow-400 hover:text-yellow-400"}`}>
      {label}
    </button>
  );
}

function FactDetails({ fact, onClose, onSelectFact, onNextFact, readCount }) {
  const [reaction, setReaction] = useState(null);
  const similar = facts.filter((item) => item.category === fact.category && item.title !== fact.title).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-10">
      <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-950 shadow-2xl shadow-black/40">
        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_.35fr] lg:p-10">
          <article className="space-y-6 text-lg leading-8 text-zinc-200">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-base font-black uppercase leading-7 tracking-[0.14em] text-yellow-400 md:text-lg">{getEdgyTitle(fact)}</p>
              <p className="mt-3 text-lg font-bold leading-7 text-white md:text-xl">{getEdgyIntro(fact)}</p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img src={fact.image} alt="" className="h-72 w-full object-cover" />
            </figure>
            {fact.paragraphs.map((sentence, index) => <p key={`${fact.title}-${index}`}>{sentence}</p>)}
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">Reakcja</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Obrzydliwe", "Chcę więcej takich"].map((label) => (
                  <ReactionButton key={label} label={label} active={reaction === label} onClick={() => setReaction(label)} />
                ))}
              </div>
              {reaction && <p className="mt-2 text-xs text-zinc-500">Dzięki — zapamiętane.</p>}
            </div>
            <div className="rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-black p-5">
              <button type="button" onClick={onNextFact} className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-yellow-300">
                Daj następne <Icon name="arrowRight" size={20} />
              </button>
              <p className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-zinc-500">Przeczytane w tej sesji: {readCount}</p>
            </div>
          </article>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">Podobne fakty</p>
              <div className="mt-4 space-y-3 text-sm font-bold text-zinc-300">
                {similar.length > 0 ? similar.map((item) => (
                  <button key={item.title} type="button" onClick={() => onSelectFact(item)} className="block text-left transition hover:text-yellow-400">{getEdgyTitle(item)}</button>
                )) : <p className="text-zinc-500">W tej kategorii pojawi się więcej wpisów.</p>}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function LepiejNiePytaj() {
  const [active, setActive] = useState("Wszystkie");
  const [query, setQuery] = useState("");
  const [selectedFact, setSelectedFact] = useState(null);
  const [readCount, setReadCount] = useState(() => {
    const today = new Date().toISOString().slice(0, 10);
    const saved = JSON.parse(localStorage.getItem("lepiejNiePytajReadCount") || "null");
    return saved?.date === today ? saved.count : 0;
  });
  const [sortMode, setSortMode] = useState("Losowe");
  const [randomSeed, setRandomSeed] = useState(() => Date.now());
  const [infoModal, setInfoModal] = useState(null);

  const visibleFacts = useMemo(() => sortFacts(filterFacts(facts, active, query), sortMode, randomSeed), [active, query, sortMode, randomSeed]);
  const realCategories = categories.filter((category) => category.name !== "Wszystkie");

  const openFact = (fact) => {
    setSelectedFact(fact);
    setReadCount((count) => {
      const today = new Date().toISOString().slice(0, 10);
      const nextCount = count + 1;
      localStorage.setItem("lepiejNiePytajReadCount", JSON.stringify({ date: today, count: nextCount }));
      return nextCount;
    });
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

  return (
    <main className="min-h-screen bg-[#090d0f] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(113,113,122,0.12),transparent_30%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <button type="button" onClick={() => { setSelectedFact(null); setActive("Wszystkie"); setQuery(""); }} className="shrink-0 text-left">
              <div className="text-2xl font-black uppercase tracking-tight">Lepiej <span className="text-yellow-400">nie</span> pytaj</div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Pytania, których nie zadajesz na głos</p>
            </button>
            <div className="hidden items-center gap-4 lg:flex">
              <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-yellow-300">Przeczytane dzisiaj: {readCount}</div>
              <Icon name="facebook" size={22} />
              <Icon name="instagram" size={22} />
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-yellow-300">{readCount} przeczytane</div>
              <Icon name="menu" />
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button key={cat.name} type="button" onClick={() => handleCategorySelect(cat.name)} className={`whitespace-nowrap rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wide transition ${active === cat.name ? "bg-yellow-400 text-black" : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-yellow-300"}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {selectedFact ? (
        <FactDetails fact={selectedFact} onClose={() => setSelectedFact(null)} onSelectFact={openFact} onNextFact={handleNextFact} readCount={readCount} />
      ) : (
        <section id="fakty" className="mx-auto max-w-7xl px-5 pb-12">
          <div className="mb-6 grid gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj faktu, np. więzienie, balsamacja, rekord..." className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-yellow-400" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Najnowsze", "Popularne", "Losowe"].map((mode) => (
                <button key={mode} type="button" onClick={() => { setSortMode(mode); if (mode === "Losowe") setRandomSeed(Date.now()); }} className={`rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider transition ${sortMode === mode ? "bg-yellow-400 text-black" : "border border-white/10 bg-white/5 text-zinc-300 hover:border-yellow-400/40 hover:text-yellow-300"}`}>
                  {mode}
                </button>
              ))}
            </div>
          </div>
          {visibleFacts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-10 text-center">
              <h2 className="text-2xl font-black uppercase text-white">Brak wyników</h2>
              <p className="mt-2 text-zinc-400">Spróbuj innej kategorii albo krótszego słowa w wyszukiwarce.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
              {visibleFacts.map((fact) => <FactCard key={fact.title} fact={fact} onReadMore={openFact} />)}
            </div>
          )}
        </section>
      )}

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-black uppercase">Lepiej <span className="text-yellow-400">nie</span> pytaj</div>
            <p className="mt-3 text-sm text-zinc-400">Pytania, których nie zadajesz na głos. Codziennie nowe, zaskakujące treści.</p>
          </div>
          <div>
            <h4 className="mb-3 font-black uppercase">Nawigacja</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <button type="button" onClick={() => { setSelectedFact(null); setActive("Wszystkie"); setQuery(""); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50); }} className="block text-left transition hover:text-yellow-400">Start</button>
              <button type="button" onClick={goToFacts} className="block text-left transition hover:text-yellow-400">Ciekawostki</button>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-black uppercase">Kategorie</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              {realCategories.map((category) => <button key={category.name} type="button" onClick={() => handleCategorySelect(category.name)} className="block text-left transition hover:text-yellow-400">{category.name}</button>)}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-black uppercase">Informacje</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              {Object.keys(infoContent).map((label) => <button key={label} type="button" onClick={() => setInfoModal(infoContent[label])} className="block text-left transition hover:text-yellow-400">{label}</button>)}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-5 text-xs text-zinc-500">© 2026 Lepiej Nie Pytaj. Wszelkie prawa zastrzeżone. Kontakt: kontakt@lepiejniepytaj.pl</div>
      </footer>

      <InfoModal item={infoModal} onClose={() => setInfoModal(null)} />
    </main>
  );
}

export default LepiejNiePytaj;
