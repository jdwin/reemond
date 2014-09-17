from random import randint

count = 0
playlist = []
sequence = ['A', 'B', 'C', 'D', 'E']

while count < 5:
    next = randint(0,4)
    if next in playlist:
        pass
    else:
        playlist.append(next)
        count += 1

for i in playlist:
    print ("I am video {} !".format(sequence[i]))
