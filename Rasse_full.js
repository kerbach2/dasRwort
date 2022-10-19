PennController.ResetPrefix();



// Control trial sequence
Sequence("consent","instructions", "race-trial", "send", "completion_screen");

// Consent form
newTrial("consent",
    newText("consent-1", "<b>Beschreibung</b>")
        .center()
        .print()
    ,
    newText("consent-2", "Diese Studie ist Teil eines Forschungsprojekts von Dr. Daniel James der Universität Du. Ziel der Studie ist es, die Assoziation, die die Proband*innen mit spezifischen Wörtern haben, zu sammeln.")
        .center()
        .print()
    ,
    newText("consent-3", "<b>Vorzüge und Risiken</b>")
        .center()
        .print()
    ,
    newText("consent-4", "Ihre Teilnahme an dieser Studie wird der linguistischen Arbeit der Forschenden dienen und Sie werden eine finanzielle Vergütung erhalten. Bezüglich der Teilnahme an dieser Studie bestehen keine bekannten Risiken.")
        .center()
        .print()
    ,
    newText("consent-5", "<b>Privatsphäre und Vertraulichkeit</b>")
        .center()
        .print()
    ,
    newText("consent-6", "Es werden keinerlei personenbezogene Daten in dieser Studie erhoben oder gesammelt. Ihre Antworten werden anonym sein und entsprechend bestehender wissenschaftlicher Standards aufbewahrt. ")
        .center()
        .print()
    ,
    newText("consent-7", "<b>Vergütung</b>")
        .center()
        .print()
    ,
    newText("consent-8", "Wie auf Prolific erwähnt, werden Sie für Ihre Teilnahme an dieser Studie mit ???€ entlohnt. Wenn Sie die Studie nicht beenden oder die Fragen unsachgemäß beantworten, erhalten Sie keine Entlohnung.")
        .center()
        .print()
    ,
    newText("consent-9", "<b>Freiwillige Teilnahme</b>")
        .center()
        .print()
    ,
    newText("consent-11", "Ihre Teilnahme an dieser Studie ist gänzlich freiwillig und kann zu jedem Zeitpunkt beendet werden. Beachten Sie, dass Sie keine Entlohnung erhalten, sollten Sie die Studie nicht beenden.")
        .center()
        .print()
    ,
    newButton("agree", "Ich habe die obigen Bedingungen gelesen und stimme zu.")
        .center()
        .print()
        .log()
        .wait()
);

// Instructions
newTrial("instructions",
    defaultText
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newText("instructions-1", "Willkommen!")
    ,
    newText("instructions-2", "Bei dieser Studie handelt es sich um eine einfache Wortassoziationsaufgabe.")
    ,
    newText("instructions-3", "Es wird Ihnen ein Wort gezeigt und Sie werden geben, die ersten fünf Dinge aufzuschreiben, die Ihnen in den Sinn kommen.</b>")
    ,
    newText("instructions-4", "Es gibt keine richtigen oder falschen Antworten; wählen Sie deswegen bitte schnell.")
    ,
    newText("instructions-5", "<b>Ihr Timing is wichtig; lassen Sie sich nicht zu viel Zeit.</b>")
    ,
    newText("instructions-6", "Bitte geben Sie Ihre ID ein und klicken Sie dann auf die Schaltfläche unten, um das Experiment zu starten.")
    ,
    newTextInput("input_ID")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newButton("starter", "Klicken Sie hier, um die Studie zu starten.")
        .center()
        .print()
        .wait(getTextInput("input_ID").test.text(/.+/)
            .failure(newText("Bitte geben Sie Ihre ID.")
                    .center()
                    .color("red")
                    .print()
                    )
                )
    ,
    newVar("ID")
        .global()
        .set(getTextInput("input_ID"))
        .log()
);

//race-trial
newTrial("race-trial",
    newText("Prompt", "Welche fünf Dinge zeichnen <b>Rasse</b> (was die Menschen betrifft) aus?")
        .center()
        .print()
    ,
    newTextInput("input_race_1")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newTextInput("input_race_2")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newTextInput("input_race_3")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newTextInput("input_race_4")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newTextInput("input_race_5")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newButton("starter", "Click to continue")
        .center()
        .print()
        .wait(getTextInput("input_race_1").test.text(/.+/)
            .and(getTextInput("input_race_2").test.text(/.+/))
            .and(getTextInput("input_race_3").test.text(/.+/))
            .and(getTextInput("input_race_4").test.text(/.+/))
            .and(getTextInput("input_race_5").test.text(/.+/))
                .failure(newText("Bitte geben Sie fünf Dinge.")
                    .center()
                    .color("red")
                    .print()
                    )
                ) 
    ,
    newVar("race_1")
        .global()
        .set(getTextInput("input_race_1"))
        .log()
    ,
    newVar("race_2")
        .global()
        .set(getTextInput("input_race_2"))
        .log()
    ,
    newVar("race_3")
        .global()
        .set(getTextInput("input_race_3"))
        .log()
    ,
    newVar("race_4")
        .global()
        .set(getTextInput("input_race_4"))
        .log()
    ,
    newVar("race_5")
        .global()
        .set(getTextInput("input_race_5"))
        .log()
);

// Send results manually
SendResults("send");

// Completion screen
newTrial("completion_screen",
    newText("thanks", "Vielen Dank für Ihre Teilnahme!")
        .center()
        .print()
    ,
    newText("return", "Geben Sie den folgenden Code in Prolific ein: C10JXZ7A")
        .center()
        .print()
    ,
    newButton("wait", "")
        .wait()
);