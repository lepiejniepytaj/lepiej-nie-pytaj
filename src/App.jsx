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
    "title": "Czemu kukurydza wychodzi w kupie prawie cała?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop",
    "intro": "To pytanie jest obrzydliwe, ale każdy, kto jadł kukurydzę, przynajmniej raz się nad tym zastanowił. Wygląda, jakby organizm przegrał walkę z warzywem.",
    "paragraphs": [
      "Kukurydza często wygląda w toalecie prawie tak samo jak na talerzu, bo jej zewnętrzna osłonka jest zbudowana z celulozy. Człowiek nie trawi jej tak łatwo jak skrobi, tłuszczu czy białka.",
      "To jednak nie znaczy, że kukurydza przechodzi przez ciało całkowicie nietknięta. Wnętrze ziarna może zostać częściowo strawione, ale żółta łupinka zostaje widoczna i robi całe zamieszanie.",
      "Duże znaczenie ma też to, czy dokładnie gryziesz jedzenie. Jeśli połykasz ziarna prawie w całości, enzymy trawienne mają dużo trudniejszy dostęp do środka.",
      "Dlatego kukurydza w kupie nie jest zwykle powodem do paniki. To raczej brutalnie szczery dowód na to, że układ pokarmowy nie jest magiczną niszczarką wszystkiego.",
      "Najprostszy wniosek: gryź dokładniej, a zobaczysz mniej „dowodów” w toalecie. Ale nawet jeśli je zobaczysz, w większości przypadków to normalne."
    ]
  },
  {
    "title": "Czemu muchy siadają na kupie?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?q=80&w=1200&auto=format&fit=crop",
    "intro": "Dla człowieka to obrzydliwe. Dla muchy kupa to zapach jedzenia, wilgoci i idealnego miejsca, gdzie można załatwić sprawy życiowe.",
    "paragraphs": [
      "Muchy odbierają świat głównie przez zapach i smak. To, co dla nas jest odrażające, dla nich może być sygnałem: tu jest materia organiczna, wilgoć i potencjalne pożywienie.",
      "Odchody przyciągają je, bo zawierają resztki niestrawionych substancji i bakterie. Dla muchy to nie jest „brud” w ludzkim sensie, tylko środowisko, w którym da się żerować.",
      "Niektóre muchy mogą też wykorzystywać takie miejsca do składania jaj. Larwy rozwijają się tam, gdzie mają dostęp do rozkładającej się materii.",
      "Problem polega na tym, że mucha może potem usiąść na jedzeniu, blacie albo szklance. I właśnie dlatego budzi obrzydzenie oraz jest realnym problemem sanitarnym.",
      "Krótko: mucha nie jest głupia. Ona po prostu ma zupełnie inny gust niż człowiek — i niestety potrafi przenosić ten gust na twoją kuchnię."
    ]
  },
  {
    "title": "Ile razy dziennie człowiek pierdzi?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1200&auto=format&fit=crop",
    "intro": "Każdy to robi, prawie nikt nie chce o tym gadać. A jednak gazy potrafią powiedzieć sporo o jelitach, diecie i tym, czy ciało działa normalnie.",
    "paragraphs": [
      "Oddawanie gazów to normalna część pracy układu pokarmowego. W jelitach powstają gazy, bo bakterie rozkładają resztki jedzenia, szczególnie błonnik i niektóre cukry.",
      "U wielu osób liczba gazów w ciągu dnia może wynosić od kilku do kilkunastu razy. Dokładna liczba zmienia się w zależności od diety, stresu, tempa jedzenia i pracy jelit.",
      "Więcej gazów może pojawić się po fasoli, kapuście, cebuli, nabiale, słodzikach, napojach gazowanych albo wtedy, gdy jesz szybko i połykasz dużo powietrza.",
      "Samo pierdzenie zwykle nie jest problemem. Niepokojące są raczej silny ból brzucha, krew, nagła zmiana rytmu wypróżnień, chudnięcie albo długotrwałe wzdęcia.",
      "W skrócie: to krępujące, ale całkowicie ludzkie. Biologia nie zawsze jest elegancka, ale zazwyczaj ma konkretny powód."
    ]
  },
  {
    "title": "Co się dzieje z kupą spuszczoną w toalecie?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    "intro": "Naciskasz spłuczkę i problem znika. Tylko że nie znika — po prostu trafia do ukrytego systemu, bez którego miasta utonęłyby w brudzie.",
    "paragraphs": [
      "Po spuszczeniu wody nieczystości trafiają do rur kanalizacyjnych. Z twojej łazienki ruszają dalej przez system, którego zwykle nie widzisz i o którym nikt nie chce myśleć przy śniadaniu.",
      "Ścieki płyną do większych kolektorów, przepompowni i finalnie do oczyszczalni. Tam przechodzą przez kilka etapów oczyszczania, żeby oddzielić zanieczyszczenia od wody.",
      "To nie jest magiczna dziura w ziemi. To ogromna infrastruktura, która musi działać każdego dnia, bo inaczej miasto bardzo szybko zaczęłoby śmierdzieć i chorować.",
      "W oczyszczalniach wykorzystuje się procesy mechaniczne, biologiczne i chemiczne. Brzmi technicznie, ale chodzi o jedno: usunąć z wody to, czego nikt nie chce widzieć ponownie.",
      "Dlatego toaleta nie jest koszem na śmieci. Mokre chusteczki, patyczki, tłuszcz i dziwne odpady mogą rozwalać kanalizację dużo bardziej, niż ludziom się wydaje."
    ]
  },
  {
    "title": "Kto wynalazł pierwszy sedes?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    "intro": "Sedes może nie brzmi jak wielki wynalazek, dopóki nie wyobrazisz sobie miasta bez kanalizacji, smrodu i normalnej toalety.",
    "paragraphs": [
      "Toaleta ze spłuczką ma długą historię, ale przez wieki sam pomysł nie wystarczał. Żeby sedes naprawdę zmienił świat, potrzebne były rury, kanalizacja, woda i miasta gotowe na higieniczną rewolucję.",
      "Wcześniej ludzie korzystali z wychodków, nocników, dołów, rynsztoków i rozwiązań, które dziś brzmiałyby jak kara. Zapach był częścią codzienności.",
      "Sedes poprawił komfort, ale przede wszystkim ograniczył kontakt ludzi z nieczystościami. To miało ogromne znaczenie dla zdrowia publicznego.",
      "Dlatego historia toalety jest dużo ważniejsza, niż się wydaje. To nie tylko temat do żartów, ale element walki z chorobami i brudem.",
      "Można powiedzieć brutalnie: cywilizacja zaczęła pachnieć lepiej dopiero wtedy, gdy nauczyła się skutecznie pozbywać własnych odpadów."
    ]
  },
  {
    "title": "Ile centymetrów miał największy penis?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1200&auto=format&fit=crop",
    "intro": "Internet kocha ten temat, ale właśnie dlatego jest tu pełno mitów, przechwałek i liczb, które brzmią lepiej niż są udowodnione.",
    "paragraphs": [
      "Temat największego penisa świata jest jednym z tych, które ludzie klikają natychmiast, ale rzadko pytają o źródła. A tu właśnie źródła są najważniejsze.",
      "W internecie krążą ogromne liczby, ale część z nich pochodzi z wywiadów, programów rozrywkowych albo nieprecyzyjnych pomiarów. To nie jest tak proste jak zmierzenie wzrostu przy ścianie.",
      "Żeby mówić o rekordzie, trzeba wiedzieć, kto mierzył, jak mierzył, w jakich warunkach i czy wynik został niezależnie potwierdzony. Bez tego zostaje sensacja, nie fakt.",
      "Warto też pamiętać, że ekstremalne rozmiary mogą być problemem zdrowotnym i życiowym, a nie powodem do zazdrości. To, co wygląda jak rekord, może w praktyce oznaczać ból, komplikacje i trudności.",
      "Najuczciwsza odpowiedź brzmi: temat jest klikalny, ale wymaga ostrożności. Nie każda wielka liczba w internecie zasługuje na to, żeby traktować ją jak prawdę."
    ]
  },
  {
    "title": "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?",
    "category": "Tabu",
    "image": "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1200&auto=format&fit=crop",
    "intro": "Brzuch potrafi wydać dźwięk w najgorszym możliwym momencie. I nie, to nie zawsze znaczy, że jesteś głodny.",
    "paragraphs": [
      "Burczenie w brzuchu powstaje wtedy, gdy jelita przesuwają powietrze, płyny i treść pokarmową. To normalna praca układu pokarmowego, tylko czasem brzmi jak publiczne upokorzenie.",
      "Gdy w środku jest mniej jedzenia, dźwięk może być po prostu lepiej słyszalny. Dlatego burczenie często kojarzy się z głodem, ale nie zawsze nim jest.",
      "Może pojawić się po kawie, stresie, szybkim jedzeniu, gazowanych napojach albo wtedy, gdy jelita intensywniej pracują po posiłku.",
      "Ciało nie ma przycisku wyciszenia. Jelita ruszają się cały czas, nawet jeśli ty akurat siedzisz w ciszy i modlisz się, żeby nikt nic nie usłyszał.",
      "Jeśli burczeniu towarzyszy silny ból, biegunki, wymioty albo długotrwałe problemy, wtedy warto szukać przyczyny. Sam dźwięk zwykle jest jednak normalny."
    ]
  },
  {
    "title": "Jak wygląda życie w szpitalu psychiatrycznym?",
    "category": "Zdrowie",
    "image": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
    "intro": "Wiele osób wyobraża sobie psychiatryk jak horror. Prawda jest mniej filmowa, ale nadal potrafi być ciężka, dziwna i bardzo ludzka.",
    "paragraphs": [
      "Szpital psychiatryczny nie wygląda zwykle jak sceny z filmów, gdzie wszystko jest mroczne, brutalne i kompletnie odrealnione. W praktyce to miejsce leczenia, obserwacji i próby opanowania kryzysu.",
      "Dzień na oddziale może być dość uporządkowany. Są posiłki, obchody lekarskie, rozmowy z personelem, leki, odpoczynek i czasem zajęcia terapeutyczne.",
      "Pacjenci trafiają tam z bardzo różnych powodów: depresji, psychozy, myśli samobójczych, silnego lęku, uzależnień, zaburzeń nastroju albo nagłego pogorszenia stanu psychicznego.",
      "Na oddziale obowiązują zasady bezpieczeństwa. Mogą dotyczyć przedmiotów, wyjść, odwiedzin i tego, co pacjent może mieć przy sobie. Dla kogoś z zewnątrz może to wyglądać surowo, ale często chodzi o ochronę życia.",
      "Najważniejsze: pobyt w szpitalu psychiatrycznym nie oznacza, że ktoś jest „stracony” albo „nienormalny”. Czasem to po prostu moment, w którym człowiek potrzebuje intensywnej pomocy, bo sam już nie daje rady."
    ]
  },
  {
    "title": "Po jakim czasie niszczą się płuca od palenia?",
    "category": "Zdrowie",
    "image": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1200&auto=format&fit=crop",
    "intro": "Papieros nie czeka latami, żeby zacząć robić szkody. Drogi oddechowe reagują szybko, nawet jeśli człowiek długo udaje, że wszystko jest pod kontrolą.",
    "paragraphs": [
      "Dym papierosowy zaczyna drażnić drogi oddechowe praktycznie od pierwszych kontaktów z organizmem. Płuca nie mają magicznej tarczy, która przez kilka lat mówi: spokojnie, jeszcze nic się nie dzieje.",
      "Na początku mogą pojawić się kaszel, większa ilość śluzu, gorsza kondycja i szybsze męczenie się. Wiele osób ignoruje te sygnały, bo nie brzmią jeszcze dramatycznie.",
      "Przy długotrwałym paleniu rośnie ryzyko przewlekłej obturacyjnej choroby płuc, chorób serca i nowotworów. Problem polega na tym, że część szkód rozwija się po cichu.",
      "Po rzuceniu palenia organizm zaczyna się regenerować. Poprawia się praca układu krążenia, oddychanie i wydolność, choć nie wszystkie uszkodzenia da się zawsze cofnąć.",
      "Najgorsze w paleniu jest to, że człowiek często czuje się względnie normalnie, dopóki problem nie jest już poważny. Brak objawów nie znaczy, że płuca są bezpieczne."
    ]
  },
  {
    "title": "Jak wygląda zawał serca?",
    "category": "Zdrowie",
    "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    "intro": "Zawał nie zawsze robi teatralną scenę. Czasem wchodzi po cichu, udaje niestrawność albo zmęczenie i właśnie dlatego jest tak zdradliwy.",
    "paragraphs": [
      "W filmach zawał wygląda zwykle tak samo: człowiek łapie się za klatkę piersiową, pada i wszyscy od razu wiedzą, co się stało. W prawdziwym życiu bywa dużo bardziej podstępnie.",
      "Typowy objaw to ucisk, ból albo pieczenie w klatce piersiowej. Może promieniować do ramienia, szyi, żuchwy, pleców albo brzucha.",
      "Czasem pojawia się duszność, zimny pot, nudności, zawroty głowy albo nagłe, ogromne osłabienie. U części osób objawy są nietypowe i łatwe do pomylenia z czymś mniej groźnym.",
      "To właśnie dlatego zawał bywa tak niebezpieczny. Człowiek może czekać, aż „samo przejdzie”, bo nie wygląda to jak dramatyczna scena z serialu medycznego.",
      "Przy podejrzeniu zawału nie warto grać bohatera. Liczy się szybka pomoc, bo czas może decydować o tym, ile mięśnia sercowego uda się uratować."
    ]
  },
  {
    "title": "Co czuje człowiek po nokaucie?",
    "category": "Zdrowie",
    "image": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
    "intro": "Nokaut wygląda efektownie tylko z kanapy. Dla mózgu to gwałtowne przeciążenie, po którym człowiek może nie wiedzieć, co się dzieje.",
    "paragraphs": [
      "Nokaut to nie jest zwykłe zaśnięcie. To uraz mózgu, który może chwilowo przerwać świadomość, pamięć i kontrolę nad ciałem.",
      "Po odzyskaniu przytomności człowiek może być zdezorientowany, senny, zagubiony albo nie pamiętać, co się stało. Czasem pyta kilka razy o to samo, bo mózg nie zapisuje normalnie wydarzeń.",
      "Mogą pojawić się ból głowy, nudności, zawroty, światłowstręt, szum w uszach i problemy z równowagą. Z zewnątrz ktoś może wyglądać „w miarę dobrze”, ale mózg nadal może być poobijany.",
      "Najbardziej ryzykowne jest lekceważenie objawów i szybki powrót do kolejnego uderzenia. Drugi uraz po krótkim czasie może być dużo groźniejszy.",
      "Dlatego nokaut nie powinien być traktowany jak fajny efekt sportowy. To sygnał, że mózg dostał mocno po głowie — dosłownie."
    ]
  },
  {
    "title": "Dlaczego stres potrafi boleć fizycznie?",
    "category": "Zdrowie",
    "image": "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop",
    "intro": "Stres nie kończy się na myślach. Potrafi wejść w kark, brzuch, klatkę piersiową i sen tak mocno, że ciało zaczyna zachowywać się jak po awarii.",
    "paragraphs": [
      "Stres uruchamia w organizmie tryb alarmowy. Serce przyspiesza, mięśnie się napinają, oddech staje się płytszy, a ciało przygotowuje się tak, jakby miało przed czymś uciekać.",
      "Problem zaczyna się wtedy, gdy ten alarm nie wyłącza się przez długi czas. Organizm nie został zaprojektowany do życia miesiącami w trybie zagrożenia.",
      "Dlatego przewlekły stres może dawać bóle karku, głowy, brzucha, klatki piersiowej, problemy ze snem i uczucie ciągłego zmęczenia.",
      "To nie znaczy, że człowiek sobie coś wymyśla. Objawy mogą być realne, bo ciało reaguje na napięcie tak samo prawdziwie jak na wysiłek fizyczny.",
      "Najtrudniejsze jest to, że stres często udaje inne problemy. Dlatego przy silnych albo nowych objawach warto zachować ostrożność i nie zwalać wszystkiego automatycznie na nerwy."
    ]
  },
  {
    "title": "Ile kosztuje utrzymanie więźnia w Polsce?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1200&auto=format&fit=crop",
    "intro": "Cela, jedzenie i kraty to tylko mały kawałek rachunku. Za więźniem stoi cały kosztowny system, który ktoś musi opłacić.",
    "paragraphs": [
      "Utrzymanie więźnia to nie jest tylko miska zupy i miejsce w celi. Za każdą osobą osadzoną stoi cały system: budynki, funkcjonariusze, ochrona, prąd, ogrzewanie, transport, administracja i procedury bezpieczeństwa.",
      "Największe koszty często nie są tam, gdzie ludzie ich szukają. Jedzenie jest widoczne i łatwe do wyobrażenia, ale prawdziwe pieniądze idą na utrzymanie zakładu karnego jako instytucji.",
      "Do tego dochodzi opieka medyczna, leki, dokumentacja, kontrole, remonty, sprzęt i wszystko, co jest potrzebne, żeby takie miejsce działało 24 godziny na dobę.",
      "Dlatego koszt więźnia budzi emocje. Jedni mówią: kara powinna kosztować. Inni pytają: czemu podatnik ma płacić tyle za kogoś, kto złamał prawo?",
      "Najciekawszy problem brzmi: jak połączyć karę, bezpieczeństwo, pracę więźniów i resocjalizację tak, żeby system nie był tylko drogim magazynem ludzi."
    ]
  },
  {
    "title": "Ile dostaje więzień za pracę?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?q=80&w=1200&auto=format&fit=crop",
    "intro": "Jednych to ciekawi, innych wkurza. Praca więźniów to temat, w którym mieszają się pieniądze, kara, resocjalizacja i poczucie sprawiedliwości.",
    "paragraphs": [
      "Praca więźnia może wyglądać bardzo różnie. Czasem są to prace porządkowe na terenie zakładu, czasem produkcja, kuchnia, magazyn albo praca dla zewnętrznych firm.",
      "Nie ma jednej prostej kwoty, która pasuje do każdego przypadku. Wynagrodzenie zależy od rodzaju pracy, wymiaru godzin, przepisów i tego, czy praca jest odpłatna czy nieodpłatna.",
      "Część pieniędzy może podlegać potrąceniom, na przykład na zobowiązania, fundusze albo inne należności. Dlatego kwota „na rękę” może wyglądać inaczej niż sama stawka.",
      "Dla jednych praca więźniów to element resocjalizacji i sposób na nauczenie odpowiedzialności. Dla innych to temat drażliwy, bo porównują to z sytuacją ludzi pracujących na wolności.",
      "Najuczciwiej powiedzieć: więzień może zarabiać, ale to nie jest prosta historia o łatwych pieniądzach za kratami. To część większego systemu karnego."
    ]
  },
  {
    "title": "Czy umierający człowiek nadal słyszy?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    "intro": "To jedno z tych pytań, które ludzie wpisują po cichu. Bo każdy chce wiedzieć, czy ostatnie słowa naprawdę mogą jeszcze dotrzeć.",
    "paragraphs": [
      "W ostatnich chwilach życia ciało może przestać reagować w sposób, który bliscy rozumieją. Człowiek może nie mówić, nie otwierać oczu i nie odpowiadać, ale to nie musi oznaczać, że wszystkie bodźce zniknęły.",
      "Słuch bywa uznawany za jeden ze zmysłów, które mogą utrzymywać się bardzo długo. Dlatego personel medyczny i bliscy często mówią do umierającej osoby spokojnie, nawet jeśli nie ma odpowiedzi.",
      "Nie da się jednak obiecać, że każda osoba w każdej sytuacji słyszy wszystko świadomie. Umieranie nie wygląda identycznie u wszystkich i zależy od choroby, leków, stanu mózgu oraz okoliczności.",
      "Mimo tego mówienie do bliskiego ma sens. Nawet jeśli nie wiemy, ile dociera, słowa mogą być ważne dla osoby odchodzącej — i równie ważne dla tych, którzy zostają.",
      "To nie jest temat do taniej sensacji. To pytanie o to, czy warto powiedzieć ostatnie „kocham”, „przepraszam” albo „jestem przy tobie”. I odpowiedź brzmi: warto."
    ]
  },
  {
    "title": "Na czym polega proces balsamacji?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "intro": "Po śmierci ciało nie czeka grzecznie na pogrzeb. Balsamacja to sposób, żeby spowolnić to, co natura zaczyna robić od razu.",
    "paragraphs": [
      "Balsamacja to przygotowanie ciała po śmierci w taki sposób, żeby spowolnić naturalne procesy rozkładu i umożliwić godne pożegnanie.",
      "W praktyce może obejmować oczyszczenie ciała, zabezpieczenie tkanek, użycie specjalnych płynów oraz czynności, które poprawiają wygląd zmarłego przed pogrzebem.",
      "Brzmi mrocznie, ale w wielu sytuacjach chodzi po prostu o czas. Transport zwłok, późniejszy pogrzeb albo pożegnanie przy otwartej trumnie wymagają odpowiedniego przygotowania.",
      "Balsamacja nie jest „zatrzymaniem śmierci”. To raczej techniczne opóźnienie procesów, które i tak naturalnie zachodzą w ciele.",
      "Ten temat budzi ciekawość, bo dotyka granicy, o której rzadko mówi się wprost. A jednocześnie jest częścią zwykłej pracy ludzi zajmujących się pochówkiem i ostatnim pożegnaniem."
    ]
  },
  {
    "title": "Co dzieje się z ciałem, w które trafia pocisk?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=1200&auto=format&fit=crop",
    "intro": "To nie jest tylko czysta dziura jak w filmie. Pocisk potrafi zrobić w ciele chaos, którego z zewnątrz często nie widać.",
    "paragraphs": [
      "Gdy pocisk trafia w ciało, uszkadza tkanki bezpośrednio na swojej drodze. Ale to nie koniec. Energia uderzenia może wywołać dodatkowe zniszczenia wokół toru lotu pocisku.",
      "Tkanki nie zachowują się jak papier przebity ołówkiem. Są elastyczne, nawodnione i różnie reagują na nagłe przekazanie energii.",
      "Największe zagrożenia to krwotok, uszkodzenie narządów, wstrząs i utrata przytomności. Rana z zewnątrz może wyglądać mniej dramatycznie niż szkody w środku.",
      "To dlatego rana postrzałowa jest sytuacją ratunkową, nawet jeśli ktoś jeszcze mówi i stoi. Adrenalina potrafi oszukać zarówno poszkodowanego, jak i świadków.",
      "Filmowe sceny często upraszczają temat. W prawdziwym życiu liczy się szybkie zatamowanie krwawienia, wezwanie pomocy i transport do szpitala."
    ]
  },
  {
    "title": "Czy przy uderzeniu samolotu człowiek czuje, że umiera?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    "intro": "To mroczne pytanie, ale bardzo ludzkie. Nie chodzi o sensację, tylko o strach przed ostatnią sekundą.",
    "paragraphs": [
      "Nie da się uczciwie odpowiedzieć jednym zdaniem dla każdej katastrofy. Wszystko zależy od prędkości, kąta uderzenia, wysokości, czasu trwania awarii i tego, co dzieje się przed samym zderzeniem.",
      "Przy bardzo gwałtownym uderzeniu wydarzenia mogą nastąpić tak szybko, że mózg nie ma czasu świadomie przetworzyć samego momentu śmierci.",
      "Inaczej wygląda sytuacja, gdy zagrożenie trwa dłużej: turbulencje, spadanie, komunikaty załogi, panika pasażerów. Wtedy strach może pojawić się dużo wcześniej niż sam koniec.",
      "To pytanie jest tak trudne, bo dotyka największego ludzkiego lęku: czy w ostatniej chwili będziemy świadomi tego, co się dzieje.",
      "Najuczciwsza odpowiedź brzmi: czasem człowiek może czuć strach przed katastrofą, ale sam moment gwałtownego uderzenia może być zbyt szybki, żeby świadomie go przeżyć."
    ]
  },
  {
    "title": "Jaki jest rekord promili w Polsce?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    "intro": "To brzmi jak pijacka legenda, ale rekordowe promile to nie powód do śmiechu. To stan, w którym organizm walczy o przetrwanie.",
    "paragraphs": [
      "Bardzo wysokie stężenie alkoholu we krwi nie jest „mocną głową”. To skrajne zatrucie organizmu, które może skończyć się śpiączką, zatrzymaniem oddechu i śmiercią.",
      "Historie o rekordach promili często krążą po mediach jak sensacja, ale za taką liczbą zwykle stoi dramat: wypadek, uzależnienie, przemoc albo kompletna utrata kontroli.",
      "Alkohol w dużych dawkach zaburza pracę mózgu, układu oddechowego, serca i temperaturę ciała. Człowiek może wyglądać jak „tylko pijany”, a w rzeczywistości być w stanie zagrożenia życia.",
      "Dlatego rekord promili nie powinien być traktowany jak konkurs. To raczej brutalny dowód na to, jak wiele organizm czasem znosi, zanim się podda.",
      "Najgorsze jest to, że takie przypadki bywają opowiadane jak zabawna ciekawostka. A to bardziej ostrzeżenie niż powód do dumy."
    ]
  },
  {
    "title": "Ile osób zabiłaby bomba atomowa w Polsce?",
    "category": "Kryminalne",
    "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    "intro": "To pytanie brzmi jak czarna ciekawość, ale odpowiedź zależy od tylu czynników, że jedna liczba byłaby oszustwem.",
    "paragraphs": [
      "Skutki wybuchu jądrowego zależą od mocy ładunku, miejsca eksplozji, wysokości detonacji, pogody, pory dnia, gęstości zaludnienia i przygotowania służb.",
      "Inaczej wyglądałby wybuch nad centrum dużego miasta, inaczej nad terenem mniej zaludnionym, a jeszcze inaczej w przypadku awarii, której skutki rozwijają się w czasie.",
      "Bezpośrednio zabija fala uderzeniowa, temperatura, pożary i promieniowanie. Potem dochodzą ranni, skażenie, brak szpitali, panika, zniszczona infrastruktura i długofalowe skutki zdrowotne.",
      "Dlatego prosta liczba ofiar jest kusząca, ale często fałszywa. Taki scenariusz to nie kalkulator sensacji, tylko katastrofa humanitarna.",
      "Najbardziej przerażające jest nie tylko to, ile osób mogłoby zginąć od razu. Równie straszne jest to, ilu ludzi przeżyłoby pierwszy moment, ale zostało bez pomocy, domu i normalnego świata."
    ]
  },
  {
    "title": "Najwyższy człowiek w historii",
    "category": "Rekordy i absurdy",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "intro": "Brzmi jak supermoc, ale ekstremalny wzrost częściej oznaczał ból, chorobę i życie, w którym nic nie pasowało do ciała.",
    "paragraphs": [
      "Najwyższy człowiek w historii nie był po prostu „bardzo wysoki”. Przy takim wzroście zwykły świat staje się źle zaprojektowaną pułapką.",
      "Drzwi, łóżka, ubrania, samochody, schody, krzesła i buty — wszystko wymaga dostosowania. To, co dla innych jest codziennością, dla rekordzisty może być logistycznym problemem.",
      "Skrajny wzrost często wiąże się z zaburzeniami hormonalnymi i ogromnym obciążeniem organizmu. Stawy, kręgosłup, serce i układ krążenia pracują pod presją, której większość ludzi nie potrafi sobie wyobrazić.",
      "Dlatego rekord wzrostu robi wrażenie, ale nie jest bajką o człowieku-gigancie. Za liczbą mogą stać ból, leczenie, zmęczenie i ciągłe bycie oglądanym przez innych.",
      "To jeden z tych rekordów, które na plakacie wyglądają niesamowicie, ale w codziennym życiu mogą być bardziej przekleństwem niż powodem do dumy."
    ]
  },
  {
    "title": "Ile ważył najgrubszy człowiek w historii?",
    "category": "Rekordy i absurdy",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    "intro": "To nie jest tylko liczba na wadze. Przy skrajnej otyłości ciało może stać się więzieniem, z którego trudno się wydostać.",
    "paragraphs": [
      "Skrajna otyłość nie jest po prostu „dużą wagą”. To stan, w którym ciało zaczyna ograniczać wszystko: ruch, oddech, higienę, sen i zwykłe funkcjonowanie.",
      "Przy ekstremalnej masie ciała serce, płuca, stawy i skóra pracują pod ogromnym obciążeniem. Nawet przewrócenie się, wstanie z łóżka albo przejście kilku kroków może stać się problemem.",
      "Takie rekordy łatwo przedstawić jak sensację, ale za liczbą często stoją choroba, cierpienie, samotność i lata problemów, które narastały powoli.",
      "Ciało może stać się pułapką: im trudniej się ruszać, tym trudniej spalać energię, a im większe problemy psychiczne i fizyczne, tym trudniej przerwać błędne koło.",
      "Dlatego pytanie „ile ważył najgrubszy człowiek” jest klikalne, ale odpowiedź powinna mieć w sobie trochę szacunku. To nie jest mem, tylko czyjeś bardzo trudne życie."
    ]
  },
  {
    "title": "Ile ma wzrostu najniższa osoba na świecie?",
    "category": "Rekordy i absurdy",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "intro": "Ten rekord brzmi niewinnie, dopóki nie pomyślisz, że cały świat — schody, łóżka, krzesła i drzwi — był zaprojektowany dla kogoś innego.",
    "paragraphs": [
      "Najniższe osoby świata żyją w rzeczywistości, w której większość przedmiotów jest za duża, za wysoka albo po prostu niewygodna.",
      "Blat kuchenny, klamka, bankomat, krzesło, schody, łóżko czy transport publiczny mogą wymagać pomocy albo specjalnego dostosowania.",
      "Tak niski wzrost zwykle wynika z rzadkich zaburzeń rozwojowych. To nie jest tylko ciekawostka o centymetrach, ale historia o ciele, które funkcjonuje inaczej niż większość.",
      "Internet lubi rekordy, bo są szybkie do zrozumienia. Największy, najmniejszy, najcięższy, najstarszy. Ale za rekordem jest człowiek, nie eksponat.",
      "Dlatego o takich przypadkach warto pisać z ciekawością, ale bez robienia z kogoś dziwadła. Rekord jest liczbą, życie jest dużo bardziej skomplikowane."
    ]
  },
  {
    "title": "Jaki człowiek żył najdłużej?",
    "category": "Rekordy i absurdy",
    "image": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop",
    "intro": "Historii o ludziach żyjących 140 lat jest mnóstwo. Problem w tym, że większość rozpada się przy pierwszym kontakcie z dokumentami.",
    "paragraphs": [
      "Długowieczność to temat, w którym internet kocha legendy. Co jakiś czas pojawia się historia człowieka, który rzekomo żył 130, 140 albo nawet 160 lat.",
      "Problem zaczyna się wtedy, gdy trzeba pokazać dokumenty: akt urodzenia, zapisy urzędowe, ciągłość tożsamości i niezależne potwierdzenie wieku.",
      "Najbardziej wiarygodne rekordy długowieczności są dużo rzadsze niż opowieści rodzinne i lokalne legendy. Właśnie dlatego oficjalne rekordy są tak mocno sprawdzane.",
      "Długie życie zależy od genów, warunków, opieki medycznej, stylu życia i szczęścia. Nie da się go sprowadzić do jednej magicznej diety albo sekretu z nagłówka.",
      "Najciekawsze nie jest tylko to, kto żył najdłużej. Ciekawsze jest pytanie, ile z historii o „najstarszych ludziach świata” było prawdą, a ile dobrze brzmiącą legendą."
    ]
  },
  {
    "title": "Czy kura może biegać bez głowy?",
    "category": "Rekordy i absurdy",
    "image": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1200&auto=format&fit=crop",
    "intro": "Brzmi jak wiejska legenda albo scena z horroru, ale ciało po ciężkim urazie potrafi jeszcze przez chwilę działać na odruchach.",
    "paragraphs": [
      "Po odcięciu głowy ciało zwierzęcia może przez krótki czas wykonywać odruchowe ruchy. To nie oznacza, że zwierzę normalnie funkcjonuje albo świadomie „biega dalej”.",
      "Układ nerwowy nie zawsze wyłącza wszystkie reakcje w jednej sekundzie. Mięśnie mogą jeszcze reagować na impulsy i napięcie, które pozostało w ciele.",
      "Słynne historie o kurach funkcjonujących wyjątkowo długo po takim urazie są skrajnymi przypadkami, a nie normą. Właśnie dlatego stały się tak znane.",
      "To pytanie jest popularne, bo brzmi jak biologiczny horror. Ale najważniejsze rozróżnienie jest proste: odruch to nie świadomość.",
      "Ciało może jeszcze przez chwilę wykonywać ruchy, ale to nie znaczy, że „żyje normalnie”. Biologia potrafi wyglądać dziwnie, zanim całkowicie się zatrzyma."
    ]
  },
  {
    "title": "Dlaczego w średniowieczu miasta tak śmierdziały?",
    "category": "Historia",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    "intro": "Zapomnij o romantycznych uliczkach z filmów. Dawne miasta były ciasne, brudne, zadymione i pachniały tak, że dzisiejszy nos mógłby się poddać.",
    "paragraphs": [
      "Średniowieczne miasto nie wyglądało jak klimatyczna starówka po remoncie. Było pełne ludzi, zwierząt, błota, dymu, odpadów i warsztatów, które potrafiły śmierdzieć niemiłosiernie.",
      "Brak nowoczesnej kanalizacji oznaczał, że ścieki i resztki często trafiały do rynsztoków, na podwórza albo w miejsca, które dziś uznalibyśmy za kompletnie nie do przyjęcia.",
      "Do tego dochodziły garbarnie, stajnie, targi, piece, paleniska, rozkładające się resztki jedzenia i zwierzęta trzymane blisko ludzi.",
      "Dla mieszkańców tamtych czasów zapach był częścią codzienności. Nos przyzwyczaja się do rzeczy, które dla nas byłyby szokiem po pięciu minutach.",
      "Historia to nie tylko królowie, bitwy i zamki. To też smród, brud, choroby, ścieki i zwykłe życie ludzi, którzy nie mieli komfortu współczesnego miasta."
    ]
  },
  {
    "title": "Dlaczego granice Afryki są takie proste?",
    "category": "Historia",
    "image": "https://images.unsplash.com/photo-1484318571209-661cf29a69f8?q=80&w=1200&auto=format&fit=crop",
    "intro": "Te linie nie wyglądają naturalnie, bo często naturalne nie były. Wiele z nich narysowano pod interesy ludzi daleko od Afryki.",
    "paragraphs": [
      "Kiedy patrzysz na mapę Afryki, wiele granic wygląda jak narysowane linijką. I w dużej mierze właśnie o to chodzi: wiele z nich wyznaczano politycznie, a nie naturalnie.",
      "Europejskie mocarstwa kolonialne dzieliły terytoria według własnych interesów, wpływów i umów. Często robiono to z daleka, patrząc bardziej na mapę niż na ludzi żyjących na miejscu.",
      "Takie granice mogły przecinać obszary zamieszkane przez te same społeczności albo łączyć w jednym państwie grupy, które wcześniej miały zupełnie różne historie, języki i konflikty.",
      "To nie znaczy, że każda prosta granica automatycznie wywołała problem, ale kolonialne podziały zostawiły ślad, który w wielu miejscach czuć do dziś.",
      "Mapa potrafi wyglądać spokojnie, ale za prostą linią mogą kryć się dekady napięć, interesów i decyzji podjętych bez pytania tych, których dotyczyły."
    ]
  },
  {
    "title": "Dlaczego ludzie bali się zaćmień Słońca?",
    "category": "Historia",
    "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    "intro": "Wyobraź sobie, że w środku dnia nagle gaśnie Słońce, a nikt nie potrafi ci wyjaśnić dlaczego. Nic dziwnego, że ludzie widzieli w tym znak katastrofy.",
    "paragraphs": [
      "Dzisiaj zaćmienie Słońca można przewidzieć z ogromną dokładnością. Dawniej dla wielu ludzi było to nagłe, przerażające zjawisko, które wyglądało jak awaria świata.",
      "W środku dnia robiło się ciemniej, temperatura mogła spaść, ptaki i zwierzęta zachowywały się dziwnie, a ludzie nie mieli naukowego wyjaśnienia.",
      "Nic dziwnego, że zaćmienia interpretowano jako znak gniewu bogów, zapowiedź wojny, śmierci władcy, głodu albo końca jakiegoś porządku.",
      "Strach brał się nie z głupoty, tylko z braku wiedzy i potęgi samego zjawiska. Jeśli nie wiesz, że to ruch ciał niebieskich, nagłe zniknięcie Słońca brzmi jak koszmar.",
      "Zaćmienie pokazuje, jak bardzo nauka zmienia emocje. To samo wydarzenie, które kiedyś mogło wywoływać panikę, dziś ludzie oglądają przez specjalne okulary i transmitują w internecie."
    ]
  },
  {
    "title": "Co się stało z danymi z Naszej Klasy?",
    "category": "Historia",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    "intro": "Kiedyś pół Polski wrzucało tam zdjęcia, klasy i wspomnienia. Potem portal zgasł, a wielu ludzi zrozumiało, że internet też ma datę ważności.",
    "paragraphs": [
      "Nasza Klasa była dla wielu osób pierwszym dużym portalem społecznościowym. Ludzie wpisywali szkoły, odnajdywali znajomych, wrzucali zdjęcia i zostawiali kawałek swojego życia w internecie.",
      "Z czasem popularność serwisu spadła, ludzie przenieśli się na inne platformy, a dawne profile zaczęły tracić znaczenie. To, co kiedyś było centrum internetu, stało się cyfrowym wspomnieniem.",
      "Po zamknięciu albo ograniczeniu dostępu do takich usług wiele osób orientuje się, że dane w sieci nie są wieczne w takim sensie, jak im się wydawało.",
      "Zdjęcia, komentarze i stare kontakty mogą zniknąć z codziennego dostępu, jeśli platforma zmieni zasady, zakończy działalność albo usunie funkcje.",
      "To dobra lekcja: jeśli coś jest dla ciebie ważne, trzymaj kopię u siebie. Internet wygląda jak archiwum świata, ale czasem jest tylko wynajętym pokojem, z którego ktoś może cię wyprosić."
    ]
  },
  {
    "title": "Jak ludzie widzieli przed wynalezieniem żarówki?",
    "category": "Historia",
    "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
    "intro": "Dziś noc rozjaśniasz jednym kliknięciem. Kiedyś ciemność naprawdę rządziła życiem ludzi i decydowała, kiedy kończy się dzień.",
    "paragraphs": [
      "Przed powszechnym oświetleniem elektrycznym noc była dużo ciemniejsza niż to, co znamy dzisiaj. Miasta, domy i drogi nie świeciły tak, jak współczesne ulice.",
      "Ludzie używali świec, lamp oliwnych, lamp naftowych, ognia i później oświetlenia gazowego. Każde z tych rozwiązań dawało mniej światła, wymagało paliwa i niosło ryzyko pożaru.",
      "Ciemność wpływała na rytm życia. Praca, nauka, podróże i spotkania były mocniej zależne od pory dnia, księżyca, pogody i dostępu do światła.",
      "Dobre oświetlenie było luksusem. Nie każdy mógł sobie pozwolić na to, żeby długo siedzieć przy jasnym świetle po zmroku.",
      "Żarówka nie była tylko wygodnym gadżetem. Zmieniła miasta, pracę, bezpieczeństwo, rozrywkę i to, jak długo człowiek może funkcjonować po zachodzie słońca."
    ]
  },
  {
    "title": "Czy ośmiornice naprawdę są tak inteligentne?",
    "category": "Zwierzęta i natura",
    "image": "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1200&auto=format&fit=crop",
    "intro": "Ośmiornica wygląda jak kosmita, zachowuje się jak sprytny uciekinier i potrafi rzeczy, których nie spodziewasz się po miękkim stworzeniu bez kręgosłupa.",
    "paragraphs": [
      "Ośmiornice są fascynujące, bo ich inteligencja rozwinęła się zupełnie inaczej niż u ludzi, psów czy małp. Nie mają kręgosłupa, a mimo to potrafią zachowywać się zaskakująco sprytnie.",
      "Potrafią eksplorować otoczenie, otwierać pojemniki, przeciskać się przez wąskie szczeliny i uczyć się prostych zadań. W akwariach znane są z ucieczek i manipulowania przedmiotami.",
      "Ich ramiona są niezwykle sprawne, a układ nerwowy jest częściowo rozproszony. To sprawia, że ciało ośmiornicy działa w sposób, który dla człowieka wygląda prawie obco.",
      "Do tego potrafią zmieniać kolor i fakturę skóry, kamuflować się i reagować na otoczenie w ułamku sekundy.",
      "Ośmiornica jest dowodem, że inteligencja nie musi wyglądać jak ludzka. Natura potrafi wymyślić spryt na wiele różnych sposobów."
    ]
  },
  {
    "title": "Dlaczego psy wąchają sobie tyłki?",
    "category": "Zwierzęta i natura",
    "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    "intro": "Dla człowieka to niezręczne. Dla psa to normalne sprawdzenie, z kim ma do czynienia.",
    "paragraphs": [
      "Psy poznają świat głównie nosem. Tam, gdzie człowiek widzi twarz, ubranie i gesty, pies potrafi wyczuwać informacje zapisane w zapachu.",
      "Okolice odbytu i gruczoły zapachowe niosą dla psa dużo informacji. Mogą zdradzać płeć, stan emocjonalny, zdrowie, dietę i to, czy pies zna już drugiego osobnika.",
      "Dla ludzi wygląda to niezręcznie albo obrzydliwie, ale w psim świecie jest to normalna forma rozpoznania. Trochę jak szybkie sprawdzenie wizytówki.",
      "Psy nie robią tego po to, żeby być niegrzeczne. One po prostu korzystają z najważniejszego zmysłu, jaki mają.",
      "Można powiedzieć, że pies czyta zapachy tak, jak człowiek czyta wiadomości. Tylko że jego „gazeta” znajduje się w miejscu, które nam wydaje się wyjątkowo mało eleganckie."
    ]
  },
  {
    "title": "Dlaczego niebo jest niebieskie?",
    "category": "Zwierzęta i natura",
    "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    "intro": "Niby proste pytanie, ale odpowiedź pokazuje, że kolor nieba to efekt wielkiej sztuczki światła i atmosfery.",
    "paragraphs": [
      "Światło słoneczne wygląda na białe, ale tak naprawdę składa się z wielu kolorów. Gdy wpada w atmosferę, zaczyna oddziaływać z cząsteczkami powietrza.",
      "Kolor niebieski rozprasza się mocniej niż wiele innych barw. Dlatego gdy patrzymy w różne strony nieba, dociera do nas dużo rozproszonego światła niebieskiego.",
      "To nie znaczy, że powietrze jest niebieską farbą. To efekt fizyki światła, które odbija się i rozprasza w atmosferze.",
      "Przy zachodzie słońca światło przechodzi przez grubszą warstwę atmosfery. Wtedy niebieskie światło rozprasza się wcześniej, a do oczu częściej docierają czerwienie, pomarańcze i żółcie.",
      "Niebo wygląda spokojnie, ale jego kolor to efekt ogromnej interakcji między Słońcem, atmosferą i naszym wzrokiem."
    ]
  },
  {
    "title": "Czy rośliny mogą się ze sobą komunikować?",
    "category": "Zwierzęta i natura",
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    "intro": "Rośliny nie mają ust, a mimo to potrafią wysyłać sygnały. Las jest dużo mniej cichy, niż wygląda.",
    "paragraphs": [
      "Rośliny nie rozmawiają jak ludzie, ale to nie znaczy, że są biernymi dekoracjami. Reagują na światło, dotyk, uszkodzenia, suszę i atak szkodników.",
      "Mogą wydzielać związki chemiczne, które wpływają na inne rośliny albo przyciągają organizmy pomagające w obronie przed owadami.",
      "Część komunikacji odbywa się przez powietrze, część przez glebę i relacje z grzybami. To nie jest bajkowa rozmowa drzew, ale realna wymiana sygnałów biologicznych.",
      "Roślina nie myśli jak człowiek, nie planuje zemsty i nie prowadzi pogawędek. Ale potrafi reagować na zagrożenie i wysyłać informacje do otoczenia.",
      "To zmienia sposób patrzenia na naturę. Las nie jest martwą scenografią. To sieć organizmów, które stale reagują na siebie nawzajem."
    ]
  },
  {
    "title": "Jak działa Wi-Fi?",
    "category": "Zwierzęta i natura",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    "intro": "Działa, dopóki nie przestanie — i wtedy pół domu wpada w panikę. A tak naprawdę to zwykła radiowa rozmowa między urządzeniem a routerem.",
    "paragraphs": [
      "Wi-Fi nie jest samym internetem. To sposób, w jaki telefon, laptop albo telewizor łączą się z routerem bez kabla.",
      "Router wysyła i odbiera dane za pomocą fal radiowych. Urządzenie pyta, router odpowiada, dane lecą dalej do internetu, a potem wracają z powrotem.",
      "Słaby zasięg często nie oznacza, że internet od operatora jest fatalny. Problemem mogą być ściany, odległość, zakłócenia, złe ustawienie routera albo zbyt wiele urządzeń naraz.",
      "Dlatego czasem wystarczy przesunąć router z kąta pokoju, żeby internet magicznie „przyspieszył”. To nie magia, tylko mniej przeszkód dla sygnału.",
      "Najprościej: internet to droga do świata, a Wi-Fi to niewidzialny most między twoim urządzeniem a routerem. Gdy most jest słaby, wszystko zaczyna się sypać."
    ]
  },
  {
    "title": "Jak wygląda zrzucanie paliwa z samolotu?",
    "category": "Zwierzęta i natura",
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    "intro": "Brzmi jak koszmar z nieba, ale w lotnictwie zrzut paliwa to kontrolowana procedura awaryjna, a nie przypadkowe lanie ludziom na głowy.",
    "paragraphs": [
      "Zrzut paliwa stosuje się tylko w określonych sytuacjach, najczęściej wtedy, gdy duży samolot musi wrócić do lądowania wcześniej, niż planowano, i jest za ciężki.",
      "Samoloty mają maksymalną masę do startu i inną, bezpieczniejszą masę do lądowania. Jeśli maszyna jest pełna paliwa, może być konieczne zmniejszenie masy.",
      "Procedura odbywa się według zasad: zwykle na odpowiedniej wysokości, w wyznaczonym rejonie i w sposób kontrolowany. Nie chodzi o to, że pilot naciska przycisk i paliwo spada ludziom na parasole.",
      "Część paliwa rozprasza się w powietrzu, ale mimo tego taka procedura nie jest wykonywana dla wygody, tylko wtedy, gdy wymaga tego bezpieczeństwo.",
      "Czasem zamiast zrzutu paliwa samolot krąży, żeby je spalić. Dla pasażerów może to wyglądać dziwnie, ale dla załogi to kalkulacja: masa, czas, pogoda i bezpieczeństwo lądowania."
    ]
  }
];

const edgyTitles = {
  "Czemu kukurydza wychodzi w kupie prawie cała?": "Czemu kukurydza wychodzi w kupie prawie cała? Obrzydliwe, ale ciekawe",
  "Czemu muchy siadają na kupie?": "Czemu muchy lecą do kupy, jakby to był darmowy bufet?",
  "Ile razy dziennie człowiek pierdzi?": "Ile razy dziennie człowiek pierdzi — i kiedy to już nie jest normalne?",
  "Co się dzieje z kupą spuszczoną w toalecie?": "Co dzieje się z kupą po spuszczeniu wody? Nie znika magicznie",
  "Kto wynalazł pierwszy sedes?": "Kto wymyślił sedes i uratował ludziom nosy?",
  "Ile centymetrów miał największy penis?": "Największy penis świata: rekord, mit czy problem medyczny?",
  "Czemu burczy w brzuchu, nawet gdy nie jesteś głodny?": "Czemu brzuch burczy jak potwór, nawet gdy wcale nie jesteś głodny?",
  "Jak wygląda życie w szpitalu psychiatrycznym?": "Jak naprawdę wygląda życie w psychiatryku, bez filmowych bredni?",
  "Po jakim czasie niszczą się płuca od palenia?": "Po jakim czasie papierosy zaczynają robić z płuc śmietnik?",
  "Jak wygląda zawał serca?": "Jak wygląda zawał serca, gdy nie wygląda jak scena z filmu?",
  "Co czuje człowiek po nokaucie?": "Co czuje człowiek po nokaucie i czemu to nie jest zwykłe zaśnięcie?",
  "Dlaczego stres potrafi boleć fizycznie?": "Dlaczego stres potrafi rozwalić ciało, chociaż zaczyna się w głowie?",
  "Ile kosztuje utrzymanie więźnia w Polsce?": "Ile naprawdę kosztuje więzień — i czemu płacimy za to wszyscy?",
  "Ile dostaje więzień za pracę?": "Ile więzień dostaje za pracę i czemu to wkurza ludzi?",
  "Czy umierający człowiek nadal słyszy?": "Czy umierający nadal cię słyszy, nawet gdy już nie odpowiada?",
  "Na czym polega proces balsamacji?": "Co robią z ciałem po śmierci, zanim zobaczy je rodzina?",
  "Co dzieje się z ciałem, w które trafia pocisk?": "Co pocisk robi z ciałem? To dużo gorsze niż dziura po kuli",
  "Czy przy uderzeniu samolotu człowiek czuje, że umiera?": "Czy przy uderzeniu samolotu człowiek zdąży poczuć śmierć?",
  "Jaki jest rekord promili w Polsce?": "Rekord promili w Polsce: wynik tak chory, że trudno w niego uwierzyć",
  "Ile osób zabiłaby bomba atomowa w Polsce?": "Ile osób zabiłaby bomba atomowa w Polsce? Odpowiedź nie jest prosta",
  "Najwyższy człowiek w historii": "Najwyższy człowiek w historii: rekord czy przekleństwo?",
  "Ile ważył najgrubszy człowiek w historii?": "Ile ważył najcięższy człowiek świata i jak wygląda życie w takiej pułapce?",
  "Ile ma wzrostu najniższa osoba na świecie?": "Jak niski był najniższy człowiek świata i z czym musiał żyć?",
  "Jaki człowiek żył najdłużej?": "Kto żył najdłużej i dlaczego większość historii o 140-latkach to ściema?",
  "Czy kura może biegać bez głowy?": "Czy kura naprawdę może biegać bez głowy? Biologia jest dziwna",
  "Dlaczego w średniowieczu miasta tak śmierdziały?": "Dlaczego średniowieczne miasta śmierdziały tak, że dziś byś nie wytrzymał?",
  "Dlaczego granice Afryki są takie proste?": "Dlaczego granice Afryki wyglądają, jakby ktoś rysował je linijką?",
  "Dlaczego ludzie bali się zaćmień Słońca?": "Dlaczego zaćmienie Słońca kiedyś wyglądało jak koniec świata?",
  "Co się stało z danymi z Naszej Klasy?": "Co się stało z twoimi zdjęciami i danymi z Naszej Klasy?",
  "Jak ludzie widzieli przed wynalezieniem żarówki?": "Jak ludzie żyli po ciemku, zanim ktoś dał im żarówkę?",
  "Czy ośmiornice naprawdę są tak inteligentne?": "Czy ośmiornice są za mądre jak na stworzenia bez kręgosłupa?",
  "Dlaczego psy wąchają sobie tyłki?": "Dlaczego psy wąchają sobie tyłki i traktują to jak rozmowę?",
  "Dlaczego niebo jest niebieskie?": "Dlaczego niebo jest niebieskie, skoro kosmos jest czarny?",
  "Czy rośliny mogą się ze sobą komunikować?": "Czy rośliny gadają za twoimi plecami — tylko bez głosu?",
  "Jak działa Wi-Fi?": "Jak działa Wi-Fi, czyli niewidzialna sieć, bez której ludzie wariują?",
  "Jak wygląda zrzucanie paliwa z samolotu?": "Czy samolot naprawdę może zrzucić paliwo ludziom na głowy?"
};

const popularTitles = [
  "Czemu kukurydza wychodzi w kupie prawie cała?",
  "Ile kosztuje utrzymanie więźnia w Polsce?",
  "Czy umierający człowiek nadal słyszy?",
  "Jak wygląda życie w szpitalu psychiatrycznym?",
  "Ile razy dziennie człowiek pierdzi?",
  "Jak działa Wi-Fi?",
];

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
  const map = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z", Ą: "a", Ć: "c", Ę: "e", Ł: "l", Ń: "n", Ó: "o", Ś: "s", Ź: "z", Ż: "z" };
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

function getEdgyTitle(fact) {
  return edgyTitles[fact.title] || fact.title;
}

function filterFacts(items, activeCategory, searchQuery) {
  const q = normalizeText(searchQuery);
  return items.filter((fact) => {
    const categoryMatch = activeCategory === "Wszystkie" || fact.category === activeCategory;
    const text = normalizeText([fact.title, getEdgyTitle(fact), fact.category, fact.intro, ...fact.paragraphs].join(" "));
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
    return [...items].sort((a, b) => {
      const av = Math.sin((facts.indexOf(a) + 1) * randomSeed);
      const bv = Math.sin((facts.indexOf(b) + 1) * randomSeed);
      return av - bv;
    });
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
        <p className="text-sm leading-6 text-zinc-300">{fact.intro}</p>
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

function FactDetails({ fact, onSelectFact, onNextFact, readCount }) {
  const [reaction, setReaction] = useState(null);
  const similar = facts.filter((item) => item.category === fact.category && item.title !== fact.title).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-10">
      <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-950 shadow-2xl shadow-black/40">
        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_.35fr] lg:p-10">
          <article className="space-y-6 text-lg leading-8 text-zinc-200">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-base font-black uppercase leading-7 tracking-[0.14em] text-yellow-400 md:text-lg">{getEdgyTitle(fact)}</p>
              <p className="mt-3 text-lg font-bold leading-7 text-white md:text-xl">{fact.intro}</p>
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
            <button type="button" onClick={() => { setSelectedFact(null); setActive("Wszystkie"); setQuery(""); } className="shrink-0 text-left">
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
        <FactDetails fact={selectedFact} onSelectFact={openFact} onNextFact={handleNextFact} readCount={readCount} />
      ) : (
        <section id="fakty" className="mx-auto max-w-7xl px-5 pb-12">
          <div className="mb-6 grid gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj faktu, np. więzienie, balsamacja, rekord..." className="w-full rounded-xl border border-white/10 bg-black py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-yellow-400" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Najnowsze", "Popularne", "Losowe"].map((mode) => (
                <button key={mode} type="button" onClick={() => { setSortMode(mode); if (mode === "Losowe") setRandomSeed(Date.now()); } className={`rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider transition ${sortMode === mode ? "bg-yellow-400 text-black" : "border border-white/10 bg-white/5 text-zinc-300 hover:border-yellow-400/40 hover:text-yellow-300"}`}>
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
              <button type="button" onClick={() => { setSelectedFact(null); setActive("Wszystkie"); setQuery(""); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50); } className="block text-left transition hover:text-yellow-400">Start</button>
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
