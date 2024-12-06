# Projekt-Dokumentation TaskHive_LA_ILA3_0120

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

✍️ Ihr Gruppenname und Ihre Nachnamen

| Datum      | Version | Zusammenfassung                                                                                                                                                                                    |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 08.11.2024 | 0.0.1   | Heute haben wir den Projektantrag abgegeben und an der Informierenphase gearbeitet und die Anforderungsanalsyse, sowie Testfälle erstellt. Wir haben angefangen ein Use Case Diagram zu erstellen. |
| 15.11.2024 | 0.0.2   |                                                                                                                                                                                                    |
| 22.11.2024 | 1.0.0   |                                                                                                                                                                                                    |

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

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: _Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️_.

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

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

![Use case diagram](https://github.com/user-attachments/assets/8ced3fa4-14e5-4e2a-94c5-9c6c82542922)

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  | 29.11.2024       | Robin Sacher          | Multiuser Anwendung       | 60 min            |
| 2.A  | 13.12.2024      | Robin Sacher         | Aufgaben verwalten können   | 60 min              |
| 3.A  | 13.12.2024      | Robin Sacher          | Aufgaben zuweisen    | 45 min        | 
| 4.A  | 06.12.2024      | Damian Müller          | Aufgaben bearbeiten können |  45 min             |
| 5.A  | 06.12.2024      | Damian Müller          | Aufgaben löschen können | 30 min              |
| 6.A  | 06.12.2024      | Julian Hitz          | Aufgaben als erledigt kennzeichnen | 30 min | 
| 7.A  | 06.12.2024      | Julian Hitz         | Liste erstellen können   | 45 min       |
| 8.A  | 13.12.2024      | Damian Müller          | Elemente hinzufügen können | 30 min       |
| 9.A  | 13.12.2024      | Damian Müller          | Elemente bearbeiten können | 30 min       |
| 10.A | 13.12.2024      | Damian Müller          | Elemente löschen können | 30 min       |
| 11.A | 13.12.2024      | Julian Hitz          | Datum hinzufügen können | 45 min       |
|      | 22.11.2024      | Julian Hitz          | Frontend Darstellung     | 30 min      |

Total:

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

Wir haben uns dazu entschieden, dass Robin Sacher das Login, und alle Arbeitspakete, welche mit der Aufgabenverwaltung zu tun haben implementiert, da es so einfacher ist.
## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 29.11.2024  | Robin Sacher   | 60 min        |   50 min                |
| 2.A | 13.12.2024  | Robin Sacher   |    60 min    |     180 min  |
| 3.A  | 13.12.2024  | Robin Sacher   |  45 min   |     | 
| 4.A  | 6.12.2024   |Robin Sacher  |   45 min     | 150 min     |
| 5.A  |  6.12.2024  | Robin Sacher   | 30 min   |   120 min     |
| 6.A  |  6.12.2024   | Robin Sacher   | 30 min    | 190 min    |
| 7.A  |  6.12.2024  | Julian Hitz    | 45 min   |      |
| 8.A  | 13.12.2024   | Damian Müller  | 30 min   |      |
| 9.A  | 13.12.2024   | Damian Müller  | 30 min   |       |
| 10.A | 13.12.2024   | Damian Müller  | 30 min    |      |
| 11.A | 13.12.2024   | Julian Hitz    | 45 min   |       |
|      | 22.11.2024   | Julian Hitz    | 30 min   |       |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
