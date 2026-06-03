# "Know Your Future" – Tarot Shuffle Website

## Team

- Luna Steiner
- Kira Gerschler

## Modul

Interaktive Medien II

## Kurzbeschreibung

Unsere Website "Know Your Future" ist eine interaktive Tarot-Applikation. Nutzer:innen können virtuell die Karten shufflen lassen, woraufhin vier Karten verdeckt ausgebreitet werden. Wählt man eine der Karten aus, wird diese aufgedeckt. Dabei präsentieren wir nicht nur die traditionelle, oft recht mühsame und lange Erklärung der Karte, sondern liefern unter dem Motto "auf gut deutsch gesagt" zusätzlich eine kurze, lustige und direkte Voraussage.

## API & Daten

Für die Bedeutung der Karten (insbesondere fokussiert auf die 22 Karten der Major Arcana) haben wir eine externe Schnittstelle angebunden, welche die Rohdaten liefert:

- [Tarot API](https://tarotapi.dev/api/v1/cards)

## Learnings

Da dies unser erstes Projekt mit JavaScript war, war die Lernkurve entsprechend steil:

- **JavaScript & API Integration:** Wir haben gelernt, wie man Daten von einer externen API (Fetch) abruft und diese dynamisch in unsere HTML-Struktur einbaut.
- **Interaktivität & DOM-Manipulation:** Die Logik hinter dem Shufflen, dem Auswählen und dem anschliessenden Aufdecken der Karten per Code zu steuern, hat uns die Grundlagen der Interaktivität im Web nähergebracht.
- **GitHub & Versionskontrolle:** Dies war unser erster Kontakt mit GitHub. Wir haben gelernt, was ein Repository ist und wie die Zusammenarbeit darüber funktioniert – auch wenn wir hier unsere anfänglichen Schwierigkeiten hatten.

## Schwierigkeiten

Die grössten Herausforderungen lagen in der neuen Logik und der Projektorganisation:

- **GitHub Setup:** Zu Beginn hatten wir Schwierigkeiten mit dem Workflow, weshalb wir erst zu einem späteren Zeitpunkt ein gemeinsames Repository aufgesetzt haben. Unseren bis dahin gesammelten Code (der schon sehr umfangreich war) haben wir dann auf einen Schlag integriert.

## Ressourcen

Für die Umsetzung und Problemlösung während des Projekts haben wir auf folgende Hilfsmittel zurückgegriffen:

- **KI-Assistenz:** Gemini und Claude (als Unterstützung beim Erarbeiten der Logik, Debugging).
- **Mentoring:** Wertvolle Coachings und Feedback-Gespräche bei den Dozenten.
- **Infrastruktur:** Das bereitgestellte Tooling Setup aus dem Modul IM II, welches uns eine solide Basis für das Projekt lieferte.
