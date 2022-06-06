import json
import random

def readFile():
    word_array = []
    with open("../words_alpha.json") as f:
        word_array = json.loads(f.read())
    return word_array


def writeFile(data_array):
    with open("../words_alpha_shuffled.json", "w") as f:
        f.write(json.dumps(data_array, indent=5))

word_object = readFile()
random.shuffle(word_object)
writeFile(word_object)