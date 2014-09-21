class overlayVid:
    def __init__(self, video):
        self.video = video

    def videoChoice(self):
       return 'videoReel' + self.video

for i in range (1, 6):
    vid = overlayVid(str(i))
    print (vid.videoChoice())
