function getBotResponse(input) {
  

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if(input=="I want to invest"){
        return "Head to our start up section to look on some upcoming startups"
    }
    else if(input=="Help me out over hear"){
        return "How may I help you?"
    }
     else {
        return "Try asking something else!";
    }
} 