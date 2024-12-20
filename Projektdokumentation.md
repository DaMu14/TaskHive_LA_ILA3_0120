# Projekt-Dokumentation TaskHive_LA_ILA3_0120

Gruppenmitglieder:

- Robin Sacher
- Damian Müller
- Julian Hitz

| Datum      | Version | Zusammenfassung                                                                                                                                                                                    |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 08.11.2024 | 0.0.1   | Heute haben wir den Projektantrag abgegeben und an der Informierenphase gearbeitet und die Anforderungsanalsyse, sowie Testfälle erstellt. Wir haben angefangen ein Use Case Diagram zu erstellen. |
| 15.11.2024 | 0.0.2   | Heute haben wir die Planenphase ausgefüllt.                                                                                                                                                                                                   |
| 22.11.2024 | 0.0.3   | Heute haben wir mit dem Realisieren begonnen und das Projekt erstellt.                                                                                                                                                                                                   |
| 29.11.2024 | 0.0.4   | Heute haben wir das Login und Benutzerverwaltung erstellt.                                                                                                                                                                                                  |
| 06.12.2024 | 0.0.5   | Heute haben wir die Aufgabenverwaltung implementiert.                                                                                                                                                                                                   |
| 13.12.2024 | 1.0.0   | Heute haben wir die Aufgabenverwaltung komplett fertig gestellt und kleine Fehler behoben, sowie die Verwaltung der Einkaufsliste erstellt.                                                                                                                                                                                                   |
| 20.12.2024 | 1.0.1   |  Heute haben wir unsere Portfolioeinträge geschrieben und letzte Verbesserungen vorgenommen, sowie das Projekt getestet.                                                                                                                                                                                          |



## 1 Informieren

### 1.1 Ihr Projekt

Wir erstellen eine Webanwendung, in der man Aufgaben und eine Einkaufsliste in der Familie verwalten und organisieren kann.

In diesem Projekt möchten wir verschiedene Module zusammenführen. Wir wollen unsere Fähigkeiten in der Frontend- und Backend-Entwicklung vertiefen und dabei eine Datenbank einsetzen. Außerdem möchten wir neue Technologien wie React.js und HTML Bootstrap kennenlernen, mit denen wir bisher noch nicht gearbeitet haben. Durch die Kombination dieser Elemente hoffen wir, unser Wissen zu erweitern und eine ansprechende Website zu gestalten. So können wir praktische Erfahrungen sammeln und unser Verständnis für moderne Webentwicklung verbessern.

### 1.2 Anforderungsanalyse

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                                                     |
| ---- | --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional    | Als ein Benutzer möchte ich verschiedene Benutzer erstellen können, damit ich alle Familienmitglieder erfassen kann.                                             |
| 2    | Muss            | Funktional    | Als ein Benutzer möchte ich Aufgaben erstellen können, um die Aufgaben in der Familie zu verwalten                                                               |
| 3    | Muss            | Funktional    | Als ein Benutzer möchte ich Familienmitglieder den verschiedenen Aufgaben zuweisen, damit jeder weiss, was zu erledigen ist.                                     |
| 4    | Muss            | Funktional    | Als ein Benutzer möchte ich Aufgaben bearbeiten können, damit ich sie nicht zuerst löschen und dann neu erstellen muss.                                          |
| 5    | Muss            | Funktional    | Als ein Benutzer möchte ich Aufgaben löschen können, damit die Anwendung übersichtlich bleibt und um Wegfallende Aufgaben zu entfernen.                          |
| 6    | Muss            | Funktional    | Als ein Benutzer möchte ich die Möglichkeit haben Aufgaben als erledigt zu kennzeichnen, damit man einen Überblick hat, was noch erledigt werden muss.           |
| 7    | Muss            | Funktional    | Als ein Benutzer möchte ich eine Einkaufsliste erstellen können, damit jeder weiss was eingekauft werden muss.                                                   |
| 8    | Muss            | Funktional    | Als ein Benutzer möchte ich Elemente zu der Einkaufsliste hinzufügen können, damit jeder weiss, was eingekauft werden muss.                                      |
| 9    | Muss            | Funktional    | Als ein Benutzer möchte ich Elemente bearbeiten können, damit ich sie nicht zuerst löschen und dann neu erstellen muss.                                          |
| 10   | Muss            | Funktional    | Als ein Benutzer möchte ich Elemente aus der Einkaufsliste entfernen können, damit keine unnötige Sachen eingekauft werden                                       |
| 11   | Muss            | Funktional    | Als ein Benutzer möchte ich für jede Einkaufsliste ein Datum angeben können, damit jeder weiss, für wann der Einkauf geplant ist.                                |
| 12   | Muss            | Qualität      | Als ein Benutzer möchte ich, dass das Frontend als eine Singe Page Application umgesetzt ist, um schnelle Ladezeiten zu gewährleisten.                           |
| 13   | Muss            | Randbedingung | Als ein Entwickler möchte ich, dass das Frontend mit React.js umgesetzt wird, um eine neue Technologie kennen zu lernen.                                         |
| 14   | Muss            | Randbedingung | Als ein Entwickler möchte ich, dass das Backend mindestens mit .Net Version 6 oder höher umgesetzt wird, um zu gewährleisten, dass ein Framework verwendet wird. |

### 1.3 Testfälle

| TC-№ | Ausgangslage                                | Eingabe                                                                            | Erwartete Ausgabe                                                                 |
| ---- | ------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1.1  | Webseite gestartet                          | Neuer Benutzer hinzufügen auswählen                                                | neuer Benutzer wird hinzugefügt                                                   |
| 2.1  | Webseite gestartet                          | neue Aufgabe erstellen auswählen, Eingabe des Namens und Eingabe der Aufgabe       | neue Aufgabe wird gespeichert                                                     |
| 2.2  | Webseite gestartet                          | neue Aufgabe erstellen auswählen, Keine Eingabe des Namens und Eingabe der Aufgabe | Ausgabe von "Sie müssen Einen Namen eingeben", "Sie müssen eine Aufgabe eingeben" |
| 3.1  | Aufgabe erstellt                            | Aufgabe Person zuweisen auswählen                                                  | Aufgabe wird Person zugewiesen                                                    |
| 4.1  | Aufgabe ausgewählt                          | Aufgabe bearbeiten auswählen                                                       | Aufgabe kann bearbeitet werden                                                    |
| 5.1  | Aufgabe ausgewählt                          | Aufgabe löschen wählen                                                             | Aufgabe wurde gelöscht                                                            |
| 6.1  | Aufgabe ausgewählt                          | Aufgabe als erledigt kennzeichnen                                                  | Aufgabe wurde als erledigt gekennzeichnet                                         |
| 7.1  | Webseite gestartet                          | Einkaufsliste erstellen auswählen, Namen eingeben                                  | Einkaufsliste wurde erstellt                                                      |
| 7.2  | Webseite gestartet                          | Einkaufsliste erstellen auswählen, Kein Namen eingeben                             | Ausgabe von "Sie müssen der Einkaufsliste einen Namen geben"                      |
| 8.1  | Webseite gestartet                          | Element zu Einkaufsliste hinzufügen auswählen, Namen von dem Element eingeben      | Element wurde zu der Einkaufsliste hinzugefügt                                    |
| 8.2  | Webseite gestartet                          | Element zu Einkaufsliste hinzufügen auswählen, Kein Namen von dem Element eingeben | Ausgabe von "Sie müssen dem Element einen Namen geben"                            |
| 9.1  | Webseite gestartet                          | Element bearbeiten auswählen                                                       | Element kann bearbeitet werden                                                    |
| 10.1 | Element aus Liste ausgewählt                | Element löschen auswählen                                                          | Element wurde aus der Liste entfernt                                              |
| 11.1 | Datum hinzufügen ausgewählt                 | Einkaufsliste erstellen auswählen, Namen eingeben, Datum eingeben                  | Einkaufsliste wurde mit Datum erstellt                                            |
| 12.1 | Webseite gestartet                          | Ladezeit messen                                                                    | Die Startseite wird innerhalb von 2 Sekunden geladen                              |
| 12.2 | Webseite gestartet                          | Navigation zwischen Seiten testen (SPA Verhalten)                                  | Nur Teile des DOM werden aktualisiert, kein vollständiges Neuladen                |
| 12.3 | Webseite in verschiedenen Browsern geöffnet | SPA-Funktionalität testen                                                          | Die Anwendung funktioniert einwandfrei in Chrome, Firefox und Edge                |
| 14.1 | Backend gestartet                           | Überprüfung der .NET-Version                                                       | .NET-Version ist 6 oder höher                                                     |

### 1.4 Diagramme

![Use case diagram](https://github.com/user-attachments/assets/8ced3fa4-14e5-4e2a-94c5-9c6c82542922)

## 2 Planen

| AP-№ | Frist      | Zuständig     | Beschreibung                       | geplante Zeit |
| ---- | ---------- | ------------- | ---------------------------------- | ------------- |
| 1.A  | 29.11.2024 | Robin Sacher  | Multiuser Anwendung                | 60 min        |
| 2.A  | 13.12.2024 | Robin Sacher  | Aufgaben verwalten können          | 60 min        |
| 3.A  | 13.12.2024 | Robin Sacher  | Aufgaben zuweisen                  | 45 min        |
| 4.A  | 06.12.2024 | Damian Müller | Aufgaben bearbeiten können         | 45 min        |
| 5.A  | 06.12.2024 | Damian Müller | Aufgaben löschen können            | 30 min        |
| 6.A  | 06.12.2024 | Julian Hitz   | Aufgaben als erledigt kennzeichnen | 30 min        |
| 7.A  | 06.12.2024 | Julian Hitz   | Liste erstellen können             | 45 min        |
| 8.A  | 13.12.2024 | Damian Müller | Elemente hinzufügen können         | 30 min        |
| 9.A  | 13.12.2024 | Damian Müller | Elemente bearbeiten können         | 30 min        |
| 10.A | 13.12.2024 | Damian Müller | Elemente löschen können            | 30 min        |
| 11.A | 13.12.2024 | Julian Hitz   | Datum hinzufügen können            | 45 min        |
| 12.A | 22.11.2024 | Julian Hitz   | Frontend Darstellung               | 30 min        |

## 3 Entscheiden

Wir haben uns dazu entschieden, dass Robin Sacher das Login, und alle Arbeitspakete, welche mit der Aufgabenverwaltung zu tun haben implementiert, weil es so einfacher ist, da diese Arbeitspakete wie ein kleines Bündel sind.
Ausserden haben wir uns dazu entschieden, dass die Funktion, dass man Aufgaben im Frontend bearbeiten kann, nicht nötig ist, da man fast schneller ist, wenn man sie löscht und neu erstellt.

## 4 Realisieren

| AP-№ | Datum      | Zuständig     | geplante Zeit | tatsächliche Zeit |
| ---- | ---------- | ------------- | ------------- | ----------------- |
| 1.A  | 29.11.2024 | Robin Sacher  | 60 min        | 50 min            |
| 2.A  | 13.12.2024 | Robin Sacher  | 60 min        | 180 min           |
| 3.A  | 13.12.2024 | Robin Sacher  | 45 min        | 200 min           |
| 4.A  | 6.12.2024  | Robin Sacher  | 45 min        | 150 min           |
| 5.A  | 6.12.2024  | Robin Sacher  | 30 min        | 120 min           |
| 6.A  | 6.12.2024  | Robin Sacher  | 30 min        | 190 min           |
| 7.A  | 6.12.2024  | Julian Hitz   | 45 min        |                   |
| 8.A  | 13.12.2024 | Damian Müller | 30 min        | 60 min                  |
| 9.A  | 13.12.2024 | Damian Müller | 30 min        | 30 min                  |
| 10.A | 13.12.2024 | Damian Müller | 30 min        | 45 min                  |
| 11.A | 13.12.2024 | Julian Hitz   | 45 min        |                   |
|      | 22.11.2024 | Julian Hitz   | 30 min        |                   |

## 5 Kontrollieren

| TC-№ | Datum      | Resultat | Tester        |
| ---- | ---------- | -------- | ------------- |
| 1.1  | 13.12.2024 | OK ✅    | Damian Müller |
| 2.1  | 13.12.2024 | OK ✅    | Damian Müller |
| 2.2  | 13.12.2024 | OK ✅    | Damian Müller |
| 3.1  | 13.12.2024 | OK ✅    | Robin Sacher  |
| 4.1  | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 5.1  | 13.12.2024 | OK ✅    | Damian Müller |
| 6.1  | 13.12.2024 | OK ✅    | Damian Müller |
| 7.1  | 13.12.2024 | OK ✅    | Robin Sacher  |
| 7.2  | 13.12.2024 | OK ✅    | Robin Sacher  |
| 8.1  | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 8.2  | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 9.1  | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 10.1 | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 11.1 | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 12.1 | 13.12.2024 | NOK ❌   | Robin Sacher  |
| 12.2 | 13.12.2024 | OK ✅    | Damian Müller |
| 12.3 | 13.12.2024 | OK ✅    | Damian Müller |
| 14.1 | 13.12.2024 | OK ✅    | Damian Müller |

Testbericht:
Am 13.12.2024 wurden Tests der Webseite zur Verwaltung von Aufgaben und Einkaufslisten durchgeführt. Von insgesamt 18 Testfällen verliefen 11 erfolgreich, während 7 Testfälle fehlschlugen. Positiv ist, dass die Benutzerverwaltung einwandfrei funktioniert. Auch grundlegende Aufgabenfunktionen wie das Erstellen, Löschen, die Zuweisung an Personen und das Markieren als erledigt liefen fehlerfrei. Die Navigation innerhalb der Seite und die SPA-Funktionalität zeigten ebenfalls keine Probleme, selbst in verschiedenen Browsern.

Dennoch traten wesentliche Fehler in der Einkaufslistenverwaltung auf. Das Erstellen von Einkaufslisten ist möglich, das Hinzufügen von Elementen sowie das Bearbeiten und Löschen von Listen oder Elementen funktionierten nicht wie erwartet.

Um die Anwendung zu verbessern, sollten zunächst die Fehler in der Einkaufslistenverwaltung behoben werden, da diese Funktionen zentral für die Nutzer sind.

## 6 Auswerten

Portfolioberichte:

- Robin Sacher: [Portfoliobericht](https://portfolio.bbbaden.ch/view/view.php?t=118468fd554c4fd3f1d2)
- Damian Müller:
- Julian Hitz:
