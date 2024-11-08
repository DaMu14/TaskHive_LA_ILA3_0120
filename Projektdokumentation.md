# Projekt-Dokumentation TaskHive_LA_ILA3_0120

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

✍️ Ihr Gruppenname und Ihre Nachnamen

| Datum | Version | Zusammenfassung                                                                                                                             |
| ----- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in _einem_ Satz, was Sie erreicht haben. |
|       | ...     |                                                                                                                                             |
|       | 1.0.0   |                                                                                                                                             |

## 1 Informieren

### 1.1 Ihr Projekt

Wir erstellen eine Webanwendung, in der man Aufgaben und eine Einkaufsliste in der Familie verwalten und organisieren kann.

In diesem Projekt möchten wir verschiedene Module zusammenführen. Wir wollen unsere Fähigkeiten in der Frontend- und Backend-Entwicklung vertiefen und dabei eine Datenbank einsetzen. Außerdem möchten wir neue Technologien wie React.js und HTML Bootstrap kennenlernen, mit denen wir bisher noch nicht gearbeitet haben. Durch die Kombination dieser Elemente hoffen wir, unser Wissen zu erweitern und eine ansprechende Website zu gestalten. So können wir praktische Erfahrungen sammeln und unser Verständnis für moderne Webentwicklung verbessern.

### 1.2 Anforderungsanalyse

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                                                           |
| ---- | --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Muss            | Funktional | Als ein Benutzer möchte ich verschiedene Benutzer erstellen können, damit ich alle Familienmitglieder erfassen kann.                                   |
| 2    | Muss            | Funktional | Als ein Benutzer möchte ich Aufgaben erstellen können, um die Aufgaben in der Familie zu verwalten                                                     |
| 3    | Muss            | Funktional | Als ein Benutzer möchte ich Familienmitlgieder den verschiedenen Aufgaben zuweisen, damit jeder weiss, was zu erledigen ist.                           |
| 4    | Muss            | Funktional | Als ein Benutzer möchte ich Aufgaben bearbeiten können, damit ich sie nicht zuerst löschen und dann neu erstellen muss.                                |
| 5    | Muss            | Funktional | Als ein Benutzer möchte ich Aufgaben löschen können, damit die Anwendung übersichtlich bleibt und um Wegfallende Aufgaben zu entfernen.                |
| 6    | Muss            | Funktional | Als ein Benutzer möchte ich die Möglichkeit haben Aufgaben als erledigt zu kennzeichnen, damit man einen Überblick hat, was noch erledigt werden muss. |
| 7    | Muss            | Funktional | Als ein Benutzer möchte ich eine Einkaufsliste erstellen können, damit jeder weiss was eingekauft werden muss.                                         |
| 8    | Muss            | Funktional | Als ein Benutzer möchte ich Elemente zu der Einkaufsliste hinzufügen können, damit jeder weiss, was eingekauft werden muss.                            |
| 9    | Muss            | Funktional | Als ein Benutzer möchte ich Elemente bearbeiten können, damit ich sie nicht zuerst löschen und dann neu erstellen muss.                                |
| 10   | Muss            | Funktional | Als ein Benutzer möchte ich Elemente aus der Einkaufsliste entfernen können, damit keine unnötige Sachen eingekauft werden                             |
| 11   | Muss            | Funktional | Als ein Benutzer möchte ich für jede Einkaufsliste ein Datum angeben können, damit jeder weiss, für wann der Einkauf geplant ist.                      |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: _Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️_.

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Webseite gestartet   | Neuer Benutzer hinzufügen auswählen   |   neuer Benutzer wird hinzugefügt |
| 2.1  | Webseite gestartet | neue Aufgabe erstellen auswählen | neue Aufgabe kann erstellt werden |
| 3.1  | Aufgabe erstellt | Aufgabe Person zuweisen auswählen |  Aufgabe kann Person zugewiesen werden |
| 4.1  |  Aufgabe ausgewählt  | Aufgabe bearbeiten auswählen  | Aufgabe kann bearbeitet werden |
| 5.1  | Aufgabe ausgewählt | Aufgabe löschen wählen  | Aufgabe wurde gelöscht |
| 6.1  | Aufgabe ausgewählt  | Aufgabe als erledigt kennzeichnen | Aufgabe wurde als erledigt gekennzeichnet |
| 7.1  | Webseite gestartet |     | Einkaufsliste wurde erstellt |
| 8.1  | Element aus List ausgewählt | Element löschen wählen | Element wird aus List entfernt |
| 9.1  | Datum hinzufügen ausgewählt | Datum eingeben  | Datum wird gespeichert |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total:

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
