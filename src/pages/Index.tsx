
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Play, Users, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import VisitorCounter from "@/components/VisitorCounter";

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
    { id: "1", title: "Exclusive Content 1", thumbnail: "/lovable-uploads/5f0ab7d8-8f9b-4c05-8bd9-b082ccb798e8.png", duration: "15:30", locked: true },
    { id: "2", title: "Premium Video 2", thumbnail: "/lovable-uploads/5f0ab7d8-8f9b-4c05-8bd9-b082ccb798e8.png", duration: "12:45", locked: true },
    { id: "3", title: "Special Collection 3", thumbnail: "/lovable-uploads/5f0ab7d8-8f9b-4c05-8bd9-b082ccb798e8.png", duration: "18:20", locked: true },
    { id: "4", title: "VIP Content 4", thumbnail: "/lovable-uploads/5f0ab7d8-8f9b-4c05-8bd9-b082ccb798e8.png", duration: "22:15", locked: true },
    { id: "5", title: "Exclusive Series 5", thumbnail: "/lovable-uploads/5f0ab7d8-8f9b-4c05-8bd9-b082ccb798e8.png", duration: "14:30", locked: true },
    { id: "6", title: "Premium Access 6", thumbnail: "/lovable-uploads/5f0ab7d8-8f9b-4c05-8bd9-b082ccb798e8.png", duration: "16:45", locked: true }
  ];

  const handleUnlockVideo = (videoId: string) => {
    // In a real app, this would integrate with a payment processor
    const confirmPayment = window.confirm("Unlock this video for $5? This is a demo - no real payment will be processed.");
    if (confirmPayment) {
      setUnlockedVideos([...unlockedVideos, videoId]);
    }
  };

  const handleVideoClick = () => {
    window.open("https://t.me/archita_phukan_video_links", "_blank");
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
                <p className="text-purple-200 text-sm">Premium Adult Content Creator</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => window.location.href = "mailto:business@architaphukan.online"}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
              <Button 
                onClick={() => window.open("https://t.me/archita_phukan_video_photo_viral", "_blank")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Telegram
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to My Official
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Exclusive Adult </span>
            Content
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Discover premium content, exclusive videos, and behind-the-scenes moments. 
            Join thousands of satisfied subscribers today.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Badge variant="secondary" className="bg-pink-500/20 text-pink-200 border-pink-500/30">
              <Users className="w-4 h-4 mr-1" />
              5K+ Subscribers
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
              <Play className="w-4 h-4 mr-1" />
              Premium XXX Videos
            </Badge>
          </div>
        </div>
      </section>

      {/* Banner Ad 1 - After Hero Section */}
      <section className="py-8 bg-black/10">
        <div className="container mx-auto px-4 text-center">
          <div 
            dangerouslySetInnerHTML={{
              __html: `
                <script type="text/javascript">
                  atOptions = {
                    'key' : '42db52782c597b441b9905d7d66be62d',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                  };
                </script>
                <script type="text/javascript" src="//www.highperformanceformat.com/42db52782c597b441b9905d7d66be62d/invoke.js"></script>
              `
            }}
          />
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

      {/* Banner Ad 2 - Between Gallery and Videos */}
      <section className="py-8 bg-black/10">
        <div className="container mx-auto px-4 text-center">
          <div 
            dangerouslySetInnerHTML={{
              __html: `
                <script async="async" data-cfasync="false" src="//pl27111926.profitableratecpm.com/9be82de4981fc39db178e9005e29f327/invoke.js"></script>
                <div id="container-9be82de4981fc39db178e9005e29f327"></div>
              `
            }}
          />
        </div>
      </section>

      {/* Premium Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Premium Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="bg-white/10 border-white/20 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={handleVideoClick}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-white mb-2 mx-auto" />
                        <p className="text-white">Click to Watch</p>
                      </div>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Ad 3 - Before Call to Action */}
      <section className="py-8 bg-black/10">
        <div className="container mx-auto px-4 text-center">
          <div 
            dangerouslySetInnerHTML={{
              __html: `
                <script async="async" data-cfasync="false" src="//pl27111926.profitableratecpm.com/9be82de4981fc39db178e9005e29f327/invoke.js"></script>
                <div id="container-9be82de4981fc39db178e9005e29f327"></div>
              `
            }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Join My Community</h3>
          <p className="text-xl text-purple-200 mb-4 max-w-2xl mx-auto">For any inquiry: business@architaphukan.online</p>
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
              <p className="text-purple-200">Premium Adult Content Creator</p>
            </div>
          </div>
          
          {/* Ad Code in Footer */}
          <div className="mb-6 flex justify-center">
            <div id="frame" style={{width:'728px', height:'auto'}}>
              <iframe 
                data-aa='2402134' 
                src='//ad.a-ads.com/2402134?size=728x90' 
                style={{width:'728px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}
              />
              <a 
                style={{display: 'block', textAlign: 'right', fontSize: '12px'}} 
                id="preview-link" 
                href="https://aads.com/campaigns/new/?source_id=2402134&source_type=ad_unit&partner=2402134"
              >
                Advertise here
              </a>
            </div>
          </div>
          
          <VisitorCounter />
          
          <p className="text-purple-200 mb-4 mt-4">© 2025 Archita Phukan. All rights reserved.</p>
          <p className="text-sm text-purple-300">
            <a href='http://www.freevisitorcounters.com'>click here</a>
          </p>
          <div 
            dangerouslySetInnerHTML={{
              __html: `
                <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=f8496d09a1e2f42f114a347e4843aa3ae88b1c54'></script>
                <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/1361664/t/5"></script>
              `
            }}
          />
          <p className="text-sm text-purple-300">
            This is a real site. All content is for adults only (18+).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
