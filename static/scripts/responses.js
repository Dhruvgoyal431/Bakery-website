function getBotResponse(input) {
    //rock paper scissors
    if (input == "what are the different flavours available for cake?") {
        return "Chocolate, Pineapple, Vanilla, Mixed fruit, etc.....";
    } else if (input == "what is the price range for cakes?") {
        return "Half kg cakes range from 450-750 rupees and 1kg cakes range from 700-1550 rupees ";
    } else if (input == "what other baked goods are sold here??") {
        return "Donuts, croissants, and many more are on sale!!";
    }
    else if (input == "show me croissants") {
        return "url(crois.jpeg)";
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "heyy" || input == "wassup") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}