export default {

  version: '1.4.0',

  lastUpdated: '2023-10-25',

  categoryTags: [
    {
      key: 'common',
      title: 'Allgemein'
    },
    {
      key: 'physical',
      title: 'Physische Gefahren'
    },
    {
      key: 'mobile',
      title: 'Gefahren im Mobilfunknetz'
    },
    {
      key: 'online',
      title: 'Gefahren im Internet'
    },
  ],

  filterTags: [
    {
      key: 'easy',
      icon: '⭐',
      title: 'Meist schnell und leicht umzusetzen',
      disabled: false,
    },
    {
      key: 'security',
      icon: '🦄',
      title: 'Bringt vergleichsweise viel Sicherheit',
      disabled: false,
    },
    {
      key: 'knowledge',
      icon: '📚',
      title: 'Benötigt Fachwissen oder Recherche',
      disabled: false,
    },
    {
      key: 'uncomfortable',
      icon: '🕑',
      title: 'Ist mit Gewohnheitsänderungen verbunden',
      disabled: false,
    },
    {
      key: 'expensive',
      icon: '💵',
      title: 'Ist eher teurer',
      disabled: false,
    },
  ],

  tasks: [

    {
      id: '100',
      title: 'Du interessierst dich für deine Sicherheit',
      shortText: 'Sehr gut! Offenbar ist dir deine Sicherheit wichtig. Sonst würdest du dich nicht damit beschäftigen. Deine ersten 100 Punkte sind dir sicher.',
      tags: ['common'],
      points: 100,
      checked: true
    },

    {
      id: '105',
      title: 'Du teilst diese Liste mit anderen',
      shortText: 'Wenn wir es schaffen die Sicherheit aller Menschen zu erhöhen werden sich staatliche Überwachungsmaßnahmen weniger lohnen. Das kommt auch deiner Sicherheit zugute. Teile diese Liste daher in deinen Kanälen.',
      tags: ['common', 'easy'],
      points: 100,
      checked: false
    },

    {
      id: '110',
      title: 'Du prüfst diese Liste von Zeit zu Zeit',
      shortText: 'Genauso, wie sich die Technologie und diese Liste ständig wandelt wird sich dein Leben, deine Gewohnheiten und deine Geräte in Zukunft ändern. Nimm dir daher gelegentlich Zeit und prüfe diese Liste.',
      tags: ['common', 'easy'],
      points: 200
    },

    {
      id: '115',
      title: 'Du hast schon mal an einer Cryptoparty teilgenommen',
      shortText: 'Cryptoparties sind Events auf denen du lernst deine Geräte und deine Kommunikation zu schützen.',
      longText: 'Wenn du dich für Cryptoparties interessierst und Gleichgesinnte treffen möchtest kannst du dich zum Beispiel auf der Seite cryptoparty.in über bevorstehende Events informieren.',
      showMore: true,
      links: [
        {
          title: 'Nächte Cryptopartys auf cryptoparty.in',
          url: 'https://www.cryptoparty.in/parties/upcoming'
        }
      ],
      tags: ['common', 'easy'],
      points: 400
    },



    {
      id: '200',
      title: 'Du verwendest kein Dumbphone',
      shortText: 'Nicht smarte Tasten-Geräte werden oft leichtfertig als "sicher" eingestuft. Diese lassen sich aber oft nicht verschlüsseln und bieten keine sichere Kommunikation.',
      longText: 'Bei Beschlagnahmungen oder Diebstahl können Kontakte, SMS und Anruflisten ausgelesen werden. Darüber hinaus sind Dumbphones ohne weitere Schutzmaßnahmen genauso anfällig für Angriffe im Mobilfunknetz. Dumbphones lassen sich nicht verschlüsseln, du kannst keine Apps wie Passwortmanager darauf installieren, du kannst deine Bilder nicht von Metadaten bereinigen und kannst keine sicheren Messenger nutzen. Auf der einen Seite haben diese Telefone also Nachteile. Auf der anderen Seite muss aber auch festgehalten werden, dass nicht smarte Geräte einige Gefahren komplett ausschließen. Zum Beispiel ist hier die Gefahr durch Infektionen mit Malware sehr viel geringer. Verschlüsselung und sichere Kommunikation erscheint aber angesichts inflationärer Beschlagnahmungen und Überwachung so wichtig, dass ein smartes Gerät unbedingt zu bevorzugen ist.',
      showMore: true,
      tags: ['physical', 'easy', 'expensive'],
      points: 400
    },

    {
      id: '205',
      title: 'Du hast deine Simkartennummer entfernt',
      shortText: 'Auf der Rückseite deiner Simkarte befindet sich eine unscheinbare Nummer. Zerkratze sie, damit du im Falle einer Beschlagnahmung nicht über sie und deinen Provider identifiziert werden kannst.',
      longText: 'Sei dabei bitte vorsichtig und achte darauf den Chip nicht zu zerstören. Kratze also nicht zu tief!',
      showMore: true,
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: '210',
      title: 'Deine Smartphones sind verschlüsselt',
      shortText: 'Verschlüssel deine Smartphones mit einem starken alphanumerischen Passwort. Dies verhindert das Auslesen von Daten sehr effektiv.',
      longText: 'Eine starke Verschlüsselung ist wichtig. Eine Bildschirmsperre ist nicht ausreichend. Software wie Cellebrite kann die meisten Bildschirmsperren einfach umgehen. Alle deine Daten, Kontakte, Anruflisten, Standortdaten, Login-Daten und vieles mehr können dann durch automatisierte Software wie Cellebrite Pathfinder via USB gesammelt und aufbereitet dargestellt werden. Dein Verschlüsselungspasswort sollte besonders stark sein. Nutze ein sehr komplexes Muster oder ein alphanumerisches Passwort zur Verschlüsselung.',
      showMore: true,
      links: [
        {
          title: 'Phone-Cracking Cellebrite Software Used to Prosecute Tortured Dissident',
          url: 'https://theintercept.com/2016/12/08/phone-cracking-cellebrite-software-used-to-prosecute-tortured-dissident'
        },
        {
          title: 'Netzpolitik: Abschiebung von Geduldeten: Berlin durchsucht weiter Handys',
          url: 'https://netzpolitik.org/2023/abschiebung-von-geduldeten-berlin-durchsucht-weiter-handys/'
        }
      ],
      tags: ['physical', 'easy', 'security'],
      points: 800
    },

    {
      id: '215',
      title: 'Du kannst deine Geräte schnell abschalten',
      shortText: 'Eine Verschlüsselung ist nur effektiv, wenn das Telefon ausgeschaltet ist. Übe daher wie du dein Telefon in Stresssituationen schnell abschalten kannst.',
      longText: 'Auch wenn dein Telefon verschlüsselt ist kann Software wie Cellebrite via USB darauf zugreifen. Solange dein Telefon eingeschaltet ist, ist die Verschlüsselung wirkungslos. Erst wenn es abgeschaltet ist, ist Verschlüsselung wirklich effektiv. Schalte dein Telefon unbedingt ab, bevor du es in fremnde Hände gibst! Wenn du auf Nummer sicher gehen willst kannst du auch einen Killswitch an deinem Telefon anbringen. So lässt sich der Akku in Gefahrensituationen schnell entfernen. Damit verschwindet dann der Schlüssel vom Speicher deines Geräts.',
      showMore: true,
      links: [
        {
          title: 'Ein Killswitch für dein Smartphone',
          url: 'https://steampixel.de/ein-killswitch-fur-dein-smartphone/'
        }
      ],
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: '220',
      title: 'Du verwendet eine Blickschutzfolie',
      shortText: 'Du kannst eine spezielle Folie auf deinen Display kleben, die verhindert, dass umstehende Personen oder Kameras mitlesen können. Diese Folien gibt es für viele Modelle.',
      tags: ['physical', 'easy', 'expensive'],
      points: 200
    },

    {
      id: '225',
      title: 'Deine Simkarte ist mit einer Pin geschützt',
      shortText: 'Du solltest den Pin-Schutz deiner Simkarte niemals deaktivieren. Bei deaktiviertem Pin können Behörden oder andere Personen die Karte selbst nutzen, um sich beispielsweise Zugriff auf Messenger zu verschaffen.',
      longText: 'Wenn du anonyme Simkarten verwendest kannst du die Pin-Sperre oft nicht aktivieren, da du die zur Karte gehörige Pin / PUK oft nicht kennst. Du erhälst diese Karten oft mit deaktiviertem Pin. Du solltest in diesem Fall darauf achten, dass alle deine Messenger mit einem zweiten Faktor (z.B. Pin) abgesichert sind und dass du die Karte nicht selbst für eine Zwei-Faktor-Authentifizierung nutzt.',
      showMore: true,
      tags: ['physical', 'easy', 'security'],
      points: 400
    },

    {
      id: '230',
      title: 'Du verzichtest auf Speicherkarten',
      shortText: 'Nicht auf allen Geräten lassen sich Speicherkarten zuverlässig verschlüsseln. Zudem lassen sich Daten wiederherstellen, die bei einer früheren Nutzung mit anderen Geräten darauf gespeichert wurden. Nutze Speicherkarten daher nur, wenn du weißt was darauf gespeichert wird und wenn du diese vorher überschrieben hast.',
      tags: ['physical', 'easy', 'security'],
      points: 600
    },

    {
      id: '235',
      title: 'Du nutzt keine biometrische Freischaltung',
      shortText: 'Du solltest nie deinen Fingerabdruck oder dein Gesicht nutzen, um dein Telefon freizuschalten. Behörden mit Zugriff auf Fingerabdrücke oder Bildmaterial können das Gerät sonst entsperren. Nutze daher komplexe Muster oder alphanumerische Passworte.',
      longText: 'Fingerabdrücke und Gesichtserkennung sind keine sicheren Methoden, um das eigene Gerät zu entsperren. Sie sind wie Passwörter, die du niemals ändern kannst. Durch Datenlecks oder Malware könnten diese sensiblen Informationen abhanden kommen und dir so zum Nachteil werden. Zudem darf auch die Polizei deine Fingerabdrücke nutzen, um dein Gerät zu entsperren.',
      showMore: true,
      links: [
        {
          title: 'Polizei darf Fingerabdrücke nehmen, um Handy zu entsperren',
          url: 'https://netzpolitik.org/2023/gerichtsbeschluss-polizei-darf-fingerabdruecke-nehmen-um-handy-zu-entsperren/'
        }
      ],
      tags: ['physical', 'easy', 'security', 'uncomfortable'],
      points: 600
    },

    {
      id: '240',
      title: 'Du hast die Entwickler*innen-Features deaktiviert',
      shortText: 'Deaktiviere unbedingt USB-Debugging, wenn du dich damit auskennst. Normalerweise ist diese Funktion auf allen Geräten standardmäßig deaktiviert und muss von dir bewusst aktiviert werden.',
      showMore: true,
      links: [
        {
          title: 'Heise: Android: Entwickleroptionen aktivieren/deaktivieren ',
          url: 'https://www.heise.de/tipps-tricks/Android-Entwickleroptionen-aktivieren-deaktivieren-4041510.html'
        }
      ],
      tags: ['physical', 'knowledge', 'security'],
      points: 800
    },

    {
      id: '245',
      title: 'Du verwendest nur dein eigenes Ladekabel ',
      shortText: 'Verwende nur Netzteile und Kabel zum laden, denen du vertraust. Markiere Kabel und Netzteil, um ein Austauschen zu verhindern. Wenn möglich nutze ein USB-Kabel ohne Datenfunktion zum Laden. Manipulierte Kabel oder öffentliche Ladepunkte könnten Daten auslesen oder unerwünschte Software installieren.',
      showMore: true,
      links: [
        {
          title: 'Tarnkappe: FBI warnt vor der Nutzung öffentlicher Handy-Ladestationen',
          url: 'https://tarnkappe.info/artikel/it-sicherheit/fbi-warnt-vor-der-nutzung-oeffentlicher-handy-ladestationen-272873.html'
        }
      ],
      tags: ['physical', 'easy', 'expensive'],
      points: 200
    },

    {
      id: '250',
      title: 'Dein Betriebssystem verfügt über verified Boot',
      shortText: 'Verified Boot verhindert Manipulationen an deinem Betriebssystem. Du solltest dich vergewissern, dass dein Gerät damit abgesichert ist. Wenn du selbst ein eigenes System installiert hast, solltest du verified Boot aktivieren.',
      tags: ['physical', 'knowledge'],
      points: 200
    },

    {
      id: '255',
      title: 'Du hast dein Gerät versiegelt',
      shortText: 'Eine Versiegelung kann dir helfen nach einer Rückgabe deines Gerätes festzustellen, ob Hardware manipuliert wurde. Gib z.B einen Tropfen speziellen Siegellack oder Nagellack auf die Nahtstellen deines Geräts. So kannst du feststellen, ob es geöffnet wurde.',
      showMore: true,
      links: [
        {
          title: 'Steampixel: Schon mal über Hardware-Versiegelungen nachgedacht?',
          url: 'https://steampixel.de/schon-mal-uber-hardware-versiegelungen-nachgedacht/'
        }
      ],
      tags: ['physical', 'knowledge', 'expensive'],
      points: 200
    },

    {
      id: '260',
      title: 'Du hast die eindeutigen Nummern deines Gerätes notiert',
      shortText: 'In den Einstellungen deines Telefons findest du eindeutige, unveränderliche Hardwarenummern wie Seriennummer, WiFi-Mac-Adresse, Bluetooth-Mac-Adresse und IMEI. Notiere diese Nummern. So kannst du dir jederzeit sicher sein, dass dein Gerät nicht heimlich ausgetauscht wurde.',
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: '265',
      title: 'Du fertigst regelmäßig Backups an',
      shortText: 'Erstelle von deinen wichtigsten Daten regelmäßig Backups. Wenn möglich speichere die Backups verschlüsselt, dezentral und außerhalb deiner Wohnung. Übe außerdem die Wiederherstellung. Dein Backup muss nicht perfekt sein. Ein schlechtes Backup ist besser als kein Backup!',
      longText: 'Du solltest bei deinem Backup auch an wichtige Apps wie 2-Faktor-Apps oder Passwortmanager denken. Die Einstellungen lassen sich daraus meist leicht exportieren. Wenn du die Möglichkeit hast solltest du die Backups unbedingt verschlüsseln und außerhalb deiner Wohnung aufbewahren. Denke außerdem daran, dass Zugriff auf die Backups möglich sein muss, auch wenn du keine Geräte mehr hast. Nutze wenn möglich quelloffene Backup-Software wie "oandbackup" oder "Neo Backup". Diese benötigen allerdings Root-Rechte. Eine einfache regelmäßige Kopie deiner wichtigsten Daten auf einen verschlüsselten Stick ist aber auch ein guter Anfang! Denke daran, dass "No Backup, No Mercy" eine arrogante Haltung ist. Nicht alle Menschen haben das Wissen und die technischen Möglichkeiten für Backups. Helft euch gegenseitig!',
      showMore: true,
      links: [
        {
          title: 'F-Droid: Neo Backup',
          url: 'https://f-droid.org/de/packages/com.machiav3lli.backup/'
        },
        {
          title: 'F-Droid: oandbackup',
          url: 'https://f-droid.org/de/packages/dk.jens.backup/'
        }
      ],
      tags: ['physical', 'knowledge', 'security'],
      points: 800
    },

    {
      id: '270',
      title: 'Du lagerst nicht genutzte Geräte nicht in deiner Wohnung',
      shortText: 'Im Falle einer Hausdurchsuchung oder eines Einbruchs werden oft alle Geräte entwendet. Bereite dich darauf vor indem du nicht genutzte Geräte bei deinen Freund*innen lagerst. So hast du schnell Ersatz.',
      tags: ['physical', 'easy', 'security'],
      points: 400
    },

    {
      id: '275',
      title: 'Du hast dein Telefon einmal überschrieben',
      shortText: 'Du hast das Telefon gebraucht gekauft? Dann solltest du einmal den kompletten Speicher überschreiben, um zu vermeiden, dass ungewollte Daten auf deinem Gerät gefunden werden.',
      longText: 'Gebrauchte Telefone könnten illegale Daten enthalten haben, die wiederhergestellt und ausgewertet werden könnten. Um zu vermeiden, dass dir das zum Verhängnis wird solltest du das Telefon einmal komplett überschreiben. Wenn du die Möglichkeit hast generiere dir große Zufallsdateien und kopiere diese auf dein Telefon, bis es voll ist. Andernfalls kannst du dir auch große Testdaten aus dem Internet herunterladen und damit den Speicher deines Telefons überschrieben.',
      showMore: true,
      links: [
        {
          title: 'Hier findest du große Test-Dateien',
          url: 'https://fastest.fish/test-files'
        }
      ],
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: '280',
      title: 'Du verzichtest auf Root-Rechte',
      shortText: 'Root-Rechte ermöglichen dir viele einzigartige Apps. Diese Rechte gelten dann aber eventuell auch für schadhafte Apps, weswegen du auf Root generell verzichten solltest.',
      longText: 'Leider benötigen auch einige Apps, die deine Sicherheit potentiell erhöhen können oft Root-Rechte. Zu nennen wären da zum Beispiel Backup-Anwendungen wie "Neo Backup" aber auch Apps wie "SnoopSnitch", die versuchen IMSI-Catcher oder Stille SMS zu erkennen. Du solltest immer genau abwägen, ob du wirklich Superuser-Rechte auf deinem Gerät benötigst. In den allermeisten Fällen gibt es dafür keine gute Begründung. Apps wie z.B. "SnoopSnitch" funktionieren sowieso nur in wirklich wenigen Software- und Hardwarekonstellationen. Deswegen Root einzurichten steht in keinem Verhältnis.',
      showMore: true,
      tags: ['physical', 'easy'],
      points: 200
    },



    {
      id: '300',
      title: 'Du nutzt datensparsame Telefon-Tarife',
      shortText: 'Eine Flatrate erzeugt in der Regel weniger Daten als ein Tarif mit minutengenauer Abrechnung oder Einzelverbindungsnachweisen. Denn diese müssen erfasst und gespeichert werden. Flatrates erzeugen weniger Daten. Prepaid-Tarife erzeugen in der Regel nicht mal Rechnungsdaten und sind daher sehr datensparsam.',
      longText: 'Viele Netzbetreiber*innen verkaufen eure Bewegungsdaten an diverse Firmen weiter. Ihr könnt dieser Weitergabe wiedersprechen. Verzichte außerdem auf Einzelverbindungsnachweise oder minutengenaue Abrechnungen in deinem Tarif. Daten, die nicht gespeichert werden können auch nicht abgerufen werden. Frag bei den Provider*innen nach wie lange die Daten in den verschiedenen Tarifen gespeichert werden und mit wem sie geteilt werden. Es gibt auch extra datenschutzfreundliche Provider*innen wie z.B. "Wetell". Trotzdem schützen diese nicht vor den zahlreichen Überwachungsmöglichkeiten im Mobilfunknetz! Anonyme Simkarten sind daher immer zu bevorzugen.',
      showMore: true,
      links: [
        {
          title: 'Mobilfunkanbieter: Widerspruch gegen Erhebung von Bewegungsdaten',
          url: 'https://www.kuketz-blog.de/mobilfunkanbieter-widerspruch-gegen-erhebung-von-bewegungsdaten/'
        }
      ],
      tags: ['mobile', 'knowledge'],
      points: 200
    },

    {
      id: '305',
      title: 'Du nimmst dein Handy nicht mit zur Demo',
      shortText: 'Du solltest dein Telefon nicht mit zur Demo nehmen oder es einige Zeit vorher in den Flugmodus schalten und es auch nach der Demo noch einige Zeit im Flugmodus belassen. Auch dann, wenn du anonyme Simkarten nutzt. Durch die Verfolgung einzelner Personen mit sogenannten IMSI-Catchern lässt sich eine Telefonnummer einer Person zuordnen. Egal, ob die Simkarte anonym ist oder nicht.',
      tags: ['mobile', 'easy', 'security'],
      points: 400
    },

    {
      id: '308',
      title: 'Du verzichtest auf Apps wie "SnoopSnitch"',
      shortText: 'Apps, die potentiell IMSI-Catcher oder Stille SMS detektieren können werden dir in den allermeisten Fällen nichts bringen. Du solltest auf diese Apps verzichten und stattdessen lernen warum sie nicht viel bringen und was die Alternative ist.',
      longText: 'Zunächst einmal ist an Apps wie "SnoopSnitch" generell nichts verkehrt. Wir können froh sein, dass es Menschen gibt, die sich mit dieser Materie befassen und solche Apps bauen. Trotzdem musst du verstehen, dass derartige Apps in den allermeisten Fällen völlig wirkungslos sind. SnoopSnitch zum Beispiel funktioniert nur in 2G und 3G Netzen, wenn dein Telefon Root hat und wenn auf dem Mainboard deines Gerätes ein ganz spezieller Chip verbaut ist. Du musst verstehen, dass die Kommunikation mit dem Mobilfunknetz für dein Betriebssystem eine völlig intransparente Blackbox ist. Dein Betriebssystem und deine Apps sind nicht in der Lage die Kommunikation mit einem Funkturm (Basisstation) im Detail zu steuern oder zu überwachen. Das bedeutet das Funknetzwerk kann mit dem Chip auf deinem Gerät kommunizieren ohne, dass dieses etwas davon mitbekommt. Schuld daran ist proprietäre, kommerzielle Hardware, die nicht quelloffen ist. So kommt es auch, dass du durch Stille SMS (Stealth Ping) grob geortet werden kannst. Der Funkchip in deinem Telefon registriert das zwar, meldet das aber nicht an dein Betriebssystem weiter. Nur einige wenige Chips haben Schnittstellen, die dem Betriebssystem eine Beobachtung erlauben. Nur dafür gibt es SnoopSnitch. Die einzig sinnvolle Verteidigung ist eine anonyme Simkarte.',
      showMore: true,
      links: [
        {
          title: 'Süddeutsche Zeitung: Alle eineinhalb Minuten pingt der Staat',
          url: 'https://www.sueddeutsche.de/digital/stille-sms-alle-eineinhalb-minuten-pingt-der-staat-1.4085229'
        },
      ],
      tags: ['mobile', 'easy', 'security'],
      points: 400
    },

    {
      id: '310',
      title: 'Du verwendest anonyme Simkarten',
      shortText: 'Anonyme Simkarten erschweren Behörden die Auswahl ihrer Ziele erheblich. Ob stille SMS, IMSI-Catcher, RRLP, RLF, Bestandsdatenauskunft, Verkehrsdatenauskunft, Funkzellenauswertungen, Quellen-TKÜ, Staatstrojaner oder Standortüberwachung. Eine anonyme Simkarte ist oft die einzig sinnvolle Verteidigung gegen derartige Überwachung.',
      longText: 'Das Thema der Mobilfunküberwachung ist komplex und kann in diesem Rahmen nicht komplett behandelt werden. Wichtig zu verstehen ist aber, dass Security-Apps gegen derartige Überwachung nichts ausrichten können, weil z.B. Daten betroffen sind, die ohnehin bei deinem Provider liegen und nicht auf deinem Telefon. Oder weil die Apps selbst keinen Zugriff auf den proprietär Funkchip deines Telefons haben und so z.B. stille SMS nicht sehen können. Oder weil sich der Angriff im Funknetzwerk zwischen Netzanbieter*innen abspielt. Oder weil deine Mobilfunkanbieter*in deine Daten einfach weiter verkauft. Hier auf Apps oder Verhaltensänderungen zu setzen bringt also nichts. Die einzige Verteidigung sind anonyme Simkarten. Auf Seiten wie cell-track.com oder phone-location.info kann zum Beispiel einfach herausgefunden werden, ob sich ein Gerät im Ausland befindet oder nicht oder ob ein Gerät gerade eingeschaltet ist. Alles was du brauchst ist die Nummer. Du kannst nichts dagegen tun als deine Nummer geheim zu halten.',
      showMore: true,
      links: [
        {
          title: 'Netzpolitik.org: Behörden fragen jede Sekunde, wem eine Telefonnummer gehört',
          url: 'https://netzpolitik.org/2022/bestandsdatenauskunft-2021-behoerden-fragen-jede-sekunde-wem-eine-telefonnummer-gehoert/'
        },
        {
          title: 'Bundesnetzagentur: Häu­fig ge­stell­te Fra­gen: All­ge­mein und SI­NA-An­bin­dung',
          url: 'https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/OeffentlicheSicherheit/Autom_Auskunftsverfahren/FAQ/start.html'
        },
        {
          title: 'Süddeutsche Zeitung: Das Ende der Anonymität',
          url: 'https://www.sueddeutsche.de/digital/prepaid-sim-karten-das-ende-der-anonymitaet-1.3564334'
        },
        {
          title: 'Interaktive Karte: Registrierungspflicht für Prepaid-SIM-Karten in Europa weit verbreitet',
          url: 'https://netzpolitik.org/2017/interaktive-karte-registrierungspflicht-fuer-prepaid-sim-karten-in-europa-weit-verbreitet/'
        },
        {
          title: 'Informatik-Gutachten: Eine Telefonnummer ist ausreichend, um eine Person mit einer Drohnen-Rakete zu treffen',
          url: 'https://netzpolitik.org/2016/informatik-gutachten-eine-telefonnummer-ist-ausreichend-um-eine-person-mit-einer-drohnen-rakete-zu-treffen/'
        },
        {
          title: '35C3 - Die verborgene Seite des Mobilfunks',
          url: 'https://yt.artemislena.eu/watch?v=CSZWTaTu9As'
        },
        {
          title: 'Tobias Engel: SS7: Locate. Track. Manipulate',
          url: 'https://yt.oelrichsgarcia.de/watch?v=-wu_pO5Z7Pk'
        },
        {
          title: 'Die 5-G Überwachungsstandards',
          url: 'https://invidious.lunar.icu/watch?v=_2HOcuH5rKc'
        },
        {
          title: 'Tarnkappe: Mobilfunkanbieter gaben erneut Daten illegal an die Schufa',
          url: 'https://tarnkappe.info/artikel/rechtssachen/mobilfunkanbieter-gaben-erneut-daten-illegal-an-die-schufa-280583.html'
        },
        {
          title: 'Netzpolitik.org: Firma legt Scoring-Profile der Hälfte aller weltweiten Handynutzer an',
          url: 'https://netzpolitik.org/2023/datenschutzbeschwerde-gegen-telesign-firma-legt-scoring-profile-der-haelfte-aller-weltweiten-handynutzer-an/'
        },
        {
          title: 'Netzpolitik.org: Russische Exil-Journalistin mit Pegasus gehackt',
          url: 'https://netzpolitik.org/2023/meduza-russische-exil-journalistin-mit-pegasus-gehackt/'
        }
      ],
      tags: ['mobile', 'knowledge', 'security', 'uncomfortable'],
      points: 800
    },

    {
      id: '315',
      title: 'Du nutzt dein Smartphone exklusiv für eine Simkarte',
      shortText: 'Nutze deine anonyme Simkarte nur in einem bestimmten Telefon. Verwende nie das gleiche Telefon für eine andere Simkarte. Denn die eindeutige Nummer der Sim und die eindeutige Nummer deines Telefons werden immer zusammen in den Verkehrsdaten des Providers gespeichert.',
      tags: ['mobile', 'knowledge', 'security'],
      points: 400
    },

    {
      id: '320',
      title: 'Du verwendest oft andere Simkarten und ein Proxy-Telefon',
      shortText: 'Um die Sicherheit weiter zu erhöhen kannst du oft deine anonymen Simkarten wechseln. Bei jedem Wechsel solltest du auch das dafür verwendete Telefon wechseln.',
      longText: 'Da in den Verkehrsdaten deiner Netzanbieter*in immer die IMSI zusammen mit der IMEI auftaucht solltest du beim Wechsel deiner Simkarte auch dein Telefon wechseln. Wie du dir sicher vorstellen kannst ist es aufwändig und auch teuer das Telefon von Zeit zu Zeit zu wechseln. Du müsstest ja ständig deine Apps neu einrichten und viel Geld für ein neues Telefon ausgeben. Um die Kosten gering zu halten kannst du mit Proxy-Telefonen arbeiten. Und das geht so: Du hast ein teureres Gerät für deine reguläre Nutzung auf dem all deine Apps installiert sind. In diesem Telefon befindet sich keine Simkarte. Es ist also für das Mobilfunknetzwerk unsichtbar. Internet bekommst du über ein günstiges Zweitgerät, in welches eine Simkarte eingelegt ist. Dieses Telefon braucht nicht viel Leistung. Dieses kann dir aber einen WiFi Hotspot und damit Internet bereitstellen. Außerdem kannst du damit ganz normal telefonieren, wenn du willst. Dieses Telefon lässt sich mit samt der eingelegten Simkarte schnell austauschen. Einziger Nachteil: Du hast immer zwei Smartphones dabei.',
      showMore: true,
      tags: ['mobile', 'knowledge', 'expensive'],
      points: 200
    },

    {
      id: '325',
      title: 'Du beziehst dein Guthaben anonym',
      shortText: 'Du solltest auch das Guthaben für deine Simkarte anonym oder über Mittelspersonen beziehen. Verwende daher Simkarten für die du Guthaben bar an Kassen kaufen kannst oder bitte Freund*innen dir den Guthaben-Code zu senden.',
      tags: ['mobile', 'knowledge'],
      points: 200
    },

    {
      id: '330',
      title: 'Du gibst deine Telefonnummer nicht weiter',
      shortText: 'Nur wenn du deine Nummer nicht in Verbindung mit deinem Namen weiter gibst bleibt deine anonyme Karte anonym. Um trotzdem erreichbar zu sein kannst du auf Messenger mit Anruffunktion ausweichen, die keine Nummer benötigen oder bei denen sich die Nummer verbergen lässt.',
      tags: ['mobile', 'easy', 'security', 'uncomfortable'],
      points: 800
    },

    {
      id: '335',
      title: 'Du telefonierst nicht mit deiner anonymen Karte',
      shortText: 'Nutze deine anonyme Simkarte/Telefon nicht für reguläre Telefonate oder SMS. In den Verkehrsdaten ist ersichtlich wer die Zielkontakte sind, wenn diese nicht auch eine anonyme Karte haben. Dadurch ist evtl. eingrenzbar wer du bist. Nutze die Karte wenn möglich nur mit anderen anonymen Karten oder weiche auf Internet-Messenger für Nachrichten und Telefonate aus.',
      tags: ['mobile', 'security', 'easy', 'uncomfortable'],
      points: 400
    },

    {
      id: '340',
      title: 'Du hast Simkarten und Telefone anonym bezogen',
      shortText: 'Du solltest Simkarten und Telefone nie direkt an deine Adresse bestellen oder von deinen Konten bezahlen. Um keine Spuren zu hinterlassen kannst du Freund*innen bitten diese für dich zu bestellen oder abzuholen.',
      tags: ['mobile', 'easy'],
      points: 200
    },

    {
      id: '345',
      title: 'Du wählst die 110 und die 112 mit bedacht',
      shortText: 'Seit 2019 wird in Deutschland Advances Mobile Location eingesetzt und schrittweise ausgebaut, um Personen in Notsituationen zu orten. Wenn du das nicht möchtest solltest du dich darauf vorbereiten.',
      longText: 'Vor AML standen den Rettungsleitstellen lediglich extrem ungenaue Funkzellendaten zur Verfügung (wenn überhaupt), um Personen in Notsituationen orten zu können. AML dagegen ist fest in moderne Telefone und deren Betriebssysteme integriert: Wird eine Notrufnummer gewählt aktiviert das Telefon selbstständig GPS und WiFi, um die eigene Position bestimmen zu können. Diese wird dann via Internet oder SMS automatisch an die Leitstelle übertragen. Diese extrem genaue Ortung wird nur durch das wählen der Notrufnummern aktiviert und ist nicht von außen ohne dein aktives Handeln nutzbar. Du kannst in den meisten Fällen nichts dagegen tun, dass du beim Wählen dieser Nummern automatisch geortet wirst. Leider werden so aber auch anonyme Meldungen erschwert. Du solltest daher immer abwägen, ob die Wahl von Notrufnummern durch dein eigenes Telefon wirklich notwendig ist.',
      showMore: true,
      links: [
        {
          title: 'Wikipedia: Advanced Mobile Location',
          url: 'https://de.wikipedia.org/wiki/Advanced_Mobile_Location'
        },
      ],
      tags: ['mobile', 'knowledge', 'security', 'uncomfortable'],
      points: 400
    },



    {
      id: '400',
      title: 'Sind deine Apps und dein System aktuell?',
      shortText: 'Halte Apps und dein Betriebssystem aktuell. Malware und Staatstrojaner nutzen oft Schwachstellen in der Software aus. Aktuelle Apps und ein aktuelles Betriebssystem sind daher wichtig.',
      tags: ['online', 'knowledge', 'security', 'uncomfortable'],
      points: 400
    },

    {
      id: '405',
      title: 'Nutzt du einen Passwortmanager?',
      shortText: 'Deine Sicherheit wird enorm erhöht, wenn du für alle Services im Internet ein anderes komplexes Passwort verwendest. Diese solltest du in einem Passwortmanager wie KeePass speichern.',
      tags: ['online', 'knowledge', 'security', 'uncomfortable'],
      points: 400
    },

    {
      id: '410',
      title: 'Du verwendest einen Werbeblocker',
      shortText: 'Gezielte Werbekampagnen (Microtargeting) werden unter anderem von Geheimdiensten genutzt, um einzelne Geräte passgenau mit Malware zu infizieren. Schütze dich, indem du z.B. uBlock Origin für Firefox, Pi-Hole in deinem Netzwerk oder Blokada (kostenpflichtig) auf deinem Gerät installierst.',
      showMore: true,
      links: [
        {
          title: 'The adtech industry tracks most of what you do on the Internet. This file shows just how much.',
          url: 'https://netzpolitik.org/2023/surveillance-advertising-in-europe-the-adtech-industry-tracks-most-of-what-you-do-on-the-internet-this-file-shows-just-how-much/'
        },
        {
          title: 'Für Anfänger/Bequeme: Werbung und Tracker unter iOS/Android systemweit verbannen',
          url: 'https://www.kuketz-blog.de/fuer-anfaenger-bequeme-werbung-und-tracker-unter-ios-android-systemweit-verbannen/'
        },
      ],
      tags: ['online', 'knowledge'],
      points: 400
    },

    {
      id: '415',
      title: 'Nutzt du verschiedene Pseudonyme und Mailadressen?',
      shortText: 'Du kannst deine Sicherheit verbessern, indem du auf allen Plattformen einen anderen Namen und andere Mailadressen bzw. Mobilnummern für die Registrierung verwendest. So können deine Accounts durch Datenlecks nicht zusammengeführt werden.',
      tags: ['online', 'knowledge', 'uncomfortable'],
      points: 200
    },

    {
      id: '420',
      title: 'Du nutzt TOR oder den TOR-Browser',
      shortText: 'TOR (The Onion Router) kann dir helfen deine Anonymität im Internet stark zu verbessern. Nutze Websites über den Tor-Browser und leite Apps mit der Orbot-App über das Tor-Netzwerk um.',
      tags: ['online', 'easy', 'security'],
      points: 800
    },

    {
      id: '425',
      title: 'Du nutzt ein Smartphone ohne Google oder Apple',
      shortText: 'Google, Apple und andere Hersteller*innen geben Daten ohne zu zögern an Ermittlungs-behörden weiter. Verwende daher ein Google-freies Betriebssystem wie e/OS oder grapheneOS und nutze freie Appstores wie F-Droid und alternative Suchmaschinen wir DuckDuckGo.',
      showMore: true,
      links: [
        {
          title: 'Heise: Inverssuche: Google liefert Polizei Nutzerdaten auf Basis von Suchbegriffen',
          url: 'https://www.heise.de/news/Inverssuche-Google-liefert-Polizei-Nutzerdaten-auf-Basis-von-Suchbegriffen-4925754.html'
        },
        {
          title: 'Polizei erhält Liste aller Nutzer, die nach einem Schlagwort gegoogelt haben',
          url: 'https://netzpolitik.org/2020/ermittlungen-in-den-usa-polizei-erhaelt-liste-aller-nutzer-die-nach-einem-schlagwort-gegoogelt-haben/'
        },
        {
          title: 'Tarnkappe: Kriminelle verkaufen in Google Play Store eingeschleuste Malware',
          url: 'https://tarnkappe.info/artikel/it-sicherheit/malware/kriminelle-verkaufen-in-google-play-store-eingeschleuste-malware-272859.html'
        }
      ],
      tags: ['online', 'security', 'knowledge', 'uncomfortable'],
      points: 600
    },

    {
      id: '428',
      title: 'Du nutzt Cloud-Speicher nur verschlüsselt',
      shortText: 'Viele Cloud-Anbieter arbeiten vollumfänglich mit Ermittlungsbehörden zusammen und werden nicht zögern deine Daten auszuliefern. Lege dort nur verschlüsselte Daten ab.',
      longText: 'Generell solltest du überlegen, ob du die entsprechenden Cloud-Dienste überhaupt brauchst. Du kannst zum Beispiel Apps wie "OpenKeychain" verwenden, um Dateien vor dem Upload in eine Cloud zu verschlüsseln. Für den Fall, dass du ein Apple-Gerät mit deiner iCloud nutzt aktiviere dort den erweiterten Datenschutz.',
      showMore: true,
      links: [
        {
          title: 'F-Droid: OpenKeychain: Easy PGP',
          url: 'https://f-droid.org/de/packages/org.sufficientlysecure.keychain/'
        },
        {
          title: 'So aktivierst du den erweiterten Datenschutz für iCloud',
          url: 'https://support.apple.com/de-de/HT212520'
        },
        {
          title: 'BAMF soll Cloud-Speicher von Asylsuchenden auslesen',
          url: 'https://netzpolitik.org/2023/innenministerium-bamf-soll-cloud-speicher-von-asylsuchenden-auslesen/'
        }
      ],
      tags: ['online', 'security', 'knowledge', 'uncomfortable'],
      points: 600
    },

    {
      id: '430',
      title: 'Du hast für deine Messenger separate Pins eingestellt',
      shortText: 'Einige Apps wie z.B. Telegram oder Signal bieten einen zusätzlichen Passwortschutz für die Anmeldung an. Angreifer*innen, denen deine Simkarte oder eine Kopie der Karte in die Hände fällt können so nicht auf deine Chats zugreifen.',
      tags: ['online', 'knowledge', 'security'],
      points: 400
    },

    {
      id: '435',
      title: 'Du nutzt VPNs mit Bedacht',
      shortText: 'Bedenke, dass du VPN-Anbieter*innen vertrauen musst. Du bezahlt sie, also kennen Sie deine Identität. Viele VPN-Dienste arbeiten vollumfänglich mit Ermittlungsbehörden zusammen. Wenn du kannst, nutze stattdessen das TOR-Netzwerk.',
      tags: ['online', 'knowledge'],
      points: 200
    },

    {
      id: '440',
      title: 'Du installierst Apps nur aus vertrauenswürdigen Quellen',
      shortText: '',
      tags: ['online', 'knowledge'],
      points: 200
    },

    {
      id: '445',
      title: 'Du prüfst Zugriffsrechte sorgfältig',
      shortText: 'Deine Taschenlampen-App will auf den Speicher zugreifen? Keine gute Idee! Frage dich immer wozu eine App Berechtigungen benötigt und gib diese nur schrittweise oder bei Bedarf frei.',
      tags: ['online', 'easy'],
      points: 200
    },

    {
      id: '450',
      title: 'Deaktiviere nicht genutzte Schnittstellen',
      shortText: 'Du solltest Positionierung, WiFi, Bluetooth oder NFC nur aktivieren, wenn du es benötigst',
      tags: ['online', 'easy'],
      points: 400
    },

    {
      id: '455',
      title: 'Du achtest auf eine verschlüsselte Internetverbindung',
      shortText: 'Du achtest beim Surfen auf eine gültige und verschlüsselte TLS-Verbindung (https://)? Super! Dann kannst du davon ausgehen, dass die Kommunikation zwischen dir und der Ziel-Website verschlüsselt erfolgt.',
      tags: ['online', 'easy'],
      points: 200
    },

    {
      id: '460',
      title: 'Du löschst Metadaten aus deinen Bildern',
      shortText: 'Dein Smartphone heftet Metadaten wie Koordinaten, Kameratyp, Auflösung, Smartphone-Modell oder Betriebssystem unsichtbar an deine Bilder. Nutze Apps wie "Imagepipe" um deine Bilder zu bereinigen bevor du diese ins Internet lädst.',
      tags: ['online', 'easy', 'uncomfortable'],
      points: 400
    },

    {
      id: '465',
      title: 'Du ließt dir die Datenschutzerklärungen durch',
      shortText: 'Nimmst du dir Zeit Datenschutzerklärungen von neuen Apps und Services bei denen du dich registrierst zu lesen? Interessiert es dich mit wem deine Daten geteilt werden und was damit passiert?',
      tags: ['online', 'uncomfortable', 'knowledge' ],
      points: 400
    },

    {
      id: '470',
      title: 'Du nutzt verschlüsselte Mails oder verschlüsselte Messenger',
      shortText: 'Nutzt du Emails? Dann solltest du unbedingt über Verschlüsselung wie GPG/OpenPGP nachdenken. Ansonsten setze unbedingt auf Messenger wie Element, Signal oder SimpleX.',
      tags: ['online', 'simple', 'security', 'knowledge' ],
      points: 800
    },

    {
      id: '475',
      title: 'Lösche nicht genutzte Accounts',
      shortText: 'Es ist wichtig nicht mehr benötigte Accounts zu löschen. Egal, ob du diese für eine Website oder eine App benötigt hast. Wenn du sie länger nicht mehr genutzt hast solltest du sie schließen. Das minimiert das Risiko von Datenlecks enorm.',
      tags: ['online', 'knowledge' ],
      points: 400
    },

  ],
};