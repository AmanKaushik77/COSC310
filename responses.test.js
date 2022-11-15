const responses = require("./responses")

test('if user chooese watch on convoOne',() => {
    expect(responses.convoOne("watch")).toBe("you chose watch, what is your budget?")
 });
