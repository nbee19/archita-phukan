
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Play, Users, MessageCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [unlockedVideos, setUnlockedVideos] = useState<string[]>([]);

  const photos = [
    "/lovable-uploads/e9c61618-241d-4064-aa16-b693496d1f47.png",
    "/lovable-uploads/6876b3ca-d133-4c0d-bcef-677fb8b2a8f2.png",  
    "/lovable-uploads/ebccf024-371e-4ac1-afd9-06283d73fe7a.png",
    "/lovable-uploads/8048887a-b0cf-4808-b095-137afea47b93.png",
    "/lovable-uploads/acc808aa-f801-487a-81ca-12c6a4af092c.png",
    "/lovable-uploads/51535d4d-7c35-480f-9347-cc59c1909fae.png",
    "/lovable-uploads/6e1f4b5d-2e2b-4ade-b88a-242646c0e4f8.png",
    "/lovable-uploads/4305ef16-202e-41e1-aece-199ddd7fc983.png"
  ];

  const videos = [
    { id: "1", title: "Exclusive Content 1", thumbnail: photos[0], duration: "15:30", locked: true },
    { id: "2", title: "Premium Video 2", thumbnail: photos[1], duration: "12:45", locked: true },
    { id: "3", title: "Special Collection 3", thumbnail: photos[2], duration: "18:20", locked: true },
    { id: "4", title: "VIP Content 4", thumbnail: photos[3], duration: "22:15", locked: true },
    { id: "5", title: "Exclusive Series 5", thumbnail: photos[4], duration: "14:30", locked: true },
    { id: "6", title: "Premium Access 6", thumbnail: photos[5], duration: "16:45", locked: true }
  ];

  const handleUnlockVideo = (videoId: string) => {
    // In a real app, this would integrate with a payment processor
    const confirmPayment = window.confirm("Unlock this video for $5? This is a demo - no real payment will be processed.");
    if (confirmPayment) {
      setUnlockedVideos([...unlockedVideos, videoId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500">
                <img 
                  src="/lovable-uploads/61260f4d-c4a3-4fb6-bd6e-3a60bf82e075.png" 
                  alt="Archita Phukan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Archita Phukan</h1>
                <p className="text-purple-200 text-sm">Premium Content Creator</p>
              </div>
            </div>
            <Button 
              onClick={() => window.open("https://t.me/archita_phukan_video_photo_viral", "_blank")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to My
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Exclusive </span>
            Content
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Discover premium content, exclusive videos, and behind-the-scenes moments. 
            Join thousands of satisfied subscribers today.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Badge variant="secondary" className="bg-pink-500/20 text-pink-200 border-pink-500/30">
              <Users className="w-4 h-4 mr-1" />
              10K+ Subscribers
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
              <Play className="w-4 h-4 mr-1" />
              Premium Videos
            </Badge>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="bg-white/10 border-white/20 overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <img 
                    src={photo} 
                    alt={`Archita Phukan ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Premium Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="bg-white/10 border-white/20 overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className={`w-full h-64 object-cover transition-all duration-300 ${
                        !unlockedVideos.includes(video.id) ? 'blur-md' : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      {unlockedVideos.includes(video.id) ? (
                        <div className="text-center">
                          <Play className="w-16 h-16 text-white mb-2 mx-auto" />
                          <p className="text-white">Click to Play</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Lock className="w-16 h-16 text-white mb-2 mx-auto" />
                          <p className="text-white mb-2">Locked Content</p>
                          <Button 
                            onClick={() => handleUnlockVideo(video.id)}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                          >
                            Unlock for $5
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{video.title}</h4>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                        Premium
                      </Badge>
                      {unlockedVideos.includes(video.id) && (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30">
                          Unlocked
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Join My Community</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Get exclusive access to premium content, behind-the-scenes videos, and connect with me directly on Telegram.
          </p>
          <Button 
            onClick={() => window.open("https://t.me/archita_phukan_video_photo_viral", "_blank")}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Join Telegram Channel
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500">
              <img 
                src="/lovable-uploads/61260f4d-c4a3-4fb6-bd6e-3a60bf82e075.png" 
                alt="Archita Phukan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Archita Phukan</h4>
              <p className="text-purple-200">Premium Content Creator</p>
            </div>
          </div>
          <p className="text-purple-200 mb-4">© 2025 Archita Phukan. All rights reserved.</p>
          <p className="text-sm text-purple-300">
            This is a demo site. All content is for adults only (18+).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
