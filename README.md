# 1 Szczegółowa dokumentacja projektów

## A. Szczegółowa dokumentacja kodu:
  1. **Najważniejsze funkcje:**
     - `centeredText(doc, text, y)`
       - **Przeznaczenie:**
         - Funkcja centruje tekst w dokumencie PDF. Oblicza szerokość tekstu i ustawia jego położenie w taki sposób, aby był wyśrodkowany w poziomie.
       - **Parametry wejściowe:**
         - `doc`: Obiekt dokumentu PDF, w którym ma zostać wycentrowany tekst.
         - `text`: Tekst do wycentrowania.
         - `y`: Pozycja pionowa tekstu na stronie.
       - **Wartości na wyjściu:**
         - `Null` - funkcja nic nie zwraca.
     - `calculate()`
       - **Przeznaczenie:**
         - Główna funkcja obliczająca wszystkie wartości potrzebne do przedstawienia użytkownikowi wartości końcowych.
       - **Parametry wejściowe:**
         - brak
       - **Wartości na wyjściu:**
         - `Null` - funkcja nie modyfikuje elementów DOM i zmiennych globalnych.
     - `showExportOptions()`
       - **Przeznaczenie:**
         - Funkcja zarządza wyświetlaniem sekcji eksportu na podstronie pozwalającej użytkownikowi policzyć wartości ciepła właściwego.
       - **Parametry wejściowe:**
         - brak
       - **Wartości na wyjściu:**
         - `Null` - funkcje te modyfikują styl CSS elementów DOM, aby pokazać lub ukryć określone sekcje.
     - `saveToPDF()`
       - **Przeznaczenie:**
         - Funkcja ta tworzy definicję dokumentu PDF, zawierającą różne style i formatowania, a następnie używa biblioteki pdfMake do wygenerowania i pobrania dokumentu.
       - **Parametry wejściowe:**
         - brak
       - **Wartości na wyjściu:**
         - `Null` - funkcja inicjuje pobieranie wygenerowanego dokumentu PDF.
     - `loadTemplate(templatePath, placeholderId, callback):`
       - **Przeznaczenie:**
         - Ładuje szablon HTML z podanej ścieżki i wstawia go do elementu o określonym ID, a następnie wykonuje funkcję zwrotną (callback), jeśli została dostarczona. Funkcja używa fetch do pobrania szablonu i innerHTML do wstawienia go w odpowiednie miejsce. Obsługuje również błędy, wypisując je w konsoli.
       - **Parametry wejściowe:**
         - `templatePath`: Ścieżka do szablonu HTML, który ma być załadowany.
         - `placeholderId`: ID elementu, w którym ma być załadowany szablon.
         - `callback`: Funkcja zwrotna wywoływana po załadowaniu szablonu.
         - `placeholderId`: ID elementu DOM, do którego ma zostać wstawiony załadowany szablon.
         - `callback`: Opcjonalna funkcja zwrotna, która ma zostać wykonana po pomyślnym załadowaniu i wstawieniu szablonu.
       - **Wartości na wyjściu:**
         - `Null` - funkcja bezpośrednio modyfikuje DOM i wywołuje funkcję zwrotną.
     - `loadTemplate():`
       - **Przeznaczenie:**
         - Pierwsze wywołanie ładuje szablon navbaru (navbar.html) i umieszcza go w elemencie z ID navbar-placeholder. Po załadowaniu, wykonuje funkcję setupNavbar, która konfiguruje zachowanie i wygląd navbaru.
     - Drugie wywołanie ładuje szablon stopki (footer.html) i umieszcza go w elemencie z ID footer-placeholder.
     - Dzięki temu kod nagłówka i stopki jest utrzymywany w jednym miejscu, co ułatwia zarządzanie i aktualizację.
   - **Parametry wejściowe:**
     - brak
   - **Wartości na wyjściu:**
     - `Null` - funkcja nic nie zwraca.
 - `setupNavbar():`
   - **Przeznaczenie:**
     - Funkcja obsługuje zdarzeń do elementów w pasku nawigacyjnym (navbar). Konkretnie, dodaje obsługę kliknięcia dla menu mobilnego.
     - Funkcja znajduje element o ID mobile-menu i dodaje do niego nasłuchiwanie zdarzeń click. Po kliknięciu, funkcja pobiera element z klasą navbar__links i przełącza jego klasę CSS na active.
   - **Parametry wejściowe:**
     - `doc`: Obiekt dokumentu PDF, w którym ma zostać wycentrowany tekst.
     - `text`: Tekst do wycentrowania.
     - `y`: Pozycja pionowa tekstu na stronie.
   - **Wartości na wyjściu:**
     - `Null` - funkcja nic nie zwraca.

## B. Użyte wzorce projektowe:
  1. **Modułowy wzorzec projektowy (Modular Design Pattern):**
     - Wykorzystywany jest modułarny wzorzec projektowy poprzez oddzielenie różnych części strony (np. nawigacja, stopka) do osobnych plików HTML i ładowanie ich dynamicznie za pomocą JavaScript (templates_importer.js). To umożliwia ponowne wykorzystanie kodu oraz ułatwia zarządzanie i utrzymanie strony.
  2. **Wzorzec Projektowy Strategia (Strategy Design Pattern):**
     - Można go rozpoznać w sposobie, w jaki zostały obsłużone różne aspekty strony, np. formatowanie danych wejściowych, obliczenia w calculate() i eksport do PDF w saveToPDF(). Każda z tych funkcji może być traktowana jako osobna strategia, która jest wykonywana w zależności od interakcji użytkownika
  3. **Wzorzec Projektowy Singleton (Singleton Design Pattern):**
     - Wzorzec ten został użyty w przypadku utworzenia i użycia części dotyczącej navbar oraz footer. Założono, że istnieje tylko jedna instancja nawigacji (navbar i footer) na stronie, co jest zgodne z ideą wzorca Singleton. Ten wzorzec zapewnia, że obiekt jest tworzony tylko raz i jest dostępny globalnie.

  4. **Wzorzec Projektowy Dekorator (Decorator Design Pattern):**
     - Zastosowano stylizację CSS w taki sposób, że można dodawać nowe style bez modyfikacji istniejących klas, co jest zgodne z ideą wzorca Dekorator. Wzorzec ten polega na dodawaniu nowych funkcjonalności do obiektów bez zmiany ich struktury.

## C. Najważniejsze zmienne:

  1. `q1Value, q2Value, q3Value, cwalValue, cwh2oValue, cwstValue:`
     - Te zmienne są używane do przechowywania obliczonych wartości ciepła (Q1, Q2, Q3) oraz ciepła właściwego dla różnych materiałów (cwal, cwh2o, cwst). Są one obliczane w funkcji `calculate()` i wykorzystywane w funkcji `saveToPDF()` do generowania dokumentu PDF.

  2. `mk, mkw, mcst:`
     - Są to zmienne odpowiedzialne za przechowywanie mas: kalorymetru (mk), kalorymetru z wodą (mkw) oraz ciała stałego (mcst). Użytkownik wprowadza te wartości w formularzu, a następnie są one wykorzystywane w obliczeniach.

  3. `t1, t2, t3:`
     - Reprezentują temperatury: początkową wody (t1), ciała stałego (t2) i końcową wody (t3). Tak jak w przypadku mas, użytkownik wprowadza te dane, które są następnie wykorzystywane do obliczeń.

  4. `q1, q2, q3:`
     - Są to zmienne przechowujące obliczone wartości ciepła: pobranego przez kalorymetr (Q1), pobranego przez wodę (Q2) i oddanego przez ciało stałe (Q3). Są one obliczane w funkcji `calculate()`.

  5. `cwal, cwh2o, cwst:`
     - Te zmienne przechowują ciepło właściwe kalorymetru (cwal), wody (cwh2o) i ciała stałego (cwst). Ciepło właściwe kalorymetru jest ustawiane na stałą wartość, podczas gdy ciepło właściwe ciała stałego jest obliczane
  6. `description, imie, nazwisko, przedmiot, nr_indeksu, kierunek, nr_lab, tytul:`
     - To zmienne przechowujące dane wprowadzone przez użytkownika, które są wykorzystywane podczas tworzenia dokumentu PDF. Obejmują one opis, imię, nazwisko, nazwę przedmiotu, numer indeksu, kierunek studiów, numer laboratorium oraz tytuł laboratorium.

  7. `docDefinition:`
     - Jest to zmienna reprezentująca definicję dokumentu używaną przez bibliotekę pdfMake do generowania PDF. Zawiera wszystkie elementy, które mają zostać wyświetlone w PDF, włącznie ze stylami i układem.

## D. Bazy danych:
   - Nasza aplikacja nie wykorzystuje baz danych. Wszelkie dane, które są otrzymywane od użytkownika lub wygenerowane w czasie działania aplikacji są przechowywane w pamięci tymczasowej i utracone po zakończeniu sesji. Użytkownik by zachować swoje dane ma możliwość eksportu treści do pliku pdf.

## E. Środowisko programistyczne

  1. **System Operacyjny:**
     - Można pracować na dowolnym współczesnym systemie operacyjnym.
     - Najpopularniejsze wybory to:
       1. Windows 10 lub nowszy
       2. macOS (najnowsza stabilna wersja)
       3. Linux (np. Ubuntu 20.04 LTS)

  2. **Edytor Kodu:**
     - Visual Studio Code (VS Code) - To zaawansowane, lecz łatwe w użyciu IDE wspierane przez Microsoft. Obsługuje wiele wtyczek, które ułatwiają rozwój webowy.
       - Wersja: Najnowsza stabilna.

  3. **Narzędzia i Oprogramowanie:**
     1. Node.js: Środowisko uruchomieniowe do uruchamiania JavaScript poza przeglądarką, przydatne do różnych narzędzi deweloperskich.
        - Wersja: Najnowsza stabilna (np. 16.x lub 17.x).
     2. npm (Node Package Manager): Menedżer pakietów dla JavaScript, instalowany automatycznie z Node.js.
        - Wersja: Najnowsza stabilna.
     3. Git: System kontroli wersji, niezbędny do zarządzania kodem źródłowym.
        - Wersja: Najnowsza stabilna.

  4. **Przeglądarka Internetowa:**
     1. Google Chrome lub Mozilla Firefox: Oba zapewniają rozbudowane narzędzia deweloperskie. Może być też inna przeglądarka na bazie Chromium.
        - Wersja: Najnowsza stabilna.

  5. **Dodatkowe biblioteki:**
     1. PDFMake: Biblioteka JavaScript do generowania PDF, którą już używasz w projekcie.
        - Wersja: Najnowsza stabilna.
     2. MathJax: Jeśli używasz zaawansowanego renderowania równań matematycznych w projekcie.
        - Wersja: Najnowsza stabilna.

  6. **Proces Instalacji:**
     1. Instalacja Systemu Operacyjnego: Wybierz i zainstaluj preferowany system operacyjny.
     2. Instalacja Visual Studio Code:
        - Pobierz i zainstaluj z oficjalnej strony: Visual Studio Code.
     3. Instalacja Node.js i npm:
        - Pobierz i zainstaluj z oficjalnej strony: Node.js.
        - npm zostanie zainstalowany automatycznie z Node.js.
     4. Instalacja Git:
        - Pobierz i zainstaluj z oficjalnej strony: Git.
     5. Konfiguracja Edytora:
        - Zainstaluj potrzebne rozszerzenia w VS Code, np. dla wsparcia JavaScript, CSS, HTML.
     6. Instalacja Przeglądarki:
        - Pobierz i zainstaluj Google Chrome lub Mozilla Firefox.

  7. **Konfiguracja Środowiska:**
     1. Skonfiguruj Git (nazwa użytkownika, e-mail).
     2. Zaktualizuj wszystkie narzędzia do najnowszych wersji.
     3. Możesz również skonfigurować środowisko zgodnie z preferencjami (motywy w VS Code, ustawienia terminala itp.)..
.
