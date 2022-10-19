PennController.ResetPrefix();

DebugOff();

// Control trial sequence
Sequence("consent","instructions", "race-trial", "send", "completion_screen");

// Consent form
newTrial("consent",
    newText("consent-1", "<b>Description</b>")
        .center()
        .print()
    ,
    newText("consent-2", "This study is part of the research of Daniel James, PhD, at the University of Düsseldorf. The goal of this study is to collect people's associations with particular words.")
        .center()
        .print()
    ,
    newText("consent-3", "<b>Benefits and risks</b>")
        .center()
        .print()
    ,
    newText("consent-4", "Your participation in this study will be to the benefit of the linguistic research of the principle investigator and to yourself in the form of financial compensation. There are no known risks to participating in this study.")
        .center()
        .print()
    ,
    newText("consent-5", "<b>Privacy and confidentiality</b>")
        .center()
        .print()
    ,
    newText("consent-6", "No indentifying information will be collected in this study. Your answers will be anonymous and will be stored in accordance with best practices in open science.")
        .center()
        .print()
    ,
    newText("consent-7", "<b>Compensation</b>")
        .center()
        .print()
    ,
    newText("consent-8", "As stated on Prolific, you will be compensated for your efforts on this study with AMOUNT. If you do not complete the study, or if you do not give legitimate answers to the questions, you will not be compensated")
        .center()
        .print()
    ,
    newText("consent-9", "<b>Voluntary participation</b>")
        .center()
        .print()
    ,
    newText("consent-11", "Your participation in this study is entirely voluntary and can be terminated at any time. Note that if you do not complete the study it will not be possible for you to compensate you for your work.")
        .center()
        .print()
    ,
    newButton("agree", "I have read the above and consent.")
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
    newText("instructions-1", "Welcome!")
    ,
    newText("instructions-2", "This study, is a simple word association task.")
    ,
    newText("instructions-3", "You will be shown a word and be asked to write five features of the thing named by that word.</b>")
    ,
    newText("instructions-4", "We are interested in your first impressions. There is no right or wrong answer, so choose quickly.")
    ,
    newText("instructions-5", "Time is important.<br>Do not take too long.")
    ,
    newText("instructions-6", "Please enter your ID and then click the button below to start the experiment.")
    ,
    newTextInput("input_ID")
        .cssContainer({"margin-bottom":"1em"})
        .center()
        .print()
    ,
    newButton("starter", "Click to start the study")
        .center()
        .print()
        .wait(getTextInput("input_ID").test.text(/.+/)
            .failure(newText("Please write your Prolific ID.")
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
    newText("Prompt", "What are five things characteristic of <b>race</b>?")
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
                .failure(newText("Please write five things.")
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
)

// Send results manually
SendResults("send");

// Completion screen
newTrial("completion_screen",
    newText("thanks", "Thank you for participating!")
        .center()
        .print()
    ,
    newText("Prolific", "Please enter the following code into Prolific: C11Q50AE")
        .center()
        .print()
    ,
    newButton("wait", "")
        .wait()
);
