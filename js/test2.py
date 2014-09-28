def overlayAssign(target):
    print ("This is video " + target)

def overlayExecute():
    for x in range(1, 6):
        overlayAssign(str(x))

overlayExecute()
