import random

# Word category available in Mad libs

# nouns available in Mad libs
nouns_available = [
    "student", "person", "child", "leader", "friend", "mind", "teacher", "worker", "athlete", "player",
    "artist", "citizen", "dreamer", "thinker", "poet", "believer", "scholar", "parent", "mentor", "hero",
    "helper", "learner", "creator", "inventor", "traveler", "explorer", "listener", "speaker", "fighter",
    "peacemaker", "scientist", "doctor", "engineer", "farmer", "volunteer", "neighbor", "team", "group",
    "visionary", "childhood", "champion", "writer", "genius", "guardian", "pioneer", "adventurer", "role model",
    "advisor", "defender", "innovator"
]

# verbs available in Mad libs
verbs_available = [
    "learn", "challenge", "work", "grow", "improve", "help", "play", "study", "share", "lead",
    "teach", "think", "create", "inspire", "listen", "care", "respect", "focus", "protect", "organize",
    "believe", "understand", "explore", "develop", "support", "achieve", "complete", "observe", "collaborate",
    "strive", "contribute", "respond", "express", "decide", "design", "solve", "invent", "enjoy", "practice",
    "guide", "mentor", "rebuild", "serve", "offer", "seek", "question", "dream", "lead", "pursue"
]

# adjectives available in Mad libs
adjectives_available = [
    "honest", "brave", "kind", "hardworking", "wise", "nice", "loyal", "creative", "generous", "gentle",
    "cheerful", "positive", "humble", "bold", "thoughtful", "friendly", "motivated", "confident", "grateful", "determined",
    "calm", "focused", "disciplined", "courteous", "respectful", "persistent", "sincere", "responsible", "supportive", "peaceful",
    "patient", "hopeful", "caring", "enthusiastic", "passionate", "dependable", "truthful", "diligent", "resourceful", "fair",
    "inspiring", "ambitious", "dedicated", "faithful", "optimistic", "modest", "flexible", "energetic", "thoughtful", "visionary"
]



# Sentence templates
  # Pick a sentence randomly
starter_sentences = [
    "An {adjective} {noun} always {verb}s wisely.",
    "A {adjective} {noun} {verb}s towards success.",
    "Every {adjective} {noun} can {verb} with confidence.",
    "Being {adjective}, the {noun} {verb}s happily.",
    "A {adjective} {noun} believes in the power to {verb}.",
    "The {adjective} {noun} chooses to {verb} every day.",
    "An {adjective} {noun} inspires others to {verb}.",
    "Every {adjective} {noun} must {verb} to grow.",
    "Only a {adjective} {noun} can truly {verb}.",
    "A {adjective} {noun} knows how to {verb} wisely.",
    "An {adjective} {noun} loves to {verb}.",
    "A {adjective} {noun} always aims to {verb}.",
    "The world needs a {adjective} {noun} who can {verb}.",
    "An {adjective} {noun} leads by example when they {verb}.",
    "A {adjective} {noun} faces challenges to {verb}.",
    "Every {adjective} {noun} is expected to {verb}.",
    "A {adjective} {noun} makes an effort to {verb} daily.",
    "An {adjective} {noun} strives to {verb} with care.",
    "The path of a {adjective} {noun} is to {verb}.",
    "A {adjective} {noun} practices to {verb} better.",
    "A {adjective} {noun} understands the need to {verb}.",
    "A {adjective} {noun} loves to {verb} selflessly.",
    "A {adjective} {noun} always chooses to {verb} wisely.",
    "A {adjective} {noun} works hard to {verb}.",
    "A {adjective} {noun} never forgets to {verb}.",
    "A {adjective} {noun} bravely decides to {verb}.",
    "A {adjective} {noun} makes the world better by choosing to {verb}.",
    "A {adjective} {noun} has the courage to {verb}.",
    "The {adjective} {noun} never hesitates to {verb}.",
    "Every {adjective} {noun} makes it a habit to {verb}.",
    "A {adjective} {noun} loves challenges and {verb}s often.",
    "A {adjective} {noun} proves their worth by choosing to {verb}.",
    "An {adjective} {noun} respects others while they {verb}.",
    "Every {adjective} {noun} has a chance to {verb} daily.",
    "A {adjective} {noun} never misses an opportunity to {verb}.",
    "A {adjective} {noun} teaches others to {verb}.",
    "A {adjective} {noun} inspires their friends to {verb}.",
    "An {adjective} {noun} moves ahead by choosing to {verb}.",
    "A {adjective} {noun} becomes stronger when they {verb}.",
    "An {adjective} {noun} stays humble while they {verb}.",
    "A {adjective} {noun} carries wisdom as they {verb}.",
    "A {adjective} {noun} wins respect when they {verb}.",
    "The {adjective} {noun} is known for how they {verb}.",
    "A {adjective} {noun} never quits trying to {verb}.",
    "A {adjective} {noun} is remembered for choosing to {verb}.",
    "A {adjective} {noun} becomes great by learning to {verb}.",
    "Every {adjective} {noun} finds peace when they {verb}.",
    "A {adjective} {noun} never regrets choosing to {verb}.",
    "A {adjective} {noun} celebrates life by choosing to {verb}."
]


def get_valid_input(prompt, valid_list):
    while True:
        word = input(prompt).lower()
        if word in valid_list:
            return word
        else:
            print(f"❌ '{word}' is not availble in the Mad libs. Please choose from: {', '.join(valid_list)}.\n")

adjective = get_valid_input("Enter an adjective: ", adjectives_available)
noun = get_valid_input("Enter a noun: ", nouns_available)
verb = get_valid_input("Enter a verb: ", verbs_available)


template = random.choice(starter_sentences)
sentence = template.format(adjective=adjective, noun=noun, verb=verb)



print(sentence)

